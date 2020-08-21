let employees = []

export const useEmployees = () => employees.slice()

export const getEmployees = () => fetch("http://localhost:8088/employees")
    .then(res => res.json())
    .then(data => employees = data)