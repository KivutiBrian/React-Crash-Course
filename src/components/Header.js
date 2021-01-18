import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title})=>{

    const onClick = ()=>{
        alert("Hello world")
    }
    // const onClick2 =()=>{
    //     alert("Mamayaoo")
    // }
    return (
        <header className="Header">
            
            {/* <h1 style={{ color: 'red' }}>test</h1> */}
            <h1>{title}</h1>
            <Button 
                buttonTitle="Add"
                color="green"
                onClick = {onClick}
            / >

            {/* <Button 
                buttonTitle="Save"
                color="red"
                onClick = {onClick2}
            / > */}
        </header>
    )
}

// passing in default props
// Header.defaultProps = {
//     title: 'Task Tracker'
// }


// prop types
Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header