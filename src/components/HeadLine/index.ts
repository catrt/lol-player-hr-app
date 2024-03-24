import Component from "../../core/Component"
import Search from "./Search"

interface headlineState {
  [key: string]: unknown
  links: link[]
}
interface link {
  [key: string]: string
  "text": string
  "href": string
}

export default class Headline extends Component {
  declare state: headlineState

  constructor() {
    super({
      classNames: ["headline"],
      state: {
        links: [
          {
            text: "선수 관리하기",
            href: "#/management"
          },
          {
            text: "선수 등록하기",
            href: "#/edit"
          },
        ]
      }
    })
  }
  update() {
    const h1El = document.createElement("h1")
    h1El.innerHTML = /* html */`
      LOL Team Management<br>
      Register & Manage<br>
      Your Players
    `

    const btnsEl = document.createElement("div")
    btnsEl.classList.add("btns")
    this.state.links.forEach(link => {
      const btnEl = document.createElement("button")
      btnEl.classList.add("btn", "btn--large")
      btnEl.setAttribute("type", "button")

      const linkEl = document.createElement("a")
      linkEl.setAttribute("href", link.href)
      linkEl.textContent = link.text

      btnEl.append(linkEl)
      btnsEl.append(btnEl)
    })

    const searchEl = new Search().el

    this.el.append(
      h1El,
      searchEl,
      btnsEl
    )
  }
}
