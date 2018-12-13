import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Credit extends Component {
    render() {
        return(
            <Typography align='left'variant="h6" gutterBottom >
                    <div>
            <b>Arend L. Schwab</b>, Assistant Professor of Applied Mechanics at Delft University of Technology. Wrote the original JBike6 engine in MATLAB.
            <br/><br/>
            <b>Jim Papadopoulos</b>, Contributing Author of Bicycling Science : Third Edition. Created the JBike concept and monitored its development. Worked closely with Scott Hand on his Master’s Thesis at Cornell University: Comparisons and Stability Analysis of Linearized Equations of Motion for a Basic Bicycle Model
            <br/><br/>
            <b>Andy Ruina</b>, Professor of Theoretical and Applied Mechanics at Cornell University. Lab advisor.
            <br/><br/>
            <b>Andrew Dressel</b>, Graduate Student of Theoretical and Applied Mechanics at Cornell University. Created JBike6 GUI, on-line help, and the original JBike6 website.
            <br/><br/>
            <b>Matthew Youn</b>, Bachelor's Degree in Computer Science. Worked on the JBike6 redesigned website for 2018 Fall Capstone Project
            <br/><br/>
            <b>Adam Skwierawski</b>, Bachelor's Degree in Computer Science. Worked on the JBike6 redesigned website for 2018 Fall Capstone Project
            </div> 
                </Typography>
        )
    }
}

export default Credit