import ACTION_TYPES from "./actionTypes"; 

function addDepartment(departmentName, spendingLimit){
    return {type: ACTION_TYPES.ADD_DEPARTMENT, departmentName: departmentName, spendingLimit: spendingLimit};
}

function addTransaction(deptName, transaction){
    return {type: ACTION_TYPES.ADD_TRANSACTION, deptName: deptName, transactions: transaction}
}

export default { 
    addDepartment, 
    addTransaction
}
