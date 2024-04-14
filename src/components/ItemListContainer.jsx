import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemDetailComponent from './ItemDetailComponent';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {    
          const response = await fetch(`${props.url}`);
          const data = await response.json();
          setProducts(data);
        };
        fetchProducts();
      }, [props.url]);
    return (
        <div>
            <h2 className="capitalize text-2xl font-bold my-4 pb-3 border-b-1 border-gray-300">{props.categoryName === 'home' ? 'Last releases' : props.categoryName}</h2>
            <div className="products__container">
                <ul className="grid grid-cols-4 gap-4 place-items-start maw-w-screen-xl mx-auto">
                    {products.map((product) => (
                    <li key={product.id} className="my-0 mx-auto">
                        <ItemDetailComponent props={product} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

ItemListContainer.propTypes = {
    url: PropTypes.string,
    categoryName: PropTypes.string
  };

export default ItemListContainer;