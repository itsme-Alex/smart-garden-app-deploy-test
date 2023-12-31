import styles from '../../styles/showcase/portfolio.module.scss'
import Link from 'next/link'

export default function Portfolio() {
    return (
        <div>
            <h1 className={styles.mainTitle}>DÉCOUVRIR LE PRODUIT</h1>
            <p className={styles.presentationText}>Smart Garden est une start-up éco-responsable offrant le Water Pilot, un système d'arrosage automatique intelligent. Ce dispositif ajuste l'arrosage en fonction des besoins des plantes, économisant ainsi l'eau et optimisant leur croissance. Le Water Pilot se connecte aux systèmes d'arrosage existants et utilise des capteurs pour surveiller l'environnement du jardin. L'application mobile permet un contrôle à distance, un suivi en temps réel et la personnalisation des paramètres d'arrosage. En adoptant Smart Garden et le Water Pilot, les jardiniers réduisent leur empreinte écologique tout en prenant soin de leurs plantes de manière optimale.</p>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Link href="/shop">
                        <img src="/images/WaterPilot.png" alt="Image 1" className={styles.image}/>
                        <div className={styles.overlay}></div>
                        <div className={styles.text}>Achetez le Water Pilot.</div>
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Link href="/dashboard">
                        <img src="/images/OrdiWP.png" alt="Image 2" className={styles.image}/>
                        <div className={styles.overlay}></div>
                        <div className={styles.text}>Contrôlez l'arrosage.</div>
                    </Link>
                </div>
                <div className={styles.imageContainer}>
                    <Link href="/dashboard">
                        <img src="/images/arrosage2.png" alt="Image 3" className={styles.image}/>
                        <div className={styles.overlay}></div>
                        <div className={styles.text}>Arrosez votre jardin.</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

