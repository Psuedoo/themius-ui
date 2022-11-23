import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head className="flex flex-auto">
        <title>Themius</title>
        <meta name="description" content="Themius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-auto">
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Themius!</a>
        </h1>
      </main>
    </div>
  );
}
