import React from "react";
import { Link } from "react-router-dom";

export default function BreadcrumbPlainFlatTextIconPreview({ breadcrumbs }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex list-none gap-2 flex-wrap">
          {breadcrumbs.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex items-center gap-2 ${
                  index === 0
                    ? "md:max-w-[20ch]"
                    : index === breadcrumbs.length - 1
                      ? "md:hidden"
                      : "md:max-w-[20ch]"
                }`}
              >
                <Link
                  to={item.to} // Provide the route to navigate
                  className={`flex ${
                    index === 0
                      ? "max-w-[10ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500"
                      : index === breadcrumbs.length - 1
                        ? "pointer-events-none max-w-[10ch] whitespace-nowrap text-slate-400"
                        : "flex max-w-[10ch] truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500"
                  }`}
                >
                  {index === 0 && (
                    <svg
                      // Icon SVG code
                    ></svg>
                  )}
                  {index === 0 ? (
                    <span className="hidden md:block">{item.path}</span>
                  ) : (
                    item.path
                  )}
                </Link>
                {index !== breadcrumbs.length - 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden md:block h-4 w-4 flex-none stroke-slate-700 transition-transform md:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    aria-labelledby={`aria-title-0${index} aria-description-0${index}`}
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
