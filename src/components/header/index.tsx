import styles from "./header.module.css";
import Image from "next/image";
import Logo from "../../assets/whitelogo.png";
import Hamburger from "../../assets/hamburger.png";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src={Logo} alt='Logo da Empresa' width={60} height={60} />
                <div className={styles.button}>
                    <Image src={Hamburger} alt='Logo da Empresa' width={30} height={30} />
                </div>
            </div>
        </div>
    );    
};