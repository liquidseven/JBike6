import React, {Component} from 'react'
import {Scatter} from 'react-chartjs-2'


class Graph extends Component {
    constructor(props) {
        super(props)
        this.d = {
            datasets: [
                {
                    label: "Re(λ)",
                    backgroundColor: "blue",
                    borderColor: "blue",
                    data: [{x:0,y:5.5},{x:0.1,y:5.4},{x:0.2,y:5.3}, {x:0.3,y:5.2}, {x:0.4,y:5.1}, {x:0.5,y:5.0,},{x:0.6,y:4.9},{x:0.6,y: 4.8}, {x:0.7,y:4.7},{x:0.8,y:4.6}, {x:0.9,y:4.5}, {x:1.0,y:4.6}],
                    //data: [{x:0,y:5.5}, {x:1.0,y:4.6}],
                    fill: false
                },
                {
                    label: "Re(λ)",
                    backgroundColor: "cyan",
                    borderColor: "cyan",
                    data: [],
                    fill: false
                },
                {
                    labels: [1,2,3,4,5,6,7,8,9,10],
                    type: 'bar',
                    label: "Weave speed",
                    backgroundColor: "green",
                    borderColor: "green",
                    data: [{x:5.2270,y:10}, {x:7.9807,y:10}],
                    fill: true
                },
                {
                    type: 'bar',
                    label: "Capsize speed",
                    backgroundColor: "red",
                    borderColor: "red",
                    data: [{x:7.9807,y:10}],
                    fill: true
                }
            ]
          }

          this.options = {
            options: {
                showLines: true,

                responsive: true,
                title : {
                    display : true,
                    title: 'Jbike6 calculated Speeds'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
							display: true,
							labelString: 'Forward Speed m/s'
						},
                        ticks : {
                            suggestedMin:0,
                            suggestedMax: 10
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
							display: true,
							labelString: 'Re(λ) in blue and lm(λ) in cyan - 1/s\n\nStable <-> Unstable'
						},
                        ticks: {
                            suggestedMin: -10,
                            suggestedMax: 10
                        }
                    }]
                }
            }
          }
    }

    getReLamdba() {
        let lambda = []
        let xpoint = 5.5
        let ypoint = 0.0
        for (let x = 0; x < 1; x+=0.1)
            lambda.push({x: xpoint--, y: ypoint++})
        return lambda

    }

    render() {
        return(
            <div>
                <Scatter data={this.d} options={this.options.options} width={600} height={250}/>
            </div>
        )
    }

}

export default Graph