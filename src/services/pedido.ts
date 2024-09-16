import dotenv from 'dotenv';
dotenv.config();

async function Pedido(number: number) {

    const token: string = process.env.ERP_TOKEN ?? (() => { throw new Error('ERP_TOKEN is not defined'); })();
    const user: string = process.env.ERP_USER ?? (() => { throw new Error("ERP_USER is not defined") })();
    const app: string = process.env.ERP_APP ?? (() => { throw new Error('ERP_APP is not defined'); })();;

    try {   
        const response = await fetch(`/api/request/Pedidos/Pesquisar?numeroNFe=${number}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization-Token': `Bearer ${token}`,
                'User': `${user}`,
                'App': `${app}`,
            }
        });
        const data = await response.json();
        return data;
    } catch(error) {
        console.error(`Erro: ${error}`);
    }
}

export default Pedido;