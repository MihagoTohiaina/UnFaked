import GradientButton from "@/components/external/GradientButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Tools() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center px-6">

      {/* HEADER */}
      <header className="w-full flex justify-between items-center py-6 max-w-6xl">
        <div className="text-xl font-bold">SafeCheck</div>
        <div className="w-10 h-10 rounded-full bg-gray-200" />
      </header>

      {/* HERO */}
      <section className="text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Détectez la fiabilité<br />de n’importe quel contenu
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Analysez des images, vidéos, textes ou articles pour repérer  
          les contenus manipulés ou générés par IA.
        </p>
      </section>

      {/* CARD ACTIONS */}
      {/* CARD ACTIONS */}
<section className="mt-12 w-full flex justify-center">
  <div className="bg-white p-8 rounded-3xl shadow-xl max-w-3xl w-full">
    
    <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
      Analyse intelligente de contenu
    </h2>

    {/* SELECT TYPE */}
    <div className="mb-6">
      <label className="block mb-2 text-gray-700 font-medium">
        Type de contenu à analyser
      </label>

      <Select>
        <SelectTrigger className="w-full rounded-xl border border-gray-300 bg-gray-50">
          <SelectValue placeholder="Choisir un type (image, vidéo, texte…)" />
        </SelectTrigger>

        <SelectContent className="rounded-xl shadow-lg bg-white">
          <SelectItem value="image">🖼 Image</SelectItem>
          <SelectItem value="video">🎥 Vidéo</SelectItem>
          <SelectItem value="text">✏️ Texte</SelectItem>
          <SelectItem value="article">📰 Article (URL)</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* UPLOAD BOX */}
    <div className="mb-8">
      <label className="block mb-2 text-gray-700 font-medium">
        Contenu à analyser
      </label>

      <div className="
        border-2 border-dashed 
        border-gray-300 
        rounded-xl 
        p-8 
        text-center 
        hover:border-[#FF6A5A] 
        transition
      ">
        <input
          type="file"
          className="hidden"
          id="fileInput"
        />

        <label htmlFor="fileInput" className="cursor-pointer">
          <p className="text-lg font-medium text-gray-700">Cliquez pour sélectionner un fichier</p>
          <p className="text-sm text-gray-500 mt-1">Formats supportés : .jpg, .png, .mp4, .txt…</p>
        </label>
      </div>
    </div>

    {/* BUTTON */}
    <div className="flex justify-center">
      <GradientButton >
        Analyser le contenu
      </GradientButton>
    </div>
  </div>
</section>


      {/* SOCIAL PROOF */}
      <section className="flex flex-wrap gap-4 justify-center mt-10">
        <div className="px-6 py-3 bg-white shadow rounded-full text-gray-700 font-medium">
          ✔ 10 000+ contenus analysés
        </div>
        <div className="px-6 py-3 bg-white shadow rounded-full text-gray-700 font-medium">
          ✔ Détection IA avancée
        </div>
        <div className="px-6 py-3 bg-white shadow rounded-full text-gray-700 font-medium">
          ✔ 100% gratuit
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 py-8 text-gray-500 text-sm text-center border-t w-full">
        UnFaked © 2025 · 
      </footer>
    </main>
  );
}
