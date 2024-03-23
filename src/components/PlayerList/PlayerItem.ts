import Component from "../../core/Component";

interface playerProps {
  [key: string]: unknown
  infos: info[]
}
export interface info {
  [key: string]: string
  "image": string
  "name": string
  "team": string
  "level": string
  "position": string
}

export default class PlayerItem extends Component {
  declare props: playerProps

  constructor(props: playerProps) {
    super({
      tagName: "a",
      classNames: ["player"],
      props
    })
  }
  update() {
    const { infos } = this.props

    
  }
}
