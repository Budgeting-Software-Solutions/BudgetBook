import ACTION_TYPE from './actionTypes.js';

let initialState = {
    companyName: "",
    budget: 0,
    department: []
};


const Reducer = (state = initialState, action) => {
    // console.log("-----reducers.js");
    switch(action.type){
        
        case ACTION_TYPE.ADD_COMPANY: {
            return Object.assign({}, state, {
                companyName: action.companyName,
                companyBudget: action.companyBudget
            });
        }
        case ACTION_TYPE.ADD_DEPARTMENT: {
            // console.log('state.....', state);
            // console.log("inside reducer1",action.departmentName); 
            // console.log("inside reducer2",action);
            return Object.assign({}, state, {
                department: state.department.concat({departmentName: action.departmentName, departmentBudget: action.departmentBudget})
            })
           
        }
            break;
        default: return state;
    }
}

export default Reducer; 
