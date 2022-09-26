import React, { Component } from 'react'
import { store } from '../../pages/modules'
const IndexStore = React.createContext(store)

const Connect = (mapStateToProps: (state: any, props: any) => ({}), mapDispatchToProps?: (dispatch: any, props: any) => {}) => (WrappedComponent: JSX.IntrinsicElements | any) => {
  class Connect extends Component {
    static contextType = IndexStore
    state = {
      allProps: {}
    }
    componentDidMount(): void {
      const store = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps() {
      const store = this.context
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {} // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {} // 防止 mapDispatchToProps 没有传入
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render() {
      console.log(this.props)
      return <WrappedComponent  {...this.state.allProps} dispatch={this.context.dispatch} />
    }
  }
  return Connect
}
export default Connect