/* Class based Component 
 * State concept there in class based components, no state concept in functional based components.
 * super(props); // we are calling parent (Component) constructor method using super() method.
 * state is a plain javascript object that exists any class based component. We initializing the state by defining the class constructor.
 */

import React, { Component } from 'react';
import '../../style/style.css';

const search_bar = {
    margin: '20px',
    padding: '2px'
}

const search_barInput = {
    width: '75%'
}

// Function based component, which does not have state component.
/*const SearchBar = () => {
    return <input />
}*/

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''}; // plain object literal 
    }

    render() {
        return (
                <div style={search_bar}>
                    <input style={search_barInput} onChange={ event => this.onInputChange(event.target.value)} /><br />
                </div>
               )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

/*
 * We are using list of concepts from React
 * import and export concepts
 * class based component using extend keyword
 * constructor method to initialize an object of a class
 * use super() method to call parent class constructor
 * we can create state concepts in constructor, state object is plain javascript object literal
 * using render method we can build template 
 * event handlers in react
 * used ES6 arrow function when onChange event handler invoke
 * setState() method is used to modify the value of the state object
 * */
