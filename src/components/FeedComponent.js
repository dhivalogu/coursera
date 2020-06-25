import React from 'react';
import "./css/index.css";
import CourseJSON from "./CourseJSON";
import HeaderComponent from './HeaderComponent';
import BoxComponent from './BoxComponent';
class FeedComponent extends React.Component
{
    constructor() 
    {
        super();
        this.state = {
            courseList: []
        }
    }

    componentWillMount(){
        this.setState({
            courseList : CourseJSON.readFromJSONFile()
        });
    }

    printList(){
        let arrayOfCards = []
        for(let item of this.state.courseList){
            arrayOfCards.push(<BoxComponent  course={item} history={this.props.history}/>)
        }
        return arrayOfCards;
    }
    render()
    {
        return (
            <div>
                <div className="fflex-container">
                <HeaderComponent name="Development Courses"/>
                <div className="ftwoflex">
                    <div className="content">
                        <div className="content-header">
                            <p>Courses to get you started</p>
                        </div>
                        <div className="box-container">
                        {this.printList()}
                        </div>
                    </div>
                </div>
                </div>

            </div>
            
        );

    }
}
export default FeedComponent;