import React from 'react'
// const ProductsData = [
//   {
//     id:1,
//     img: Img1,
//     title:"Chemise Femme",
//     rating:5.0,
//     author: "white",
//     Delay: "0",
//   },
//   {
//     id:2,
//     title:"Chemise Femme",
//     rating:5.0,
//     author: "white",
//     Delay: "0",
//   },

// ]
const Produits = () => {
  return (
    <div className='"mt-14 mb-12'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-m-[600px] mx-auto'>
            <h1 className='text-[50px] font-bold'><span className='bg-gradient-to-r from-secondary to-primary and-primary bg-clip-text text-transparent'>Produits</span></h1>
            <p className='text-xs text-black'>Les meilleurs produits en ventes pour vous. Nous vous assurons de la qualité de tous nos produits du moins couteux au plus couteux</p>
        </div>
        {/* body section */}
        <div>
          <div
          className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grids-cols-5 place-items-center gap-5'
          >
            {/* card section */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produits
