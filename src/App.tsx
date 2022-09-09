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

function App() {
  const location = useLocation();

  const data = [
    {
      name: "Athena Weissnat",
      company: "Little - Rippin",
      price: 123,
    },
    {
      name: "Deangelo Runolfsson",
      company: "Greenfelder - Krajcik",
      price: 1232,
    },
    {
      name: "Danny Carter",
      company: "Kohler and Sons",
      price: 125,
    },
    {
      name: "Trace Tremblay PhD",
      company: "Crona, Aufderhar and Senger",
      price: 133,
    },
    {
      name: "Derek Dibbert",
      company: "Gottlieb LLC",
      price: 123,
    },
    {
      name: "Viola Bernhard",
      company: "Funk, Rohan and Kreiger",
      price: 123,
    },
    {
      name: "Austin Jacobi",
      company: "Botsford - Corwin",
      price: 123,
    },
    {
      name: "Hershel Mosciski",
      company: "Okuneva, Farrell and Kilback",
      price: 123,
    },
    {
      name: "Mylene Ebert",
      company: "Kirlin and Sons",
      price: 123,
    },
    {
      name: "Lou Trantow",
      company: "Parisian - Lemke",
      price: 132,
    },
    {
      name: "Dariana Weimann",
      company: "Schowalter - Donnelly",
      price: 123,
    },
    {
      name: "Dr. Christy Herman",
      company: "VonRueden - Labadie",
      price: 1233,
    },
    {
      name: "Katelin Schuster",
      company: "Jacobson - Smitham",
      price: 123,
    },
    {
      name: "Melyna Macejkovic",
      company: "Schuster LLC",
      price: 123,
    },
    {
      name: "Pinkie Rice",
      company: "Wolf, Trantow and Zulauf",
      price: 123,
    },
    {
      name: "Brain Kreiger",
      company: "Lueilwitz Group",
      price: 123,
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
              <Route path="/page3" element={<CoinList data={data} />} />
            </Routes>
          </AnimatePresence>
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
