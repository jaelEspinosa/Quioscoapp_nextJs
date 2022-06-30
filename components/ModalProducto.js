
import Image from 'next/image'
import { useState } from 'react'
import { formatearDinero } from '../helpers'
import useQuiosoco from '../hooks/useQuiosco'

const customstyles = {
    content :{
      fill:"red"
    },
  };

const ModalProducto = ({ producto }) => {
    const { handleChangeModal } = useQuiosoco()
    const [cantidad, setCantidad] = useState(1)
    return (
        <div className='md: flex gap-10'>
            <div className='md:w-1/3'>
                <Image
                    width={600}
                    height={600}
                    alt={`imagen producto ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className='md:w-2/3'>
                <div className='flex justify-end'>
                    <button  className={customstyles} type='button' onClick={handleChangeModal}>
                        <Image 
                            width={50}
                            height={50}
                            alt='cerrar'
                            src='/assets/img/close.png'
                        />
                    </button>
                </div>
                <h1 className='font-bold text-3xl'>{producto.nombre}</h1>
                <p className='mt-5 text-5xl font-black text-amber-400'>{formatearDinero(producto.precio)}</p>
                
                <div className='mt-10 flex align-center gap-5'>
                    <button type='button' onClick={() => setCantidad(cantidad > 1 ? cantidad-1 : cantidad)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <p className='text-xl font-bold'>{cantidad}</p>
                    <button onClick={() => setCantidad(cantidad < 5 ? cantidad +1 : cantidad)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <button 
                  type='button'
                  className='bg-indigo-600 hover:bg-indigo-800 font-bold py-5 px-5 my-10 text-white text-xl rounded'
                  >Añadir al Pedido</button>
            </div>

        </div>
    )
}

export default ModalProducto