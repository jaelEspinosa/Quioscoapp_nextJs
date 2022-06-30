import Producto from "../components/Producto";
import useQuiosoco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";



export default function Home() {
  const { categoriaActual } = useQuiosoco()
  return (
    <Layout pagina={`menú- ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">Elije y personaliza tu pedido a continuación</p>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
        
      </div>

    </Layout>
  )
}

