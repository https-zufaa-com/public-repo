import React, { useEffect, useState } from 'react';
import { FaHome, FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ShareButtons from '../ShareButtons/ShareButtons';
import { Helmet } from 'react-helmet';

const SingleNewsPage = () => {
    const [news, setNews] = useState();


    useEffect(() => {
        fetch('https://app.zufaa.tech/nagorik-tv/articleapi/191')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data)

            })
    }, [])
    const shareUrl = `https://nagoriktv.com/singlenews/191`;

    const shareUrlWithData = `${news?.title} \n ${news?.images[0]?.file_path
        } \n ${news?.content?.slice(0, 80) + '....'}\n ${shareUrl}`;

    return (
        <div className='min-h-screen w-4/5 mx-auto'>
            <Helmet>
                <title>{news?.title}</title>
                <meta property="og:title" content={news?.title} />
                <meta name="description" content={news?.content.slice(0, 80) + '...'} />
                <meta property="og:description" content={news?.content.slice(0, 80) + '...'} />
                <meta property="og:image" content={news?.images[0]?.file_path} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content='https://app.zufaa.tech/nagorik-tv/articleapi/191' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:image:alt' content={news?.images[0]?.file_path} />
            </Helmet>
            <nav className="flex md:mt-5 lg:mt-14" aria-label="breadcrumb">
                <ol className="flex items-center space-x-2 text-[#B6B5B5] text-sm">
                    <li>
                        <FaHome />
                    </li>
                    <li>
                        <Link to="/" className="text-blue-500 hover:underline">
                            হোম
                        </Link>
                    </li>
                    <li className="text-gray-900">/</li>
                    <li className="text-gray-900">{news?.categories[0]}</li>
                </ol>
            </nav>

            <div className="news-title-share-meta mt-5 md:w-9/12">
                <div className="title">
                    <h2 className="text-3xl md:text-5xl text-black">{news?.title} </h2>
                    <hr className="border-[#D9D9D9] border-2 mt-5"></hr>
                </div>

                <div className="post-meta-share mt-5 md:flex  justify-between">
                    <div className="post-meta">
                        <ol className="flex items-center flex-wrap space-x-3 text-[#B6B5B5] text-sm">
                            <li>
                                <span>By </span>
                                <Link to="/" className="text-sky hover:underline">
                                    Nagorik Tv
                                </Link>
                            </li>

                        </ol>
                    </div>
                    <div className="post-meta-social-share mt-5 md:mt-0 md:flex justify-between">

                        <ShareButtons
                            shareUrl={shareUrl}
                            shareUrlWithData={shareUrlWithData}
                        />
                    </div>
                </div>
            </div>

            <div className="newscontent-sidebar mt-5 md:flex gap-5">
                <div className="news-contents md:w-9/12">
                    <img
                        src={news?.images[0]?.file_path}
                        alt=""
                        className="rounded-sm w-full object-cover"
                    />

                    <div className="my-5 lg:my-14 text-news-p text-base lg:text-xl ">
                        {news?.content.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                                <img
                                    src={news?.images[index + 1]?.file_path}
                                    alt=""
                                    className="rounded-sm w-full object-cover"
                                />
                            </React.Fragment>
                        ))}
                    </div>
                    <hr className="border-[#D9D9D9] border-2 mt-5"></hr>

                    <div className="post-meta-share">
                        <div className="post-meta flex items-center gap-2 mt-5 text-[#908C8C]">
                            <FaTags className="md:mr-2" />
                            {news?.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="border py-1 px-5 hover:text-sky hover:ring-1 hover:ring-offset-1 hover:ring-sky transition-all duration-300"
                                >
                                    #{tag}
                                </div>
                            ))}
                        </div>

                        <div className="share-social mt-5">

                            <ShareButtons
                                shareUrl={shareUrl}
                                shareUrlWithData={shareUrlWithData}
                            />
                        </div>
                    </div>
                    <hr className="border-[#D9D9D9] border-2 mt-5 md:mt-12"></hr>

                </div>


            </div>
        </div>
    );
};

export default SingleNewsPage;