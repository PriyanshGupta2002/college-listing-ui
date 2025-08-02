import React, { FC } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Check, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { downloadBrochure, modeColorMap } from "@/lib/utils";
interface CollegeCardProps {
  name: string;
  logo: string;
  mode: string;
  approvalDetails: approvalDetails[];
  emiFacilityAvailable: string;
  universities_pros_cons: universitiesProsCons[];
  fee: number;
  cvRating: number;
  brochureLink: string;
}
const CollegeCard: FC<CollegeCardProps> = ({
  approvalDetails,
  emiFacilityAvailable,
  fee,
  logo,
  mode,
  name,
  universities_pros_cons,
  cvRating,
  brochureLink,
}) => {
  return (
    <Card className="shadow-none border-b-blue-300 rounded-md">
      <CardContent className="p-2">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2 w-24">
              <Image
                src={logo}
                alt={name}
                width={90}
                height={90}
                className="rounded-md"
              />
              <span className="flex items-center gap-1 text-yellow-600 font-semibold text-sm">
                <Star size={18} className="stroke-yellow-600 fill-yellow-400" />
                <span className="text-base">{cvRating}</span>
                <span className="text-xs text-gray-500 font-normal">/5</span>
              </span>
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <span className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                {name}
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {approvalDetails.map((item) => (
                  <Badge key={item.id} variant={"brand"}>
                    {item.title}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col h-full justify-between gap-4">
        <div className="flex flex-col w-full gap-1 text-sm text-gray-700">
          <span className="text-base font-medium dark:text-neutral-200">
            Duration:{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              2 years
            </span>
          </span>

          <span className="text-base font-medium flex items-center dark:text-neutral-200 gap-2">
            Mode:
            <span
              className={`text-sm font-semibold px-2 py-0.5 rounded-full capitalize ${
                modeColorMap[mode.toLowerCase()] ||
                "bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
              }`}
            >
              {mode}
            </span>
          </span>

          <div className="text-lg font-bold text-indigo-500 dark:text-indigo-300">
            ₹{new Intl.NumberFormat("en-IN").format(fee)}{" "}
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              for full course
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {universities_pros_cons.length > 0 && (
              <>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Benefits
                </span>
                <ul className="flex flex-wrap gap-2 text-xs">
                  {universities_pros_cons.map((pros) => (
                    <li
                      key={pros.id}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100/55 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      <Check className="w-3.5 h-3.5" />
                      {pros.content}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="text-xs text-gray-700 dark:text-gray-300">
              EMI Facility:{" "}
              <span
                className={
                  emiFacilityAvailable === "Yes"
                    ? "text-green-600 dark:text-green-400 font-medium"
                    : "text-red-500 dark:text-red-400 font-medium"
                }
              >
                {emiFacilityAvailable === "Yes" ? "Available" : "Not Available"}
              </span>
            </div>
          </div>

          {/* 
          <div className="flex flex-col gap-1">
            {universities_pros_cons.length > 0 && (
              <>
                <span className="text-sm font-medium text-gray-800 mb-1">
                  Benefits
                </span>
                <ul className="flex flex-wrap gap-2 text-xs">
                  {universities_pros_cons.map((pros) => (
                    <li
                      key={pros.id}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100/55 text-blue-700"
                    >
                      <Check className="w-3.5 h-3.5" />
                      {pros.content}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="text-xs text-gray-700">
              EMI Facility:{" "}
              <span
                className={
                  emiFacilityAvailable === "Yes"
                    ? "text-green-600 font-medium"
                    : "text-red-500 font-medium"
                }
              >
                {emiFacilityAvailable === "Yes" ? "Available" : "Not Available"}
              </span>
            </div>
          </div> */}
        </div>

        <div className="flex items-center gap-2 w-full">
          <Button variant="apply" className="cursor-pointer">
            Apply Now
          </Button>
          <Button
            variant="brochure"
            disabled={!brochureLink}
            className="cursor-pointer disabled:cursor-not-allowed"
            onClick={() => {
              downloadBrochure(brochureLink, `${name}_brochure.pdf`);
            }}
          >
            <Download size={20} />
            Download Brochure
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CollegeCard;
