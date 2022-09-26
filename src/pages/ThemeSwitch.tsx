import Connect from "@/component/react-redux/Connect";
import { Component } from 'react';

class ThemeSwitch extends Component {
  state = {
    themeColor: ''
  }

  handleSwitchColor = (color) => {
    this.props.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render() {
    return (
      <>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => this.handleSwitchColor('red')}
        >Red</button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={() => this.handleSwitchColor('blue')}
        >Blue</button>
      </>
    );
  }
}

export default Connect((state: any, props: any) => ({
  themeColor: state.themeColor
}))(ThemeSwitch)


