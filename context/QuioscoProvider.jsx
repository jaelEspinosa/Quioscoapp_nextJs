import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'
import {useRouter} from 'next/router'
const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto]=useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido]=useState([])
    const [modalDelete, setModalDelete]=useState(false)
    const [productoABorrar, setProductoABorrar] = useState({})
    const [nombre, setNombre]=useState('')
    const [total, setTotal]=useState(0)
    
    const router = useRouter()

    const obtenerCategorias = async ()=>{
        const {data} =  await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(()=>{
        obtenerCategorias()
    },[])

    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])


    const handleClickCategoria = id =>{
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
        
    }
    const handleSetProducto = producto =>{
        setProducto(producto)
    }
    const handleChangeModal = ()=>{
        setModal(!modal)
    }
    const handleChangeModalDelete = ()=>{
        setModalDelete(!modalDelete)
    }
    const handleAgregarPedido = ({categoriaId,...producto})=>{
        if(pedido.some(productoState => productoState.id === producto.id)){
            // actualizar cantidad
         const pedidoActualizado = pedido.map(productoState => productoState.id===
            producto.id ? producto : productoState)

            setPedido(pedidoActualizado)
            toast.success('Actualizado ok')
        }else{            
            setPedido([...pedido, producto])   
            toast.success('Agregado al Pedido')         
        }
       setModal(false)    
    }
    const handleDeleteProducto = producto =>{
          const pedidoActualizado = pedido.filter(item => item.id!== producto.id)
          setPedido(pedidoActualizado)
          toast.success('ELIMINADO')
    }
    const handleEditCant = id =>{
        console.log('la id es ',id)
        const productoActualizar = pedido.filter (pedido => pedido.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }
    const colocarOrden = async e =>{
        e.preventDefault()
       try {
         await axios.post('/api/ordenes', {pedido, nombre, total,fecha:Date.now().toString()})
        
         // resetar app
         
         setCategoriaActual(categorias[0])        
         setPedido([])
         setNombre('')
         setTotal(0)
         
       
         toast.success('PEDIDO REALIZADO CORRECTAMENTE')
         setTimeout(() => {
            router.push('/')
         }, 3000);
       } catch (error) {
         console.log(error)
       }
      }
      
    
    useEffect(()=>{
      let totalPedido = pedido.reduce((acc, item)=> acc + (item.cantidad*item.precio),0) 
      setTotal(totalPedido)
    },[pedido])
   
    return (
        <QuioscoContext.Provider value = {{
            categorias,
            handleClickCategoria,
            categoriaActual,
            producto,
            handleSetProducto,
            handleChangeModal,
            modal,
            handleAgregarPedido,
            pedido,
            handleDeleteProducto,
            modalDelete,
            handleChangeModalDelete,
            setModalDelete,
            productoABorrar,
            setProductoABorrar,
            handleEditCant,
            nombre,
            setNombre,
            colocarOrden,
            total

            
        }}>

           {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext