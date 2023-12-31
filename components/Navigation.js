'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navigation.module.scss';
import { motion } from "framer-motion";

const topVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 10.5, backgroundColor: "#000000"},
}

const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
}

const bottomVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -10.5, backgroundColor: "#000000"},
}

const menuVariants = {
    open: { x: "20%" },
    closed: { x: "100%" },
};

const linkVariants = {
    open: { opacity: 1, transition: { delay: 0.2 }, pointerEvents: "auto" },
    closed: { opacity: 0, pointerEvents: "none" },
};

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navLeft}>
                <Link href="/">
                Smart Garden
                </Link>
            </div>
            <div className={styles.navRight}>
                <Link href="#home">
                    Accueil
                </Link>
                <Link href="#portfolio">
                    Découvrir
                </Link>
                <Link href="#about">
                    À propos
                </Link>
                <Link href="#contact">
                    Contact
                </Link>
                <Link href="/shop">
                    Boutique
                </Link>
                <Link href="/login">
                    Se connecter
                </Link>
            </div>
            <div className={styles.hamburgerMenu} onClick={() => setIsOpen(!isOpen)}>
                <motion.div
                    variants={topVariants}
                    animate={isOpen ? "open" : "closed"}
                />
                <motion.div
                    variants={middleVariants}
                    animate={isOpen ? "open" : "closed"}
                />
                <motion.div
                    variants={bottomVariants}
                    animate={isOpen ? "open" : "closed"}
                />
            </div>
            <motion.div
                className={styles.menuMobile}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <motion.div variants={linkVariants}>
                    <Link href="#home">
                        Accueil
                    </Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                    <Link href="#portfolio">
                        Découvrir
                    </Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                    <Link href="#about">
                        À propos
                    </Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                    <Link href="#contact">
                        Contact
                    </Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                    <Link href="/shop">
                        Boutique
                    </Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                    <Link href="/login">
                        Se connecter
                    </Link>
                </motion.div>
            </motion.div>
        </nav>
    )
}

