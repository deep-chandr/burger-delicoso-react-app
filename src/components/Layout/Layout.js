import React , {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Drawer, MenuItem, FlatButton} from 'material-ui';

import classes from './Layout.css';


const styles = {
  AppBar:{
    backgroundColor: "rgb(139,69,19)"
  },

};

class Layout extends Component{
	state = {
		isDrawerOpen: false
	}

	handleToggle = () => this.setState({isDrawerOpen: !this.state.isDrawerOpen});
	closeDrawer = () => this.setState({ isDrawerOpen: false }) ;
	
	render(){
		return (

			<MuiThemeProvider>
				<div className={classes.Layout}>
					<AppBar style={styles.AppBar}
						title={<span className={classes.title}>Delicioso Hamburguesa</span>}
						onTitleClick={this.handleToggle}

						onLeftIconButtonClick={this.handleToggle}

						iconElementRight={<FlatButton label="Save" />}
						/>
					<Drawer open={this.state.isDrawerOpen} 
							docked={false}
							onRequestChange={this.closeDrawer}>

			          <MenuItem>Menu Item 1</MenuItem>
			          <MenuItem>Menu Item 2</MenuItem>
			        </Drawer>
		        	{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
}

export default Layout;