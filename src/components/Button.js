import PropTypes from 'prop-types'


const Button = ({buttonTitle, color,onClick})=>{

    return <button onClick={onClick} className="btn"
            style={{backgroundColor: color}}
        >{buttonTitle}</button>
}

Button.prototype = {
    buttonTitle: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


export default Button