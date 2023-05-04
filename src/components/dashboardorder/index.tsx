import styles from "./dashboardorder.module.css"

export default function DashboardOrder() {
    return (
        <div className={styles.container}>
            <p className={styles.info}><span className={styles.label}>Pedido</span> N°12835</p>
            <p className={styles.info}><span className={styles.label}>Cliente:</span> Gustavo Francisco</p>
            <p className={styles.info}><span className={styles.label}>Forma de pagamento:</span> Pix</p>
            <p className={styles.info}><span className={styles.label}>Endereço:</span> Rua Arlinda Lopes, 311, Bairro Sao Miguel.</p>
            <p className={styles.info}><span className={styles.label}>Ponto de Referencia:</span> Proximo a Finno Trigo.</p>
            <div className={styles.sectiondivider} />
            <h1 className={styles.ordertitle}>Conteúdo do pedido</h1>
        </div>
    );
};