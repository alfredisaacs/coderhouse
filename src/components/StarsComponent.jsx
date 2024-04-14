import PropTypes from 'prop-types';
import StarIcon from '../assets/star.svg';
import './StarsComponent.css';

const StarComponent = (props) => {
    const ratingArray = Array.from({ length: 5 }, (_, index) => index + 1);
    const rating = props.rating * 20;
    return (
        <div className="relative ratingContainer">
            <div className="ratingBase">
            <div className="ratingData rating" style={{ width: `${rating}%` }}>
                {ratingArray.map((star) => (
                    <span key={star}>
                        <img src={StarIcon} alt={star.index} />
                    </span>
                ))}
            </div>
            </div>
        </div>
    )
}

StarComponent.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarComponent;