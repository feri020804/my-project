import { useState } from "react";
import Navbar from "../components/Navbar/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import data from "../components/utils/constans/data";

function Home() {
    const [movies, setMovies] = useState(data);

    return (
        <div>
            <Navbar />
            <main>
                <Hero/>
                <Movies movies={movies} setMovies={setMovies} />
                <Form movies={movies} setMovies={setMovies} />
            </main>
            <Footer />
        </div>
        // <>
        // <h1>Halaman Home</h1>
        // </>
    );
}

export default Home;