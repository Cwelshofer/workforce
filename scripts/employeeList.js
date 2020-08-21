import { getEmployees, useEmployees } from "./employeeDataProvider.js"
import { getComputers, useComputers } from "../computers/computerDataProvider.js"
import { Employee } from "./employee.js"

const contentTarget = document.querySelector(".employee")

/*
    Component state variables with initial values
*/
let employee = []
let computers = []


/*
    Main component logic function
*/
export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(() => {
            /*
                Update component state, which comes from application
                state, which came from API state.

                API -> Application -> Component
            */
            employee = useEmployees()
            computers = useComputers()

            render()
        })
}

/*
    Component render function
*/
const render = () => {
    contentTarget.innerHTML = employee.map(employee => {
        const html = Employee(employee, computers)

        return html
    }).join("")
}