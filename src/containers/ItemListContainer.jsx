import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ItemDetailComponent from '../components/ItemDetailComponent'
import { getProducts, getFromCategories } from '../utils';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const fetchProductos = async () => {
          const response = await getProducts()
          setProductos(response)
        }
        const fetchCategories = async () => {
            const response = await getFromCategories(props.categoryName)
            setProductos(response)
        }
        if(props.categoryName === 'home') {
          fetchProductos()
        } else {
          fetchCategories()
        }
      }, [props.url, props.categoryName])
    return (
        <div>
            <h2 className="capitalize text-2xl font-bold my-4 pb-3 border-b-1 border-gray-300">{props.categoryName === 'home' ? 'Last releases' : props.categoryName}</h2>
            <div className="products__container">
                <ul className="grid grid-cols-4 gap-4 place-items-start maw-w-screen-xl mx-auto">
                    {productos.map((product) => (
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