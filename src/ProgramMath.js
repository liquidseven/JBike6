import React, { Component} from 'react'
import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class ProgramMath extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <CssBaseline />
                <Typography align='left'variant="h3" gutterBottom >
                    <b>Math Resources </b>
                </Typography>

                <Typography align='left'variant="h6" gutterBottom >
                <Paper>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The linearized equations of motion implemented in JBike6 have been exhaustively verified in a paper by A. L. Schwab, J. P. Meijaard, and J. M. Papadopoulos: <a href="http://ruina.tam.cornell.edu/research/topics/bicycle_mechanics/benchmark_results.pdf">Benchmark</a>
                <br/>&nbsp;
                </Paper>
                <br/>
                
                <Paper>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Additionaly, Jim Papadopoulos worked closely with Scott Hand on his Master's Thesis at Cornell University: <a href="http://ruina.tam.cornell.edu/research/topics/bicycle_mechanics/comparisons_stability_analysis.pdf">Comparisons and Stability Analysis of Linearized Equations of Motion for a Basic Bicycle Model</a>
                <br />
                &nbsp;
                </Paper>
                
                <br />
                <br></br>
                </Typography>     
            </div>
        )
    }
}

export default ProgramMath