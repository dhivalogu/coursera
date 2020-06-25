import React from 'react';
import './css/ButtonComponent.css'
class ButtonComponent extends React.Component
{
    constructor()
    {
        super();
    }
    render() {
        return(
            
                    <button   className="b" onClick={this.props.onClick}>{this.props.value}</button>
          )  ;
    }
}

export default ButtonComponent;