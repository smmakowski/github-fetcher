import React from "react";
import App from '../client/src/components/App.jsx';
import RepoList from '../client/src/components/RepoList.jsx';
import UserList from '../client/src/components/UserList.jsx';
import Search from '../client/src/components/Search.jsx';


import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import { shallow, mount, render } from 'enzyme';


const expect = require('chai').expect;

test('<App/>', () => {
  const app = shallow(<App />);
  expect(app.find('h1').children().text()).to.equal('Github Fetcher');
  expect(app.find(RepoList)).to.have.length(1);
  expect(app.find(UserList)).to.have.length(1);
  expect(app.find(Search)).to.have.length(1);
});
