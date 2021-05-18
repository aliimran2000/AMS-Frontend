import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';

// import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
    return (
        <SnackbarProvider maxSnack={3}>
        
            <Component {...pageProps} />
        
        </SnackbarProvider>
    )
}

export default MyApp