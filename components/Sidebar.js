import Image from 'next/image'
import useQuiosoco from '../hooks/useQuiosco'
import Categoria from './Categoria'

const Sidebar = () => {
  const {categorias}=useQuiosoco()
  return (
    <>
        <Image width={300} 
               height={100} 
               src= '/assets/img/logo.svg' alt='logo' />
        
        <nav className='mt-10'>
              {categorias.map (categoria =>(
                <Categoria key={categoria.id} categoria = {categoria}/>
              ))}
        </nav>
        
    </>
  )
}

export default Sidebar