import { useState } from "react";
import styles from "./Form.module.css"
import { nanoid } from "nanoid";
function Form(props) {

    // membuat state title
    const [title, setTitle] = useState("");
    // membuat state date 
    const [date, setDate] = useState("");

    // Membuat state title dan date errors
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);

    const { movies, setMovies } = props;

    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (title === "") {
            setIsDateError(false);
            setIsTitleError(true);
        }
        else if ( date === "") {
            setIsTitleError(false);
            setIsDateError(true);
        }
        else {
            const movie = {
                id: nanoid(), title: title,
                year: date, type: 'Movie',
                poster: "https://picsum.photos/300/400",
            };

            setMovies([...movies, movie])
            setIsTitleError(false);
            setIsDateError(false);
        }



    }


    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src="https://picsum.photos/300/300"
                        alt="placeholder"
                    />
                </div>
                <div className={styles.form__right}>
                    <div className={styles.form__inputdata}>
                        <h2 className={styles.form__title}>Add Movie</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title" className={styles.form__label}>Title</label>
                                <input id="title" type="text" value={title} onChange={handleTitle} className={styles.form__input} />
                                {/* 
                                jika error title true: muncul error
                                jiko tidak munculkan string kosong
                                */}
                                {isTitleError && <p className={styles.form__p}>Title Wajib di isi</p>}
                            </div>
                            <div>
                                <label htmlFor="title" className={styles.form__label}>Year</label>
                                <input id="date" type="text" value={date} onChange={handleDate} className={styles.form__input} />
                                {/* 
                                jika error date true: muncul error
                                jika tidak maka muncul string kosong
                                */}
                                {isDateError && <p className={styles.form__p}>Year Wajib di isi</p>}
                            </div>
                            <div>
                                <button className={styles.form__button}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Form;