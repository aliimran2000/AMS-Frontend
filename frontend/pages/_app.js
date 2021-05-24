import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Head from "next/head";

import { UserContext } from "../Source/UserManagement";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <SnackbarProvider maxSnack={3}>

        <Head>
          <title>AMS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
        <Component {...pageProps} />

        <Footer />

      </SnackbarProvider>
    </UserContext>
  );
}

export default MyApp;
