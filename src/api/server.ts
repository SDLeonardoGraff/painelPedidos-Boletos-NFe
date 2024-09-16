import express from 'express';
const app = express();

const port = 3000;

app.use(express());

app.get('/nfe/:number', async (req, res) => {
    const nfe = Number(req.params.number);
    const token: string = process.env.NEXT_PUBLIC_ERP_TOKEN ?? (() => { throw new Error('ERP_TOKEN is not defined'); })();
    const user: string = process.env.NEXT_PUBLIC_ERP_USER ?? (() => { throw new Error("ERP_USER is not defined") })();
    const app: string = process.env.NEXT_PUBLIC_ERP_APP ?? (() => { throw new Error('ERP_APP is not defined'); })();

    async function getNfe(nfe:number) {
        try {
            const response = await fetch(`https://erp.sdbr.app/api/request/Fiscal/ConsultarNFE?CodigoNFe=${nfe}`, {
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
        } catch(error){
            console.error(error);
        }
    }

    const data = await getNfe(nfe);

    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});