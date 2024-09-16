"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import NFe from '@/services/nfe';
import Pedido from '@/services/pedido';
import NFeResponse from '@/interfaces/NFeInterface';

function BoletoComp() {

    const router = useRouter();
    const [nfe, setNfe] = useState([]);
    const [pedido, setPedido] = useState([]);
    const [number, setNumber] = useState<number>(0);

    async function GetNFe(number: number) {
        console.log(
            "%cAlerta",
            "text-transform: uppercase; padding: 10px; background: yellow; color: black;",
            "Carregando Dados...",
        );

        try {
            const nfe = await NFe(number);
            const pedido = await Pedido(number);

            console.group();
            console.info(nfe);
            console.info(pedido);
        } catch (error) {
            console.error(`Erro: ${error}`);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        console.info(value);
        setNumber(value ? parseInt(value, 10) : 0);
    };

    return (
        <>
            <div className="flex flex-row gap-3">
                <div className="bg-gray-100 w-64 p-2 flex items-center gap-2 border-[2px] border-[solid] border-[black]">
                    <input
                        type="number"   
                        name="number"
                        placeholder="Digite o Nº da NFe"
                        className="bg-gray-100 outline-none text-sm text-black flex-1"
                        onChange={handleChange}
                    />
                </div>
                <div onClick={() => GetNFe(number)}>
                    <a
                        href="#"
                        className="border-2 border-green-500 text-green-500 rounded-full px-2 py-1 inline-block font-semibold hover:bg-green-500 hover:text-white">Buscar</a>
                </div>
            </div>
            {
                nfe && nfe.length > 0 ? (
                    <section
                        className="mt-4 bg-white w-[500px] p-3"
                        style={{ height: "calc(100vh - 120px)" }} // Ajuste aqui
                    >
                        <div
                            className="border-black border p-1"
                            style={{ height: "calc(100vh - 147px)" }}
                        >
                            <h1 className="text-black text-center">NF-e { }</h1>
                        </div>

                    </section>
                ) : (
                    <></>
                )
            }

        </>
    );
}

export default BoletoComp;
