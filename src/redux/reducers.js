import ACTION_TYPE from './actionTypes.js';

let initialState = {
    companyName: "",
    budget: 0,
    department: []
};


const Reducer = (state = initialState, action) => {
    console.log("-----reducers.js");
    switch(action.type){
        
        case ACTION_TYPE.ADD_COMPANY: {
            return Object.assign({}, state, {
                companyName: action.companyName,
                budget: action.companyBudget
            });
        }
            break;
        //case ACTION_TYPE.ADD_DEPARTMENT: 
        default: return state;
    }
}

export default Reducer; 
