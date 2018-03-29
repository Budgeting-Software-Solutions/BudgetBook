import ACTION_TYPE from './actionTypes.js';

// let initialState = {
//     companyName: "",
//     budget: 0,
//     department: []
// };
let initialState = {
    
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
            let obj = Object.assign({}, state); 
            // console.log("EXPECTING OBJ WITH 3 KEYS", obj);
            console.log("Inside reducer/addtransaction!!!!!",action.transaction); 
            // console.log("EXPECTING ARRAY",obj[action.deptName].push(action.transaction));
            obj[action.deptName] = obj[action.deptName].concat([action.transaction]);
            console.log("Inside reducer/addtransaction/OBJ!!!!!",obj);
            return obj;
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
