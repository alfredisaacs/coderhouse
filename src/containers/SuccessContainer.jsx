import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SuccessContainer = (props) => {
    return (
        <div>
            <h3 className="my-10 font-bold">Thank you for your purchase!</h3>
            <p className="my-5">Your purchase id is: <b>{props.purchaseId}</b></p>
            <p className="my-5">Your purchase total: <b>${props.price.toLocaleString()}</b></p>
            <p className="my-5">Your purchase will be delivered to: <b>{props.address}</b> to <b>{props.name} {props.lastName}</b></p>
            <Link to="/" className="btn btn-primary rounded bg-slate-600 text-white p-4 block mt-10 w-fit mx-auto">Continue shopping</Link>
        </div>
    )
}

SuccessContainer.propTypes = {
    purchaseId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};

export default SuccessContainer