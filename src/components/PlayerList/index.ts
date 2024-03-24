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
    const PLAYERITEM_HEIGHT = 205
    const PLAYLIST_CRIT = 3

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
      console.log(Object.keys(players).length)
      if(Object.keys(players).length > PLAYLIST_CRIT) {
        playersEl.style.height = `${PLAYERITEM_HEIGHT * PLAYLIST_CRIT}px`
        playerListMoreBtnEl.classList.remove("hide")
      }

      playerListMoreBtnEl.addEventListener("click", () => {
        const curIndex = playersEl.offsetHeight / PLAYERITEM_HEIGHT
        if(Object.keys(players).length > curIndex + PLAYLIST_CRIT) {
          playersEl.style.height = `${playersEl.offsetHeight + PLAYERITEM_HEIGHT * PLAYLIST_CRIT}px`
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
