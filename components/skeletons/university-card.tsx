import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CollegeCardSkeleton = () => {
  return (
    <Card className="shadow-none border-b-blue-300 rounded-md">
      <CardContent className="p-2">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2 w-24">
              <Skeleton className="w-[90px] h-[90px] rounded-md" />
              <div className="flex items-center gap-1">
                <Skeleton className="w-4 h-4 rounded-full" />
                <Skeleton className="w-6 h-4" />
                <Skeleton className="w-4 h-3" />
              </div>
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <Skeleton className="w-3/4 h-6 mb-1" />
              <div className="flex flex-wrap gap-2 mt-1">
                <Skeleton className="w-12 h-5 rounded-full" />
                <Skeleton className="w-14 h-5 rounded-full" />
                <Skeleton className="w-16 h-5 rounded-full" />
                <Skeleton className="w-12 h-5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col h-full justify-between gap-4">
        <div className="flex flex-col w-full gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-20 h-4" />
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-16 h-6 rounded-full" />
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Skeleton className="w-24 h-6" />
            <Skeleton className="w-20 h-4" />
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <Skeleton className="w-16 h-4 mb-1" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="w-24 h-6 rounded-full" />
              <Skeleton className="w-20 h-6 rounded-full" />
              <Skeleton className="w-28 h-6 rounded-full" />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
          <Skeleton className="w-24 h-9 rounded-md" />
          <Skeleton className="w-32 h-9 rounded-md" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CollegeCardSkeleton;
