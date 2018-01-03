import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // implement necessary state
      searchTerm: ''
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit">Get Repos</button>
        </form>
      </div>

    )
  }
}

export default Search;
