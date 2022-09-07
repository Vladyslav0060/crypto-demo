import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ThemeWrapper from "./config/ThemeWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>
);
