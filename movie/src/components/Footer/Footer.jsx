/**
 * Import css module
 * disimpan di objek style
 */

import styles from "./Footer.module.css";

function Footer() {
    /** 
     * menggunakan styles yang sudah di import
     * memanggilnya menggunakan expression
     */

    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Created By Feri Ardiansyah</p>
            </footer>
        </div>
    );
}

export default Footer;