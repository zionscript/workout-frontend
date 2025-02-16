import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.navbarSection}>
          <nav className={styles.navbarContent}>
            <p>WORKOUT</p>
            <ul>
              <li>WORKOUTS</li>
              <li>PROGRAMS</li>
              <li>HEALTHY LIVING</li>
              <li>COMMUNITY</li>
              <li>ABOUT</li>
            </ul>
          </nav>
        </section>
        <section className={styles.firstContent}>
        <Image src="/homem.png" alt="homem amarrando o tênis" width={409} height={684}/>
        <h1 className={styles.textHeading}>
          WORKOUT WITH ME
        </h1>
        </section>
        <h2 className={styles.textDescription}>
        A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
        </h2>   

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Join Club Now!
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Mantido por &copy;Yuri Oliveira</p>
      </footer>
    </div>
  );
}
