import Link from 'next/link'; // 👈 add this at the top!

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-tidydesk-primary text-tidydesk-light">
      <h1 className="text-5xl font-bold mb-6">👋 Welcome to TidyDesk</h1>
      <p className="text-xl mb-8 max-w-xl text-center">
        Manage your freelance work with calmness, trust, and power. Where elegance meets productivity. 🚀
      </p>
      <Link href="/dashboard"> {/* 👈 make button a Link */}
        <button className="px-8 py-3 bg-tidydesk-secondary hover:bg-tidydesk-accent text-white font-semibold rounded">
          Get Started
        </button>
      </Link>
    </main>
  );
}



  
  