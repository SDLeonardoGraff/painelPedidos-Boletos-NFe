import React from 'react';
import styles from '@/styles/loading.module.css';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen gap-4">
            <div className={styles.spinner}></div>
            <p>Carregando...</p>
        </div>
    );
};

export default Loading;
