import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable proucts={products} />
    </div>
  )
}

export default FilterableProductTable
