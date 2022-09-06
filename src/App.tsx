import FooterComponent from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CoinPage from "./pages/CoinPage";
import ThemeWrapper from "./config/ThemeWrapper";

function App() {
	return (
		<div className="App">
			<ThemeWrapper>
				<Navbar />
				<div className="wrapper">
					<CoinPage />
					<FooterComponent />
				</div>
			</ThemeWrapper>
		</div>
	);
}

export default App;
