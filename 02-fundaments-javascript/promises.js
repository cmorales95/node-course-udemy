const employees = [
    {
        id: 1,
        name: 'Fernando',
    },
    {
        id: 2,
        name: 'Linda',
    },
    {
        id: 3,
        name: 'Karen',
    } 
]

const salaries = [
    {
        id: 1,
        salary: 1000,
    },
    {
        id: 2,
        salary: 1500,
    },
]

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find( e => e.id == id)?.name;

        (employee)
            ? resolve(employee)
            : reject(`employee ${id} does not exist`);
    });
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(s => s.id === id)?.salary;

        (salary)
            ? resolve(salary)
            : reject(`salary with ID ${id} does not exist`);
    })
}

const id = 4;

// getEmployee(id)
//     .then(employee => console.log(employee))
//     .catch(err => console.log(err));

// getSalary(id)
//     .then(salary => console.log(salary))
//     .catch(err => console.log(err));
let name;
getEmployee(id)
    .then(employee => {
        name = employee
        return getSalary(id);
    })
    .then(salary => console.log(`the employee ${name} has a salary of: ${salary}`))
    .catch(err => console.log(err));