import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Consulta', label: 'Consulta' },
  { value: 'Exame', label: 'Exame' },
  { value: 'Terapia', label: 'Terapia' },
  { value: 'Cirurgia', label: 'Cirurgia' },
  { value: 'Internação', label: 'Internação' },
  { value: 'TerPronto-socorro', label: 'pronto-socorro' }

]


export default function SelectTipo(){
    return (<>
    <Select 
    className='w-1/3'
    options={options} 
    placeholder="Tipo"/>
    </>
)}