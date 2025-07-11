import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <title>Randomiser</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
