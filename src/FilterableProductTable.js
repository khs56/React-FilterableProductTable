import React from 'react'

const FilterableProductTable = ({ products }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable proucts={products} />
    </div>
  )
}
