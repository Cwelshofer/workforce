import { getEmployees, useEmployees } from "./employeeDataProvider.js"
import { getComputers, useComputers } from "../computers/computerDataProvider.js"
import { Employee } from "./employee.js"
import { getDepartments, useDepartments } from "../departments/departmentDataProvider.js"
import { getLocations, useLocations } from "../locations/locationDataProvider.js"

const contentTarget = document.querySelector(".employee")

/*
    Component state variables with initial values
*/
let employee = []
let computers = []
let departments = []
let locations = []


/*
    Main component logic function
*/
export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(() => {
            /*
                Update component state, which comes from application
                state, which came from API state.

                API -> Application -> Component
            */
            employee = useEmployees()
            computers = useComputers()
            departments = useDepartments()
            locations = useLocations()

            render()
        })
}

/*
    Component render function
*/
const render = () => {
    contentTarget.innerHTML = employee.map(employee => {
        const departmentObject = getEmployeeDepartment(employee)
        const computerObject = getEmployeeComputer(employee)
        const locationOject = getEmployeeLocation(employee)
        /*
            End result for family member 1...

            [
                { "id": 1, "familyMemberId": 1, "choreId": 4 },
                { "id": 2, "familyMemberId": 1, "choreId": 5 }
            ]
        */

        // const computerObjects = convertComputerIdsToComputers(relationshipObjects)
        /*
            End result for family member 1...

            [
                { "id": 4, "task": "Clean the bedrooms" },
                { "id": 5, "task": "Family game night" }
            ]
        */

        // Get HTML representation of product
        const html = Employee(employee, computerObject, departmentObject, locationOject)
        return html
    }).join("")
}



// Get corresponding relationship objects for a person
const getEmployeeDepartment = (employee) => {
   
    const relatedDepartment = departments.find(depart => depart.id === employee.departmentId)
    
    return relatedDepartment
    
}

// Convert array of foreign keys to array of objects
const getEmployeeComputer = (employee) => {
    const relatedComputer = computers.find(pc => pc.id === employee.computerId)
    
    return relatedComputer
}

const getEmployeeLocation = (employee) => {
    const relatedLocation = locations.find(loc => loc.id === employee.locationId)
    
    return relatedLocation
}



