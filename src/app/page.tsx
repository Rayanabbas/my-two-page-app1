import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Bienvenue sur mon site</h1>
      </header>
      <main>
        <p>Ceci est une page d'exemple utilisant Next.js.</p>
        <Image
          src="/mon-image.jpg"
          alt="Description de l'image"
          width={500}
          height={300}
        />
      </main>
      <footer>
        <p>&copy; 2025 Mon Site. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

