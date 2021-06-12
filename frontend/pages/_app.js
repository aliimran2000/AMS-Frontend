import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Head from "next/head";

import { UserContext } from "../Source/UserManagement";
import { RequestsContext } from "../Utils/requests";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext>
      <RequestsContext>
        <SnackbarProvider maxSnack={3}>
          <Head>
            <title>AMS</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <NavBar />
          <Component {...pageProps} />

          <Footer />
        </SnackbarProvider>
      </RequestsContext>
    </UserContext>
  );
}

export default MyApp;
