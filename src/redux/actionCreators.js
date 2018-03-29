import ACTION_TYPES from "./actionTypes"; 

// function addCompany(companyName, companyBudget){
//     return {type: ACTION_TYPES.ADD_COMPANY, companyName: companyName, companyBudget: companyBudget};
// }

function addDepartment(departmentName){
    return {type: ACTION_TYPES.ADD_DEPARTMENT, departmentName: departmentName};
}
function addTransaction(deptName, transaction){
    return {type: ACTION_TYPES.ADD_TRANSACTION, deptName: deptName, transaction: transaction}
}
export default {
    // addCompany, 
    addDepartment, 
    addTransaction
}