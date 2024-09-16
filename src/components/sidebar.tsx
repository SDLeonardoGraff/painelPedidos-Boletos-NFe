"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Loading from "./loading";
import { CiLogout } from "react-icons/ci";

function SideBar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [open, setOpen] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
    const [page, setPage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);

        function getPage() {
            if (typeof pathname == 'string')
                switch (pathname) {
                    case '/boletos':
                        setPage("Boletos");
                        break;
                    case '/':
                        setPage("Home");
                        break;
                    case '/pedidos':
                        setPage("Pedidos");
                        break;
                    case '/nfe':
                        setPage("NFe");
                        break;
                }
        }
        getPage();

    }, [page]);



    return (
        <div className="flex">
            <div className={`${open ? 'w-72' : 'w-24'} duration-300 h-screen 
            p-5 pt-8 bg-gray-700/60 relative flex flex-col`}>
                <img
                    src="/control.png"
                    className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-gray-700 ${!open && 'rotate-180 duration-300'}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <Image
                        src="/logo.png"
                        width={80}
                        height={80}
                        alt=""
                        className={`cursor-pointer duration-500`}
                    />
                    <h1 className={`text-white origin-left font-medium text-xl
                    duration-300 ${!open && 'scale-0'}`}>Menu</h1>
                </div>
                <ul className="pt-6 gap-5 flex flex-col">
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/20 rounded-xl" onClick={() => router.push('/')}>
                        <Image
                            src="/home.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span className={`${!open && 'scale-0'} origin-left duration-200`}>Home</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/20 rounded-xl" onClick={() => router.push('/pedidos')}>
                        <Image
                            src="/shop.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span className={`${!open && 'scale-0'} origin-left duration-200`}>Pedidos</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/20 rounded-xl" onClick={() => router.push('/nfe')}>
                        <Image
                            src="/nfe.svg"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span className={`${!open && 'scale-0'} origin-left duration-200`}>NFe</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/20 rounded-xl" onClick={() => router.push('/boletos')}>
                        <Image
                            src="/bilhete.png"
                            width={30}
                            height={30}
                            alt=""
                        />
                        <span className={`${!open && 'scale-0'} origin-left duration-200`}>Boletos</span>
                    </li>
                </ul>
                <Link href={'/login'} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/20 rounded-xl mt-auto">
                    <CiLogout className={`text-3xl ${!open && 'w-8'}`} />
                    <span className={`${!open && 'scale-0'} origin-left duration-200`}>Sair do App</span>
                </Link>
            </div>
            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <>
                            {children}
                        </>
                    )
                }
            </div>

        </div>
    )
}

export default SideBar;