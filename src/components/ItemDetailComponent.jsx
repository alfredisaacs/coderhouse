/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarsComponent from './StarsComponent';

const ItemDetailComponent = ({ props }) => {

    return (
        <div className="item">
            <Link to={`/item/${props.id}`}>
                <div className="item__image w-40 h-40 overflow-hidden my-5 mx-auto">
                    <img src={props.image} alt={props.title} />
                </div>
                <h3 className="text-md mx-auto max-w-60 text-sky-600 tracking-tight leading-normal">{props.title}</h3>
            </Link>
                <div className="flex w-fit mx-auto"><StarsComponent rating={props.rating.rate} /> ({props.rating.count})</div>
                <p>Price: ${props.price}</p>
        </div>
    )
}

ItemDetailComponent.propTypes = {
    props: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
        }).isRequired,
        price: PropTypes.number.isRequired, 
    }).isRequired,
};

export default ItemDetailComponent