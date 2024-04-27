import PropTypes from 'prop-types';

const InputComponent = ({
    type = 'text',
    name = '',
    placeholder = '',
    onChange = () => {},
}) => {

    const handleChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <div className="input">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

InputComponent.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default InputComponent;