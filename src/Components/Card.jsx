import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify'

const Card = (props) => {
    let course = props.course
    let likedCourses = props.likedCourses
    let setLikedCourse = props.setLikedCourse
    function clickHandler() {
        // logic
        if (likedCourses.includes(course.id)) {
            // pehle se like hua hai
            setLikedCourse((prev) => prev.filter((cid) => (cid !== course.id)))
            toast.warning("Like Removed")
        }
        else {
            // pehle se like nhi hai
            // insert into linked   courses
            if (likedCourses.length === 0) {
                setLikedCourse([course.id])
            }
            else {
                setLikedCourse((prev) => [...prev, course.id])
            }
            toast.success("Like Added")
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative '>
                <img src={course.image.url} alt="" />
                <div>
                    <button onClick={clickHandler} className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                        {
                            likedCourses.includes(course.id) ?
                                <FcLike fontSize="1.75rem" />
                                :
                                <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length >100 ? (course.description.substr(0,100))+"..." : (course.description)
                    }
                </p>
            </div>


        </div>
    )
}

export default Card