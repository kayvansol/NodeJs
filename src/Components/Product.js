import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'صفحه محصولات'

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        <h1>state , componentDidMount , componentWillUnmount</h1>
        <br />
        <div style={{ fontSize: '60px' }}>
          Seconds: {this.state.seconds}</div>
      </div>
    )
  }
}
