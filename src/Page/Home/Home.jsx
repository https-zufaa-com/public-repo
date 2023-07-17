import React from 'react';
import SingleNewsPage from '../SingleNewsPage/SingleNewsPage';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav className='bg-yellow-500'>
                <div className='w-4/5 mx-auto flex gap-4 py-4'>
                    <Link to='/' className="lg:text-base rounded-md lg:rounded-none">
                        হোম
                    </Link>
                    <Link to='/' className="lg:text-base rounded-md lg:rounded-none">
                        সংবাদ
                    </Link>
                </div>
            </nav>
            <SingleNewsPage></SingleNewsPage>
        </div>
    );
};

export default Home;