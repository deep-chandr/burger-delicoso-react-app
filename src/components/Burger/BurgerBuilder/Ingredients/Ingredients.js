import React from 'react';
import classes from './Ingredients.css';

const ingredients = (props) => {
	let ingredient;

	switch(props.type){
		case 'bacon': {
			ingredient = <div className={classes.bacon} key={props.type}></div>;
			break;
		}
		case 'cheese': {
			ingredient = <div className={classes.cheese}key={props.type}></div>;
			break;
		}
		case 'meat': {
			ingredient = <div className={classes.meat}key={props.type}></div>;
			break;
		}
		case 'salad': {
			ingredient = <div className={classes.salad}key={props.type}></div>;
			break;
		}
		default: {}
	}
	let ingredients;

	for (var i=0; i< props.quantity; i++){
		ingredients = [ingredient, ingredients]
	}
	return (
		<div>
			{ingredients}
		</div>
	)
}

export default ingredients;