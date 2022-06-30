import Image from 'next/image'
import React from 'react'
import { formatearDinero } from '../helpers'
import useQuiosoco from '../hooks/useQuiosco'

const Producto = ({ producto }) => {
  const{handleSetProducto,handleChangeModal}=useQuiosoco()
  const { nombre, imagen, precio } = producto
  return (
    <div className='border p-3 flex flex-col'>
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`}
        width={250}
        height={250}
      />
      <h3 className='text-2xl font-bold grow'>{nombre}</h3>
      <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>
      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
        onClick={()=> {
          handleSetProducto(producto)
          handleChangeModal()
        }}
      >Agregar</button>
    </div>
  )
}

export default Producto