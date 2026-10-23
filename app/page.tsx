"use client";

import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState<number | null>(null);

  function handleSubmit() {
    if (!answer.trim()) return;

    // Pour l'instant, score de démonstration.
    // Le vrai système sera ajouté ensuite.
    setScore(72);
  }

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col">
        
        {/* HEADER */}
        <header className="text-center">
          <div className="mb-3 text-2xl font-black tracking-tight">
            NOM MYSTÈRE
          </div>

          <div className="text-sm font-semibold text-gray-500">
            #001
          </div>
        </header>

        {/* GAME */}
        <section className="mt-10 flex-1">
          
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              Trouve le nom
            </h1>

            <p className="mt-2 text-gray-500">
              Trouve le nom mystère du jour.
            </p>
          </div>

          {/* ANSWER */}
          <div className="mt-10">
            <label
              htmlFor="answer"
              className="mb-3 block text-sm font-bold uppercase tracking-wide text-gray-500"
            >
              Ta réponse
            </label>

            <div className="flex gap-2">
              <input
                id="answer"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit();
                }}
                placeholder="Écris un nom..."
                className="min-w-0 flex-1 rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-lg font-semibold outline-none transition focus:border-black"
              />

              <button
                onClick={handleSubmit}
                className="rounded-2xl bg-black px-5 py-4 font-bold text-white transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Valider
              </button>
            </div>
          </div>

          {/* SCORE */}
          {score !== null && (
            <div className="mt-6 rounded-2xl bg-white p-5 text-center shadow-sm">
              <div className="text-sm font-bold uppercase tracking-wide text-gray-500">
                Proximité
              </div>

              <div className="mt-1 text-5xl font-black">
                {score}%
              </div>
            </div>
          )}

          {/* CLUES */}
          <div className="mt-12">
            <div className="mb-4 text-center text-sm font-black uppercase tracking-widest text-gray-400">
              Indices
            </div>

            <div className="space-y-3">
              {[1, 2, 3].map((index) => (
                <button
                  key={index}
                  className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left transition hover:border-gray-300"
                >
                  <span className="font-bold">
                    🔒 Indice {index}
                  </span>

                  <span className="text-sm font-semibold text-gray-400">
                    Révéler
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-sm text-gray-400">
          Nouveau défi demain à 00:00
        </footer>
      </div>
    </main>
  );
}
