import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Filter = () => {
  return (
    // <div className="container sm:px-16 py-4">
    <div className="flex justify-between">
      <h1>Showing 1 - 10 of 100</h1>

      <div className="flex gap-4">
        <div className="flex justify-center items-center gap-2">
          <p>Show per page:</p>
          <Select>
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
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="default" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    // </div>
  );
};
