import React from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
	cart: [],
	products: [{}, {}],
	user: null,
	number: 0,
};

function validateNumber(number) {
	if (Number.isNaN(number)) {
		return 0;
	}

	if(number === '') {
		return 0;
	}
	return number;	
}

function reducer(state, action) {
	switch (action.type) {
		case "number_add2": {
			return { ...state, number: state.number + 2 };
		}
		case "login": {
			return { ...state, user: { name: action.payload } };
		}
		case "multiply_by_7": {
			return { ...state, number: state.number * 7 };
		}
		case "divide_by_25": {
			return { ...state, number: state.number / 25 };
		}
		case "parse_to_int": {
			return { ...state, number: Number.parseInt(state.number) };
		}
		case "add": {
			console.log(action.payload);
			return { ...state, number: validateNumber(action.payload)};
		}
		default:
			return state;
	}
}

const UseReducer = (props) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes funcionais!"
			/>
			<div className="center">
				{state.user ? (
					<span className="text">{state.user.name}</span>
				) : (
					<span className="text">Sem Usuário</span>
				)}
				<span className="text">{state.number}</span>
				<div>
					<button
						type="button"
						className="btn"
						onClick={() => dispatch({ type: "login", payload: "Maria" })}
					>
						Login
					</button>

					<button
						type="button"
						className="btn"
						onClick={() => dispatch({ type: "number_add2" })}
					>
						+2
					</button>
					<button
						type="button"
						className="btn"
						onClick={() => dispatch({ type: "multiply_by_7" })}
					>
						x7
					</button>
					<button
						type="button"
						className="btn"
						onClick={() => dispatch({ type: "divide_by_25" })}
					>
						/25
					</button>
					<button
						type="button"
						className="btn"
						onClick={() => dispatch({ type: "parse_to_int" })}
					>
						parse
					</button>
					<input type="number" className="input" 
					onChange={e => dispatch({type: "add", payload: e.target.value})}/>
				</div>
			</div>
		</div>
	);
};

export default UseReducer;
