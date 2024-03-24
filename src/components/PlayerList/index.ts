import Component from "../../core/Component";
import Categories from "./Categories";
import PlayerItem from "./PlayerItem";
import Buttons from "./Buttons";
import { playerProps } from "./PlayerItem";

export default class PlayerList extends Component {
  constructor() {
    super({
      classNames: ["player-list"],
    })
  }
  update() {
    const btnsEl = new Buttons().el
    const categoriesEl = new Categories().el

    const playerListMoreBtnEl = document.createElement("button")
    playerListMoreBtnEl.classList.add("btn", "btn--large", "hide", "btn--more")
    playerListMoreBtnEl.textContent = "더보기"
    
    const playersEl = document.createElement("div")
    playersEl.classList.add("player-list__players")

    const playersData = localStorage.getItem("players")
    if(playersData) {
      const players: playerProps[] = JSON.parse(playersData)

      playersEl.append(...Object.values(players).map(player => {
        return new PlayerItem(player).el
      }))

      if(players.length > 4) {
        playersEl.style.height = `${210 * 3}px`
        playerListMoreBtnEl.classList.remove("hide")
      }

      playerListMoreBtnEl.addEventListener("click", () => {
        const curIndex = playersEl.offsetHeight / 210
        if(players.length > curIndex + 3) {
          playersEl.style.height = `${playersEl.offsetHeight + 210 * 3}px`
        } else {
          playersEl.style.height = "auto"
          playerListMoreBtnEl.classList.add("hide")
        }
      })
    }

    this.el.append(
      btnsEl,
      categoriesEl,
      playersEl,
      playerListMoreBtnEl
    )
  }
}
