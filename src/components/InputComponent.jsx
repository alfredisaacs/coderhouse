import PropTypes from 'prop-types';

const InputComponent = ({
        type = 'text',
        name = '',
        value = '',
        placeholder = '',
        onChange = () => {},
    }) => {

    const handleChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <div className="input">
            <label>{name}</label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

InputComponent.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default InputComponent;