import PropTypes from 'prop-types';

const SuccessContainer = (props) => {
    return (
        <div>
            <h3 className="my-10 font-bold">Thank you for your purchase!</h3>
            <p className="my-5">Your purchase id is: <b>{props.purchaseId}</b></p>
            <p className="my-5">Your purchase total: <b>${props.price.toLocaleString()}</b></p>
            <p className="my-5">Your purchase will be delivered to: <b>{props.address}</b> to <b>{props.name} {props.lastName}</b></p>
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