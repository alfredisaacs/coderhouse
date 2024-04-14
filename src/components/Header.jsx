import PropTypes from 'prop-types';
import NavBar from "./NavBar";

const Header = (props) => {
    return (
        <header className="header">
            <NavBar categories={props.categories} />
        </header>
    )
}

Header.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Header;