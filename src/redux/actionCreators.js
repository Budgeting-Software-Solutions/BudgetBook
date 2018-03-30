import ACTION_TYPES from "./actionTypes"; 

// function addCompany(companyName, companyBudget){
//     return {type: ACTION_TYPES.ADD_COMPANY, companyName: companyName, companyBudget: companyBudget};
// }

function addDepartment(departmentName, spendingLimit){
    //console.log("SPENDING LIMIT INSIDE ADD DEPARMENT INSIDE ACTION CREATOR",spendingLimit);
    return {type: ACTION_TYPES.ADD_DEPARTMENT, departmentName: departmentName, spendingLimit: spendingLimit};
}

function addTransaction(deptName, transaction){
    return {type: ACTION_TYPES.ADD_TRANSACTION, deptName: deptName, transactions: transaction}
}

export default {
    // addCompany, 
    addDepartment, 
    addTransaction
}