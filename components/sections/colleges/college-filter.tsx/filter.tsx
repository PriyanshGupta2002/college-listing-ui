import React, { FC, useEffect, useState } from "react";
import SelectFilter from "./select-filter";
import { dropdownOptions } from "@/lib/constants";
import { Toggle } from "@/components/ui/toggle";
import { ArrowDown, ArrowUp, Filter, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAutoHideOnScroll } from "@/hooks/useScrollHook";

interface CollegeFilterProps {
  onValueChange: (
    filterKey: filterKeys,
    filterKeyvalue: filterKeyValue
  ) => void;
  filter: collegeFilterProps;
  resetFilter: () => void;
}

const CollegeFilter: FC<CollegeFilterProps> = ({
  onValueChange,
  filter,
  resetFilter,
}) => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const { scrollDirection, hasAutoHidden, setHasAutoHidden, scrollThreshold } =
    useAutoHideOnScroll(50, 10);

  useEffect(() => {
    if (
      scrollDirection === "down" &&
      showFilter &&
      !hasAutoHidden &&
      window.pageYOffset > scrollThreshold
    ) {
      setShowFilter(false);
      setHasAutoHidden(true);
    }
  }, [
    scrollDirection,
    showFilter,
    hasAutoHidden,
    scrollThreshold,
    setHasAutoHidden,
  ]);

  const handleToggleFilter = (pressed: boolean) => {
    setShowFilter(pressed);
    if (pressed && hasAutoHidden) {
      setHasAutoHidden(true);
    }
  };

  const hasActiveFilters = filter.mode || filter.emiFacility || filter.sortFee;
  const sortingText = filter.sortFee === "-1" ? "High to Low" : "Low to High";
  const emiFacilityAvailabilty =
    filter.emiFacility === "Yes" ? "Available" : "Not Available";

  return (
    <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 rounded-md backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Filters
            </span>
          </div>

          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                onClick={resetFilter}
                size={"sm"}
                className="cursor-pointer"
                variant={"resetFilter"}
              >
                <RotateCcw size={12} />
                Reset
              </Button>
            )}

            <Toggle
              pressed={showFilter}
              onPressedChange={handleToggleFilter}
              className="h-8 px-3 text-xs font-medium transition-all duration-200 
                     data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 
                     data-[state=on]:dark:bg-blue-900/30 data-[state=on]:dark:text-blue-300
                     hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="mr-1">{showFilter ? "Hide" : "Show"}</span>
              {showFilter ? (
                <ArrowUp
                  size={14}
                  className="transition-transform duration-200"
                />
              ) : (
                <ArrowDown
                  size={14}
                  className="transition-transform duration-200"
                />
              )}
            </Toggle>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showFilter ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100/50 
                         dark:from-gray-800 dark:to-gray-900/50 
                         rounded-xl p-4 sm:p-6 
                         border border-gray-200/50 dark:border-gray-700/50
                         shadow-sm"
          >
            <div className="flex flex-col gap-4 sm:hidden">
              <div className="space-y-2">
                <label
                  htmlFor="mode-filter-mobile"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  Mode
                </label>
                <div className="relative">
                  <SelectFilter
                    key="mode-filter-mobile"
                    options={dropdownOptions.mode}
                    onValueChange={(value) =>
                      onValueChange("mode", value as filterKeyValue)
                    }
                    placeholder="Select Mode"
                    value={filter.mode ?? ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="emi-filter-mobile"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  EMI Facility
                </label>
                <div className="relative">
                  <SelectFilter
                    key="emi-filter-mobile"
                    options={dropdownOptions.emiOptions}
                    onValueChange={(value) =>
                      onValueChange("emiFacility", value as filterKeyValue)
                    }
                    placeholder="Select EMI Facility"
                    value={filter.emiFacility ?? ""}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="fee-sort-mobile"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  Sort Fees
                </label>
                <div className="relative">
                  <SelectFilter
                    key="fee-sort-mobile"
                    options={dropdownOptions.sortOptions}
                    onValueChange={(value) =>
                      onValueChange("sortFee", value as filterKeyValue)
                    }
                    placeholder="Sort Fees..."
                    value={filter.sortFee ?? ""}
                  />
                </div>
              </div>
            </div>

            <div className="hidden sm:flex sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="space-y-2">
                <label
                  htmlFor="mode-filter-desktop"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  Mode
                </label>
                <div className="relative">
                  <SelectFilter
                    key="mode-filter-desktop"
                    options={dropdownOptions.mode}
                    onValueChange={(value) =>
                      onValueChange("mode", value as filterKeyValue)
                    }
                    placeholder="Select Mode"
                    value={filter.mode ?? ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="emi-filter-desktop"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  EMI Facility
                </label>
                <div className="relative">
                  <SelectFilter
                    key="emi-filter-desktop"
                    options={dropdownOptions.emiOptions}
                    onValueChange={(value) =>
                      onValueChange("emiFacility", value as filterKeyValue)
                    }
                    placeholder="Select EMI Facility"
                    value={filter.emiFacility ?? ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="fee-sort-mobile"
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  Sort Fees
                </label>
                <div className="relative">
                  <SelectFilter
                    key="fee-sort-mobile"
                    options={dropdownOptions.sortOptions}
                    onValueChange={(value) =>
                      onValueChange("sortFee", value as filterKeyValue)
                    }
                    placeholder="Sort Fees..."
                    value={filter.sortFee ?? ""}
                  />
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    Active filters:
                  </span>
                  {filter.mode && (
                    <span
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                   bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      Mode: {filter.mode}
                    </span>
                  )}
                  {filter.emiFacility && (
                    <span
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                   bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    >
                      EMI: {emiFacilityAvailabilty}
                    </span>
                  )}
                  {filter.sortFee && (
                    <span
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                   bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    >
                      Sort Fee: {sortingText}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFilter;
