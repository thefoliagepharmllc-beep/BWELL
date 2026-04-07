import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bwell</title>
        <meta name="description" content="Bwell wellness platform" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a8754" />
      </Head>

      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        <iframe
          src="https://YOUR_BASE44_URL_HERE"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
          }}
          title="Bwell"
        />
      </div>
    </>
  );
} 
