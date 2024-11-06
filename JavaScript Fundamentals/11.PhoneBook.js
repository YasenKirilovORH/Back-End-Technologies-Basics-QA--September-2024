function phoneBook(arr)
{
    let contacts = {};

    for(let entry of arr)
    {
        let [name, phoneNumber] = entry.split(" ");

        contacts[name] = phoneNumber;
    }

    for(let value in contacts)
    {
        console.log(`${value} -> ${contacts[value]}`)
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )