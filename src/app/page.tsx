"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FcExpired } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import Link from "next/link";

export default function Home() {

  console.clear();
  console.log(
    "%cAlerta",
    "text-transform: uppercase; padding: 10px; background: red; color: white;",
    "Uma mensagem muito importante",
  );

  return (
    <main className={styles.main}>

      <Image
        src="/logo.png"
        width={400}
        height={400}
        alt=""
        className={styles.logo}
      />

      <div className={styles.grid}>
        <a
          // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          href="/pedidos"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          
          <h2>
            <FcShop style={{ fontSize: 20 }}/>Pedidos <span>-&gt;</span>
          </h2>
          {/* <p>Descubra as últimas inovações que estão remodelando o mundo: o módulo de novidades é sua janela para o futuro, trazendo-lhe as tendências mais quentes e os avanços mais revolucionários que estão definindo a próxima era da tecnologia e além!</p> */}
          <p>Ir para o módulo de geração de Pedidos</p>
        </a>

        <a
          // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          href="/nfe"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {/* <FcBusinessContact style={{ fontSize: 22 }}/>NF-e <span>-&gt;</span> */}
            <Image 
              src="/nfe.svg"
              width={25}
              height={25}
              alt=""
            />
            NF-e <span>-&gt;</span>
          </h2>
          {/* <p>O módulo de contatos é a ponte entre sua empresa e o mundo, transformando interações em uma oportunidade de criar conexões valiosas.</p> */}
          <p>Ir para o módulo de geração de NF-e</p>
        </a>

        <a
          // href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          href="/boletos"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {/* <FcAbout  style={{ fontSize: 20 }}/>Boletos <span>-&gt;</span> */}
            <Image 
              src="/bilhete.png"
              width={25}
              height={25}
              alt=""
            />
            Boletos <span>-&gt;</span>
          </h2>
          {/* <p>Este módulo nos convida a explorar, descobrir mais, ir além do óbvio. É o início de uma jornada de conhecimento, uma pequena chave que desbloqueia um mundo de informações e histórias.</p> */}
          <p>Ir para o módulo de geração de Boletos{/*  do Banco Sicredi */}</p>
        </a>

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <FcMultipleDevices style={{ fontSize: 20 }}/>Plataforma <span>-&gt;</span>
          </h2>
          <p>
          O módulo plataforma, um ambiente de aprendizado dinâmico e modular, transforma a educação a distância em uma experiência intuitiva e colaborativa, promovendo o ensino socioconstrutivo em um cenário global.
          </p>
        </a> */}
      </div>
    </main>
  );
}
