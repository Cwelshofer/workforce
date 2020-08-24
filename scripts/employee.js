export const Employee = (employee, computerObject, departmentObject, locationObject) => {
    console.log(employee)
    return `
        <section class="Employees">
            <header>
                <h2> ${employee.firstName} ${employee.lastName}, ${employee.age} </h2>
            </header>
            <div>
                <div>Currently Using a ${computerObject.model} ${computerObject.year}</div>
                <div>Works in the ${departmentObject.name} </div>
                <div>Works at the ${locationObject.name} </div>
            </div>
                
        
        </section>
    `
}