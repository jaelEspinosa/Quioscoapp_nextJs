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
            setNombre

            
        }}>

           {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext