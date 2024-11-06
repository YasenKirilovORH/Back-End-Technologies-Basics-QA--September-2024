function piccolo(commandsAndCarNum)
{
    let parkingLot = [];

    commandsAndCarNum.forEach(command => {
        let [direction, carNumber] = command.split(', ');

        if (direction === 'IN') 
        {
            if (!parkingLot.includes(carNumber))
            {
                parkingLot.push(carNumber);
            }
        }
        else if (direction === 'OUT')
        {
            if (parkingLot.includes(carNumber))
            {
               parkingLot = parkingLot.filter(car => car !== carNumber);
            }
        }
    });

    let sortedCars = parkingLot.sort();

    if (sortedCars.length > 0)
    {
        sortedCars.forEach(car => console.log(car));
    }
    else
    {
        console.log('Parking Lot is Empty');
    }
}


    piccolo(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA']        
        )