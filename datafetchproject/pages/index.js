import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UseFetch Test project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DevLead test{" "}
          <a href="https://github.com/Cureety/technical_test_lead/">project</a>
        </h1>
        <p>
          Let's give it a try{" "}
          <a href="./fetchdata">
            <b>by clicking here</b>
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/medjahdikaram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Done by M. Karam Medjahdi
        </a>
      </footer>
    </div>
  );
}
