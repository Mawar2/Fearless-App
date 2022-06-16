import React, { Component } from 'react'
import EventBind from './components/EventBind';
import PreLoader from './components/PreLoader';

export default class App extends Component {
  render() {
    return (
        <div className='App'>
          <header className='App-header'></header>
          <div>
              <PreLoader></PreLoader>
              <EventBind></EventBind>
          </div>
        </div>
    )
  }
}