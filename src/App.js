import React from 'react';
import './App.css';

import MainPage from './pages/MainPage'
import HomePage from './pages/HomePage'

class App extends React.Component {

  state = {
    currentUser: null,
  }

  render() {
    const pageToDisplay = this.state.currentUser ? <MainPage /> : <HomePage />

    return (
      <div className="App">
        {pageToDisplay}
      </div>
    )
  }
}

export default App
