import React from 'react';
import CourseJSON from "./CourseJSON";
import HeaderComponent from './HeaderComponent';
import "./css/courseComponent.css";
import ButtonComponent from './ButtonComponent';
class courseComponent extends React.Component
{
    constructor() 
    {
        super();
        this.state=
        {
            course:''
        }
    }
    componentWillMount(){
        this.setState({
            course : CourseJSON.readFromJSONFile1(this.props.match.params.id)
        });
    }

    render()
    {
        return (
            <div className="cflex-container">
               
                <HeaderComponent name="Development Courses"/>
                <div className="ctwoflex">
                
                    <div className="ctwoflex-top">

                        <div className="ctwoflex-top-image">
                        <img src={this.state.course.image}></img>
                        </div>
                        <div className="ctwoflex-top-details">
                            <h1>{this.state.course.name}</h1>
                            <p>By</p><br/>
                            <h4>{this.state.course.aname}</h4><br/>
                            <p>{this.state.course.rating} ({this.state.course.reviews})</p><br/>
                            <span>
                            <ButtonComponent name="cart" type="button" value="Add To Cart" /><br/>
                            <ButtonComponent name="checkout" type="button" value="Buy"/>
                            </span>
                        </div>
                    </div>
                    <div className="ctwoflex-bottom">
                    <h2>Description</h2><br/>
                    <p>
                    {this.state.course.desc}
                    </p>
                    </div>
                </div>
                

            </div>
            
        );

    }
}
export default courseComponent;