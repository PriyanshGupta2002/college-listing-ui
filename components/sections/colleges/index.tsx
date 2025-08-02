"use client";
import React, { useCallback, useState } from "react";
import CollegeFilter from "./college-filter.tsx/filter";
import CollegeListings from "./collegeListing";

const Colleges = () => {
  const [filters, setFilters] = useState<collegeFilterProps>({
    emiFacility: undefined,
    mode: undefined,
    sortFee: undefined,
  });

  const handleFilterChange = useCallback(
    (filterKey: filterKeys, filterKeyvalue: filterKeyValue) => {
      setFilters((prev) => ({
        ...prev,
        [filterKey]: filterKeyvalue,
      }));
    },
    []
  );

  const resetFilter = useCallback(() => {
    setFilters({
      emiFacility: undefined,
      mode: undefined,
      sortFee: undefined,
    });
  }, []);

  return (
    <div className="space-y-2 p-3">
      <CollegeFilter
        onValueChange={handleFilterChange}
        filter={filters}
        resetFilter={resetFilter}
      />
      <CollegeListings filters={filters} />
    </div>
  );
};

export default Colleges;
