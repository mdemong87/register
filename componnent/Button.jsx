import Link from "next/link";
import styles from "../styles/Button.module.css";


export default function Button({ text, link }) {
    return (
        <Link className={styles.btn} href={link}>{text}</Link>
    )
}