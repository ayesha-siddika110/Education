import { useEffect, useState } from 'react';
import { CiGrid41 } from 'react-icons/ci';
import { MdOutlineGridOff } from 'react-icons/md';
import PagesCard from './pagesCard';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import "./Categories.css"

const Categories = () => {
    const { category } = useParams([])
    console.log(category);





    const [pages, setpage] = useState([])
    const [grid, setgrid] = useState(true)
    const [gridcol1, setGridcol1] = useState(false)
    const [item, setitem] = useState()

    const categoryData = useLoaderData();
    // const [category, setcategory] = useState()

    // useEffect(() => {
    //     categoryData.map(item=> {
    //         setcategory(item.category);

    //     })


    // }, [categoryData])
    // pages data load
    useEffect(() => {
        fetch('/pages.json')
            .then(res => res.json())
            .then(data => setpage(data))
    }, [])
    const handleGrid = () => {
        setgrid(true)
        setGridcol1(!gridcol1)
    }
    const handlegridcol1 = () => {
        setGridcol1(true)
        setgrid(!grid)
    }

    useEffect(() => {
        if (category === 'All') {
            setitem(pages)

        }
        else if (category) {
            const filterbycategory = [...pages].filter(
                item => item.category === category
            )
            setitem(filterbycategory)
        }
        else {
            setitem(pages)
        }
    }, [pages, category])
    console.log(item)
    return (
        <div className='bg-[#fafafa]'>

            <div className='w-[90%] gap-4 m-auto flex lg:flex-row flex-col-reverse'>
                {/* grid area */}

                <div className='lg:w-[80%]'>
                    <div className='mb-10  flex items-center space-x-5'>
                        <CiGrid41 className={`${grid ? `bg-[#ff6575] text-white` : 'text-black'}hover:bg-[#ff6575] border border-gray-300 shadow-md  rounded-lg text-base p-3 font-semibold  h-12 w-12`} onClick={handleGrid} />
                        <MdOutlineGridOff className={`${gridcol1 && 'bg-[#ff6575] text-white'}hover:bg-[#ff6575] border border-gray-300 shadow-md rounded-lg text-base p-3 font-semibold h-12 w-12`} onClick={handlegridcol1} />
                        <p className='font-medium text-gray-500'>Showing All Courses</p>
                    </div>
                    {
                        grid && (
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {
                                    item && item.map(page => <PagesCard key={page.id} page={page} handlegridcol1={handlegridcol1}></PagesCard>)
                                }
                            </div>


                        )
                    }
                    {
                        gridcol1 && (
                            <div className='grid grid-cols-1 gap-7'>
                                {
                                    item && item.map(page => <PagesCard key={page.id} page={page}></PagesCard>)
                                }
                            </div>


                        )
                    }

                </div>
                <div className='lg:w-[20%]'>
                    <div className='bg-white p-4 rounded-xl'>
                    <h1 className='text-2xl font-bold py-3 text-center'>Search Course</h1>

                    <label className=" input input-bordered flex items-center gap-2 border-2 bg-white  ">
                        <input type="text" className="grow py-3 px-3 mr-3" placeholder="Search" />
                        
                        
                    </label>
                    </div>

                    <div className='bg-white rounded-2xl my-8 pb-8'>

                    <h1 className='text-2xl font-bold py-3 text-center'>Course Category</h1>


                    {/* {
                        categoryData.map(category=> <button>{category.id}</button>)
                    } */}
                    <div className='grid md:grid-cols-3 lg:grid-cols-1 grid-cols-2 space-y-3 mt-6'>

                        {
                            categoryData.map(category => (
                                <NavLink to={`/pages/${category.category}`} key={category.id} className={`border-2 py-2 w-48 rounded-3xl text-center m-auto`}>{category.category}</NavLink>
                            ))

                        }
                    </div>
                    </div>
                </div>





            </div>

        </div>
    );
};

export default Categories;