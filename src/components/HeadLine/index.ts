import Component from "../../core/Component"

export default class Headline extends Component {
  constructor() {
    super({
      classNames: ["headline"]
    })
  }
  render() {
    const h1El = document.createElement("h1")
    h1El.innerHTML = /* html */`
      LOL TEAM Management<br>
      Register & Manage<br>
      Your Players
    `

    const managementBtnEl = document.createElement("button")
    managementBtnEl.classList.add("btn")
    managementBtnEl.setAttribute("type", "button")
    managementBtnEl.textContent = "선수 관리하기"

    const profileBtnEl = document.createElement("button")
    profileBtnEl.classList.add("btn")
    profileBtnEl.setAttribute("type", "button")
    profileBtnEl.textContent = "선수 확인하기"

    const btnsEl = document.createElement("div")
    btnsEl.classList.add("btns")
    btnsEl.append(
      managementBtnEl,
      profileBtnEl
    )

    this.el.append(
      h1El,
      btnsEl
    )
  }
}
