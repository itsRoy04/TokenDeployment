import { useState, useEffect } from 'react'
import Link from 'next/link'
// import Logo from './img/Logo.svg';
 // import { useCartContext } from '@/context/Store'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Nav() {
//   const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)

//   useEffect(() => {
//     let numItems = 0
//     cart.forEach(item => {
//       numItems += item.variantQuantity
//     })
//     setCartItems(numItems)
//   }, [cart])

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          {/* <a className=" cursor-pointer"> */}
            <h1 className="flex no-underline">
                {/* <img src={Logo} ></img> */}
              <img  alt="Logo" className=" w-36 mr-1" src="/img/Logo.png" />
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                {/* {process.env.siteTitle} */}
              </span>
            </h1>
          {/* </a> */}
        </Link>
        <div>
  
        </div>
      </div>
    </header >
  )
}

export default Nav