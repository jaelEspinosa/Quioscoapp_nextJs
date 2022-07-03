import Producto from "../components/Producto";
import useQuiosoco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";
import { useRouter } from 'next/router'


export default function Home() {
  const { categoriaActual, pedido } = useQuiosoco()
  const router = useRouter()
  return (
    <Layout pagina={`menú- ${categoriaActual?.nombre}`}>
      {pedido.length > 0 && <button onClick={() => router.push('/resumen')}
        className='flex items-center gap-5 bg-indigo-600 hover:bg-indigo-800 text-2xl font-bold text-white rounded px-5 py-1'
      >Tramitar Pedido 
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg></button>}
      <h1 className="text-4xl font-black my-5 ">Productos</h1>
      <h2 className="text-4xl font-black text-amber-500">{categoriaActual?.nombre}</h2>
      <p className="text-2xl my-10">Elije y personaliza tu pedido a continuación</p>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}

      </div>
      {pedido.length > 0 && <button onClick={() => router.push('/resumen')}
        className='flex items-center gap-5 mt-10 bg-indigo-600 hover:bg-indigo-800 text-2xl font-bold text-white rounded px-5 py-1'
      >Tramitar Pedido
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>}
    </Layout>
  )
}

