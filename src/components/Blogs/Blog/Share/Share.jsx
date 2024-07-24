'use client';
import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';
import { APP_BASE_URL } from '@/lib/constants';
const Share = ({ id, title }) => {
  const shareUrl = APP_BASE_URL + '/blog/' + id;

  return (
    <div className='flex gap-5 p-5'>
      <FacebookShareButton
        url={shareUrl}
        className='duration-150 hover:scale-125'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className='duration-150 hover:scale-125'
      >
        <XIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={shareUrl}
        className='duration-150 hover:scale-125'
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=':: '
        className='duration-150 hover:scale-125'
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default Share;
