function solve(athletes) {
    function getAthletesBySport(sport) {
        let filteredAthletesBySport = athletes.filter(athlete => athlete.sport === sport);
        return filteredAthletesBySport;
    }
  
    function addAthlete(id, name, sport, medals, country) {
        let newAthlete = {id, name, sport, medals, country};
        athletes.push(newAthlete);
        return athletes;
    }
  
    function getAthleteById(id) {
        let filteredAthletById = athletes.find(athlete => athlete.id === id);
        if(filteredAthletById)
        {
            return filteredAthletById;
        }
        else
        {
            return `Athlete with ID ${id} not found`;
        }
    }
  
    function removeAthleteById(id) {
        const initialLength = athletes.length;
        athletes = athletes.filter(athlete => athlete.id !== id);

        if(initialLength == athletes.length)
        {
            return `Athlete with ID ${id} not found`;
        }
        else
        {
            return athletes;
        }
    }
  
    function updateAthleteMedals(id, newMedals) {
        const searchedAthlete = athletes.find(athlete => athlete.id === id);
        
        if(searchedAthlete)
            {
                searchedAthlete.medals = newMedals;
                return athletes;
            }
        else
            {
                return `Athlete with ID ${id} not found`;
            }
    }
  
    function updateAthleteCountry(id, newCountry) {
        const searchedAthlete = athletes.find(athlete => athlete.id === id);
        
        if(searchedAthlete)
        {
            searchedAthlete.country = newCountry;
            return athletes;
        }
        else
        {
            return `Athlete with ID ${id} not found`;
        }
    }
  
    return {
        getAthletesBySport,
        addAthlete,
        getAthleteById,
        removeAthleteById,
        updateAthleteMedals,
        updateAthleteCountry
    };
}

const athletes = [
    { id: 1, name: "Usain Bolt", sport: "Sprinting", medals: 8, country: "Jamaica" },
    { id: 2, name: "Michael Phelps", sport: "Swimming", medals: 23, country: "USA" },
    { id: 3, name: "Simone Biles", sport: "Gymnastics", medals: 7, country: "USA" }
  ];

  const olympics = solve(athletes);
  //console.log(JSON.stringify(olympics.getAthletesBySport("Swimming")));
  //console.log(JSON.stringify(olympics.addAthlete(4, "Katie Ledecky", "Swimming", 7, "USA")));
  //console.log(JSON.stringify(olympics.getAthleteById(1)));
  //console.log(JSON.stringify(olympics.removeAthleteById(2)));
  //console.log(JSON.stringify(olympics.updateAthleteMedals(3, 8)));
  //console.log(JSON.stringify(olympics.updateAthleteCountry(10, "Canada")));
  
  
  
  