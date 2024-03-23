import Component from "../core/Component"
import PlayerList from "../components/PlayerList"

export default class Management extends Component {
  constructor() {
    super({
      classNames: ["container"]
    })
  }
  update() {
    const playerListEl = new PlayerList().el

    this.el.append(
      playerListEl
    )
  }
}
