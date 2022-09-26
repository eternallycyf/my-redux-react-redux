import React, { Component } from "react"
class Provider extends Component {

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default Provider