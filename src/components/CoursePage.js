import React,{useState,useEffect} from 'react'
import {getCourses} from '../api/courseApi';
import CourseList from './CourseList';
import {Link} from 'react-router-dom'

function CoursePage(){
    const [courses, setCourses] = useState([]);
    

    useEffect( () =>{
        getCourses().then(_courses => setCourses(_courses));

    },[])
        return (
            <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CourseList courses={courses} />
            {/* <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course =>{
                        return(
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}
            </>
        
        )
       
    
}

export default CoursePage;