import ResumenProducto from "../components/ResumenProducto";
import { useRouter } from 'next/router'
import useQuiosoco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";



export default function Resumen() {
  const { pedido } = useQuiosoco()
  const router = useRouter()
  return (
    <Layout pagina='Resumen'>
     <div className="flex  justify-between md:justify-start">
      {pedido.length > 0 && <button onClick={() => router.push('/')}
        className=' flex items-center gap-5 bg-indigo-600 hover:bg-indigo-800 text-2xl font-bold text-white rounded px-5 py-1'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        Atrás</button>}
     
      {pedido.length > 0 && <button onClick={() => router.push('/total')}
        className=' flex items-center gap-5 bg-indigo-600 hover:bg-indigo-800 text-2xl font-bold text-white rounded px-5 py-1 mx-5'
      >Fin
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>}
     </div>
      <h1 className="text-4xl font-black my-5">Resumen</h1>
      <p className="text-4xl text-amber-500 font-black my-10">Revisa tu pedido</p>
      {pedido.length === 0 ? (<p className="text-center text-2xl font-black uppercase">ningún elemento</p>) : (
        pedido.map(producto => (
          <ResumenProducto
            key={producto.id}
            producto={producto} />
        ))

      )}
     <div className="my-10 flex justify-between md:justify-start">
      {pedido.length > 0 && <button onClick={() => router.push('/')}
        className=' flex items-center gap-5 bg-indigo-600 hover:bg-indigo-800 text-2xl font-bold text-white rounded px-5 py-1'
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
        Atrás</button>}
     
      {pedido.length > 0 && <button onClick={() => router.push('/total')}
        className=' flex items-center gap-5 bg-indigo-600 hover:bg-indigo-800 text-2xl font-bold text-white rounded px-5 py-1 mx-5'
      >Fin
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>}
     </div>

    </Layout>

  )

}