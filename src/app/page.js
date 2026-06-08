import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const participants = [
  'Alessandro',
  'Anncatrine',
  'Birgitta',
  'Filip',
  'Frida',
  'Johan',
  'Jonas',
  'Linus',
  'Ludwig P',
  'Ludwig R',
  'Martin',
  'Peter',
  'Petra',
  'Sam',
  'Sonja',
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.background}>
          <h1 className={styles.header}>Welcome to the huge World Cup bet!</h1>
          <h1 className={`${styles.header} ${styles.foreignLanguage}`}>
            ¡Bienvenido a la gran apuesta de la Copa del Mundo!
          </h1>
          <h1 className={`${styles.header} ${styles.foreignLanguage}`}>
            Bienvenue dans le grand pari sur la Coupe du Monde!
          </h1>
          <div className={styles.participants}>
            {participants.map((participant, index) => (
              <div key={index} className={styles.participant}>
                <p className={styles.description}>
                  <Link
                    href={`/${participant.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {participant}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.table}>
          <h2>Tabell:</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <ul>
                <h4>285 poäng:</h4>
                <li>Peter</li>
                <li>Therese</li>

                <h4>275 poäng:</h4>
                <li>Basta</li>
                <li>Filip</li>
                <li>Ludwig R</li>

                <h4>270 poäng:</h4>
                <li>Henrik</li>
                <li>Robin</li>
              </ul>
            </div>
            <div className={styles.tableRow}>
              <ul>
                <h4>255 poäng:</h4>
                <li>Carolina</li>

                <h4>250 poäng:</h4>
                <li>Marcus</li>

                <h4>245 poäng:</h4>
                <li>Ludwig P</li>

                <h4>240 poäng:</h4>
                <li>Karl</li>

                <h4>235 poäng:</h4>
                <li>Victor</li>
              </ul>
            </div>

            <div className={styles.tableRow}>
              <ul>
                <h4>230 poäng:</h4>
                <li>Elias</li>
                <li>Glenn</li>

                <h4>215 poäng:</h4>
                <li>Anders</li>

                <h4>205 poäng:</h4>
                <li>Alessandro</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
