import Search from '@/components/Search/Search';
import React from 'react';

export const metadata = {
  title: 'Search',
};

const page = ({ params }) => {
  return (
    <Search
      query={decodeURIComponent(params.searchQuery)}
      locale={params.locale}
    />
  );
};

export default page;
