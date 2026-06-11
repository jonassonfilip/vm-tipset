import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const participants = [
  'Aksel',
  'Alessandro',
  'Anders',
  'Anncatrine',
  'Atti',
  'Basta',
  'Berit',
  'Birgitta',
  'Caroline',
  'Filip',
  'Frida',
  'Gabriel',
  'Hannes',
  'Jakob',
  'Joel',
  'Johan J',
  'Johan M',
  'Johanna',
  'Jonas',
  'Julian',
  'Linus',
  'Ludwig P',
  'Ludwig R',
  'Marcus',
  'Martin',
  'Maya',
  'Mattias',
  'Niklas',
  'Peter',
  'Petra',
  'Robin',
  'Sam',
  'Sofie',
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
        <div className={styles.table}>
          <h2>Tabell:</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <ul>
                <li>Aksel</li>
                <li>Alessandro</li>
                <li>Anders</li>
                <li>Anncatrine</li>
                <li>Atti</li>
                <li>Basta</li>
                <li>Berit</li>
                <li>Birgitta</li>
                <li>Caroline</li>
                <li>Filip</li>
                <li>Frida</li>
                <li>Gabriel</li>
                <li>Hannes</li>
                <li>Jakob</li>
                <li>Joel</li>
                <li>Johan J</li>
                <li>Johan M</li>
                <li>Johanna</li>
                <li>Jonas</li>
                <li>Julian</li>
                <li>Linus</li>
                <li>Ludwig P</li>
                <li>Ludwig R</li>
              </ul>
            </div>
            <div className={styles.tableRow}>
              <ul></ul>
            </div>

            <div className={styles.tableRow}>
              <ul>
                <li>Marcus</li>
                <li>Martin</li>
                <li>Maya</li>
                <li>Mattias</li>
                <li>Niklas</li>
                <li>Peter</li>
                <li>Petra</li>
                <li>Robin</li>
                <li>Sam</li>
                <li>Sofie</li>
                <li>Sonja</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
