import Navbar from "../components/navbar";
import CadastrarConsulta from "../components/CadastrarConsulta";
import Task from "../components/task";
import Card from "../components/card";
import { useState } from "react";


export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [list, setList] = useState([
    {
      id:1,
      done:true,
      tipo:'Consulta',
      data:10.09,
      especialidade:'Cardiologista',
      nomeMedico:'João',
      procedimento:'',
      endereço:'Hospital Santa Lúcia',
  },
  {
    id:2,
    done:false,
    tipo:'Exame',
    data:20.09,
    especialidade:'Cardiologista',
    nomeMedico:'João',
    procedimento:'Ecocardiograma',
    endereço:'Hospital Santa Lúcia',
}
  ])


  function handleAddTask(inputMed, inputProced, inputEnd, SelectTipo, SelectEspecialidades,inputDate){
    let newList = [...list];
      newList.push({
      id:list.length + 1,
      done:false,
      tipo:SelectTipo,
      data:inputDate,
      especialidade:SelectEspecialidades,
      nomeMedico:inputMed,
      procedimento:inputProced,
      endereço:inputEnd,
    });
    setList(newList);
  }

  return (
    <>
  
      <Navbar show={showMenu} setShow={setShowMenu} />
      <div className="sm:bg-white sm:rounded sm:shadow-md sm:mt-5 sm:pb-5 sm:py-auto  items-center sm:flex sm:max-w-7xl sm:justify-center sm:mx-auto">
        <Card className="w-1/2" />
        <CadastrarConsulta onClick={handleAddTask} className="w-1/2" />
      </div>
      <div className="sm:max-w-7xl sm:justify-center sm:mx-auto">
       {list.map((item, index)=>(
        <Task key={index} item={item}/>
       ))}
       
      </div>
    </>
  );
}
