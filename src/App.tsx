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
import CoinList from "./pages/CoinList";
import TableComponent from "./components/Table/Table";

function App() {
    const location = useLocation();

    interface RowData {
        name: string;
        price: number;
        price_change_percentage_24h: number;
        total_volume: number;
        market_cap: number;
    }

    const data: RowData[] = [
        {
            name: "Athena Weissnat",
            price: 123,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12444455,
        },
        {
            name: "Deangelo Runolfsson",
            price: 1232,
            price_change_percentage_24h: 1.5,
            total_volume: 15000,
            market_cap: 12344455,
        },
        {
            name: "Danny Carter",
            price: 125,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Trace Tremblay PhD",
            price: 133,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Derek Dibbert",
            price: 123,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Viola Bernhard",
            price: 123,
            price_change_percentage_24h: 1.05,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Austin Jacobi",
            price: 123,
            price_change_percentage_24h: 1.65,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Hershel Mosciski",
            price: 123,
            price_change_percentage_24h: 1.45,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Mylene Ebert",
            price: 123,
            price_change_percentage_24h: -1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Lou Trantow",
            price: 132,
            price_change_percentage_24h: -12.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Dariana Weimann",
            price: 123,
            price_change_percentage_24h: -17.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Dr. Christy Herman",
            price: 1233,
            price_change_percentage_24h: -118.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Katelin Schuster",
            price: 123,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Melyna Macejkovic",
            price: 123,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Pinkie Rice",
            price: 123,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
        {
            name: "Brain Kreiger",
            price: 123,
            price_change_percentage_24h: 1.5,
            total_volume: 10000,
            market_cap: 12344455,
        },
    ];
    return (
        <div className="App">
            <Navbar />
            <div className="wrapper">
                <div className="content">
                    <AnimatePresence mode="wait" initial={false}>
                        <Routes key={location.pathname} location={location}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/coin" element={<CoinPage />} />
                            <Route path="/page3" element={<CoinList />} />
                        </Routes>
                    </AnimatePresence>
                    <FooterComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
