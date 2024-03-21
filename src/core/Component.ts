interface componentPayload {
  tagName?: string
  props?: {
    [key: string]: unknown
  }
  state?: {
    [key: string]: unknown
  }
}

export default class Component {
  public el
  public state
  public props

  constructor(payload: componentPayload = {}) {
    const {
      tagName = "div",
      props = {},
      state = {},
    } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
  }
  render() {
    // ...
  }
}
