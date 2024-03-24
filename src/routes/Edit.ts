import Component from "../core/Component";
import Creater from "../components/Creater";

export default class Edit extends Component {
  constructor() {
    super({
      classNames: ["container"]
    })
  }
  update() {
    const createrEl = new Creater().el

    this.el.append(
      createrEl
    )
  }
}