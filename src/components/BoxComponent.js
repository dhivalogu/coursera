import React from 'react';
import './css/BoxComponent.css'
class BoxComponent extends React.Component
{
    constructor()
    {
        super();
    }
    render() {
        return(
              
          <div class="box" onClick={()=>this.props.history.push("/course/"+this.props.course.id)} >
          <div class="box-top">
          <img src={this.props.course.image}/>
          </div>
          <div class="box-bottom">
              <div class="title">
                <p><b>{this.props.course.name}</b></p>
              </div>
              <div class="author">
              <p>{this.props.course.aname}</p>
              </div>
              <div class="misc">
              <p>{this.props.course.rating}</p>
              <p>({this.props.course.reviews} Reviews)</p>
              </div>
              <div class="price">
                  <span><b>{this.props.course.price}</b></span>


              </div>
              

          </div>
      </div>
          
            
          )  ;
    }
}

export default BoxComponent;