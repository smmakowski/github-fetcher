import React from "react";
import App from '../client/src/components/App.jsx';
import renderer from 'react-test-renderer';
const expect = require('chai').expect;

test('<App/>', () => {
  const app = renderer.create(<App />);
  let tree = app.toJSON();

  console.log(tree);
  expect(1).to.equal(1);
});
