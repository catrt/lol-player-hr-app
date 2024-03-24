import Component from "../../core/Component";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "footer"
    })
  }
  update() {
    const copyRightEl = document.createElement("div")
    copyRightEl.classList.add("copy-right")
    copyRightEl.textContent = `ⓒ ${new Date().getFullYear()} CATRT. All Rights Reserved.`

    const githubEl = document.createElement("a")
    githubEl.classList.add("github")
    githubEl.setAttribute("href", "https://github.com/catrt/lol-player-hr-app")
    githubEl.setAttribute("target", "_blank")
    githubEl.textContent = "GitHub Repository"

    this.el.append(
      copyRightEl,
      githubEl
    )
  }
}
