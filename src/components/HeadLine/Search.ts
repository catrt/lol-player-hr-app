import Component from "../../core/Component";
import { playerProps } from "../PlayerList/PlayerItem";

interface players {
  [key: string]: playerProps
}

export default class Search extends Component {
  constructor() {
    super({
      classNames: ["search"]
    })
  }
  update() {
    const inputEl = document.createElement("input")
    inputEl.setAttribute("placeholder", "이름 혹은 닉네임을 입력하시오.")

    inputEl.addEventListener("keydown", event => {
      if(event.key === "Enter" && inputEl.value.trim()) {
        const searchText = inputEl.value.trim().toUpperCase()
        const playersJSON = localStorage.getItem("players")
        if(playersJSON) {
          const players = JSON.parse(playersJSON) as players

          Object.values(players).find(player => {
            if(player.name === searchText || player.nickname === searchText) {
              window.location.href = `/#/profile?key=${searchText}`
            }
          })
          inputEl.value = ""
          inputEl.setAttribute("placeholder", "존재하지 않는 선수입니다.")
        }
      }
    })

    this.el.append(
      inputEl
    )
  }
}
