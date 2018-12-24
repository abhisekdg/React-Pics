import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({term : event.target.value});
        
    }

    onFormSubmit = (event) => {
    	event.preventDefault();
    	this.props.runOnSubmit(this.state.term)
    }

    componentDidMount() {
        //console.log("My component was rendered to the screen");
    }

    componentDidUpdate() {
        //console.log("My component just updated it re-rendered");
    }

    render() {
    	//console.log("My component just rendered");
        return (
            <div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" 
						value={this.state.term}
						onChange={this.onInputChange}/>
					</div>
				</form>
			</div>

        );
    }
}

export default SearchBar;