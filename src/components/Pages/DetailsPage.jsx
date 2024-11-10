// import usePagination from "@mui/material/usePagination/usePagination";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./detail.css"
import { FaStar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { LuTimerReset } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa";



const DetailsPage = () => {
    const { detailId } = useParams([])
    const data = useLoaderData()
    // console.log(data);
    const [singleData, setsingleData] = useState([])
    useEffect(() => {
        data && data.map(item => {
            if (item.id == detailId)
                setsingleData(item)
        })

    }, [data, detailId])

    const [category, setcategory] = useState([])

    useEffect(()=>{
        fetch('../category.json')
        .then(res=> res.json())
        .then(data => setcategory(data))
    })

    // console.log(singleData);

    const { id, courseImage, courseTitle, description, lessons, position, ratings, courseTime, teacherImage, teacherName } = singleData || {}





    return (
        <div className="bg-[#fafafa] pb-8">
            <div className="background-imag pl-20 pt-[5%] text-white ">
                <div className="space-y-3">

                    <div className="flex items-center h-full text-white">

                        <div><img className='h-12 w-12 rounded-full border p-1 object-cover' src={teacherImage} alt="" /></div>
                        <div className='flex items-center justify-between w-[80%]'>

                            <div className='ml-2'>
                                <h1 className='font-semibold text-lg'>{teacherName}</h1>
                                <p className=' text-sm'>{position}</p>
                            </div>

                        </div>
                    </div>
                    <p className="font-semibold text-5xl">{courseTitle}</p>
                    <div className="flex space-x-5 items-center">
                        <div>
                            <span className="flex"><MdOutlineMenuBook className='text-red-400 text-xl mr-1' /> {lessons} Lessons</span>
                        </div>
                        <div>
                            <span className="flex"><LuTimerReset className='text-red-400 text-xl mr-1' /> {courseTime} hours</span>
                        </div>
                        <div>
                            <span className="flex items-center"><FaUsers className='text-red-400 text-xl mr-1' /> 20 Enrolled</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="text-[#ffbc34] flex space-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>
                            <div className="pl-2">
                                {ratings}

                            </div>
                        </div>

                    </div>

                </div>


            </div>

            <div className="lg:flex  w-[90%] m-auto gap-8">

            <div className="lg:w-[70%] flex m-auto gap-8 my-8">
                <div className="space-y-8">

                    <div className=" bg-white border rounded-3xl p-8 space-y-4">

                        <h1 className="text-2xl font-bold text-blue-900">Overview</h1>
                        <p className="text-gray-600 text-justify">
                            {description}
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus magnam iste consequatur architecto totam optio quo laboriosam ab dolorum accusantium ut quod quaerat, hic excepturi praesentium nulla dolor, eligendi, repudiandae doloribus. Deserunt sed omnis consectetur totam ipsa? Consequuntur aut quo excepturi est, iure a sapiente voluptatem, perspiciatis ut asperiores similique!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus magnam iste consequatur architecto totam optio quo laboriosam ab dolorum accusantium ut quod quaerat, hic excepturi praesentium nulla dolor, eligendi, repudiandae doloribus. Deserunt sed omnis consectetur totam ipsa? Consequuntur aut quo excepturi est, iure a sapiente voluptatem, perspiciatis ut asperiores similique!

                        </p>
                    </div>
                    <div className=" bg-white border space-y-4 rounded-3xl p-8">

                        <h1 className="text-2xl font-bold text-blue-900">Includes</h1>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />{courseTime} hours on-demand video</p>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />{lessons} Lessons</p>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />50 Downloadable resources</p>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />Full lifetime access</p>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />Access on mobile and TV</p>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />Certificate of Completion</p>
                        
                    </div>
                    <div className=" bg-white border space-y-4 rounded-3xl p-8">

                        <h1 className="text-2xl font-bold text-blue-900">Requirments</h1>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />design experience necessary</p>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />You don’t need to buy any software</p>
                        <p className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />A basic understanding of HTML and CSS</p>
                        
                    </div>
                </div>
            </div>
            <div className="lg:w-[30%] relative space-y-8">
                {/* absolute div */}
                <div className="space-y-5 lg:-mt-52 border bg-white p-6 rounded-xl">
                    <div><img className="" src={courseImage} alt="" /></div>
                    <div className="border bg-green-600 text-white text-center py-3 text-xl font-semibold rounded-3xl">

                        <Link className="w-full">Enroll Course</Link>
                    </div>
                    <div className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white text-center py-3 text-xl font-semibold rounded-3xl">

                        <Link className="w-full">Add to Bookmark</Link>
                    </div>

                </div>
                <div className="space-y-5 -mt-52 border bg-white p-8 rounded-xl">
                    <p className="flex items-center gap-2 text-[#4c5a94] "><MdCollectionsBookmark className="text-blue-900"/> Lessons : <span className="font-bold">{lessons}</span></p>
                    <p className="flex items-center gap-2 text-[#4c5a94] "><FaStopwatch className="text-blue-900"/> Duration : <span className="font-bold">{courseTime} hrs</span></p>
                    <p className="flex items-center gap-2 text-[#4c5a94] "><BsBarChartFill className="text-blue-900"/> Level : <span className="font-bold">Expart</span></p>
                    <p className="flex items-center gap-2 text-[#4c5a94] "><FaUsers className="text-blue-900"/> Maximum Student : <span className="font-bold">1000</span></p>
                </div>
                <div className=" bg-white space-y-4 rounded-3xl p-8">

                        <h1 className="text-2xl font-bold text-blue-900">Course Category</h1>
                        
                        {
                            category && category.map(item=> <Link to="/pages" key={item.id} className="text-gray-600 flex items-center gap-2"><GoDotFill className="text-red-400 " />{item.category}</Link>)
                        }
                        
                        
                    </div>
            </div>
            </div>


        </div>
    );
};

export default DetailsPage;