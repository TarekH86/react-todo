import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
      const {id,text} = this.props;
    return (
      <div>
        <span>{id}.</span> <span>{text}</span>
      </div>
    )
  }
}
