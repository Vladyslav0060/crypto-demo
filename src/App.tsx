import FooterComponent from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CoinPage from "./pages/CoinPage";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <Navbar />
            <div className="wrapper">
                <div className="content">
                    <AnimatePresence mode="wait" initial={false}>
                        <Routes key={location.pathname} location={location}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/coin" element={<CoinPage />} />
                        </Routes>
                    </AnimatePresence>
                    <FooterComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
