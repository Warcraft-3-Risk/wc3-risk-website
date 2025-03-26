import React from 'react';
import content from '../lib/content.json';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">{content.home.title}</h1>
        <p className="text-center text-sm">{content.home.description}</p>
      </main>
      <footer className="mt-auto text-center text-sm">
        <p>{content.home.footerText.replace('{{year}}', currentYear.toString())}</p>
      </footer>
    </div>
  );
}