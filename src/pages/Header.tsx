import React, { Component } from 'react';
import Connect from '@/component/react-redux/Connect'

class Header extends Component {
  constructor() {
    super();
    this.state = { themeColor: '' };
  }
  render() {
    return (
      <>
        <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
      </>
    )
  }
}

export default Connect((state: any) => ({
  themeColor: state.themeColor
}))(Header)



