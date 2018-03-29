import ACTION_TYPE from './actionTypes.js';

// let initialState = {
//     companyName: "",
//     budget: 0,
//     department: []
// };
let initialState = {
    category:{

    }
}

const Reducer = (state = initialState, action) => {
    // console.log("-----reducers.js");
    switch(action.type){
        
        // case ACTION_TYPE.ADD_COMPANY: {
        //     return Object.assign({}, state, {
        //         companyName: action.companyName,
        //         companyBudget: action.companyBudget
        //     });
        // }
        case ACTION_TYPE.ADD_TRANSACTION: {
            // console.log('state.....', state);
            // console.log("inside reducer1",action.departmentName); 
            // console.log("inside reducer2",action);
            return Object.assign({}, state, {
                department: state.department.concat({departmentName: action.departmentName, departmentBudget: action.departmentBudget})
            })
           
        }
        break;
        case ACTION_TYPE.ADD_DEPARTMENT: {
            // console.log('state.....', state);
            // console.log("inside reducer1",action.departmentName); 
            // console.log("inside reducer2",action);
            let obj = Object.assign({}, state);
            obj[action.departmentName] = []; 
            return obj;
        }
        break; 
        default: return Object.assign({}, state);
    }
}

export default Reducer; 
