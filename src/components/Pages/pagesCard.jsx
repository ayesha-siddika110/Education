/* eslint-disable react/prop-types */
// import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { LuTimerReset } from "react-icons/lu";
import Rating from '@mui/material/Rating';
import { Stack } from "@mui/material";
import { Link, NavLink, useParams } from "react-router-dom";



const PagesCard = ({ page, handlegridcol1 }) => {
    // const {detailId} = useParams([])






    const { id, courseImage, courseTitle, description, lessons, position, ratings, courseTime, teacherImage, teacherName } = page

    const rating = ratings
    // console.log(rating);
    // const [value, setValue] = React.useState(rating);

    return (
        <div className=' border bg-white p-4 rounded-lg text-[#002058]'>
            <div className={`${handlegridcol1 ? ' space-y-3 pb-3 border-b-2' : 'lg:flex'}`}>



                <img className='rounded-lg h-[200px] mb-6' src={courseImage} alt="" />
                <div className={`${handlegridcol1 ? 'space-y-4 ' : 'space-y-5 ml-6'}`}>
                    <div className='flex'>
                        <div><img className='h-12 w-12 rounded-full border p-1 object-cover' src={teacherImage} alt="" /></div>
                        <div className='flex items-center justify-between w-[80%]'>

                            <div className='ml-2'>
                                <h1 className='font-semibold text-lg text-[#002058bb]'>{teacherName}</h1>
                                <p className='text-gray-500 text-sm'>{position}</p>
                            </div>
                            <div>
                                <FaRegHeart className='text-red-600 text-xl' />
                            </div>
                        </div>
                    </div>
                    <h1 className='font-semibold text-2xl'>{courseTitle}</h1>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <MdOutlineMenuBook className='text-red-400 text-xl mr-1' />
                            <p className='text-gray-500'>{lessons} Lesson</p>
                        </div>
                        <div className='flex items-center'>
                            <LuTimerReset className='text-red-400 text-xl mr-1' />

                            <p className='text-gray-500'>{courseTime} Min</p>
                        </div>
                    </div>

            </div>

                    
                </div>
                    <div className="relative">

            {
                        handlegridcol1 ?

                            <div className="flex justify-between items-center mt-4">
                                <Stack className="" spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={rating} precision={rating} readOnly />
                                </Stack>
                                <Link to={`/details/${id}`} className="py-2 px-3 text-sm border-2 rounded-3xl border-violet-400">BUY NOW</Link>
                            </div>
                            :
                            <Link to={`/details/${id}`} className="py-2 px-3 ml-[34%] absolute -top-8 lg:-top-14 text-sm border-2 rounded-3xl border-violet-400">BUY NOW</Link>
                    }
                


            </div>
            





        </div>
    );
};

export default PagesCard;