function roadRadar(input)
{
    const[speed, area] = input;
    let speedLimit = 0;

    switch(area)
    {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            return;
    }

    if (speed <= speedLimit)
        {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
        else
        {
            let speedExceedingTheLimit = speed - speedLimit;
            let exceedingStatus = '';

            if (speedExceedingTheLimit <= 20)
            {
                exceedingStatus = 'speeding';
            }
            else if (speedExceedingTheLimit > 20 && speedExceedingTheLimit <= 40)
            {
                exceedingStatus = 'excessive speeding'
            }
            else
            {
                exceedingStatus = 'reckless driving';
            }

            console.log(`The speed is ${speedExceedingTheLimit} km/h faster than the allowed speed of ${speedLimit} - ${exceedingStatus}`);
        }    
}

roadRadar([21, 'residential'])