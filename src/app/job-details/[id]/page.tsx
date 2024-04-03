'use client'

import React, { useState } from 'react';
// import Image from 'next/image';

// api
import DetailPageSWR from '@/hooks/swr/DetailSwr';

interface JobDetailsPageProps {
  params: { id: string; }
}


const JobDetailsPage = ({ params }: JobDetailsPageProps) => {
  const [ id, setId ] = useState<string>(decodeURIComponent(params.id))

  return (
    <DetailPageSWR jobsId={id}/>
  );
};



export default JobDetailsPage