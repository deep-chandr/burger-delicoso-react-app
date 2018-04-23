import React from 'react';
import classes from './burgerBuilder.css';
import Ingredients from './Ingredients/Ingredients';

const burgerBuilder = (props) => {

	var ingredients = Object.keys(props.ingredients).map(elem => {
		return <Ingredients type={elem} quantity={props.ingredients[elem]} key={elem} />
	})

	return(
		<div className={classes.burgerBuilder}>
		<center>
			<div className="classes.burger">
			  <div className={classes.breadTop}>
			    <div className={classes.sesame}></div>
			    <div className={classes.sesame}></div>
			    <div className={classes.sesame}></div>
			    <div className={classes.sesame}></div>
			    <div className={classes.sesame}></div>
			    <div className={classes.sesame}></div>
			    <div className={classes.sesame}></div>
			    <div className={classes.sesame}></div>
			  </div>
			  {ingredients}
			  <div className={classes.breadBottom}></div>
			</div>
			
		</center>
		</div>
	);
}

export default burgerBuilder;

