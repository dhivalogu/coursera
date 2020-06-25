import React from 'react';
import './css/InputComponent.css'
class InputComponent extends React.Component
{
    constructor()
    {
        super();
    }
    render() {
        return(
            <div className="ee">
            <input type ={this.props.type} className={this.props.className} placeholder={this.props.placeholder} value={this.props.value} onChange={event=>this.props.onChange(event)}/>
            </div>
          )  ;
    }
}

export default InputComponent;