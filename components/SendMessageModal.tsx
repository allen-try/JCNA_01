"use client";

import React, { useState } from "react";

interface SendMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  outreachName: string;
  outreachEmail: string;
  outreachPhone: string;
}

const SendMessageModal = ({ isOpen, onClose, outreachName, outreachEmail, outreachPhone }: SendMessageModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.message) return;
    setStatus("sending");
    setErrorMsg("");

    const payload = {
      full_name: form.name,
      phone: form.phone,
      email: form.email,
      concern: form.message,
      service_type: outreachName || "General Inquiry",
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

      setStatus("sent");
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg("Something went wrong. Please try again or contact us directly.");
      setStatus("error");
    }
  };

  const handleClose = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(170deg, #1A3A08 0%, #2D5016 55%, #1e3d0a 100%)",
          border: "1px solid rgba(154,191,95,0.2)",
          borderRadius: "18px",
          width: "100%", maxWidth: "480px",
          padding: "2rem 2rem 1.75rem",
          display: "flex", flexDirection: "column", gap: "1.25rem",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", top: "1.1rem", right: "1.1rem",
            background: "rgba(154,191,95,0.08)", border: "1px solid rgba(154,191,95,0.2)",
            borderRadius: "50%", width: "30px", height: "30px",
            color: "#9db39e", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px", lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <span className="font-dm" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#7a9c7b", fontWeight: 500 }}>
            {outreachName}
          </span>
          <h3 className="font-cormorant" style={{ fontSize: "1.6rem", fontWeight: 600, color: "#f5f2eb", margin: 0 }}>
            Contact Us
          </h3>
          <p className="font-dm" style={{ fontSize: "0.8rem", color: "#7a9c7b", margin: 0 }}>
            We'd love to hear from you. Fill in the form and we'll get back to you.
          </p>
        </div>

        {status === "sent" ? (
          <div style={{ textAlign: "center", padding: "2rem 0", display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(200,168,75,0.15)", border: "1px solid rgba(200,168,75,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-cormorant" style={{ fontSize: "1.2rem", fontWeight: 600, color: "#f5f2eb", margin: 0 }}>Message Sent!</p>
            <p className="font-dm" style={{ fontSize: "0.8rem", color: "#7a9c7b", margin: 0 }}>Thank you for reaching out. We'll be in touch soon.</p>
            <button onClick={handleClose} className="font-dm" style={{ marginTop: "0.5rem", background: "#c8a84b", color: "#1e3a1f", border: "none", borderRadius: "100px", padding: "9px 24px", fontWeight: 500, fontSize: "0.85rem", cursor: "pointer" }}>
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Fields */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label className="font-dm" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9c7b", fontWeight: 500 }}>
                  Full Name <span style={{ color: "#c8a84b" }}>*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Juan dela Cruz"
                  className="font-dm"
                  style={{
                    background: "rgba(154,191,95,0.06)", border: "1px solid rgba(154,191,95,0.18)",
                    borderRadius: "8px", padding: "10px 13px", color: "#f5f2eb",
                    fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Email — optional */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label className="font-dm" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9c7b", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
                  Email
                  <span style={{ fontSize: "10px", color: "#5a7a5b", textTransform: "none", letterSpacing: 0, fontWeight: 400 }}>optional</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  className="font-dm"
                  style={{
                    background: "rgba(154,191,95,0.06)", border: "1px solid rgba(154,191,95,0.18)",
                    borderRadius: "8px", padding: "10px 13px", color: "#f5f2eb",
                    fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Phone */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label className="font-dm" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9c7b", fontWeight: 500 }}>
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+63 9XX XXX XXXX"
                  className="font-dm"
                  style={{
                    background: "rgba(154,191,95,0.06)", border: "1px solid rgba(154,191,95,0.18)",
                    borderRadius: "8px", padding: "10px 13px", color: "#f5f2eb",
                    fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label className="font-dm" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a9c7b", fontWeight: 500 }}>
                  Message <span style={{ color: "#c8a84b" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className="font-dm"
                  style={{
                    background: "rgba(154,191,95,0.06)", border: "1px solid rgba(154,191,95,0.18)",
                    borderRadius: "8px", padding: "10px 13px", color: "#f5f2eb",
                    fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box",
                    resize: "vertical", fontFamily: "inherit",
                  }}
                />
              </div>

              {errorMsg && (
                <p className="font-dm" style={{ fontSize: "0.78rem", color: "#e08585", margin: 0 }}>
                  {errorMsg}
                </p>
              )}
            </div>

            {/* Footer */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: "1rem", flexWrap: "wrap",
              borderTop: "1px solid rgba(154,191,95,0.15)",
              paddingTop: "1rem",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <a href={`tel:${outreachPhone.replace(/\s/g, "")}`} className="font-dm" style={{ fontSize: "0.78rem", color: "#7a9c7b", textDecoration: "none" }}>
                  {outreachPhone}
                </a>
                <a href={`mailto:${outreachEmail}`} className="font-dm" style={{ fontSize: "0.78rem", color: "#7a9c7b", textDecoration: "none" }}>
                  {outreachEmail}
                </a>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.message || status === "sending"}
                className="font-dm"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: !form.name || !form.message ? "rgba(200,168,75,0.35)" : "#c8a84b",
                  color: "#1e3a1f", fontWeight: 500, fontSize: "0.87rem",
                  padding: "10px 22px", borderRadius: "100px", border: "none",
                  cursor: !form.name || !form.message ? "not-allowed" : "pointer",
                  whiteSpace: "nowrap", transition: "background 0.2s",
                }}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SendMessageModal;
