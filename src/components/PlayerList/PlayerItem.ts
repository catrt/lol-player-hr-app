import Component from "../../core/Component";
import { getFileUrl } from "../../core/firebase";

export interface playerProps {
  [key: string]: unknown
  "nickname": string
  "image": string
  "name": string
  "team": string
  "level": string
  "position": string
  "champion": {
    [key: string]: unknown
    "championship": number
    "msi": number
    "league": number
  }
}

export default class PlayerItem extends Component {
  declare props: playerProps

  constructor(props: playerProps) {
    super({
      tagName: "a",
      classNames: ["player"],
      props
    })
  }
  async update() {
    const { nickname,
      image,
      name,
      team,
      level,
      position
    } = this.props

    this.el.setAttribute("href", `#/profile?key=${nickname}`)

    const url = await getFileUrl(image)

    this.el.innerHTML = /* html */`
      <div class="image">
        <img src="${url}">
      </div>
      <div class="category">닉네임 : </div>
      <div class="nickname">${nickname}</div>
      <div class="category">이름 : </div>
      <div class="name">${name}</div>
      <div class="category">팀 : </div>
      <div class="team">${team}</div>
      <div class="category">소속 : </div>
      <div class="level">${level}</div>
      <div class="category">포지션 : </div>
      <div class="position">${position}</div>
    `
  }
}
