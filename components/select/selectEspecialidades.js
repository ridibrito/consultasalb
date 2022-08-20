import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Cardiologista', label: 'Cardiologista' },
  { value: 'Dermatologista', label: 'Dermatologista' },
  { value: 'Psicologo', label: 'Psicologo' },
  { value: 'Oftalmologista', label: 'Oftalmologista' },
  { value: 'Dentista', label: 'Dentista' },
  { value: 'Nutricionista', label: 'Nutricionista' }

]


export default function SelectEspecialidades(){
    return (<>
    <Select 
    className='w-1/3'
    options={options} 
    placeholder="Especialidades"/>
    </>
)}