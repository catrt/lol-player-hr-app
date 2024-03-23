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
    
    const playersEl = document.createElement("div")
    playersEl.classList.add("player-list__players")

    const playersData = localStorage.getItem("players")
    if(playersData) {
      const players: playerProps[] = JSON.parse(playersData)

      playersEl.append(...Object.values(players).map(player => {
        return new PlayerItem(player).el
      }))
    }

    this.el.append(
      btnsEl,
      categoriesEl,
      playersEl
    )
  }
}
