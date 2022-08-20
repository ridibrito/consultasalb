import Navbar from "../components/navbar"
import { useState } from "react";
import Head from "next/head";


export default function Medicamentos(){
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <>
      <Head>
        <title>Gerenciador de consultas</title>
        <link rel="shortcut icon" href="/icone.png" />
      </Head>
        <Navbar 
        show={showMenu}
        setShow={setShowMenu}/>
        

        <div>
            <h1 className="flex justify-center text-gray-500 text-3xl pt-20">Medicamentos</h1>
         </div>
        </>
    )
}