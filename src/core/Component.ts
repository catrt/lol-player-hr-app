interface componentPayload {
  tagName?: string
  classNames?: string[]
  id?: string
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
      classNames = [],
      id = "",
      props = {},
      state = {},
    } = payload
    
    this.el = document.createElement(tagName)
    if(classNames.length) this.el.classList.add(...classNames)
    if(id) this.el.id = id
    this.state = state
    this.props = props
    this.update()
  }
  update() {
    // ...
  }
}
