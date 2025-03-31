import React from 'react'
import { productsPage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'
import Products from '../components/Products';

export default function ProductsPage() {
  const {homeBanner1, products} = productsPage;
  return (
    <div>
      <HeroBanner data={homeBanner1}/>
      <Products data={products}/>
    </div>
  )
}
