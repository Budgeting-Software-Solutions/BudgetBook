import ACTION_TYPES from "./actionTypes"; 

function addCompany(companyName, companyBudget){
    return {type: ACTION_TYPES.ADD_COMPANY, companyName: companyName, companyBudget: companyBudget};
}

function addDepartment(departmentName, deptPercentage){
    return {type: ACTION_TYPES.ADD_DEPARTMENT, departmentName: departmentName, deptPercentage: deptPercentage};
}

export default {
    addCompany, 
    addDepartment
}