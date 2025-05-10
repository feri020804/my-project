import { useState } from "react";

function Counter() {

    // membuat variable state
    // membalikkan 2 data
    // nilai saat ini = 0
    // funsi untuk saat ini
    const [hasil, setHasil] = useState(0);
    function tambah() {
        // jalankan fungsi set hasil
        // untuk mengubah state
        setHasil(hasil + 1)
    }
    return(
        <div>
            <p>Hasil: {hasil}</p>
            <button onClick={tambah}>Add</button>
        </div>
    )
}

export default Counter;