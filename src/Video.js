import React, { Component} from 'react'
import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Video extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <CssBaseline />
                <Typography align='left'variant="h3" gutterBottom >
                    <b>Self-Stability </b>
                </Typography>

                <Typography align='left'variant="h6" gutterBottom >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In general, a bike design is <b>self-stable</b> at those forward speeds for which the real parts of all the eigenvalues are less than zero. For example, ####.INSERT NEW EXAMPLE GRAPH.####
                </Typography>

                <Typography align='left' variant="h6" gutterBottom>
                Self-stable means that without external input, the bike will eventually roll straight and upright even if perturbed. Such behavior can easily be seen in real-world bicycles, when rolled without a rider. See Video 1 below.
                </Typography>
                <br></br>
                <ExpansionPanel >
                <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5"><b>Video 1 - (Bicycle in motion without external input)</b></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <iframe align ="center" width="560" height="315" src="https://www.youtube.com/embed/Zt7J0dly70M" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Typography variant = "h6" align="left">
                &nbsp;The bike must meet a couple simple criteria:
                <ul>
                <li>It must be aligned to ride straight, that is either perfectly symmetric, or with cancelling asymmetries. For example, the rear wheel can be oriented a little to one side, to reduce the tendency to turn to that side. </li>
                <li>It must have a freely turning front fork, the goal is frictionless, and without stiff shift or brake cables.
                <li>Finally, a down-slope may also be helpful to maintain speed.</li>    
                </li>
                </ul>  
                </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel >
                <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5"><b>Video 2 - (Extended Video demonstating Cornell University Testing)</b></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <iframe width="560" align ="center" height="315" src="https://www.youtube.com/embed/-Bw0BlzOg5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ExpansionPanelDetails>
                </ExpansionPanel>       
            </div>
        )
    }
}

export default Video