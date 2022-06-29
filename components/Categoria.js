import Image from 'next/image'
import React from 'react'
import useQuiosoco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {
    const {categoriaActual, handleClickCategoria} = useQuiosoco()
    const {nombre, icono, id } = categoria
  return (
    <div>
    <button
        className= {`${categoriaActual?.id === id ? 'bg-amber-400' : ''} text-2xl font-bold hover:cursor pointer flex items-center gap-8 w-full border p-5 hover:bg-amber-400`}
        type='button'
        onClick={()=> handleClickCategoria(id)}
    >
        <Image width={60} 
               height={60}
               src={`/assets/img/icono_${icono}.svg`} 
               alt='icono' />
    
      {nombre}
    </button>
    </div>
  )
}

export default Categoria