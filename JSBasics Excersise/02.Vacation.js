function totalPriceForVacation(input)
{
    let numberOfPeople = parseInt(input[0]);
    let typeOfGroup = input[1];
    let dayOfWeek = input[2];
    let singlePersonPrice = 0;

    if (typeOfGroup === 'Students')
    {
        singlePersonPrice = (dayOfWeek === 'Friday') ? 8.45 : 
        (dayOfWeek === 'Saturday') ? 9.80 : 
        (dayOfWeek === 'Sunday') ? 10.46 : 0;
    }
    else if (typeOfGroup === 'Business')
    {
        singlePersonPrice = (dayOfWeek === 'Friday') ? 10.90 :
        (dayOfWeek === 'Saturday') ?  15.60 :
        (dayOfWeek === 'Sunday') ? 16 : 0;
    }
    else if (typeOfGroup === 'Regular')
    {
        singlePersonPrice = (dayOfWeek === 'Friday') ? 15 :
        (dayOfWeek === 'Saturday') ? 20 :
        (dayOfWeek === 'Sunday') ? 22.50 : 0;
    }

    totalPrice = numberOfPeople * singlePersonPrice;

    if (typeOfGroup === 'Students' && numberOfPeople >= 30)
    {
        totalPrice = totalPrice * 0.85;
    }
    else if (typeOfGroup === 'Business' && numberOfPeople >= 100)
    {
        totalPrice = (numberOfPeople - 10) * singlePersonPrice;
    }
    else if (typeOfGroup === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20)
    {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

totalPriceForVacation([40, "Regular", "Saturday"])