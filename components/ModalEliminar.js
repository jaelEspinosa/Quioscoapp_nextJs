import useQuiosoco from "../hooks/useQuiosco"
import Image from 'next/image'
import { formatearDinero } from "../helpers"

const ModalEliminar = () => {
  const { handleDeleteProducto, handleChangeModalDelete, productoABorrar } = useQuiosoco()
  return (
    <>
       <h1 className="text-center text-6xl text-amber-500 my-12 font-black">¿Lo Eliminamos?</h1>
      <div className="flex justify-between my-12">
        <div className='md:w-2/6'>
          <Image
            width={400}
            height={400}
            alt='imagen producto'
            src={`/assets/img/${productoABorrar.imagen}.jpg`}
          />
        </div>
        <div className='md:w-3/6'>
          <p className='text-3xl my-4 font-bold'>{productoABorrar.nombre}</p>
          <p className='text-2xl my-4 font-bold'>Cantidad: {productoABorrar.cantidad}</p>
          <p className='text-2xl my-4 text-amber-400 font-black'>{formatearDinero(productoABorrar.precio)}</p>
          <p className='text-2xl my-4 font-black'>Total: {formatearDinero(productoABorrar.precio * productoABorrar.cantidad)}</p>

        </div>
      </div>
      <div className="mt-25 flex justify-around my-8">
        <button
          type='button'
          className='bg-red-500 text-xl flex gap-5 items-center font-bold text-white py-2 px-5 rounded-xl
                     uppercase shadow-xl lg:w-auto hover:bg-red-700'
          onClick={() =>{
            handleDeleteProducto(productoABorrar)
            handleChangeModalDelete()
          } }
        > borrar
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type='button'
          className='bg-blue-500 text-2xl font-black text-white py-2 px-5 rounded-xl uppercase shadow-xl lg:w-auto hover:bg-blue-700'
          onClick={() => handleChangeModalDelete()}
        >
          cancelar
        </button>

      </div>
    </>
  )
}

export default ModalEliminar