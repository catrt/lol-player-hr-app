import Component from "../../core/Component";
import InfoForm from "./InfoForm";

export default class Creater extends Component {
  constructor() {
    super({
      classNames: ["creater"]
    })
  }
  update() {
    const infoFormEl = new InfoForm().el

    this.el.append(
      infoFormEl
    )
  }
}
