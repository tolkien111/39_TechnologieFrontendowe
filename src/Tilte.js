/* komponent klasowy */
import React, {Component} from 'react'; 
import Description from './Description';
import  './Title.css'

class Title extends Component {

// eslint-disable-next-line no-useless-constructor
constructor(props){
    super(props);
    console.log("konstruktor")
    this.state = {
        tytul: this.props.name,
        autor: this.props.autor,
        class: this.props.class
    }
}


    //componentDidMountodpala sie pomiędzy konstruktorem a renderem
    componentDidMount = () => {
        console.log("componentDidMount")
        this.editstate()
    }
editstate = () => {
    this.setState ({
        autor: this.state.autor + ' nie ufaj temu co przerzytasz w internecie',
        tytul: this.state.tytul.toUpperCase()
    })
}


/*render - funkcja wyświetlająca */
render = () => {
    console.log("render")
    return (
        <div>
            <h1 className={this.state.class}>Tytuł: {this.state.tytul} </h1>
            <h2>Autor: {this.state.autor} </h2>
            <Description description={this.props.description} classDes={this.props.classDes} extDescription={this.props.extDescription} ></Description>
            
        </div>

    )
}
}

export default Title