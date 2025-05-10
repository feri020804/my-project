import styles from "./Movie.module.css"
function Movie(props) {
    console.log(props.movie)
    // Distracting Object props
    const {movie} = props;

    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src={movie.poster}
                alt=""
            />
            <h3 className={styles.movies__title}>{movie.title}</h3>
            <p className={styles.movies__date}>{movie.year}</p>
        </div>
    )
}

export default Movie