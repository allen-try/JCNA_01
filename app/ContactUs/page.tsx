"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Container from "@/components/Container";
import Image from "next/image";
import React, { useState } from "react";

// ── Shared styles ─────────────────────────────────────────────────────────────

const bodyTextStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "13px",
  color: "#4A7C2F",
  lineHeight: 1.8,
  margin: 0,
};

const serviceRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
};

const serviceTextStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "12px",
  color: "#4A7C2F",
};

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function SocialIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

// ── Info Card Data ─────────────────────────────────────────────────────────────

const infoCards = [
  {
    icon: <LocationIcon />,
    title: "Main Church",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p style={bodyTextStyle}>
          Cebu South Road, Upper Tulay,
          <br />
          Minglanilla, Cebu, Philippines
        </p>
        {/* Embedded mini map */}
        <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(74,124,47,0.20)" }}>
          <iframe
            title="JCNA Mini Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74704.02732368202!2d123.78717022278703!3d10.249742118941036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a977fac09dc6af%3A0xda93be23da18c422!2sJESUS%20CHRIST%20OF%20NAZARETH%20ONEFOLD%20ASSEMBLY!5e0!3m2!1sen!2sph!4v1778646023673!5m2!1sen!2sph"
            style={{ width: "100%", height: "140px", border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href="https://maps.google.com/?q=JESUS+CHRIST+OF+NAZARETH+ONEFOLD+ASSEMBLY,Minglanilla,Cebu,Philippines"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#82B657",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            textDecoration: "none",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#82B657" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Open in Google Maps
        </a>
      </div>
    ),
  },
  {
    icon: <CalendarIcon />,
    title: "Service Schedule",
    content: (
      <div
        style={{
          width: "100%",
          maxWidth: "220px",
          border: "1px solid rgba(74,124,47,0.20)",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div style={serviceRowStyle}>
          <span style={serviceTextStyle}>Sunday</span>
          <span style={serviceTextStyle}>10:00 AM – 3:00 PM</span>
        </div>
        <div style={{ width: "160px", height: "1px", background: "rgba(74,124,47,0.20)", margin: "0 auto" }} />
        <div style={serviceRowStyle}>
          <span style={serviceTextStyle}>Friday</span>
          <span style={serviceTextStyle}>6:00 PM – 11:00 PM</span>
        </div>
      </div>
    ),
  },
  {
    icon: <ContactIcon />,
    title: "Contact Us",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <a
          href="tel:+639514911577"
          style={{
            ...bodyTextStyle,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#4A7C2F",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#82B657" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          +63 951 491 1577
        </a>
        <a
          href="mailto:onefoldassembly@gmail.com"
          style={{
            ...bodyTextStyle,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#4A7C2F",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#82B657" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          onefoldassembly@gmail.com
        </a>
      </div>
    ),
  },
  {
    icon: <SocialIcon />,
    title: "Social Media",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100093108589005"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <div style={{
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            background: "#1877F2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </div>
          <span style={{ ...bodyTextStyle, fontSize: "11px" }}>
            Jesus Christ of Nazareth Onefold Assembly
          </span>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@JCNA777"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <div style={{
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            background: "#FF0000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
              <polygon fill="#FF0000" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
          </div>
          <span style={{ ...bodyTextStyle }}>JCNA MINISTRY</span>
        </a>
      </div>
    ),
  },
];

// ── Contact Form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", concern: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(74,124,47,0.25)",
    background: "#F6F8F1",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#2D5016",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    letterSpacing: "0.08em",
    color: "#2D5016",
    marginBottom: "6px",
    display: "block",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const payload = {
      full_name: form.name,
      phone: form.phone,
      email: form.email,
      concern: form.concern,
      service_type: "General Inquiry",
    };

    try {
      // 1. Save to Supabase
      const saveRes = await fetch("/api/spiritual-services/saveSubmission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!saveRes.ok) throw new Error("Failed to save submission");

      // 2. Send confirmation + admin notification email (only if email was provided)
      if (form.email) {
        const emailRes = await fetch("/api/spiritual-services/sendEmailConfirmation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!emailRes.ok) {
          console.error("Email failed to send, submission was still saved");
        }
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "60px 24px",
        textAlign: "center",
      }}>
        <div style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#82B657",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "26px", color: "#2D5016", margin: 0 }}>
          Message Received!
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#4A7C2F", lineHeight: 1.8, margin: 0, maxWidth: "320px" }}>
          Thank you for reaching out. We'll get back to you as soon as we can. God bless you!
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", concern: "" }); }}
          style={{
            background: "transparent",
            border: "1px solid #82B657",
            color: "#4A7C2F",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            padding: "10px 24px",
            borderRadius: "999px",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Name + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px" }}>
        <div>
          <label style={labelStyle}>Name <span style={{ color: "#82B657" }}>*</span></label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number <span style={{ color: "#82B657" }}>*</span></label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+63 9XX XXX XXXX"
            style={inputStyle}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label style={labelStyle}>
          Email{" "}
          <span style={{ fontWeight: 400, color: "#82B657", letterSpacing: 0 }}>(optional)</span>
        </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="your@email.com"
          style={inputStyle}
        />
      </div>

      {/* Concern */}
      <div>
        <label style={labelStyle}>Concern <span style={{ color: "#82B657" }}>*</span></label>
        <textarea
          name="concern"
          value={form.concern}
          onChange={handleChange}
          required
          placeholder="How can we help you?"
          rows={5}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
        />
      </div>

      {errorMsg && (
        <p style={{ color: "#C0392B", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", margin: 0 }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: loading ? "#a9c98f" : "#82B657",
          color: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          padding: "13px 32px",
          borderRadius: "999px",
          border: "none",
          cursor: loading ? "default" : "pointer",
          width: "fit-content",
          alignSelf: "flex-start",
          transition: "background 0.2s",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactUsPage() {
  return (
    <div
      style={{
        background: "#F6F8F1",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="pt-10 sm:pt-14 lg:pt-[60px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center w-full">
            {/* Left: Text */}
            <div>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 7vw, 52px)",
                  color: "#2D5016",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                }}
              >
                Contact Us
              </h1>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 3vw, 16px)",
                  color: "#4A7C2F",
                  lineHeight: 1.8,
                  maxWidth: "380px",
                }}
              >
                We would love to hear from you! Reach out to us for any questions,
                prayer requests, or simply to connect with our community.
              </p>
            </div>

            {/* Right: Church Photo */}
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(45,80,22,0.15)",
                width: "100%",
                aspectRatio: "16/10",
                position: "relative",
              }}
            >
              <Image
                src="/church-photo.jpg"
                alt="Jesus Christ of Nazareth One Fold Assembly"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── INFO CARDS SECTION ── */}
      <section className="py-10 lg:py-[60px]">
        <Container>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
            style={{
              gap: "1px",
              background: "rgba(74,124,47,0.15)",
              border: "1px solid rgba(74,124,47,0.15)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {infoCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#82B657",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>

                {card.title && (
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      color: "#2D5016",
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </p>
                )}

                <div>{card.content}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CONTACT FORM SECTION ── */}
      <section className="pb-16 lg:pb-[80px]">
        <Container>
          <div
            className="flex flex-col lg:flex-row"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(74,124,47,0.20)",
              background: "#fff",
            }}
          >
            {/* Left: Decorative panel */}
            <div
              className="w-full lg:w-[320px] lg:flex-shrink-0"
              style={{
                background: "#2D5016",
                padding: "48px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative circle */}
              <div style={{
                position: "absolute",
                bottom: "-60px",
                right: "-60px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "40px solid rgba(130,182,87,0.15)",
              }} />
              <div style={{
                position: "absolute",
                top: "-40px",
                left: "-40px",
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                border: "30px solid rgba(130,182,87,0.10)",
              }} />

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 5vw, 34px)",
                  color: "#fff",
                  lineHeight: 1.2,
                  margin: 0,
                  position: "relative",
                }}
              >
                Any Ways We Can Help?
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                  margin: 0,
                  position: "relative",
                }}
              >
                Whether you have a question, a prayer request, or just want to
                connect — we're here for you. Fill out the form and we'll get back
                to you as soon as we can.
              </p>

              {/* Decorative leaf */}
              <div style={{ position: "relative", marginTop: "8px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="rgba(130,182,87,0.4)" />
                  <path d="M17 8C15 6 11 5 8 7c-3 2-4 6-2 9 1 2 3 3 5 3 4 0 7-3 7-7 0-2-1-3-1-4z" fill="rgba(130,182,87,0.3)" />
                </svg>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="flex-1"
              style={{
                padding: "48px 36px",
              }}
            >
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
