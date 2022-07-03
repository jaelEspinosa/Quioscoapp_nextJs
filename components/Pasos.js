import { useRouter } from "next/router"


const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'}
]
const Pasos = () => {
    
    const router = useRouter()
    
    const calcularProgreso = ()=>{
        let valor;
      router.pathname === '/' ? valor = 2 : router.pathname === '/resumen' ? valor = 50 :  valor = 100;
      return valor;

    }
  return (
        <>
          <div className="flex justify-between mb-5 ">
            {pasos.map(paso =>(
                <button 
                    key={paso.paso}
                    className='text-xl text-amber-500 font-bold md:text-3xl'
                    onClick={()=>router.push(paso.url)}
                >
                {paso.nombre}        
                </button>
            ))}
          </div>  
          <div className="bg-gray-100 mb-10 rounded-full">
            <div className="rounded-full bg-amber-400 text-xs leading-none h-4 text-center text-white"
                  style={{width:`${calcularProgreso()}%`}}
            ></div>
          </div>
        </>
  )
}

export default Pasos