import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
import Connect from "@/component/react-redux/Connect";

class Content extends Component {

  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js</p>
        <ThemeSwitch />
      </div>
    );
  }
}

export default Connect((state: any) => ({
  themeColor: state.themeColor
}))(Content)

