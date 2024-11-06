function towns(array)
{
    array.forEach(townInformation => {
        let [town, latitude, longitude] = townInformation.split(' | ');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObject = {
            town: town,
            latitude: latitude,
            longitude: longitude 
        }

        console.log(townObject);
    });
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )