const ol = document.querySelector("ol");

const movies = [
    {
        name: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        directors: ['Peter Ramsey', 'Bob Persichetti', 'Rodney Rothman'],
        poster: '<img src = https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLd8Gx_3F1Ff-iUrKhCfDquQVkctpEn_eio0PPhsBcSa5G3p8 height = 400px>',
    },
    {
        name: "The Mitchells vs. The Machines",
        year: 2021,
        directors: 'Mike Rianda',
        poster: '<img src = https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTq_tTE6Ns6pmBg3JL2aAxERzJKjXQ1HsVLOT4lIA7Nbow-r8b7 height = 400px>',
    },
    {
        name: "Ron's Gone Wrong",
        year: 2021,
        directors: ['Sarah Smith', 'Jean-Philippe Vine'],
        poster: '<img src = https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiPTRoQQ5shSHUdvxJaYjvcOYlxvIpxHdfaJKvSRBCj1zqG_1g height = 400px>',
    }
];

const template = movies.map(movie => `
<li>
    <p>name: ${movie.name}</p>
    <p>year: ${movie.year}</p>
    <p>directors: ${movie.directors}</p>
    <p>poster: ${movie.poster}</p>
</li>
`) 

console.log(template);
ol.innerHTML = template;