export const Employee = (employee, computers) => {
    return `
        <section class="Employees">
            <header>
                <h2>${employee.firstName} ${employee.lastName} </h2>
            </header>
            <div>
                <ol>
                    ${
                        computers.map(computer => `<li>${computer.model} ${computer.model} </li>`)
                    }
                </ol>
            </div>
        </section>
    `
}