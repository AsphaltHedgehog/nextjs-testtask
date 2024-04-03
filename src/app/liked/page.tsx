'use client'

import React, { useEffect, useState } from "react";

// swr
import FavoritePageSWR from "@/hooks/swr/favoriteSwr";


export default function LikedPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  
  useEffect(() => {
    const storedJobs = localStorage.getItem("data");
    if (!storedJobs || storedJobs.length < 1) {
      return;
    };
    setFavoriteIds(JSON.parse(storedJobs));
  }, [])


  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Liked Jobs</h2>
      <section className="mx-auto max-w-4xl">
        <FavoritePageSWR favoriteIds={favoriteIds} setFavoriteIds={setFavoriteIds} />
      </section>
    </main>
  )
}