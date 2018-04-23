import React , {Component} from 'react';
import BurgerBuilder from '../components/Burger/BurgerBuilder/burgerBuilder';
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls';


class BurgerBackend extends Component{
	state = {
		ingredients: {
			bacon: 1,
			cheese: 1,
			meat: 1,
			salad: 1
		}
	}

	addIngredientHandler = (ing) => {
		const newIng = {...this.state.ingredients}
		newIng[ing] = this.state.ingredients[ing] + 1;
		this.setState({...this.state, ingredients: newIng});
	}	
	subIngredientHandler = (ing) => {
		const newIng = {...this.state.ingredients}
		if (this.state.ingredients[ing] > 0){
			newIng[ing] = this.state.ingredients[ing] - 1;
			this.setState({...this.state, ingredients: newIng});
		}
	}

	render(){
		return(
			<div>
				<BurgerBuilder ingredients={this.state.ingredients} />
				<BurgerControls addIng={this.addIngredientHandler} subIng={this.subIngredientHandler} />
			</div>
		);
	}
}

export default BurgerBackend;