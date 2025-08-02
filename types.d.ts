interface approvalDetails {
  title: string;
  logo: string;
  id: number;
}

interface universitiesProsCons {
  content: string;
  id: number;
}
interface universityDataType {
  total_count: number;
  university: {
    id: number;
    name: string;
    logo: string;
    mode: string;
    approval_details: approvalDetails[];
    emi_facility_available: string;
    universities_pros_cons: universitiesProsCons[];
    cv_rating: number;
    prospectus_link: string;
  };
  fee: number;
}

interface paginationType {
  lower: number;
  upper: number;
}

type ModeType = "Online" | "Hybrid" | undefined | "All";

type EmiFacilityType = "Yes" | "No" | undefined | "All";

type SortFee = "1" | "-1" | undefined | "All";

type filterKeys = "emiFacility" | "mode" | "sortFee";

type filterKeyValue = ModeType | EmiFacilityType | SortFee;

interface collegeFilterProps {
  mode: ModeType;
  emiFacility: EmiFacilityType;
  sortFee: SortFee;
}

interface selectFilterProps {
  options: {
    label: string;
    value: string;
  }[];
  onValueChange: (value: string) => void;
  value: string;
  placeholder: string;
}
