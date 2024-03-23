import Component from "../../core/Component"

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
            text: "선수 확인하기",
            href: "#/profile?key=FAKER"
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

    this.el.append(
      h1El,
      btnsEl
    )
  }
}
