import Component from "../../core/Component";

export default class Logo extends Component {
  constructor() {
    super({
      tagName: "a",
      classNames: ["logo"]
    })
  }
  update() {
    this.el.setAttribute("href", "#/")

    const logoImgEl = document.createElement("img")
    logoImgEl.setAttribute("src", "/images/logo.svg")
    logoImgEl.setAttribute("alt", "LCK")

    this.el.append(logoImgEl)
  }
}
