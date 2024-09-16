import React from 'react'
import styles from './boletos.module.css';
import SideBar from '@/components/sidebar';
import BoletoComp from "@/components/BoletosComp/BoletosComp";

function Boletos() {
    return (
        <main className={styles.main}>
            <SideBar>
                <BoletoComp />
            </SideBar>
        </main>
    )
}

export default Boletos;
