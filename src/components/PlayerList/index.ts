import Component from "../../core/Component";
import Categories from "./Categories";
import PlayerItem from "./PlayerItem";
import { info } from "./PlayerItem";

type players = info[]

export default class PlayerList extends Component {
  constructor() {
    super({
      classNames: ["player-list"],
    })
  }
  update() {
    const categoriesEl = new Categories().el
    
    const playersEl = document.createElement("div")
    playersEl.classList.add("player-list__players")

    const playersData = localStorage.getItem("players")
    if(playersData) {
      const players = JSON.parse(playersData)


    }

    this.el.append(
      categoriesEl,
      playersEl
    )
  }
}
