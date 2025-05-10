import styles from "./Movies.module.css";
import Movie from "../Movie/Movie"
//import data movies
// import data from "../utils/constans/data";
import { nanoid } from "nanoid";

function Movies(props) {
    // membuat variable movies
    // membuat variable state: movie
    // const [movies, setMovies] = useState(data);
    // distracting
    const { movies, setMovies } = props;

    // buat fungsi tambah film
    // dijalankan ketika tombol di clik
    function tambahFilm() {
        const movie = {
            id: nanoid(),
            title: "Spiral Jigsaw",
            year: "2021",
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };
        // menambahkan movie ke state movies
        // spread operator: copy marge array
        setMovies([...movies, movie])


    }
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movie</h2>
                <div className={styles.movie__container}>
                    {/* 
                    * looping movie:map
                    *Render component movie
                    *Kirim props movie
                     */}
                    {movies.map(function (movie) {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </div>
                {/* menajmbahkan event on click */}
                <button onClick={tambahFilm}>Add Movie</button>
            </section>
        </div>
    )
}


export default Movies;