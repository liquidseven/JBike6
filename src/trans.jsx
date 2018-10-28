class Components extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            Rear Wheel
            <input type="number" name="rWheelDiameter"></input>
            <input type="number" name="rWheelMass"></input>
            <input type="number" name="rWheellxx"></input>
            <input type="number" name="rWheellyy"></input>
            <input type="number" name="rWheellzz"></input>
            Front Wheel
            <input type="number" name="lWheelDiameter"></input>
            <input type="number" name="lWheelMass"></input>
            <input type="number" name="lWheellxx"></input>
            <input type="number" name="lWheellyy"></input>
            <input type="number" name="lWheellzz"></input>

            <table>
                <tr>
                    <td></td>
                    <td>Rear Frame</td>
                    <td>Rider</td>
                    <td>Rear Rack</td>
                </tr>
                <tr>
                    <td><label>X</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>Y</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>Mass</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>l11</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>l22</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>lzz</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>Principal Axis Angle (alpha)</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><button>XY</button></td>
                    <td>Front Fork</td>
                    <td>Front Basket</td>
                </tr>
                <tr>
                    <td><label>U</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>V</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>Mass</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>l11</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>l22</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>lzz</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
                <tr>
                    <td><label>alpha</label></td>
                    <td><input type="number"></input></td>
                    <td><input type="number"></input></td>
                </tr>
            </table>

        </div>)
    }
}

class BikePic extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div>Place for Bicycle Picture Component</div>)
    }
}

class Graph extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div>Place for Graph Component</div>)
    }
}

class Main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div>
        <Bike />
        <ForwardSpeeds />
        <Components />
        <BikePic />
        <Graph />
        </div>
        );
    }
}

ReactDOM.render(<Main />, contentNode);