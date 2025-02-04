import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* SEO & Meta */}
      <Head>
        <title>Accueil | Mon Site</title>
        <meta name="description" content="Découvrez mon site Next.js avec une image optimisée et un design moderne." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Contenu principal */}
      <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 text-gray-900">
        
        {/* Header */}
        <header className="w-full py-6 bg-blue-600 text-white text-center shadow-md">
          <h1 className="text-4xl font-bold">Bienvenue sur mon site</h1>
        </header>

        {/* Main */}
        <main className="flex flex-col items-center p-6 text-center">
          <p className="mb-6 text-lg">Ceci est une page d'exemple utilisant Next.js et une image optimisée.</p>
          <div className="relative w-[500px] h-[300px]">
            <Image
              src="/mon-image.jpg"
              alt="Description de l'image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-4 text-center text-gray-700 bg-gray-200">
          <p>&copy; 2025 Mon Site. Tous droits réservés.</p>
        </footer>
        
      </div>
    </>
  );
}

