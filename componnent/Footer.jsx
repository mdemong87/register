import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import Container from "../componnent/Container";
import bg_footer from "../public/bg_footer.webp";
import footer_man from "../public/footer-man.webp";
import logo from '../public/logo.png';
import styles from "../styles/Footer.module.css";
import Button from "./Button";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={`shadow-xl hidden lg:flex ${styles.footerModelWrper} relative`}>
                    <Image className="absolute -z-10 w-full rounded-2xl" src={bg_footer} alt="bg_footer" layout="fill" objectFit="cover" />
                    <div className={`absolute w-full h-full ${styles.footer_gredent}`} />

                    <div className="z-10">
                        <h1 className="text-3xl font-semibold text-gray-700 z-10">Looking for a
                            career change? Browse our job listings now!</h1>
                        <p className="text-xl text-gray-400 py-5">Sociosqu eros cras magna phasellus conubia semper netus lectus lacinia mattis sed.</p>
                        <Button link='/apply' text="Apply Now" />
                    </div>
                    <div className="flex justify-end">
                        <Image className={styles.footerManimage} src={footer_man} alt="footer-man" width={600} height={600} />
                    </div>
                </div>
                <div className={`pt-8 lg:pt-0 ${styles.footerWrp}`}>
                    <div className={styles.singleWrp}>
                        <Image className={styles.foooterLogo} src={logo} width={300} height={300} alt="footer-logo" />
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Get in Touch</h4>
                        <ul className={styles.ul}>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Useful Links</h4>
                        <ul className={styles.ul}>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                            <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Connect With Us</h4>
                        <div className={styles.addressphoneminaWrp}>
                            <Link href={"tel:+880 1713 738679"}>
                                <AiOutlinePhone className={styles.addressOcons} />
                                <span>+880 1713 738679</span>
                            </Link>
                            <Link href={"mailto:chandashmshighschool@gmail.com"}>
                                <AiOutlineMail className={styles.addressOcons} />
                                <span>chandashmshighschool@gmail.com</span>
                            </Link>
                            <Link href={"https://maps.app.goo.gl/2aeDenkhraQnqois6"}>
                                <CiLocationOn className={styles.addressOcons} />
                                <span>Chandash, Mohadevpur, Naogoan</span>
                            </Link>
                        </div>
                        <div className={styles.Connect}>
                            <Link href="https://web.facebook.com/groups/1606975172665084/?_rdc=1&_rdr" className={styles.IWrp}>
                                <FaFacebookF className={styles.contaceIcons} />
                            </Link>
                            <div className={styles.IWrp}>
                                <AiOutlineTwitter className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <AiFillInstagram className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <AiFillLinkedin className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <IoLogoWhatsapp className={styles.contaceIcons} />
                            </div>
                            <div className={styles.IWrp}>
                                <GrMail className={styles.contaceIcons} />
                            </div>
                        </div>
                    </div>





                    <div className={styles.copyRight}>Copyright © 2023
                        www.example.com. All Rights Reserved || <Link style={{ color: "#72b261" }} href="https://emonhossen.xyz">Developed By Md Emon Hossen</Link></div>
                </div>
            </Container>
        </footer>
    )
}