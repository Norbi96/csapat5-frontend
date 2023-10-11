import './ProductDetail.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { findProduct } from '../../services/products_crud';

export default function ProductDetail() {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    findProduct(id, setProduct);
  }, [id]);

  return (
    <div className="card-details">
      <nav>
        <button type="button" onClick={() => navigate(-1)}>
          Vissza
        </button>
      </nav>
      <div className="photo">
        <img src={`https://picsum.photos/400/400?=${product.id}`} alt={product.name} />
      </div>
      <div className="description">
        {product.details && product.details.length > 0 && (
          <ul>
            {product.details.map((detail, index) => (
              <>
                <li key={index}>
                  <h1>{detail.name}</h1>
                </li>
                <li key={index}>
                  <h2>{detail.price} Ft</h2>
                </li>
                <li key={index}>
                  <p>Termék leírása: {detail.description}</p>
                </li>
              </>
            ))}
          </ul>
        )}
        <button type="button">Kosárba</button>
      </div>
    </div>
  );
}
