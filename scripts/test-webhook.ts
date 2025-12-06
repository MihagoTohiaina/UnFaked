import fetch from 'node-fetch';

async function testWebhook() {
    const WEBHOOK_URL = 'http://localhost:3000/user'; // Next.js App Router route

    const mockPayload = {
        data: {
            id: 'test_user_id',
            email_addresses: [
                {
                    id: 'test_email_id',
                    email_address: 'test@example.com',
                },
            ],
            first_name: 'Test',
            last_name: 'User',
            primary_email_address_id: 'test_email_id',
        },
        type: 'user.created',
        object: 'event',
    };

    const payloadString = JSON.stringify(mockPayload);

    console.log('Sending webhook to:', WEBHOOK_URL);

    try {
        // NOTE: This will fail Svix verification on the server because the signature is invalid.
        // Getting a valid signature requires the WEBHOOK_SECRET and using the Svix library to sign.
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'svix-id': 'test_svix_id',
                'svix-timestamp': Math.floor(Date.now() / 1000).toString(),
                'svix-signature': 'v1,test_signature_invalid'
            },
            body: payloadString
        });

        console.log('Response status:', response.status);
        const text = await response.text();
        console.log('Response body:', text);

        if (response.status === 400 && text.includes('Error')) {
            console.log('\n--- NOTE ---');
            console.log('The server rejected the request. This is likely due to Svix signature verification.');
            console.log('For a FULL end-to-end test locally without ngrok, you must temporarily disable verification in route.ts');
            console.log('OR use ngrok to pipe real Clerk events to localhost.');
        }
    } catch (err) {
        console.error('Error sending webhook:', err);
    }
}

testWebhook();
