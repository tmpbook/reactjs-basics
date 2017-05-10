import React from "react"
import PropTypes from "prop-types"

export class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Changed Link"
        }
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }
    render() {
        // console.log(this.props)
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-success">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Creet</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">change link name</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
}
