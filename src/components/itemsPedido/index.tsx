import styles from "./itemsPedido.module.css";

export default function ItemsPedido() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Brigadeiro Chocolate</h1>
            <p className={styles.description}>O brigadeiro é um doce típico da culinária brasileira, de origem paulista, na qual rapidamente se difundiu pelo resto do país,</p>
            <div className={styles.line}>
                <p className={styles.price}>R$ 120,00</p>
                <p className={styles.quantity}>2 unidades</p>
            </div>
        </div>
    );
};