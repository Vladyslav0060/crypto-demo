import FooterComponent from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CoinPage from "./pages/CoinPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    Home page!
                                    <Link to="/coin">Link</Link>
                                </>
                            }
                        />
                        <Route path="/coin" element={<CoinPage />} />
                    </Routes>
                </BrowserRouter>
                <FooterComponent />
            </div>
        </div>
    );
}

export default App;
