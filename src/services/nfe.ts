import NFeResponse from '@/interfaces/NFeInterface';

async function NFe(number: number): Promise<NFeResponse> {
    const token: string = process.env.NEXT_PUBLIC_ERP_TOKEN ?? (() => { throw new Error('ERP_TOKEN is not defined'); })();
    const user: string = process.env.NEXT_PUBLIC_ERP_USER ?? (() => { throw new Error("ERP_USER is not defined") })();
    const app: string = process.env.NEXT_PUBLIC_ERP_APP ?? (() => { throw new Error('ERP_APP is not defined'); })();

    console.group();
    console.log(token);
    console.log(user);
    console.log(app);

    try {   
        const response = await fetch(`http://localhost:3000/api/request/Fiscal/ConsultarNFE?CodigoNFe=${number}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization-Token': `Bearer ${token}`,
                'User': `${user}`,
                'App': `${app}`,
            }
        });

        if(!response.ok){
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data: NFeResponse = await response.json();
        return data;
    } catch(error) {
        console.error(`Erro: ${error}`);
        throw error;
    }
}

export default NFe;