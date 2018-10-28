import React from 'react';
import Bike from './Bike';
import ForwardSpeeds from './ForwardSpeeds';

class Main extends React.Component {

    render() {
        return (
            <div>
                <Bike />
                <ForwardSpeeds />
            </div>
        )
    }
}

export default Main;