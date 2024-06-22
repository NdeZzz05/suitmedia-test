"use client";
import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("published_at");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPage}&page[size]=${itemsPerPage}&append[]=small_image&append[]=medium_image&sort=${sortOrder}`);

      const fetchedPosts = response.data.data || [];
      const total = response.data.meta ? response.data.meta.total : 0;

      setPosts(fetchedPosts);
      setTotalPosts(total);
    } catch (error) {
      console.error("Error fetching data:", error);
      console.error("Error details:", error.response);
    } finally {
      setLoading(false);
    }
  }, [currentPage, itemsPerPage, sortOrder]);

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleItemsSortBy = (value) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  const firstItem = totalPosts === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalPosts);

  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section className="container sm:px-16 py-8 space-y-8">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1>
          Showing {firstItem} - {lastItem} of {totalPosts}
        </h1>

        <div className="flex gap-4 flex-wrap">
          <div className="flex justify-center items-center gap-2">
            <p>Show per page:</p>
            <Select onValueChange={handleItemsPerPageChange}>
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p>Sort by:</p>
            <Select onValueChange={handleItemsSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="published_at">Newest</SelectItem>
                  <SelectItem value="-published_at">Oldest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        <div className="col-span-12 lg:col-span-4 space-y-3 ">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="">Loading...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post) => {
                const formattedDate = new Date(post?.updated_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                });

                const poto = post?.small_image[0]?.url;
                return (
                  <Card key={post.id}>
                    <div className="space-y-4">
                      <Image src={poto} width={1000} height={1000} alt={post.title} className="rounded-t-lg" loader={loading} loading="lazy" />
                      <div className="space-y-1 px-4 pb-4">
                        <CardDescription className="text-sm text-gray-400">{formattedDate}</CardDescription>
                        <div className="space-y-1">
                          <CardTitle className="font-bold text-black text-lg line-clamp-3">{post?.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className="p-2 bg-slate-100 hover:bg-slate-400  rounded mr-2 text-sm md:text-base">
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 bg-slate-100 hover:bg-slate-400 rounded mr-2 text-sm md:text-base">
          <MdKeyboardArrowLeft />
        </button>
        {generatePageNumbers().map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} className={`px-3 hover:bg-slate-50 rounded  ${currentPage === page ? "font-bold bg-slate-100" : ""} text-sm md:text-base`}>
            {page}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages || totalPages === 0} className="p-2 bg-slate-100 hover:bg-slate-400 rounded ml-2 text-sm md:text-base">
          <MdKeyboardArrowRight />
        </button>
        <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages || totalPages === 0} className="p-2 bg-slate-100 hover:bg-slate-400 rounded ml-2 text-sm md:text-base">
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </section>
  );
};
