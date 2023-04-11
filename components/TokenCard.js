import Image from 'next/image'
import Link from 'next/link'
// import Price from '@/components/Price'

function TokenCard() {
  const handle = "Handle"
  const title = "Test Coin"
  const description = "product description"
  const price = 50

  const imageNode = ""

  return (
    // <Link
    //   href={`/`}
    //   passHref
    // >
      <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-72 border-b-2 border-palette-lighter relative">
          <Image
            src={imageNode.originalSrc}
            alt={imageNode.altText}
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-48 relative">
          <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
            {title}
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light">
            {description}
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            {/* <Price
              currency="$"
              num={price}
              numSize="text-lg"
            /> */}
          </div>
        </div>
      </a>
    // </Link>
  )
}

export default TokenCard