function movies(commands)
{
    let movies = {};

    commands.forEach(command => {
        if (command.startsWith('addMovie'))
        {
            let movieTitle = command.substring(9);
            movies[movieTitle] = {name: movieTitle}
        }
        else if (command.includes('directedBy'))
        {
            let [movieTitle, director] = command.split(' directedBy ');
            
            if (movies[movieTitle])
            {
                movies[movieTitle].director = director;
            }
        }
        else if (command.includes('onDate'))
        {
            let [movieTitle, date] = command.split(' onDate ');

            if (movies[movieTitle])
            {
                movies[movieTitle].date = date;
            }
        }
    });

    for (let movieName in movies)
    {
        let movie = movies[movieName];

        if (movie.name && movie.director && movie.date) 
        {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )