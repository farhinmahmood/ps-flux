import React,{useState} from 'react';
import CourseForm from './CourseForm';
import * as courseApi from "../api/courseApi"
import {toast} from 'react-toastify'

// import {Prompt} from 'react-router-dom'

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
    const [course,setCourse] = useState({
        id: null,
        slug:"",
        title:"",
        authorId: null,
        category: ""



    });
    function handleChange(event){
        const updatedCourse ={...course,[event.target.name]: event.target.value};
        setCourse(updatedCourse);


    }
    function handleSubmit(event){
        event.preventDefault();
        if(!formIsValid()) return;
        courseApi.saveCourse(course).then(()=>{
            props.history.push("/courses");
            toast.success('Course Saved');
        });
        
    }
    function formIsValid(){
        const _errors = {};
        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author ID is required";
        if(!course.category) _errors.category = "Category is required";

        setErrors(_errors);
        //Form is valid if error object has no properties
        return Object.keys(_errors).length === 0;
    }
    return(
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Are You Sure you want to leave?" /> */}
            {/* {
                props.match.params.slug
            } */}

            <CourseForm 
            errors={errors}
            course={course} 
            onChange={handleChange} 
            onSubmit={handleSubmit}/>
        </>
    )
}

export default ManageCoursePage;