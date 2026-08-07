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
    id: "bible", num: "I", title: "The Holy Bible",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-2">
        <p>The Bible was inspired by God — the Holy Spirit guided the authors in choosing every word (2 Tim. 3:16, 2 Pet. 1:20–21). Both Old and New Testaments claim divine origin and absolute authority (Ps. 19:7; 119:89, Matt. 5:17–18).</p>
        <p>The Bible contains no errors — it is historically accurate (e.g., the conquest of Jericho, Pontius Pilate) and scientifically sound (e.g., the earth suspended in space — Job 26:7; stars uncountable — Jer. 33:22; earth is a sphere — Isa. 40:22).</p>
        <p>JCNA holds the Holy Bible as God's inspired, accurate, true, and infallible written revelation — the final authority in all matters of faith and conduct (2 Tim. 3:16–17).</p>
      </div>
    ),
  },
  {
    id: "god", num: "II", title: "One God — Apostolic Doctrine",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-2">
        <p>JCNA believes there is only one God (Deut. 6:4), creator of heaven and earth, revealed through three titles and functions:</p>
        <div>
          <p className="font-semibold text-[#2D5016] mb-0.5">A. Father</p>
          <p>God is Spirit (John 4:24), eternal, unchanging, all-powerful, omnipresent, omniscient, and perfectly holy, righteous, loving, and faithful.</p>
        </div>
        <div>
          <p className="font-semibold text-[#2D5016] mb-0.5">B. Son — Jesus Christ</p>
          <p>Jesus is the visible expression of the invisible God (Col. 1:15) — fully God and fully man (John 1:1,14; Gal. 4:4–5; Rom. 4:25).</p>
        </div>
        <div>
          <p className="font-semibold text-[#2D5016] mb-0.5">C. Holy Spirit</p>
          <p>The Holy Spirit is the Spirit of God and of Jesus Christ (Rom. 8:9), dwelling in believers for sanctification, purification, and empowerment (John 3:5–7; 1 Cor. 3:16).</p>
        </div>
      </div>
    ),
  },
  { id: "fall", num: "III", title: "The Fall of Man / Sin" },
  {
    id: "salvation", num: "IV", title: "Salvation — Grace, Faith, and Works",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] font-semibold flex flex-col gap-1">
        <p>A. Justification</p>
        <p>B. Sanctification</p>
        <p>C. Glorification</p>
      </div>
    ),
  },
  { id: "healing", num: "V", title: "Divine Healing" },
  {
    id: "church", num: "VI", title: "The Church and Its Mission",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
        {["Fivefold Ministries", "Discipleship", "Evangelism", "Holiness", "Restoration of Israel Salvation"].map((item, i) => (
          <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
        ))}
      </div>
    ),
  },
  {
    id: "ordinances", num: "VII", title: "Church Ordinances",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
        {["The Lord's Supper", "Child Dedication", "Baptism", "Matrimony", "Blessings (property, house, car, etc.)"].map((item, i) => (
          <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
        ))}
      </div>
    ),
  },
  {
    id: "culture-doc", num: "VIII", title: "Church Culture and Practices",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
        {["Prayer and Fasting", "Giving (tithes, offering, first fruit, charity)", "Dress Code", "Food", "Day of Church Worship or Rest"].map((item, i) => (
          <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
        ))}
      </div>
    ),
  },
  {
    id: "values-doc", num: "IX", title: "The Church Core Values",
    content: (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {["Love", "Joy", "Peace", "Honesty", "Kindness", "Respect", "Self-Control", "Gentleness", "Obedience"].map((v) => (
          <span key={v} className="bg-[#EAF3DE] text-[#2D5016] rounded-[20px] px-3.5 py-1 text-xs font-semibold border border-[#C5D89A]">{v}</span>
        ))}
      </div>
    ),
  },
  {
    id: "baptism", num: "X", title: "Baptism",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
        {["Baptism of Water", "Baptism of Holy Spirit", "Baptism of Fire"].map((item, i) => (
          <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
        ))}
      </div>
    ),
  },
  { id: "rapture", num: "XI", title: "The Rapture" },
  { id: "resurrection", num: "XII", title: "The Resurrection" },
  {
    id: "judgment", num: "XIII", title: "Judgment",
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
      <p className="mb-4 text-[#4A7C2F] text-[13px] leading-[1.9]">
        We uphold the Holy Bible as inspired, infallible, and the absolute authority over all faith and conduct. Click any article below to read more.
      </p>
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
    id: "goals", label: "Goals",
    content: (
      <ul className="m-0 p-0 pl-1 text-[#4A7C2F] text-[13px] leading-[1.9] list-none flex flex-col gap-2">
        {[
          "To uphold sound doctrine and live a holy life in conduct, action, and morality.",
          "To be a light bearer in a dark world by means of showing the Christ like attitude.",
          "To share and impart the gospel of Christ to everyone in season and out of season.",
        ].map((item, i) => (
          <li key={i} className="flex gap-2.5 items-start">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4A7C2F] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "mission", label: "Mission",
    content: (
      <p className="m-0 text-[#4A7C2F] text-[13px] leading-[1.9]">
        To bring back the lost soul and gather together into the one fold church to serve and glorify the One True Shepherd Jesus Christ by means of evangelizing, inviting, equipping and teaching the sound doctrine.
      </p>
    ),
  },
  {
    id: "doctrines", label: "Doctrines",
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
