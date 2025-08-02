export const envVars = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export const dropdownOptions = {
  emiOptions: [
    {
      label: "Both",
      value: "All",
    },
    {
      label: "Available",
      value: "Yes",
    },
    {
      label: "Not Available",
      value: "No",
    },
  ],
  mode: [
    {
      label: "Both",
      value: "All",
    },
    {
      label: "Online",
      value: "Online",
    },
    {
      label: "Hybrid",
      value: "Hybrid",
    },
  ],
  sortOptions: [
    { value: "All", label: "Both" },
    { value: "1", label: "Fees: Low to High" },
    { value: "-1", label: "Fees: High to Low" },
  ],
};

export const sortOptions = [];
