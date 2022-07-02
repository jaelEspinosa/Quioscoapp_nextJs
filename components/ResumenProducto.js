import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useQuiosoco from '../hooks/useQuiosco'
import ModalEliminar from './ModalEliminar'
import Modal from 'react-modal'

const ResumenProducto = ({ producto }) => {
  const {modalDelete, handleChangeModalDelete,setProductoABorrar,handleEditCant}=useQuiosoco()
  const customstyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    },
  };
  Modal.setAppElement("#__next")
  return (
  <>
    <div className='shadow p-5 mb-3 flex gap-10 items-center'>
      <div className='md:w-1/6'>
        <Image
          width={300}
          height={400}
          alt='imagen producto'
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>
      <div className='md:w-4/6'>
        <p className='text-3xl font-bold'>{producto.nombre}</p>
        <p className='text-2xl font-bold'>Cantidad: {producto.cantidad}</p>
        <p className='text-2xl text-amber-400 font-black'>{formatearDinero(producto.precio)}</p>
        <p className='text-2xl font-black'>Total: {formatearDinero(producto.precio * producto.cantidad)}</p>

      </div>
      <div className='flex flex-col gap-5 align-center'>
        <button
          type='button'
          className='bg-blue-500 text-2xl font-black text-white py-2 px-5 rounded-xl uppercase shadow-xl lg:w-auto hover:bg-blue-700'
          onClick={()=>handleEditCant(producto.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type='button'
          className='bg-red-500 text-2xl font-black text-white py-2 px-5 rounded-xl
                     uppercase shadow-xl lg:w-auto hover:bg-red-700'
          onClick={()=>{
            setProductoABorrar(producto)
            handleChangeModalDelete(true)}}
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
    </div>
    {modalDelete && (
      <Modal
          isOpen={modalDelete}
          style={customstyles}>
          <ModalEliminar/>
      </Modal>
    )}
    
    </>
  )
}

export default ResumenProducto