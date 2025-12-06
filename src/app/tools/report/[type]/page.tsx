"use client";

import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

const MOCKS: any = {
  image: {
    type: "image",
    globalVerdict: "suspect",
    confidence: 68,
    summary:
      "Plusieurs incohérences visuelles indiquent que l’image pourrait avoir été modifiée ou générée par IA.",
    details: [
      {
        label: "Anomalies visuelles",
        value: "Textures incohérentes et artefacts sur l’arrière-plan.",
      },
      {
        label: "Analyse des visages",
        value: "Micro-distorsions autour des yeux et du sourire.",
      },
      {
        label: "Métadonnées",
        value: "Absence de données EXIF. Souvent le cas des images IA.",
      },
    ],
    recommendations: [
      "Comparer avec des sources fiables.",
      "Demander la photo originale.",
      "Vérifier le contexte de publication.",
    ],
  },

  video: {
    type: "video",
    globalVerdict: "fake",
    confidence: 91,
    summary:
      "La vidéo montre plusieurs signes typiques d’un deepfake, notamment une désynchronisation audio-labiale.",
    details: [
      {
        label: "Synchronisation labiale",
        value: "Décalage détecté entre les lèvres et la voix.",
      },
      {
        label: "Mouvements faciaux",
        value: "Transitions anormales dans les expressions.",
      },
      {
        label: "Artefacts",
        value: "Flou numérique lors des changements de plan.",
      },
    ],
    recommendations: [
      "Vérifier la source originale de la vidéo.",
      "Comparer avec des déclarations authentiques.",
      "Se méfier des vidéos émotionnelles ou choquantes.",
    ],
  },

  text: {
    type: "text",
    globalVerdict: "safe",
    confidence: 74,
    summary:
      "Le texte présente des caractéristiques humaines et un style cohérent. Aucune génération IA clairement détectée.",
    details: [
      {
        label: "Structure linguistique",
        value: "Syntaxe naturelle et variée.",
      },
      {
        label: "Empreinte de modèle IA",
        value: "Aucune signature typique détectée.",
      },
      {
        label: "Vérification factuelle",
        value: "Les affirmations correspondent à des sources fiables.",
      },
    ],
    recommendations: [
      "Toujours vérifier les affirmations importantes.",
      "Recouper les sources.",
    ],
  },

  article: {
    type: "article",
    globalVerdict: "suspect",
    confidence: 55,
    summary:
      "L’article mélange des sources fiables et d’autres douteuses, avec plusieurs affirmations non vérifiées.",
    details: [
      {
        label: "Vérification des sources",
        value: "2 sources fiables, 3 sources inconnues.",
      },
      {
        label: "Analyse du ton",
        value:
          "Tonalité alarmiste, typique des contenus destinés à manipuler l’opinion.",
      },
      {
        label: "Cohérence des données",
        value: "Certaines statistiques ne correspondent à aucune base publique.",
      },
    ],
    recommendations: [
      "Rechercher les sources originales.",
      "Croiser avec un média reconnu.",
      "Se méfier des titres sensationnalistes.",
    ],
  },
};

const ICONS = {
  safe: <CheckCircle className="w-10 h-10 text-green-600" />,
  suspect: <AlertCircle className="w-10 h-10 text-yellow-600" />,
  fake: <XCircle className="w-10 h-10 text-red-600" />,
};

const COLORS = {
  safe: "text-green-600",
  suspect: "text-yellow-600",
  fake: "text-red-600",
};

const LABELS = {
  safe: "Contenu fiable",
  suspect: "Contenu suspect",
  fake: "Probable deepfake",
};

export default function ReportPage({ params }: any) {
  const mock = MOCKS[params.type] || MOCKS["image"];

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center px-6 pb-20">
      {/* HEADER */}
      <header className="w-full max-w-4xl py-6">
        <h1 className="text-3xl font-bold text-gray-800">Résultat de l'analyse</h1>
        <p className="text-gray-500 mt-1">
          Type de contenu analysé :{" "}
          <span className="font-medium">{mock.type}</span>
        </p>
      </header>

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl w-full">

        {/* GLOBAL VERDICT */}
        <div className="flex items-center gap-4 mb-6">
          {ICONS[mock.globalVerdict]}
          <div>
            <h2 className={`text-2xl font-bold ${COLORS[mock.globalVerdict]}`}>
              {LABELS[mock.globalVerdict]}
            </h2>
            <p className="text-gray-600 mt-1">{mock.summary}</p>
          </div>
        </div>

        {/* CONFIDENCE */}
        <div className="mt-6 mb-10">
          <p className="font-medium text-gray-700 mb-2">
            Niveau de confiance : {mock.confidence}%
          </p>

          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              style={{ width: `${mock.confidence}%` }}
              className="h-full bg-gradient-to-r from-[#FF6A5A] to-[#FF8C7A]"
            />
          </div>
        </div>

        {/* DETAILS */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Détails de l'analyse
        </h3>

        <div className="space-y-4">
          {mock.details.map((d: any, i: number) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <p className="font-medium text-gray-700">{d.label}</p>
              <p className="text-gray-600 mt-1">{d.value}</p>
            </div>
          ))}
        </div>

        {/* RECO */}
        <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-4">
          Conseils
        </h3>

        <ul className="space-y-3">
          {mock.recommendations.map((r: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              <span className="text-[#FF6A5A] mt-0.5">•</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER */}
      <p className="text-gray-500 text-sm mt-10">
        UnFaked © 2025 · PoopOverflow
      </p>
    </main>
  );
}
