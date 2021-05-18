import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { UserProvider } from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <SnackbarProvider maxSnack={3}>
        <NavBar />
        <Component {...pageProps} />

        <Footer />
      </SnackbarProvider>
    </UserProvider>
  );
}

export default MyApp;
