import { useState, useEffect } from 'react';
import ItemDetailComponent from '../components/ItemDetailComponent';
import InputComponent from '../components/InputComponent';

const HomeContainer = () => {
    const [products, setProducts] = useState([]);

    const setTheName = (name) => {
      console.log(name);  
    };

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
            <InputComponent onChange={setTheName} placeholder='Search' />
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