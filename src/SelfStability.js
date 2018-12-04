import React, { Component} from 'react'
import { CssBaseline } from '@material-ui/core';

class SelfStability extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <CssBaseline />
                <p>
                JBike6 Self-Stability
Self-Stability

In general, a bike design is self-stable at those forward speeds for which the real parts of all the eigenvalues are less than zero. For example, the bike whose eigenvalues are shown at the right it is self-stable in the region of speeds (between 5.3 and 8 m/s) where both dark blue lines are below the x-axis.

Self-stable means that without external input, the bike will eventually roll straight and upright even if perturbed.) Such behavior can easily be seen in real-world bicycles, when rolled without a rider.

The bike must meet a couple simple criteria:

It must be aligned to ride straight, that is either perfectly symmetric, or with cancelling asymmetries. For example, the rear wheel can be oriented a little to one side, to reduce the tendency to turn to that side. 

It must have a freely turning front fork, the goal is frictionless, and without stiff shift or brake cables.
Finally, a down-slope may also be helpful to maintain speed.
</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zt7J0dly70M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
<iframe width="560" height="315" src="https://www.youtube.com/embed/-Bw0BlzOg5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default SelfStability