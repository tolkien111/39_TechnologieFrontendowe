import React, {Component} from 'react';
import ExtendsDescription from './ExtendsDescription';
import  './Title.css'

class Description extends Component {


    constructor (props){
        super(props);
        this.state = {
            description: this.props.description,
            classDes: this.props.classDes,
            extDescription: this.props.extDescription
        }
        
    }
componentDidMount = () => {
    this.editstate()
    }

editstate = () => {
    this.setState({
        description: this.state.description.toLowerCase()
    })
}

render = () => {
    return(
        <div>
            <h3 className={this.state.classDes}>Opis: {this.state.description}</h3>
            <ExtendsDescription extDescription={this.state.extDescription}></ExtendsDescription>
        </div>
    )
}
    
}
export default Description