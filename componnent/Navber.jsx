import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import styles from "../styles/Header.module.css";

export default function Navber() {
    const [isoepn, setisopen] = useState(false);

    return (
        <div className={styles.mobonav}>
            <nav className={isoepn ? styles.navActive : styles.nav}>
                <div className={styles.navUl}>
                    <div className={styles.navberIconsCeossWrp}>
                        <RxCross2 onClick={() => setisopen(!isoepn)} className={styles.navberIconsCeoss} />
                    </div>
                    <div className={styles.linkWrp}>
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="/">Home</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="/about">About</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="/catering">Catering Job</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="/housekeeping">Housekeeping Job</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="/contact">Contact Us</Link >
                        <Link onClick={() => setisopen(!isoepn)} className={styles.link} href="/register">Register</Link >
                    </div>
                </div>
                <div className={styles.transparantDiv} />
            </nav >
            <CgMenuRight onClick={() => setisopen(!isoepn)} className={styles.navberIcons} />
        </div >
    )
}
