import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    const payload = await req.json()
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`Webhook with and ID of ${id} and type of ${eventType}`)

    if (eventType === 'user.created') {
        const { id: clerkUserId, email_addresses, first_name, last_name } = evt.data;

        const primaryEmail = email_addresses.find(email => email.id === evt.data.primary_email_address_id)?.email_address || email_addresses[0]?.email_address;
        const name = `${first_name || ''} ${last_name || ''}`.trim();

        try {
            const response = await fetch('https://preprod-misinformation-by-ai-1.onrender.com/users/sign-up', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: primaryEmail,
                    full_name: name,
                    clerk_id: clerkUserId,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                // Safe logging of error
                console.error(`Failed to send user data to external API. Status: ${response.status}`, {
                    status: response.status,
                    statusText: response.statusText,
                    error: errorText,
                    userId: clerkUserId
                });
            } else {
                console.log(`Successfully sent user data to external API for user ${clerkUserId}`);
            }
        } catch (error) {
            console.error('Error sending user data to external API:', error);
        }
    }

    return new Response('', { status: 200 })
}
