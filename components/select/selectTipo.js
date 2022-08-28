import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Consulta', label: 'Consulta' },
  { value: 'Exame', label: 'Exame' },
  { value: 'Terapia', label: 'Terapia' },
  { value: 'Cirurgia', label: 'Cirurgia' },
  { value: 'Internação', label: 'Internação' },
  { value: 'Pronto-socorro', label: 'pronto-socorro' }

]
const handleKeyUp = (e = options) =>{
  const { value } = e.target;
 
}

export default function SelectTipo(){
  const [tipo, setTipo] = useState(options);


    return (<>
    <Select 
    className='w-1/3'
    options={options} 
    value={tipo}
    onChange={e => setTipo(e.target)}
    placeholder="Tipo"/>
    </>
)}