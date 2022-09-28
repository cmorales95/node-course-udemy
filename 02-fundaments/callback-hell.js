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

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id)?.name;
    if (employee) {
        callback(null, employee);
    } else {
        callback(`Employee with ID ${id} does not exists!`);
    }
}

const getSalary = (id, callback) => {
    const salary = salaries.find(s => s.id === id)?.salary;
    if (salary) {
        callback(null, salary);
    } else {
        callback(`Salary with ID ${id} does not exist`);
    }
}

const id = 3;

getEmployee(id, (err, employee) => {
    if (err) {
        console.log('Error!');
        return console.log(err);
    }

    getSalary(id, (err, salary) => {
        if (err) {
            return console.log('Error')
        }

        console.log(`employee ${employee} has a salary of: ${salary}$`);
    });
});

