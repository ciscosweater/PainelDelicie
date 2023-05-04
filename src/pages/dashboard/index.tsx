import Header from "@/components/header";
import styles from "./dashboard.module.css";
import DashboardOrder from "@/components/dashboardorder";

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.title}>Pedidos</h1>
            <div className={styles.divider} />
            <DashboardOrder />
        </div>
    );
};