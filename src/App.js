import React, { Component } from 'react';
import BurgerBackend from './containers/BurgerBackend';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {

    return (
		<Layout>
        	<BurgerBackend />
        </Layout>
    );
  }
}

export default App;
