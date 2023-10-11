import { useContext, useEffect, useState } from 'react';
import './Products.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { productsContext } from '../../contexts/productsContext';
import useAuth from '../../hooks/useAuth';
import { addToCart } from '../../services/cartServices';
import ProductList from './ProductList';
import Categories from '../../components/Categories/Categories';
import Filter from '../../components/Filter/Filter';
import Paginate from '../../components/Paginate/Paginate';
import PagePer from '../../components/PagePer/PagePer';

export default function Products() {
  const [products] = useContext(productsContext);

  return (
    <div className="products-main">
      <div className="products-header">
        <PagePer />
        <h3>
          <b>{products.total}</b> TERMÉK ELÉRHETŐ!
        </h3>
        <Filter price />
      </div>
      <hr />
      <div className="categories">
        <Categories />
      </div>
      <hr />
      <div className="products">
        {products.products?.map?.((product) => (
          <ProductList product={product} key={product.id} />
        ))}
      </div>
      <div className="product-paginate">
        <Paginate total={products?.total} />
      </div>
    </div>
  );
}
