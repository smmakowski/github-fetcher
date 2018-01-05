import React from 'react';
import ReactDOM from 'react-dom';
import UserListItem from './UserListItem.jsx';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    }
  }

  renderUserListItems() {
    return this.state.users.map((user, i) => {
      return <UserListItem key={ i } user={ user } />
    });
  }

  render() {
    return (
      <div>
        <h3>Users added to archive:</h3>
        <ol>
          { this.renderUserListItems() }
        </ol>
      </div>
    )
  }
}

export default UserList;
