import React from 'react';
import ReactDOM from 'react-dom';

class RepoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: this.props.repo
    }
  }

  render() {
    return (
      <div>
        <b>Repo Name:</b> { this.state.repo.name }<br />
        <b>Repo Owner:</b> { this.state.repo.owner }<br />
        <b>Stars:</b> { this.state.repo.stars } <b>Forks:</b> { this.state.repo.forks }<br />
        Go to <a href={ this.state.repo.url }>REPO</a>
      </div>
    )
  }
}

export default RepoListItem;
