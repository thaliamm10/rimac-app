import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import '../assets/styles/index.scss'
import Navigation from "../routes/Navigation.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import {QueryClient, QueryClientProvider, QueryCache, MutationCache} from "react-query";
// import {APP_ERROR_MESSAGE} from "../common/constants/app.constant.ts";
// import {toast} from 'react-toast'
// Creamos una instancia del QueryClient
// const queryClient = new QueryClient({
//     queryCache: new QueryCache({
//         onError: (error: any) => {
//             if (error.response) {
//                 const {mensajes} = error.response.data;
//                 toast.warn(mensajes[0]);
//             } else if (error.request) {
//                 toast.error(APP_ERROR_MESSAGE);
//             }
//         },
//     }),
//
//     mutationCache: new MutationCache({
//         onError: (error: any) => {
//             const errorStatus = error.response.status;
//             const errorMessages = error.response.data.mensajes;
//             if (errorStatus === 400) {
//                 toast.warn(errorMessages[0]);
//             } else {
//                 toast.error(
//                     APP_ERROR_MESSAGE
//                 );
//             }
//         },
//     }),
// });
const queryClient = new QueryClient()

function App() {
    return (
        // <Provider store={store}>
        <>
            <div className="container">
                <div className='container__main'>
                    <Header/>
                    <QueryClientProvider client={queryClient}>
                            <Navigation/>
                    </QueryClientProvider>
                </div>
                <Footer/>
            </div>
        </>
        // </Provider>
    );
}


export default App;
