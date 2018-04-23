import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import classes from './BurgerControlButton.css';

const burgerControlButton = (props) => {
	return (
		<div className={classes.BurgerControlButton}>
			<RaisedButton label="-" onClick={props.decrease} primary={false} className={classes.buttonStyle} />
			<RaisedButton backgroundColor='rgb(139,69,19)' labelColor='white' label={props.type} className={classes.buttonStyle} />
			<RaisedButton label="+" onClick={props.increase} primary={false} className={classes.buttonStyle} />
		</div>
	);
}

export default burgerControlButton;