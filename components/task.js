import { useState } from "react";

export default function Task({ item, handleAddTask }) {
    const [isChecked, setIsChecked] = useState(item.done);
    
 
    

  return (
    <>
      <div className="flex-wrap justify-between sm:flex sm:h-20 bg-white items-center ring-2 ring-gray-100 rounded-md shadow-md m-5 p-4 text-gray-500">
        <div className="flex items-center space-x-3">
        <div className="flex">
        <input 
        className="w-5 h-5" 
        type="checkbox"
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
        />
        
        <label      
        className="bg-red-500 ml-2 mt-1 rounded-full w-3 h-3"></label>
        </div>
        <div className="w-1/6 flex sm:block sm:mt-0">
          <h3>{item.tipo}</h3>
          <h2 className="ml-3 sm:ml-0 font-semibold">{item.procedimento}</h2>
        </div>
        </div>
        <p className="text-sm  font-semibold text-gray-700">{item.data}</p>
        <p>{item.endereço}</p>
        <div className="flex items-center">
        <p>Dr.(a){item.nomeMedico}</p>
        <p className="text-sm ml-3">{item.especialidade}</p>
        </div>
      </div>
    </>
  );
}
