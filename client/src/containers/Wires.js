import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWires } from '../actions/wires'
import Wire from '../components/WireData'

class Wires extends Component {

    componentDidMount() {
        this.props.getWires()
    }

    render() {
        return (
            <div className="WiresContainer">
                <h3>Wires</h3>
                {this.props.wires.map(wire =>
                    <Wire
                        key={wire.id}
                        wire={wire}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        contacts: state.wires
    })
}

export default connect(mapStateToProps, { getWires })(Wires)