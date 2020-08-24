let departments = []

export const useDepartments = () => departments.slice()

export const getDepartments = () => fetch("http://localhost:8088/departments")
    .then(res => res.json())
    .then(data => departments = data)