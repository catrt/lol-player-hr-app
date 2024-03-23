import Component from "../../core/Component";

export interface categoriesState {
  [key: string]: unknown
  categories: string[]
}

export default class Categories extends Component {
  declare state: categoriesState

  constructor() {
    super({
      tagName: "ul",
      classNames: ["player-list__categories"],
      state: {
        categories: [
          "프로필 사진",
          "닉네임",
          "이름",
          "팀",
          "소속",
          "포지션",
        ]
      }
    })
  }
  update() {
    this.state.categories.map(category => {
      const liEl = document.createElement("li")
      liEl.textContent = category
      this.el.append(liEl)
    })
  }
}
