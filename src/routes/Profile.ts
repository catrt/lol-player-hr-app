import Component from "../core/Component";
import PlayerDetail from "../components/PlayerDetail";

export default class Profile extends Component {
  constructor() {
    super({
      classNames: ["container"]
    })
  }
  update() {
    const playerDetailEl = new PlayerDetail().el

    this.el.append(
      playerDetailEl
    )
  }
}
