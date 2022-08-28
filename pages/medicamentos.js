import Navbar from "../components/navbar"
import { useState } from "react";


export default function Medicamentos(){
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <>
      
        <Navbar 
        show={showMenu}
        setShow={setShowMenu}/>
        

        <div>
            <h1 className="flex justify-center text-gray-500 text-3xl pt-20">Medicamentos</h1>




         </div>
        </>
    )
}