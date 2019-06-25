import React, {Component} from 'react'
import '../styles/NavMenu.css'

class NavMenu extends Component {


    render() {
        return(
            <div className='NavMenu'>
            <button className="linkBtn">Program</button>
            <button className="linkBtn">Program Help</button>
            <button className="linkBtn">Eigenvalues</button>
            <button className="linkBtn">Math</button>
            <button className="linkBtn">Video</button>
            <button className="linkBtn">Credit</button>
            </div>
        )
    }
}

export default NavMenu