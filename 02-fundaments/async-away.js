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

// async becomes the function as a promise
const getUserInfo = async(id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);

        return `the salary of the employee ${employee} is ${salary}`;
    } catch(error) { // don't use return because it will run .then instead of .catch, to run .catch please use throw
        throw error;
    }
}

const id = 3;
getUserInfo(id)
    .then(msg => {
        console.log('Searching employee information...');
        console.log(msg);
    })
    .catch(err => {
        console.error('error searching information about the employee');
        console.log(err);
    });


