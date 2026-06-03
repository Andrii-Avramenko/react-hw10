import { Component } from "react"

class Filter extends Component {
    
    state = {
        filter: "",
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value
        })
        this.props.onChange(value)
    }

    render() {
        return (
            <div>
                <label htmlFor="filter">Find contacts by name</label>
                <input type="text" value={this.state.filter} name="filter" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Filter