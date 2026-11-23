import React from "react";
import OrgChart from "@/components/org";
import DoctrineAccordion from "@/components/DoctrineAccordion";
import SubTabs from "@/components/SubTabs";
import {
  Body,
  P,
  SectionHeading,
  Stack,
  Bullets,
  NumberedRow,
  Scripture,
  Vision,
  ValueGrid,
  ComingSoon,
} from "@/components/WhoWeAreParts";

/* ──────────────────────────────────────────────────────────────────
   One tab per By-Laws article. All wording is taken from the
   JESUS CHRIST OF NAZARETH One Fold Assembly By-Laws and Doctrines.
   ────────────────────────────────────────────────────────────────── */

// ── ARTICLE I: NAME AND PURPOSE ──────────────────────────────────────
const coreValues = [
  { num: "1", name: "Love", refs: "Mark 12:30-31; 1 John 4:20-21; Romans 13:8-10; Romans 12:9; 1 Corinthians 13:1-13" },
  { num: "2", name: "Honesty", refs: "Ephesians 4:24-25; Revelation 21:8; Psalm 101:7; Colossians 3:9-10" },
  { num: "3", name: "Humility", refs: "1 Peter 5:4-5; Philippians 2:8-9; Philippians 2:3-4; James 4:6" },
  { num: "4", name: "Patience", refs: "Romans 12:12; 1 Thessalonians 5:14; 2 Timothy 2:24; James 5:11; Hebrews 11:36" },
  { num: "5", name: "Kindness", refs: "Colossians 3:12; Luke 10:29-37" },
  { num: "6", name: "Faithfulness", refs: "Psalm 101:6; Matthew 24:45-47; Luke 16:10; 1 Corinthians 4:2; Revelation 2:10; Matthew 25:21" },
  { num: "7", name: "Self-control", refs: "Galatians 5:22-23; Proverbs 14:29; Proverbs 16:32" },
  { num: "8", name: "Holy living", refs: "1 Peter 4:16; Hebrews 12:14; Matthew 23:26; 1 John 2:15-17; Romans 12:2; James 4:4; Titus 2:12" },
  { num: "9", name: "Respect", refs: "1 Timothy 5:1-12; 1 Peter 2:17; Matthew 7:12" },
  { num: "10", name: "Generosity", refs: "Proverbs 11:24-25; Acts 20:35; Proverbs 19:17; Hebrews 13:16" },
];

const namePurpose = (
  <Body>
    <SectionHeading>Section 1: Name</SectionHeading>
    <P>The legal entity name of our Church is JESUS CHRIST OF NAZARETH ONE FOLD ASSEMBLY, INC. The Church was formally registered with the Philippine Securities and Exchange Commission on April 26, 2016.</P>
    <P>We are based in Cebu, Philippines, with church outreaches nationwide operating under the name of JESUS CHRIST OF NAZARETH ONE FOLD ASSEMBLY.</P>
    <P>Our official short name for JESUS CHRIST OF NAZARETH ONE FOLD ASSEMBLY is JCNA.</P>
    <P>We are an independent Born-Again Christian church.</P>

    <SectionHeading>Section 2: Purpose</SectionHeading>
    <Stack>
      <NumberedRow num="1">To establish the glorious one-fold assembly, the end-time church of the last generation, as the fulfillment of John 10:16.</NumberedRow>
      <NumberedRow num="2">To prepare everyone for the 2nd advent of JESUS CHRIST.</NumberedRow>
      <NumberedRow num="3" refs="Jeremiah 30:19-22; Revelation 11:3; 1 Corinthians 12:28; Ephesians 4:11">To present one (1) of the two (2) witnesses as revealed in the Holy Scriptures.</NumberedRow>
    </Stack>

    <SectionHeading>Section 3: Vision</SectionHeading>
    <Vision>All called and chosen people of GOD are gathered in one-fold assembly and hear the voice of the Great Shepherd and our loving God and Savior JESUS CHRIST.</Vision>

    <SectionHeading>Section 4: Mission</SectionHeading>
    <Stack>
      <NumberedRow num="1" refs="John 10:16">To gather all chosen people of GOD into one-fold assembly through crusades, fellowships, and sharing the Words of GOD.</NumberedRow>
      <NumberedRow num="2" refs="Galatians 5:1; John 8:32; Romans 8:2; 2 Corinthians 3:17; 2 Corinthians 5:17">To nurture all members spiritually by making them more grounded in the Words of GOD and guiding and delivering them from all sorts of bondage through the power of the Holy Spirit.</NumberedRow>
      <NumberedRow num="3">To fulfill key roles for the divine rapture of all believers.</NumberedRow>
      <NumberedRow num="4" refs="Jeremiah 7:23; Isaiah 43:1">To help restore the salvation of GOD&apos;s covenant people Israel.</NumberedRow>
    </Stack>

    <SectionHeading>Section 5: Core Values</SectionHeading>
    <P>We always demonstrate the following values wherever we are:</P>
    <div className="mt-3">
      <ValueGrid items={coreValues} />
    </div>
  </Body>
);

// ── ARTICLE II: CHURCH DOCTRINES AND CULTURE ─────────────────────────
const doctrineItems = [
  {
    id: "one-god", num: "1", title: "One God",
    content: (
      <Body>
        <P>We believe that there is only one God, who has revealed Himself in three manifestations:</P>
        <Bullets items={[
          "as Father (the creator of universe and all things);",
          "as Son (the redeemer and savior); and",
          "as Holy Spirit (the indwelling Spirit in each of us for empowerment, sanctification, and regeneration).",
        ]} />
        <P>Jesus Christ is God manifested in flesh. He is both God and man.</P>
        <Scripture refs="Deuteronomy 6:4; Psalm 71:22; Job 13:7-10; James 2:19; 1 Timothy 3:16" />
      </Body>
    ),
  },
  {
    id: "holy-bible", num: "2", title: "The Holy Bible",
    content: (
      <Body>
        <P>We believe that the Holy Bible is the infallible Word of God and the final authority in all matters concerning our faith and conduct. Therefore, our tenets, culture, practices, actions and thoughts should fully align and not conflict with biblical scriptures. We test and evaluate all teachings and spirits according to the standards of the Holy Bible.</P>
        <Scripture refs="Deuteronomy 13:1-4; Acts 17:11; 1 John 4:1" />
      </Body>
    ),
  },
  {
    id: "gospel", num: "3", title: "The Gospel",
    content: (
      <Body>
        <P>We believe in the good news gospel that our Lord Jesus Christ has died for our sins, was buried, and rose again. We obey the gospel by repentance (death to sin), water baptism in the name of Jesus Christ (burial), and the baptism of the Holy Spirit (resurrection).</P>
        <Scripture refs="2 Thessalonians 1:8; 1 Peter 4:17; 1 Corinthians 15:1-4; Acts 2:4, 37-39; Romans 6:3-4" />
      </Body>
    ),
  },
  {
    id: "salvation", num: "4", title: "Salvation by Grace Through Faith",
    content: (
      <Body>
        <P>We need salvation as we all have sinned and fallen short of the glory of God. We believe that we are saved by God’s grace through faith, and not by our own effort or works. Good work is a fruit of our salvation, not a cause, as faith without work is dead. Good work that would bring glory to GOD our Father is a proof that we are saved.</P>
        <Scripture refs="Romans 3:23; Ephesians 2:8-10; James 2:17; Matthew 5:16; Ephesians 2:10" />
      </Body>
    ),
  },
  {
    id: "christian-living", num: "5", title: "Christian Living",
    content: (
      <Body>
        <P>We believe that as Christians, we are to love God and others. We should live a holy life inwardly and outwardly and worship God joyfully. The supernatural gifts of the Spirit, including healing, are only for true believers of Christ today.</P>
        <Scripture refs="Mark 12:28-31; 2 Corinthians 7:1; Hebrews 12:14; Acts 13:52; 1 Corinthians 12:8-10; Acts 1:8; Mark 16:17-18" />
      </Body>
    ),
  },
  {
    id: "second-coming", num: "6", title: "Second Coming of Christ",
    content: (
      <Body>
        <P>We believe that Jesus Christ is coming again to meet the genuine believers during the rapture. In the end will be the final resurrection and the final judgment. The righteous will inherit eternal life, and the unrighteous eternal death.</P>
        <Scripture refs="1 Thessalonians 4:16-17; Revelation 20:11-15; Matthew 25:46" />
      </Body>
    ),
  },
];

const ordinances = (
  <Stack>
    <NumberedRow num="1" title="The Lord’s Supper" refs="1 Corinthians 11:27-30; Isaiah 53:4-5">
      We celebrate Holy Supper every last Sunday of the month as a remembrance of the great sacrifices of our Lord Jesus Christ on the Cross of Calvary over 2000 years ago. Members who are already baptized in the name of Jesus Christ can participate. A newbie can also participate as long as he/she is willing to receive water baptism right after the fellowship on the same day.
    </NumberedRow>
    <NumberedRow num="2" title="Child Dedication" refs="1 Samuel 1:27-28; Luke 2:22">
      We ensure that every child is dedicated into the Lord following biblical patterns.
    </NumberedRow>
    <NumberedRow num="3" title="Water Baptism" refs="John 3:5; Acts 2:38">
      We practice water baptism in the name of Jesus Christ for our new members, as an essential part for them to enter the kingdom of God and following the footsteps of the Apostles.
    </NumberedRow>
    <NumberedRow num="4" title="Matrimony">
      We hold church wedding blessing to our member couples who are already legally married for God’s guidance and grace over their union. Member couples may also avail of our church-officiated wedding with our duly authorized officiating officer, if any, guiding the couple through spiritual vows, completing legal paperwork, and signing the marriage certificate.
    </NumberedRow>
    <NumberedRow num="5" title="Property Blessings" refs="Exodus 30:26-29; Exodus 40:9; Leviticus 8:10-11">
      We perform blessing ceremony, using anointing oil, for real and/or personal properties of our members.
    </NumberedRow>
  </Stack>
);

const cultureItems = [
  {
    id: "prayer-fasting", num: "1", title: "Prayer and Fasting",
    content: (
      <Body>
        <P>We practice prayer and fasting in the Church. We observe fasting to gain anointing and spiritual guidance, and to obtain favor from the LORD. Fasting is not imposed or viewed as a punishment but as a commitment of self-renewal, repentance and empowerment to do the service of the Lord.</P>
        <P>All church members are encouraged to offer two-meal fasting every Sunday church service to increase Spiritual faith and decrease worldly affection.</P>
        <P>As directed by the Apostle, special fasting for church preachers, workers, and choir members may be needed to gain spiritual anointing specially for major events like crusades, anniversaries, and conventions.</P>
        <P>We may hold a general fasting at the discretion of the church leadership (e.g., in case of significant events).</P>
        <Scripture refs="Matthew 17:21; 2 Chronicles 20:3; Joel 2:12; Ezra 8:23; Nehemiah 1:4; Ester 4:16; Acts 13:2; Acts 14:23; 2 Timothy 3:1-4; Titus 2:11-14; 1 John 2:15-16" />
      </Body>
    ),
  },
  {
    id: "church-giving", num: "2", title: "Church Giving",
    content: (
      <Body>
        <P>We give to the Lord with joy, freely, generously, with whole heart, not grudging, not reluctant, and not under compulsion, for God loves a cheerful giver. We give humbly and in secret such that only you and God know how much you give. We practice the following giving in the Church as responsible stewards of God’s provision:</P>
        <Scripture refs="2 Corinthians 9:7; Deuteronomy 15:10; Proverbs 11:24; Romans 12:8; Matthew 6:1-4; Psalm 24:1; Haggai 2:8; 1 Corinthians 4:2; 1 Peter 4:10" />
        <div className="mt-3">
          <Stack>
            <NumberedRow num="a" refs="Leviticus 27:30; Malachi 3:10">Tithes: we fully give 10.0% of our income or earnings to the Church for it is holy to the Lord.</NumberedRow>
            <NumberedRow num="b" refs="Deuteronomy 16:17; Mark 12:41-44">Love Offering: we give to the Lord an additional love offering from the remaining 90.0% of our income or earnings (after deducting Tithes) according to our own self-conviction, willingness and ability.</NumberedRow>
            <NumberedRow num="c" refs="Proverbs 3:9">First Fruits: we honor the Lord with the first fruits of all our new income, earnings or produce.</NumberedRow>
          </Stack>
        </div>
      </Body>
    ),
  },
  {
    id: "dress-code", num: "3", title: "Dress Code",
    content: (
      <Body>
        <P>We practice proper dress code inside and outside the church. Inside the Church, we wear white clothing, especially during Church services.</P>
        <P>Our men members only wear man’s garment and not that of woman’s garment. Our women members only wear woman’s garment and not that of man’s garment.</P>
        <Scripture refs="Deuteronomy 22:5" />
        <div className="mt-3">
          <P>When choosing what to wear, we follow the following guidelines:</P>
          <Bullets items={[
            "Modesty",
            "Moderation in cost",
            "Inclination toward godliness (decency)",
            "Avoidance of outward adornment",
            "Shamefacedness and sobriety",
            "Distinction between male and female",
          ]} />
        </div>
      </Body>
    ),
  },
  {
    id: "supporting-each-other", num: "4", title: "Supporting Each Other",
    content: (
      <Body>
        <P>As Church members, we happily support each other as true brothers and sisters in Christ. We do not neglect or withhold to do good and to share what we have.</P>
        <P>We provide sustainable support for important needs of our members, including livelihood (business or employment), scholarships, counseling, and trainings.</P>
        <Scripture refs="Hebrews 13:16; Proverbs 3:27" />
      </Body>
    ),
  },
];

const doctrinesCulture = (
  <SubTabs
    tabs={[
      {
        id: "doctrines",
        label: "Section 1: Church Doctrines",
        content: (
          <>
            <P>As true Christians, we believe in the following fundamental doctrines:</P>
            <div className="mt-3">
              <DoctrineAccordion items={doctrineItems} defaultOpenId="one-god" />
            </div>
          </>
        ),
      },
      { id: "ordinances", label: "Section 2: Church Ordinances", content: ordinances },
      {
        id: "culture",
        label: "Section 3: Culture and Practices",
        content: <DoctrineAccordion items={cultureItems} defaultOpenId="prayer-fasting" />,
      },
    ]}
  />
);

// ── ARTICLE III: MEMBERSHIP ──────────────────────────────────────────
const membership = (
  <Body>
    <SectionHeading>Section 1: Eligibility</SectionHeading>
    <ComingSoon />
    <SectionHeading>Section 2: Rights and Responsibilities</SectionHeading>
    <ComingSoon />
    <SectionHeading>Section 3: Discipline</SectionHeading>
    <ComingSoon />
  </Body>
);

// ── ARTICLE IV: GOVERNANCE ───────────────────────────────────────────
const governance = (
  <Body>
    <SectionHeading>Section 1: Leadership</SectionHeading>
    <p className="mb-5">
      JCNA is led by <strong className="text-[#2D5016]">Apostle Rebero L. Armenion</strong>, Chairman &amp; Chief Executive, together with Vice Chairman <strong className="text-[#2D5016]">Pastor Benjamen L. Armenion, Jr.</strong> Their team of dedicated directors covers Ministries, Choir, Music, Membership, Administration, Finance, and Public Relations — all committed to integrity, holiness, and a Spirit-filled life.
    </p>
    <OrgChart />
    <p className="mt-3 text-xs text-[#7AAB50] text-center">Organizational Structure — Jesus Christ of Nazareth One Fold Assembly</p>
    <SectionHeading>Section 2: Outreaches</SectionHeading>
    <ComingSoon />
  </Body>
);

// ── ARTICLE V: MEETINGS ──────────────────────────────────────────────
const meetings = (
  <Body>
    <SectionHeading>Section 1: Regular church service</SectionHeading>
    <ComingSoon />
    <SectionHeading>Section 2: Annual meeting</SectionHeading>
    <ComingSoon />
    <SectionHeading>Section 3: Special meeting</SectionHeading>
    <ComingSoon />
  </Body>
);

// ── SHARED SECTIONS ───────────────────────────────────────────────────
// Single source of truth: the home teaser grid and the full /WhoWeAre
// page both read from this array, so labels/ids/content can never drift
// out of sync between the two views.
export type WhoWeAreSection = {
  id: string;
  label: string;
  /** Small "Article I" tag shown beside the panel title. */
  eyebrow: string;
  content: React.ReactNode;
};

export const sections: WhoWeAreSection[] = [
  { id: "name-purpose", label: "Name and Purpose", eyebrow: "Article I", content: namePurpose },
  { id: "doctrines-culture", label: "Church Doctrines and Culture", eyebrow: "Article II", content: doctrinesCulture },
  { id: "membership", label: "Membership", eyebrow: "Article III", content: membership },
  { id: "governance", label: "Governance", eyebrow: "Article IV", content: governance },
  { id: "meetings", label: "Meetings", eyebrow: "Article V", content: meetings },
  { id: "property-finances", label: "Property and Finances", eyebrow: "Article VI", content: <ComingSoon /> },
  { id: "amendments", label: "Amendments", eyebrow: "Article VII", content: <ComingSoon /> },
];

/** Old ?section= ids (before the By-Laws restructure) -> new ids,
 *  so existing links and bookmarks keep working. */
export const legacySectionIds: Record<string, string> = {
  purpose: "name-purpose",
  mission: "name-purpose",
  values: "name-purpose",
  doctrines: "doctrines-culture",
  culture: "doctrines-culture",
  leadership: "governance",
};

// Lightweight id/label-only view for the home teaser.
export const sectionSummaries = sections.map(({ id, label }) => ({ id, label }));
