import Head from 'next/head'
import Sidebar from '../components/Sidebar'




export default function Layout({children, pagina}) {
  
    return (
      <>
        <Head>
            <title>Café - {pagina}</title>
            <meta name = "description" content = "Quiosco cafetería"></meta>
        </Head>

        <div className="md:flex gap-15">
            <aside className="md:w-4/12 xl:w1/4 2xl:w-1/5">
                <Sidebar />
            </aside>
            <main className="md:w-8/12 xl:w3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                  <div className='p-10'>
                  {children}

                  </div>
                  
            </main>
        </div>
        
      </>
    )
  }