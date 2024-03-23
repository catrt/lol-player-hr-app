import Component from "../core/Component";
import Headline from "../components/HeadLine";

export default class Home extends Component {
  constructor() {
    super({
      classNames: ["container"]
    })
  }
  update() {
    const headlineEl = new Headline().el

    this.el.append(
      headlineEl
    )
  }
}
