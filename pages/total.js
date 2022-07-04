import { useCallback, useEffect, useState } from "react";
import useQuiosoco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";
import {useRouter} from 'next/router'
import { formatearDinero } from "../helpers";

export default function Total (){
    
    const {pedido, nombre, setNombre,colocarOrden, total} = useQuiosoco()
    const router = useRouter()

    
    
   
    
     const comprobarPedido = useCallback(()=>{
      return pedido.length === 0
    },[pedido])

    useEffect(()=>{
      comprobarPedido()
    },[pedido, comprobarPedido])
   
 
   
    return(
        <Layout pagina = 'Resumen'>
        <h1 className="text-4xl font-black">Total</h1>  
        <p className="text-2xl my-10">Confirma tu Pedido a continuación</p>

       <form onSubmit={colocarOrden}>

        <div>
          <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>

          <input 
            id="nombre"
            type='text'
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded"
            value = {nombre}
            onChange={e => setNombre (e.target.value)}
           
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">Total a pagar: {' '}<span className="font-bold">{formatearDinero(total)}</span></p>
        </div>

        <div>
         <div className="mt-5">
          <input 
            type='submit'
            value='Confirmar pedido'
            className={`${comprobarPedido() ? 'bg-indigo-200' : nombre.length<3 ?'bg-indigo-200':'bg-indigo-600  hover:bg-indigo-800'} w-full lg:w-1/3 px-5 py-2 rounded  
                        text-white font-bold text-center uppercase hover:cursor-pointer`}

            disabled={comprobarPedido()}
          />
         
         </div>
         {pedido.length > 0 && <button onClick={()=>router.push('/resumen')}
                          className='bg-indigo-600 hover:bg-indigo-800 text-2xl font-bold text-white rounded px-5 py-1 my-5'
                          >Atrás</button>}

        </div>
       </form>

      </Layout>
    )

}
