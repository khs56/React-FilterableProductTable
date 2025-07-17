import './App.css';
import products from './products'
import FilterableProductTable from './FilterableProductTable'


export default function App() {
  return (
    <FilterableProductTable products={products} />
  )
}
