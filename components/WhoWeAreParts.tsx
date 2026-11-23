import React from "react";

/* Small presentational pieces shared by the Who We Are panels.
   No state, no "use client" needed. Styling matches the existing
   green palette used by DoctrineAccordion / whoWeAreSections. */

type WithChildren = { children: React.ReactNode };

export const Body = ({ children }: WithChildren) => (
  <div className="text-[#4A7C2F] text-[13px] leading-[1.9]">{children}</div>
);

export const P = ({ children }: WithChildren) => (
  <p className="mb-2.5 last:mb-0 text-[#4A7C2F] text-[13px] leading-[1.9]">{children}</p>
);

/** "Section 1: Name" style headings, straight from the By-Laws. */
export const SectionHeading = ({ children }: WithChildren) => (
  <h4 className="mt-7 first:mt-0 mb-3 pb-1.5 border-b border-[#E2EAC8] font-semibold text-[14px] text-[#2D5016]">
    {children}
  </h4>
);

export const Badge = ({ children }: WithChildren) => (
  <span className="bg-[#2D5016] text-white rounded-[6px] px-2 py-0.5 text-[11px] font-bold shrink-0 min-w-[22px] text-center">
    {children}
  </span>
);

export const Stack = ({ children }: WithChildren) => (
  <div className="flex flex-col gap-1.5">{children}</div>
);

export const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mb-2.5 p-0 list-none flex flex-col gap-1.5">
    {items.map((item) => (
      <li key={item} className="flex gap-2.5 items-start">
        <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-[#4A7C2F] shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/** Scripture references, shown as small pills. Pass them separated by ";" */
export const Scripture = ({ refs }: { refs: string }) => (
  <div className="flex flex-wrap items-center gap-1.5 mt-1.5 mb-1">
    <span className="text-[11px] text-[#7AAB50] mr-0.5">Scripture</span>
    {refs
      .split(";")
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => (
        <span
          key={r}
          className="bg-white border border-[#C5D89A] rounded-full px-2.5 text-[11px] leading-[1.7] text-[#2D5016]"
        >
          {r}
        </span>
      ))}
  </div>
);

/** A numbered (1, 2, 3) or lettered (a, b, c) row, with optional title and scripture. */
export const NumberedRow = ({
  num,
  title,
  refs,
  children,
}: {
  num: string;
  title?: string;
  refs?: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-3 items-start rounded-[10px] border border-[#D4E8BE] bg-white px-3.5 py-3">
    <span className="mt-[3px]">
      <Badge>{num}</Badge>
    </span>
    <div className="min-w-0 flex-1 text-[#4A7C2F] text-[13px] leading-[1.9]">
      {title && <p className="font-semibold text-[#2D5016] mb-0.5">{title}</p>}
      {children}
      {refs && <Scripture refs={refs} />}
    </div>
  </div>
);

export const Vision = ({ children }: WithChildren) => (
  <div className="bg-[#EAF3DE] border border-[#C5D89A] rounded-[10px] px-3.5 py-2.5 text-[#2D5016] text-[13px] leading-[1.9]">
    {children}
  </div>
);

export const ValueGrid = ({
  items,
}: {
  items: { num: string; name: string; refs: string }[];
}) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-2">
    {items.map((v) => (
      <div key={v.num} className="rounded-[10px] border border-[#D4E8BE] bg-white px-3 py-2.5">
        <div className="flex items-center gap-2 font-semibold text-[#2D5016] mb-1">
          <Badge>{v.num}</Badge>
          {v.name}
        </div>
        <Scripture refs={v.refs} />
      </div>
    ))}
  </div>
);

export const ComingSoon = () => (
  <div className="rounded-[10px] border border-dashed border-[#C5D09B] px-4 py-3 text-[13px] italic text-[#7AAB50]">
    Coming soon
  </div>
);
