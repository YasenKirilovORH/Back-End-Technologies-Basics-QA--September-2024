function inventory(array)
{
    let heroes = [];

    array.forEach(heroData =>{
        let [heroName, heroLevel, heroItems] = heroData.split(' / ');

        heroLevel = Number(heroLevel);
        let items = heroItems ? heroItems.split(', ') : [];
        heroes.push({name: heroName, level: heroLevel, items: items});
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 '
    ]
    )