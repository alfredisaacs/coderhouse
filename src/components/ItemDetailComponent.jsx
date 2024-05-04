/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import StarsComponent from './StarsComponent';

const ItemDetailComponent = ({ props }) => {

    return (
        <div className="item">
            <Link to={`/item/${props.id}`}>
                <div className="item__image w-40 h-40 overflow-hidden my-5 mx-auto">
                    <img src={props.image} alt={props.title} className="max-h-[100%] mx-auto" />
                </div>
                <h3 className="text-md mx-auto max-w-60 text-sky-600 tracking-tight leading-normal">{props.title}</h3>
            </Link>
                <div className="flex w-fit mx-auto"><StarsComponent rating={props.rating} /> ({props.count})</div>
                <p className="font-bold">Price: ${props.price.toLocaleString()}</p>
        </div>
    )
}

export default ItemDetailComponent