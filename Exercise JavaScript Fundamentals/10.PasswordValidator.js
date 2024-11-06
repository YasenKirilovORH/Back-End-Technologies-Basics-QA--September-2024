function passwrodValidator(password)
{
    let isValidPassword = true;

    if (password.length < 6 || password.length > 10)
    {
        isValidPassword = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!/^[A-Za-z0-9]+$/.test(password))
    {
        isValidPassword = false;
        console.log('Password must consist only of letters and digits');
    }
    if (!/^(?=.*\d.*\d)[^\s]{6,10}$/.test(password))
    {
        isValidPassword = false;
        console.log('Password must have at least 2 digits');
    }
    if (isValidPassword)
    {
        console.log('Password is valid')
    }
}
passwrodValidator('Pa$s$s')

/*function passwrodValidator(password)
{
    let isValidPassword = true;

    if (password.length < 6 || password.length > 10)
    {
        isValidPassword = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!/^[A-Za-z0-9]+$/.test(password))
    {
        isValidPassword = false;
        console.log('Password must consist only of letters and digits');
    }

    let digitsCount = 0;
    for (let char of password)
    {
        if (char >= '0' && char <= '9')
        {
            digitsCount++;
        }
    }
    if (digitsCount < 2)
    {
        isValidPassword= false;
        console.log('Password must have at least 2 digits');
    }

    if (isValidPassword)
    {
        console.log('Password is valid')
    }
}*/