"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const PreachingPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8 lg:gap-10">

      {/* Left — Video */}
      <div
        className="w-full lg:flex-1 rounded-[20px] overflow-hidden flex-shrink-0"
        style={{ border: "1px solid #6AAD4F", aspectRatio: "16/9" }}
      >
        <iframe
          src="https://www.youtube.com/embed/p3LQ91OYZjw?si=lXKM7uPWbsOPc82i"
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
          title="Preaching Service — JCNA Ministry"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Right — Text */}
      <div className="w-full lg:flex-1 flex flex-col justify-center">

        <p
          className="font-dm text-center lg:text-left mb-6"
          style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.75 }}
        >
          Preaching is the central part of our worship service where the assigned preacher delivers a message based on a selected topic. The preaching aims to inspire, encourage, and challenge the congregation to grow in their faith and live according to God's Word. It is a time of spiritual nourishment and guidance for all attendees.
        </p>

        <p
          className="font-cormorant italic text-center lg:text-left"
          style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75 }}
        >
          "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works."{" "}
          <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— 2 Timothy 3:16–17</span>
        </p>

      </div>

    </div>
  );
};

export default PreachingPanel;
