import ResumenProducto from "../components/ResumenProducto";

import useQuiosoco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";



export default function Resumen (){
   const {pedido}=useQuiosoco()
   return (
        <Layout pagina = 'Resumen'>
          <h1 className="text-4xl font-black">Resumen</h1>  
          <p className="text-4xl text-amber-500 font-black my-10">Revisa tu pedido</p>
          {pedido.length === 0 ? (<p className="text-center text-2xl font-black uppercase">ningún elemento</p>):(
            pedido.map(producto => (
                <ResumenProducto 
                key={producto.id} 
                producto={producto} />
            ))
          )}
        </Layout>

   )
    
}