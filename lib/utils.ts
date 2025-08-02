import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const modeColorMap: Record<string, string> = {
  online:
    "bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-900 dark:text-sky-100 dark:border-sky-800",
  hybrid:
    "bg-violet-50 text-violet-700 border border-violet-200 dark:bg-violet-900 dark:text-violet-100 dark:border-violet-800",
};

export const downloadBrochure = (url: string, filename = "Brochure.pdf") => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
