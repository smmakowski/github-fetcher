import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // implement necessary state
      good: false
    }
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
      </div>

    )
  }
}

export default App;
