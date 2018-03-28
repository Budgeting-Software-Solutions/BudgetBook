import ACTION_TYPES from "./actionTypes"; 

function addCompany(companyName, companyBudget){
    return {type: ACTION_TYPES.ADD_COMPANY, companyName: companyName, companyBudget: companyBudget};
}

function addDepartment(departmentName, departmentBudget){
    return {type: ACTION_TYPES.ADD_DEPARTMENT, departmentName: departmentName, departmentBudget: departmentBudget};
}

export default {
    addCompany, 
    addDepartment
}