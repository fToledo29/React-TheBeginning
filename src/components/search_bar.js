import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    

    render() {
        return (
            <div className="form-group">
            <label htmlFor="example">Example: </label>
                <input name="example" 
                placeholder="Enter text" 
                title="Simple text" 
                className="form-control myInput" 
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} />
                <small id="exampleHelp" 
                className="form-text text-muted">
                    Type a video you want to find.
                </small>
            </div>
        );
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
        console.log(event.target.value);
    }
}

export default SearchBar;

