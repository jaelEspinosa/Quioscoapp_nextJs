import useQuiosoco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";



export default function Home() {
  const {categoriaActual} = useQuiosoco()
  return (
    <Layout pagina = {`menu- ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">Elije y personaliza tu pedido a continuación</p>     
      
    </Layout>
  )
}

