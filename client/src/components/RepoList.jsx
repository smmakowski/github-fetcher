import React from 'react';
import ReactDOM from 'react-dom';
import RepoListItem from './RepoListItem.jsx';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: this.props.repos,
      sortedBy: this.props.sortedBy
    }
  }

  renderListItems() {
    return this.state.repos.map((repo) => {
      return <RepoListItem repo={repo} />
    });
  }

  render() {
    return (
      <div>
        <h3>Top {this.state.repos.length} Repositories by {this.state.sortedBy}</h3>
        <ol>
          {this.renderListItems()}
        </ol>
      </div>
    )
  }
}

export default RepoList;
