import React from 'react';

import Orders from '../Orders/Orders';

import Inventory from '../Inventory/Inventory';

import NewOrder from '../NewOrder/NewOrder';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home d-flex">
        <Inventory />
        <NewOrder />
        <Orders />
      </div>
    );
  }
}
export default Home;
