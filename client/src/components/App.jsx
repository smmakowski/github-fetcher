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
      repos: [{owner: 'Owner', name: 'Repo Name', url: 'http://www.github.com', stars: 100, forks: 100}],
      sortedBy: 'Stars'
    }
  }

  searchForUser(user) {
    console.log(user);
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <Search searchForUser={this.searchForUser} />
        <RepoList repos={this.state.repos} sortedBy={this.state.sortedBy}/>
        <UserList />
      </div>
    )
  }
}

export default App;
