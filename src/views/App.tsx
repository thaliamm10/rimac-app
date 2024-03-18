import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import '../assets/styles/index.scss'
import Navigation from "../routes/Navigation.tsx";

function App() {
    return (
        // <Provider store={store}>
        <>
            <div className="container">
                <div className='container__main'>
                    <Header/>
                    <Navigation/>
                </div>
                <Footer/>
            </div>
        </>
        // </Provider>
    );
}


export default App;
