import React from 'react';
import './css/HeaderComponent.css'
class HeaderComponent extends React.Component
{
    constructor()
    {
        super();
    }
    render() {
        return(
            
            <div class="foneflex">
           
             <p>{this.props.name} </p>
         
            </div>
          )  ;
    }
}

export default HeaderComponent;