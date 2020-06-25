import mockData from './data.json'

class CourseJSON {
    static readFromJSONFile(){
        var courseList = [];
        var courseFromFile = mockData;
        for(let currentCourse of courseFromFile){
            let object = {
                id: currentCourse.id,
                name: currentCourse.name,
                aname: currentCourse.aname,
                rating: currentCourse.rating,
                reviews: currentCourse.reviews,
                image: currentCourse.image,
                price:currentCourse.price
            }
            courseList.push(object);
        }
        return courseList;
    }
    static readFromJSONFile1(id1){
        
        console.log(id1);
        var courseFromFile = mockData;
        for(var i=0;i<courseFromFile.length;i++)
        {
            if(courseFromFile[i].id==id1)
            {
                let object = {
                    id: courseFromFile[i].id,
                    name: courseFromFile[i].name,
                    aname: courseFromFile[i].aname,
                    rating: courseFromFile[i].rating,
                    reviews: courseFromFile[i].reviews,
                    image: courseFromFile[i].image,
                    price:courseFromFile[i].price,
                    desc:courseFromFile[i].description
                }
                return object;
            }
        }
        
        
    }
}

export default CourseJSON;