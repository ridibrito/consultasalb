import Image from "next/image"

export default function Card() {
    return(
        <>
        
        
        <div className="mt-8 block w-3/4 mx-auto sm:flex sm:items-center sm:mx-auto sm:2/4 md:w-96 md:flex md:items-center md:mx-5  bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-md px-6 py-5 shadow-lg">
          <div className="overflow-hidden mx-auto sm:ml-3 relative w-20 h-20 bg-blue-100 rounded-full dark:bg-gray-600 sm:items-center">
            <Image src="/foto capa.png" alt="avatar" layout="fill" />
          </div>
          <div className="flex items-center sm:flex sm:items-center">
            <div className="mx-auto">
            <h2 className="text-white text-lg font-semibold mt-2 sm:mt-0 sm:mr-7  ">Ricardo Albuquerque</h2>
            <span className="flex">
            <p className="text-white">Idade: </p> 
            <p className="text-white"> 38</p>
            </span>
            <p className="text-white">Peso:</p>
            <p className="text-white">Altura:</p>
            <p className="text-white">Plano de saúde:</p>
            </div>
          </div>
          <div>
          </div>
        </div>
        </>
    )
}