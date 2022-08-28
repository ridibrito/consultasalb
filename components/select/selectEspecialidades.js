import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Cardiologista', label: 'Cardiologista' },
  { value: 'Dermatologista', label: 'Dermatologista' },
  { value: 'Psicologo', label: 'Psicologo' },
  { value: 'Oftalmologista', label: 'Oftalmologista' },
  { value: 'Dentista', label: 'Dentista' },
  { value: 'Nutricionista', label: 'Nutricionista' }

]

const handleKeyUp = (e = options) =>{
  const { value } = e.target;
 
}
export default function SelectEspecialidades(){
  const[espec, setEspec] = useState(options)

    return (<>
    <Select 
    className='w-1/3'
    options={options} 
    value={espec}
    onChange={e => setEspec(e.target)}
    placeholder="Especialidades"/>
    </>
)}