import App from "./App";
import router from "./routes";

const rootEl = document.querySelector("#root")
rootEl?.append(new App().el)

router()
