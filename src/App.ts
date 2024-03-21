import Component from "./core/Component"
import Header from "./components/Header"

export default class App extends Component {
  constructor() {
    super({
      id: "App"
    })
  }
  update() {
    const headerEl = new Header().el
    const mainEl = document.createElement("main")

    this.el.append(
      headerEl,
      mainEl,
    )
  }
}
