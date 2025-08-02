/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { envVars } from "@/lib/constants";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import CollegeCard from "./collegeCard";
import CollegeCardSkeleton from "@/components/skeletons/university-card";

interface CollegeListingProps {
  filters: collegeFilterProps;
}
const CollegeListings: FC<CollegeListingProps> = ({ filters }) => {
  const [universityData, setUniversityData] = useState<universityDataType[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<paginationType>({
    lower: 0,
    upper: 6,
  });
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const pageSize = 6;

  const fetchCollegeData = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("cid", "1");
    formData.append("uid", "467d8841-b3c3-42cc-a439-ee4d912bf1c6");
    formData.append("lower", pagination.lower.toString());
    formData.append("upper", pagination.upper.toString());

    try {
      const response = await fetch(`${envVars.baseUrl}/getuserbyuniversity/`, {
        method: "POST",
        body: formData,
      });

      const {
        data,
      }: {
        data: universityDataType[];
      } = await response.json();

      if (data.length < pageSize) {
        setHasMore(false);
      }
      setUniversityData((prev) => {
        const filteredData = data.filter((college) => {
          const matchesMode =
            !filters.mode ||
            filters.mode === "All" ||
            college.university.mode.toLowerCase() ===
              filters.mode.toLowerCase();

          const matchesEmi =
            !filters.emiFacility ||
            filters.emiFacility === "All" ||
            college.university.emi_facility_available.toLowerCase() ===
              filters.emiFacility.toLowerCase();

          return matchesMode && matchesEmi;
        });

        const combinedData = [...prev, ...filteredData];

        if (filters.sortFee) {
          const sortMultiplier = filters.sortFee === "1" ? 1 : -1;
          combinedData.sort(
            (a, b) => sortMultiplier * (Number(a.fee) - Number(b.fee))
          );
        }

        return combinedData;
      });

      setPagination((prev) => ({
        lower: prev.upper,
        upper: prev.upper + pageSize,
      }));
    } catch (error: any) {
      console.error("Error fetching university data:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  }, [
    hasMore,
    loading,
    pagination.lower,
    pagination.upper,
    filters.sortFee,
    filters.mode,
    filters.emiFacility,
  ]);

  useEffect(() => {
    setPagination({ lower: 0, upper: pageSize });
    setUniversityData([]);
    setHasMore(true);
  }, [filters.mode, filters.emiFacility, filters.sortFee]);

  useEffect(() => {
    fetchCollegeData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !loading) {
          fetchCollegeData();
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [fetchCollegeData, hasMore, loading]);

  if (error) {
    return (
      <div className="w-full text-red-600 font-semibold flex items-center justify-center">
        Some Error Occured! Please try again after sometime.{" "}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">College Listings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
        {initialLoading ? (
          <>
            <CollegeCardSkeleton />
            <CollegeCardSkeleton />
            <CollegeCardSkeleton />
            <CollegeCardSkeleton />
            <CollegeCardSkeleton />
            <CollegeCardSkeleton />
          </>
        ) : (
          universityData.map((item, idx) => (
            <CollegeCard
              key={idx}
              approvalDetails={item.university.approval_details}
              emiFacilityAvailable={item.university.emi_facility_available}
              fee={item.fee}
              logo={item.university.logo}
              mode={item.university.mode}
              name={item.university.name}
              universities_pros_cons={item.university.universities_pros_cons}
              cvRating={item.university.cv_rating}
              brochureLink={item.university.prospectus_link}
            />
          ))
        )}
        <>
          {loading && (
            <>
              <CollegeCardSkeleton />
              <CollegeCardSkeleton />
              <CollegeCardSkeleton />
              <CollegeCardSkeleton />
              <CollegeCardSkeleton />
              <CollegeCardSkeleton />
            </>
          )}
        </>
      </div>

      <div ref={loaderRef} className="w-full text-center mt-4">
        {!hasMore && <span className="text-gray-400">No more results.</span>}
      </div>
    </div>
  );
};

export default CollegeListings;
