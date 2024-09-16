// pages/api/proxy.js

export default async function handler(req, res) {
    const { CodigoNFe } = req.query; 
    
    const token/*: string */ = process.env.NEXT_PUBLIC_ERP_TOKEN ?? (() => { throw new Error('ERP_TOKEN is not defined'); })();
    const user/*: string */ = process.env.NEXT_PUBLIC_ERP_USER ?? (() => { throw new Error("ERP_USER is not defined") })();
    const app/*: string */ = process.env.NEXT_PUBLIC_ERP_APP ?? (() => { throw new Error('ERP_APP is not defined'); })();
    
    // Obtenha o parâmetro da requisição

    try {
        // Faça a requisição para o servidor de destino
        const response = await fetch(`https://erp.sdbr.app/api/request/Fiscal/ConsultarNFE?CodigoNFe=${CodigoNFe}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization-Token': `Bearer ${token}`,
                'User': `${user}`,
                'App': `${app}`,// Adicione o token de autorização necessário, se aplicável
            },
        });

        // Obtenha a resposta do servidor de destino
        const data = await response.json();

        // Envie a resposta de volta para o cliente
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao fazer a requisição para o servidor de destino:', error);
        res.status(500).json({ message: 'Erro ao obter dados do servidor de destino' });
    }
}
