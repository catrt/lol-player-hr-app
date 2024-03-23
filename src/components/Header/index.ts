import Component from "../../core/Component";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header"
    })
  }
  update() {
    const logoEl = new Logo().el
    const navEl = new Navigation().el

    const headerContainerEl = document.createElement("div")
    headerContainerEl.classList.add("container")
    headerContainerEl.append(
      logoEl,
      navEl
    )

    this.el.append(
      headerContainerEl
    )
  }
}
