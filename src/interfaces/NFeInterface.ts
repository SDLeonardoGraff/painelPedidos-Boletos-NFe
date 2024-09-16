interface NFeResponse {
    CodigoStatus: number;
    MsgStatus: string,
    ChaveNFe: string,
    Numero: number,
    Lote: number,
    UrlImpressaoDanfe: string,
    Xml: string,
}

export default NFeResponse;