import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


function MyApp({ Component, pageProps }) {
    return (
        <SnackbarProvider maxSnack={3}>
            <NavBar />
            <Component {...pageProps} />

            <Footer />
        </SnackbarProvider>
    )
}

export default MyApp