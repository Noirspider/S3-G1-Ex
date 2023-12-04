/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const Stringa1= "Hello";
const Stringa2= "World";
function Pippo (a,b){
  return a+b;
}
NewWord=(Pippo(Stringa1.slice(0,2), Stringa2.slice(-3))).toUpperCase();
console.log(NewWord);



/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
var Number = [];
for (let index = 0; index < 10; index++) {
  Number[index] = Math.round(Math.random() * 100);
}
console.log(Number);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function Pari (a) {
  var pari=[];
  for (let index = 0; index < a.length; index++) {
    if (a[index] % 2 === 0) {
      pari.push(a[index]);
    }
  }
  return pari; 
}
NumPari = Pari(Number);
console.log(NumPari);


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function Somma(array) {
  let totale = 0;

  array.forEach(function(numero) {
    totale += numero;
  });

  return totale;
}

const Result = Somma(Number);
console.log(Result);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const somma = numeri => Number.reduce((x, y) => x + y, 0);

const risultato = somma(Number);
console.log(risultato);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const increm = (array, n) => array.map(x => x + n);

const n = 100
console.log(increm(Number, n))

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const lunghezzeStringhe = array => array.map(stringa => stringa.length);

const arrayDiStringhe = ["EPICODE", "is", "great"];
const lunghezze = lunghezzeStringhe(arrayDiStringhe);
console.log(lunghezze);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function valoriDispari() {
  const arrayDispari = [];

  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      arrayDispari.push(i);
    }
  }

  return arrayDispari;
}

const numeriDispari = valoriDispari();
console.log(numeriDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [{
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function filmPiuVecchio(movies) {
  let filmPiuVecchio = movies[0];

  movies.forEach(film => {
    const annoFilmPiuVecchio = parseInt(filmPiuVecchio.Year);
    const annoFilmCorrente = parseInt(film.Year);

    if (annoFilmCorrente < annoFilmPiuVecchio) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}

const filmVecchio = filmPiuVecchio(movies);
console.log(filmVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroDiFilm(movies) {
  return movies.length;
}

const numeroFilm = numeroDiFilm(movies);
console.log(numeroFilm); 


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function titoliDeiFilm(movies) {
  return movies.map(film => film.Title);
}

const titoli = titoliDeiFilm(movies);
console.log(titoli);


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmMillennioCorrente(movies) {
  const annoCorrente = new Date().getFullYear();
  return movies.filter(film => parseInt(film.Year) >= 2000 && parseInt(film.Year) <= annoCorrente);
}

const filmMillennio = filmMillennioCorrente(movies);
console.log(filmMillennio);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnniProduzione(movies) {
  return movies.reduce((somma, film) => somma + parseInt(film.Year), 0);
}

const sommaAnni = sommaAnniProduzione(movies);
console.log(sommaAnni);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaFilmPerImdbID(movies, imdbID) {
  return movies.find(film => film.imdbID === imdbID);
}

const imdbIDDaCercare = 'tt0120737'; 
const filmTrovato = trovaFilmPerImdbID(movies, imdbIDDaCercare);

if (filmTrovato) {
  console.log(filmTrovato);
} else {
  console.log('Nessun film trovato con l\'IMDb ID specificato.');
}


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function indicePrimoFilmPerAnno(movies, annoCercato) {
  const indice = movies.findIndex(film => parseInt(film.Year) === annoCercato);
  return indice;
}

const annoDaCercare = 2001; 
const indicePrimoFilm = indicePrimoFilmPerAnno(movies, annoDaCercare);

if (indicePrimoFilm !== -1) {
  console.log(`Il primo film uscito nell'anno ${annoDaCercare} ha l'indice ${indicePrimoFilm}.`);
} else {
  console.log(`Nessun film trovato per l'anno ${annoDaCercare}.`);
}

