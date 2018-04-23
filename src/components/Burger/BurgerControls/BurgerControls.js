import React from 'react';
import classes from './BurgerControls.css';
import BurgerControlButton from './BurgerControlButton/BurgerControlButton';
import RaisedButton from 'material-ui/RaisedButton';

const buttonName = ['bacon', 'cheese', 'meat', 'salad'];

const burgerControls = (props) => {

	const buttons = buttonName.map(elem => <BurgerControlButton 
												type={elem} 
												increase={()=> props.addIng(elem)} 
												decrease={() => props.subIng(elem)}
												key={elem} />)

	return (
		<div className={classes.BurgerControls}>
			{buttons}
			<center>
			<RaisedButton fullWidth={true} backgroundColor='rgb(139,69,19)' labelColor='white' label="Order" className={classes.buttonStyle} />
			</center>
		</div>
	);
}

export default burgerControls;