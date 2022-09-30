import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from '../store';

import '../components/style.css'


const App = ({ Component, pageProps }) => {

    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store} >
            <Head>
                <title>The Planer</title>
                <meta name="viewport" content="width=devide-width, intial-scale=1" />
               {/* <script src="/js/script.js"></script> */}
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
