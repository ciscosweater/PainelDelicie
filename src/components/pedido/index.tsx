import ItemsPedido from "../itemsPedido";
import styles from "./pedido.module.css"

export default function Pedido() {
    return (
        <div className={styles.container}>
            <div className={styles.inforow}>
                <div className={styles.infocolumn}>
                    <h2 className={styles.label}>Forma de Pagamento</h2>
                    <p className={styles.info}>Cartão de Crédito</p>
                </div>
                <div className={styles.infocolumn}>
                    <h2 className={styles.label}>Pedido</h2>
                    <p className={styles.info}>N°12835</p>
                </div>
                <div className={styles.infocolumn}>
                    <h2 className={styles.label}>Cliente</h2>
                    <p className={styles.info}>Gustavo Francisco</p>
                </div>
            </div>
            {/* <div className={styles.inforow}> */}
                <div className={styles.infocolumn}>
                    <h2 className={styles.label}>Endereço</h2>
                    <p className={`${styles.info} ${styles.address}`}>Rua Arlinda Lopes, 311, Bairro Sao Miguel.</p> 
                </div>
            {/* </div> */}
            {/* <div className={styles.inforow}> */}
                <div className={styles.infocolumn}>
                    <h2 className={styles.label}>Referência</h2>
                    <p className={`${styles.info} ${styles.address}`}>Proximo a Finno Trigo.</p> 
                </div>
            {/* </div> */}
            <div className={styles.sectiondivider} />
            <h1 className={styles.ordertitle}>Conteúdo do pedido</h1>
            <ItemsPedido />
            <div className={styles.sectiondivider} />
            <ItemsPedido />
            <div className={styles.sectiondivider} />
            <ItemsPedido />
        </div>
    );
};