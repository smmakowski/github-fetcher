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
        <h4>{this.state.repo.name}</h4>
        <h6>{this.state.repo.owner}</h6>
        Stars: {this.state.repo.stars} Forks: {this.state.repo.forks}
        <a href={this.state.repo.url}>Go to Repo!</a>
      </div>
    )
  }
}

export default RepoListItem;
