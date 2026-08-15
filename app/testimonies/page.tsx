"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Container from "@/components/Container";

const allTestimonies = [
  {
    name: "Beloved Sis. Rutchie Armenion",
    // ⚠️ PLACEHOLDER — replace with her actual testimony description.
    desc: "God stepped into her story in a way only He could. Her journey stands as a living proof that His grace leaves nothing unchanged.",
    embedId: "ne0QFV6YMmQ",
    si: "icV90GQFUl5TZwG1",
  },
  {
    name: "Beloved Bro. Aljohn Canque",
    desc: "Behind this testimony is a God who never gave up. Watch how the Lord moved in his life and turned what was lost into something beautiful.",
    embedId: "MaXRd8nZHP0",
    si: "KNBdFQOmhug2JRMI",
  },
  {
    name: "Beloved Bro. Ramcey Aton",
    desc: "His journey is a reminder that God is always at work — even when we cannot see it. This is what it looks like when Heaven moves on your behalf.",
    embedId: "xaz742nodoI",
    si: "KZJA-pKdZMALqNx_",
  },
  {
    name: "Beloved Sis. Lita Ebo",
    desc: "She encountered a God who is faithful in every season. Her story is a quiet but powerful witness to what happens when you trust Him with everything.",
    embedId: "YcTsAqGQKcw",
    si: "Rg-uOGrh_pQT2qku",
  },
  {
    name: "Beloved Sis. Kyla Mendres",
    desc: "God met her right where she was — and everything changed. Her testimony is a gentle reminder that no one is too small or too young for His touch.",
    embedId: "T3k3XI6sF4c",
    si: "PNZLA28dbMpAGF3P",
  },
  {
    name: "Beloved Sis. Carisma Canque",
    desc: "In her own words, you will hear how God's love found her and held her. A story that shows His mercy is personal, real, and closer than we think.",
    embedId: "2nQ_0yAUIyg",
    si: "Cd64NLLRNbCi2zUN",
  },
];

const TestimoniesPage = () => {
  return (
    <div className="w-full bg-[#F6F8F1] min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="w-full border-b border-[#C5D09B]">
        <Container className="flex flex-col md:flex-row">
          {/* Left text */}
          <div className="w-full md:w-1/2 py-10 sm:py-12 flex flex-col justify-center md:border-r border-b md:border-b-0 border-[#C5D09B]">
            <h1
              className="font-cormorant"
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                color: "#D4A017",
                letterSpacing: "0.12em",
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: 20,
              }}
            >
              Testimonies
            </h1>
            <p
              className="font-dm"
              style={{ fontSize: 13, color: "#4A7C2F", lineHeight: 1.7 }}
            >
              We would love to welcome you! Join us at our church and experience a
              Christ-centered community filled with worship, fellowship, and faith.
            </p>
          </div>

          {/* Right image */}
          <div className="w-full md:w-1/2 overflow-hidden" style={{ minHeight: 200 }}>
            <img
              src="/church-photo.jpg"
              alt="Church"
              className="w-full h-full object-cover"
              style={{ minHeight: 200 }}
            />
          </div>
        </Container>
      </div>

      {/* MORE TESTIMONIES */}
      <section className="py-10 sm:py-16">
        <Container>
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="font-cormorant italic"
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                color: "#2D5016",
                fontWeight: 500,
              }}
            >
              More Testimonies
            </h2>
            <div className="mx-auto my-3 w-[170px] h-[1px] bg-[#2D5016]" />
            <p className="font-dm" style={{ fontSize: 13, color: "#4A7C2F" }}>
              Real Stories. Real Faith. Real Transformation.
            </p>
          </div>

          {/* Grid — 1 col on mobile, 2 on sm, 3 on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {allTestimonies.map((card, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* YouTube embed */}
                <div
                  className="w-full rounded-[30px] overflow-hidden border border-[#6AAD4F]"
                  style={{ aspectRatio: "16/10" }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${card.embedId}?si=${card.si}`}
                    title={`${card.name} testimony`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ display: "block" }}
                  />
                </div>

                <p
                  className="mt-4 font-cormorant text-center"
                  style={{
                    fontSize: "clamp(18px, 4vw, 22px)",
                    color: "#2D5016",
                    fontWeight: 500,
                  }}
                >
                  {card.name}
                </p>

                <p
                  className="mt-2 font-dm text-center"
                  style={{
                    fontSize: "clamp(11px, 3vw, 12px)",
                    color: "#4A7C2F",
                    lineHeight: 1.6,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default TestimoniesPage;
