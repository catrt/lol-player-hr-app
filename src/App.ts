import Component from "./core/Component"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default class App extends Component {
  constructor() {
    super({
      id: "App"
    })
  }
  update() {
    const headerEl = new Header().el
    const mainEl = document.createElement("main")
    const footerEl = new Footer().el

    this.el.append(
      headerEl,
      mainEl,
      footerEl
    )
  }
}
