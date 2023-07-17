import React from 'react';

import {
    FaCopy,
    FaFacebookF,
    FaShareAlt,
    FaTwitter,
    FaWhatsapp,
} from 'react-icons/fa';

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share';

const ShareButtons = ({ shareUrl, shareUrlWithData }) => {
    const copyLink = (e) => {
        e.preventDefault();
        // console.log(shareUrl);
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
    };

    return (
        <div className="social-share flex gap-2 items-center md:mt-0">

            <span className="text-[#908C8C]">
                <FaShareAlt className="flex md:mr-2" />
            </span>


            <FacebookShareButton url={shareUrl}>
                <FaFacebookF className="text-fb h-7 w-7 border border-fb p-1 hover:ring-fb hover:ring-1 hover:ring-offset-1 transition-all duration-300" />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrlWithData}>
                <FaTwitter className="text-tw h-7 w-7 border border-tw p-1 hover:ring-tw hover:ring-1 hover:ring-offset-1 transition-all duration-300" />
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrlWithData}>
                <FaWhatsapp className="text-wapp h-7 w-7 border border-wapp p-1 hover:ring-wapp hover:ring-1 hover:ring-offset-1 transition-all duration-300" />
            </WhatsappShareButton>

            <button onClick={(e) => copyLink(e)}>
                <FaCopy className="text-[#908C8C] h-7 w-7 border border-[#908C8C]  p-1 hover:ring-[#908C8C] hover:ring-1 hover:ring-offset-1 transition-all duration-300" />
            </button>

        </div>
    );
};

export default ShareButtons;
