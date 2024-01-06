import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/Header.module.css";
import Container from "./Container";
import Navber from "./Navber";


export default function Header() {

    return (
        <header className={styles.headerWrper}>
            <Container>
                <div className={styles.headerContainer}>
                    <div className={styles.logoWrper}>
                        <Image width={500} height={500} className={styles.logo} src={logo} alt="logo" />
                    </div>
                    <Navber />
                </div>
            </Container >
        </header >
    )
}
