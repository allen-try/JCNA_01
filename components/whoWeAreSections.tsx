import React from "react";
import OrgChart from "@/components/org";
import DoctrineAccordion from "@/components/DoctrineAccordion";

// ── DOCTRINE DATA (feeds the nested accordion) ───────────────────────
export const docItems: {
  id: string;
  num: string;
  title: string;
  content?: React.ReactNode;
}[] = [
  {
    id: "bible", num: "I", title: "The supremacy of the Holy Bible",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-2">
        <p>We hold the Holy Bible as God's inspired, accurate, true, and infallible written revelation — the final authority in all matters of faith and conduct.</p>
        <p>We believe that the Holy Bible is the ultimate, true, and final authority in matters of faith, practice, and truth. It emphasizes the preeminence of God's Word over human reasoning, cultural philosophies, and secular laws.</p>
        <p>The Bible was inspired by God — the Holy Spirit guided the authors in choosing every word. Both Old and New Testaments claim divine origin and absolute authority.</p>
        <p>The Bible contains no errors - it is historically accurate and scientifically sound.</p>
      </div>
    ),
  },
  {
    id: "god", num: "II", title: "The Oneness of GOD",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-2">
        <p>We believe that there is only one God, the creator of heavens and earth, who manifests in three forms and functions:</p>
        <div>
          <p className="font-semibold text-[#2D5016] mb-0.5">A. Father</p>
          <p>God is Spirit, eternal, unchanging, all-powerful, omnipresent, omniscient, and perfectly holy, righteous, loving, and faithful. In the Old Testament, He is revealed through names like Jehovah-Jireh (Provider), Jehovah-Raphi (Healer), and El Shaddai (Almighty).</p>
        </div>
        <div>
          <p className="font-semibold text-[#2D5016] mb-0.5">B. Son — Jesus Christ</p>
          <p>Jesus is the visible expression of the invisible God - fully God and fully man. He lived, died, rose again, and ascended so that humanity could be redeemed.</p>
        </div>
        <div>
          <p className="font-semibold text-[#2D5016] mb-0.5">C. Holy Spirit</p>
          <p>The Holy Spirit is the Spirit of God and of Jesus Christ, not a separate person but God's presence dwelling in believers for sanctification, purification, and empowerment.</p>
        </div>
      </div>
    ),
  },
  {
    id: "salvation", num: "III", title: "Salvation — Grace, Faith, and Works",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
        <p>We believe that we are saved by God's grace through faith.</p>
      </div>
    ),
  },
  { id: "healing", num: "IV", title: "Divine Healing" },
  {
    id: "values-doc", num: "V", title: "The Church Core Values",
    content: (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {["Love", "Joy", "Peace", "Honesty", "Kindness", "Respect", "Self-Control", "Gentleness", "Obedience"].map((v) => (
          <span key={v} className="bg-[#EAF3DE] text-[#2D5016] rounded-[20px] px-3.5 py-1 text-xs font-semibold border border-[#C5D89A]">{v}</span>
        ))}
      </div>
    ),
  },
  {
    id: "baptism", num: "VI", title: "Baptism",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
        {["Baptism of Water", "Baptism of Holy Spirit", "Baptism of Fire"].map((item, i) => (
          <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
        ))}
      </div>
    ),
  },
  { id: "rapture", num: "VII", title: "The Rapture" },
  { id: "resurrection", num: "VIII", title: "The Resurrection" },
  {
    id: "judgment", num: "IX", title: "Judgment",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
        {[
          "Seat of Christ / Bema — Judgment of Believers",
          "Judgment of the Nations / Living (Millennial Kingdom of Christ)",
          "Final Judgment — White Throne / Judgment of the Unbelievers",
          "New Heaven and New Earth",
        ].map((item, i) => (
          <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
        ))}
      </div>
    ),
  },
];

function DoctrineIntro() {
  return (
    <div>
      <DoctrineAccordion items={docItems} />
    </div>
  );
}

// ── SHARED SECTIONS ───────────────────────────────────────────────────
// Single source of truth: the home teaser grid and the full /WhoWeAre
// page both read from this array, so labels/ids/content can never drift
// out of sync between the two views.
export const sections: { id: string; label: string; content: React.ReactNode }[] = [
  {
    id: "purpose", label: "Purpose",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-2">
        <p>We exist to glorify God, sanctify our members, and spread the gospel of Christ to the world.</p>
        <p>As light bearers, we uphold sound doctrine and live a holy life every day. We live our faith through service and love for others, responsible stewardship, and acting with integrity, modesty and holiness.</p>
      </div>
    ),
  },
  {
    id: "mission", label: "Mission",
    content: (
      <p className="m-0 text-[#4A7C2F] text-[13px] leading-[1.9]">
        To gather lost souls into the one fold church to serve and glorify the One True Shepherd JESUS CHRIST by means of evangelizing, inviting, equipping and teaching the sound doctrine.
      </p>
    ),
  },
  {
    id: "doctrines", label: "Key Doctrines",
    content: <DoctrineIntro />,
  },
  {
    id: "values", label: "Values",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9]">
        <p className="mb-2.5">Our community is rooted in the fruit of the Spirit and built on character that reflects Christ in every aspect of daily life.</p>
        <div className="flex flex-wrap gap-1.5">
          {["Love", "Joy", "Peace", "Honesty", "Kindness", "Respect", "Self-Control", "Gentleness", "Obedience"].map((v) => (
            <span key={v} className="bg-[#EAF3DE] text-[#2D5016] rounded-[20px] px-3.5 py-1 text-xs font-semibold border border-[#C5D89A]">{v}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "culture", label: "Culture",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9]">
        <p className="mb-2.5 font-semibold text-[#2D5016]">Who We Are Together</p>
        <ul className="mb-5 p-0 list-none flex flex-col gap-2">
          {[
            "We are united in Christ — one body, one spirit, and one purpose under the lordship of Jesus.",
            "We love and help one another sincerely, carrying each other's burdens as the Lord commands.",
            "We welcome everyone with open arms, reflecting God's grace to all who come through our doors.",
            "We are committed to growing together through fellowship, discipleship, and accountability in the Word.",
            "We serve sacrificially, putting the needs of others before our own as a testimony of Christ's love.",
          ].map((item, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4A7C2F] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-2.5 font-semibold text-[#2D5016]">Cultural Practices</p>
        <ul className="m-0 p-0 list-none flex flex-col gap-2">
          {[
            "Prayer and fasting",
            "Giving (tithes, offerings, first fruits, and charity)",
            "Garbed in Grace — dressing with modesty and self-respect",
            "Pure Table — we do not consume the blood of any animal, of any kind",
            "Day of Church worship or rest",
          ].map((item, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4A7C2F] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "leadership", label: "Leadership",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9]">
        <p className="mb-5">
          JCNA is led by <strong className="text-[#2D5016]">Apostle Rebero L. Armenion</strong>, Chairman &amp; Chief Executive, together with Vice Chairman <strong className="text-[#2D5016]">Pastor Benjamen L. Armenion, Jr.</strong> Their team of dedicated directors covers Ministries, Choir, Music, Membership, Administration, Finance, and Public Relations — all committed to integrity, holiness, and a Spirit-filled life.
        </p>
        <OrgChart />
        <p className="mt-3 text-xs text-[#7AAB50] text-center">Organizational Structure — Jesus Christ of Nazareth One Fold Assembly</p>
      </div>
    ),
  },
];

// Lightweight id/label-only view for the home teaser, which never needs
// the (heavy) content — this keeps the teaser bundle from pulling in
// OrgChart or the doctrine accordion at all.
export const sectionSummaries = sections.map(({ id, label }) => ({ id, label }));
