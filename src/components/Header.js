import PropTypes from 'prop-types'

const Header = ({title})=>{
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// passing in default props
// Header.defaultProps = {
//     title: 'Task Tracker'
// }


// prop types
Header.prototype = {
    title: PropTypes.string
}

export default Header