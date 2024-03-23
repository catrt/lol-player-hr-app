import Component from "../../core/Component";

interface navState {
  [key: string]: unknown
  menus: menu[]
}
interface menu {
  [key: string]: string
  "name": string
  "href": string
}

export default class Navigation extends Component {
  declare state: navState

  constructor() {
    super({
      tagName: "nav",
      state: {
        menus: [
          {
            name: "Home",
            href: "#/"
          },
          {
            name: "Management",
            href: "#/management"
          },
          {
            name: "Profile",
            href: "#/profile"
          },
        ]
      }
    })
    window.addEventListener("popstate", () => {
      this.el.innerHTML = ""
      this.update()
    })
  }
  update() {
    const ulEl = document.createElement("ul")
    ulEl.style.listStyleType = 'none';

    this.state.menus.forEach(menu => {
      const navHref = menu.href.split("?")[0]
      const curHash = location.hash.split("?")[0]
      const isActive = navHref === curHash

      const liEl = document.createElement("li")
      const anchorEl = document.createElement("a")
      isActive && anchorEl.classList.add("active")
      anchorEl.setAttribute("href", navHref)
      anchorEl.textContent = menu.name
      
      liEl.append(anchorEl)
      ulEl.append(liEl)
    })

    this.el.append(ulEl)
  }
}
