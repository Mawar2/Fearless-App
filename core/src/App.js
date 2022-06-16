import React, { Component } from 'react'
import EventBind from './components/EventBind';
export default class App extends Component {
  render() {
    return (
        <div className='App'>
          <header className='App-header'></header>
          <div>
            <EventBind></EventBind>
          </div>
        </div>
    )
  }
}