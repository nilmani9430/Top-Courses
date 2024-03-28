import React, { useState } from 'react'
import Card from "./Card"

const Cards = (props) => {
    let courses = props.courses
    let category = props.category
    const [likedCourses, setLikedCourse] = useState([])
    // let allCourses = []

    // const getCourses = () => {
    //     Object.values(courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourses.push(course)
    //         })
    //     })
    //     return allCourses
    // }

    function getCourses() {

        if (category === "All") {
            let allCourses = []
            Object.values(courses).forEach(array => {
                array.forEach((courseData) => {
                    allCourses.push(courseData)
                })
            })
            return allCourses
        }
        else{
            return courses[category]
        }

    }


    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                courses && getCourses().map((course) => {
                    return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourse={setLikedCourse} />)

                })
            }
        </div>
    )
}

export default Cards