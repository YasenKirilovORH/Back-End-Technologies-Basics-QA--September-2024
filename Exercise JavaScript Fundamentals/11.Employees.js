function employeesList(array)
{
    let employeesData = {};

    array.forEach(employee =>  {
        let personalNumber = employee.length;

        employeesData[employee] = personalNumber;
    });

    for (let employee in employeesData)
    {
        console.log(`Name: ${employee} -- Personal Number: ${employeesData[employee]}`)
    }
}

employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )