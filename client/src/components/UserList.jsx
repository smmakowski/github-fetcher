import React from 'react';
import ReactDOM from 'react-dom';
import UserListItem from './UserListItem.jsx';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: ['I', 'am', 'a', 'list', 'item'],
    }
  }

  render() {
    return (
      <div>
        <h3>Users That have been Searched For</h3>
        <ol>
        </ol>
      </div>
    )
  }
}

export default UserList;
