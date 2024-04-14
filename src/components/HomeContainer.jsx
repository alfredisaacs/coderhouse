import { useState, useEffect } from 'react';
import ItemDetailComponent from './ItemDetailComponent';

const HomeContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {    
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
        };
        fetchProducts();
      }, []);
    return (
        <div>
            <h2>Online store - Top deals</h2>
            <div className="homeProducts__container">
                <ul className="grid grid-cols-4 gap-4 place-items-start">
                    {products.map((product) => (
                    <li key={product.id}>
                        <ItemDetailComponent props={product} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default HomeContainer;