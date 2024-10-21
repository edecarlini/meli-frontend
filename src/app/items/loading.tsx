'use client';

import SearchResultsSkeleton from '@/components/SearchResults/Skeleton/SearchResultsSkeleton';

const Loading = () => {
  return <SearchResultsSkeleton count={4} />;
};

export default Loading;
