import React from 'react';
import ReactDOM from 'react-dom';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: this.props.user
    }
  }

  render() {
    return (
      <div>
        <b>Username:</b> { this.props.user.username }<br />
        <b>Top Repos:</b> { this.props.user.repos.join(', ') }<br />
        <b>Friends:</b> { this.props.user.friends.join(', ') }<br />
        Go to <a href={ this.props.user.url}>PROFILE</a><br />
      </div>
    )
  }
}

export default UserListItem;
