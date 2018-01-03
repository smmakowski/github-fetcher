import React from 'react';
import ReactDOM from 'react-dom';
import RepoListItem from './RepoListItem.jsx';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: ['I', 'am', 'a', 'list', 'item'],
      sortedBy: 'Stars'
    }
  }

  render() {
    return (
      <div>
        <h3>Top {this.state.repos.length} Repositories by {this.state.sortedBy}</h3>
        <ol>
        </ol>
      </div>
    )
  }
}

export default RepoList;
