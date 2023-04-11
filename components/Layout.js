// import { CartProvider } from '@/context/Store'
import Nav from '@/components/Nav'
import Heading from './Heading'
// import Footer from '@/components/Footer'

function Layout({ children }) {
  
  return (
    <>
    {/* // <CartProvider> */}
      <div className="flex flex-col justify-between min-h-screen">
        <Nav />
        
        <main>
          {children}
        </main>
TokenListing
        {/* <Footer /> */}
      </div>
    {/* </CartProvider> */}
 
    </>
  )
}

export default Layout
