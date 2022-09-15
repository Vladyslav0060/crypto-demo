import FooterComponent from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CoinPage from "./pages/CoinPage";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AnimatePresence } from "framer-motion";
import CoinList from "./pages/CoinList";

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
                            <Route
                                path="/coin/:coinId"
                                element={<CoinPage />}
                            />
                            <Route path="/coin" element={<CoinList />} />
                        </Routes>
                    </AnimatePresence>
                    <FooterComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
