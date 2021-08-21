import React, {Component} from 'react';

class ExtendsDescription extends Component {


    constructor (props){
        super(props);
        this.state = {
            extDescription: this.props.extDescription,
        }
        
    }
componentDidMount = () => {
    this.editstate()
    }

editstate = () => {
    this.setState({
        extDescription: this.state.extDescription.toLowerCase()
    })
}

render = () => {
    return(
        <div>
            <h4>Rozszerzony opis: {this.state.extDescription}</h4>
        </div>
    )
}
    
}
export default ExtendsDescription