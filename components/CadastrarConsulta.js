import React, { useState, KeyboardEvent } from "react";
import SelectTipo from "./select/selectTipo";
import SelectEspecialidades from "./select/selectEspecialidades";

export default function CadastrarConsulta(handleAddTask) {
  const [inputMed, setInputMed] = useState("");
  const [inputProced, setInputProced] = useState("")
  const [inputEnd, setInputEnd] = useState("")
  const [inputDate, setInputDate] = useState({ format: "DD/MM/YYYY" })

  const handleKeyUp = (e = KeyboardEvent) =>{
      const { value } = e.target;
      
     
     
  }
  return (
    <>
      <form className="bg-white rounded-md shadow-md mx-5 p-4 sm:p-2 sm:shadow-none mt-2 sm:mt-8 sm:w-1/2">
        <div className="flex justify-between ">
          <SelectTipo />
           <input
            type="datetime-local"
            value={inputDate}
            onChange={e => setInputDate(e.target.value)}
            className="w-1/3 mx-2 h-10 border border-gray-300 rounded px-2 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 form-input"
          />
          <SelectEspecialidades />
        </div>
        <div className="flex justify-between mt-3">
          <input
            type="text"
            placeholder="Nome de médico ou prestador"
            value={inputMed}
            onKeyUp={handleKeyUp} 
            onChange={e => setInputMed(e.target.value)}
            className="w-1/3 h-10 border border-gray-300 rounded px-2 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
          />
          <input
            type="text"
            placeholder="Procedimento"
            value={inputProced}
            onKeyUp={handleKeyUp} 
            onChange={e => setInputProced(e.target.value)}
            className="w-1/3 ml-2 border border-gray-300 rounded px-2 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
          />
          <input
            type="text"
            placeholder="Endereço"
            value={inputEnd}
            onKeyUp={handleKeyUp} 
            onChange={e => setInputEnd(e.target.value)}
            className="w-1/3 ml-2 border border-gray-300 rounded px-2 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
          />
        </div>
        <button
        
        className="flex items-center justify-center mx-auto mt-4 bg-blue-500 w-full text-white py-3 rounded sm:py-1">
          Cadastrar procedimento
        </button>
      </form>
    </>
  );
}
