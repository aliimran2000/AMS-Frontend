import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { UserProvider } from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <UserProvider>
        <NavBar />
        <Component {...pageProps} />

        <Footer />
      </UserProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
