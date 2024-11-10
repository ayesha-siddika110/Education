/* eslint-disable react/jsx-key */
import './pages.css'
import Categories from './Categories';


const Pages = () => {

    return (
        <div className='bg-[#fafafa]'>
            {/* head area */}
            <div className='mb-20 head-image text-center flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Courses</h1><br />
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>Home</p>
                    <div className='bg-orange-500 w-2 h-1 rounded-xl'>{""}</div>
                    <p className='font-semibold'>Courses</p>
                </div>
            </div>

            <Categories></Categories>
            










        </div>
    );
};

export default Pages;