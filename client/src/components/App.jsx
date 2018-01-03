import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import RepoList from './RepoList.jsx';
import UserList from './UserList.jsx';

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
        <Search />
        <RepoList />
        <UserList />
      </div>
    )
  }
}

export default App;
