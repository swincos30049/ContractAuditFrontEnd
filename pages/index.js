import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>COS30049 Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Audit and Secure Your Contract Now!
        </h1>

        <div className={styles.grid}>
          <a href="upload" className={styles.card}>
            <h3>Upload &rarr;</h3>
            <p>Upload and audit new contract</p>
          </a>

          <a href="example" className={styles.card}>
            <h3>Example &rarr;</h3>
            <p>View an example report</p>
          </a>

          <a
            href="list"
            className={styles.card}
          >
            <h3>History &rarr;</h3>
            <p>View audit report from previous time</p>
          </a>

          <a
            href="about"
            className={styles.card}
          >
            <h3>About &rarr;</h3>
            <p>
              About this application
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .highlight {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
