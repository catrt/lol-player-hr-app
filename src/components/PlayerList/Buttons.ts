import Component from "../../core/Component";

export default class Buttons extends Component {
  constructor() {
    super({
      classNames: ["btns"],
    })
  }
  update() {
    const createBtnEl = document.createElement("button")
    createBtnEl.classList.add("btn")
    const linkEl = document.createElement("a")
    linkEl.href = "#/edit"
    linkEl.textContent = "선수 등록하기"
    createBtnEl.append(linkEl)

    this.el.append(
      createBtnEl
    )
  }
}
