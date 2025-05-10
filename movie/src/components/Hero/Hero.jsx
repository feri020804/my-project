import styles from "./Hero.module.css"

function Hero() {

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Genre: Thriller, Drama, Romance</h3>
                    <p className={styles.hero__description}>Spiderman adalah film avenger terbaik saat ini yang telah dikembangan secara ambis, dengan alur cerita nya yang agresif dan semangat perjuangan menolong dan memberian edukasi</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img 
                    className={styles.hero__image}
                        src="https://picsum.photos/600/400" 
                    alt="placeholder" 
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;