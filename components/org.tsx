"use client";
import React, { useState } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');
.org-root * { box-sizing: border-box; }
.org-desktop { display: none; }
.org-mobile  { display: flex; }
@media (min-width: 701px) {
  .org-mobile  { display: none !important; }
  .org-desktop { display: block !important; }
}
`;

const LINE = "#4A7C2F";
const STEM_W = 3;
const DOT_SIZE = 12;

interface DirectorColumn {
  name: string;
  role: string;
  preacher: boolean;
  subs: string[];
}

const directorColumns: DirectorColumn[] = [
  {
    name: "ANDONIE D. KADUSALE", role: "Ministries Director", preacher: true,
    subs: ["Ministry of the Word & Evangelism", "Couples Ministry", "Children Ministry"],
  },
  {
    name: "JOBERTH P. CABUCOS", role: "Choir Director", preacher: true,
    subs: ["Gospel Choir", "Adults Choir", "Children Choir"],
  },
  {
    name: "CHRISTIAN DAVE L. PITOGO", role: "Music Director", preacher: true,
    subs: ["Praise & Worship Team", "Instrumentalists", "Sound Engineer/Controller"],
  },
  {
    name: "MICHAEL L. ATON", role: "Membership Director", preacher: true,
    subs: ["Membership Retention", "Membership Growth", "Special Events"],
  },
  {
    name: "BELVIN L. ARMENION", role: "Secretary-General", preacher: false,
    subs: ["Church Records", "Administration"],
  },
];

interface BracketPerson {
  name: string;
  role: string;
}

const bracketColumn: { top: BracketPerson; branch: BracketPerson[] } = {
  top: { name: "ANALYN V. DURANGO", role: "Treasurer" },
  branch: [
    { name: "ROY C. MENDREZ", role: "Auditor" },
    { name: "RICWARREN A. CORNILLO", role: "Public Relations Officer" },
  ],
};

const TOP_CARD_H = 96;
const STEM_1 = 14;
const STEM_2 = 12;
const BRANCH_H = TOP_CARD_H;
const BRANCH_GAP = 10;
const DOT_CENTER = DOT_SIZE / 2;

const trunkTopY = DOT_CENTER;
const branchTopY = DOT_SIZE + STEM_1 + TOP_CARD_H + STEM_2;
const branch1CenterY = branchTopY + BRANCH_H / 2;
const branch2CenterY = branchTopY + BRANCH_H + BRANCH_GAP + BRANCH_H / 2;
const svgH = branch2CenterY + 20;

const goldBar = (r: number = 13): React.CSSProperties => ({
  position: "absolute", top: 0, left: 0, right: 0, height: 5,
  background: "#C8960E", borderRadius: `${r}px ${r}px 0 0`,
});

const nameWrap: React.CSSProperties = {
  wordBreak: "break-word",
  overflowWrap: "break-word",
  hyphens: "auto",
  whiteSpace: "normal",
};

const s: Record<string, React.CSSProperties> = {
  chairman: {
    position: "relative", overflow: "hidden", textAlign: "center",
    background: "#2D5016", border: "1.5px solid #4A7C2F", borderRadius: 11,
    padding: "18px 10px 14px", width: 190, height: TOP_CARD_H, margin: "0 auto",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
  },
  vc: {
    position: "relative", overflow: "hidden", textAlign: "center",
    background: "#3B6D11", border: "1.5px solid #4A7C2F", borderRadius: 11,
    padding: "18px 10px 14px", width: 190, height: TOP_CARD_H, margin: "0 auto",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
  },
  sideBox: {
    background: "#EAF5D8", border: "1.5px solid #4A7C2F", borderRadius: 10,
    padding: "14px 10px", textAlign: "center", width: 190, height: TOP_CARD_H,
    margin: "0 auto",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  dirCard: {
    position: "relative", overflow: "hidden", textAlign: "center",
    background: "#2D5016", border: "1.5px solid #4A7C2F", borderRadius: 11,
    padding: "18px 10px 14px", width: "100%", height: TOP_CARD_H,
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
  },
  sub: {
    background: "#D8EEC0", border: "1px solid #7AAB50", borderRadius: 8,
    padding: "10px 10px", textAlign: "center", fontSize: 11,
    color: "#2D5016", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4,
    minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center",
  },
  footer: {
    position: "relative", overflow: "hidden", textAlign: "center",
    background: "#4A7C2F", borderRadius: 14, padding: "24px 28px", marginTop: 28,
  },
};

const VLine = ({ h }: { h: number }) => (
  <div style={{ width: STEM_W, height: h, background: LINE, flexShrink: 0, margin: "0 auto" }} />
);

const Dot = () => (
  <div style={{ width: DOT_SIZE, height: DOT_SIZE, borderRadius: "50%", background: LINE, flexShrink: 0 }} />
);

function MobileCollapsibleSection({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderRadius: 9, width: "100%" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "flex", alignItems: "center", width: "100%",
          background: "#fff", border: `1.5px solid ${LINE}`,
          borderRadius: open ? "9px 9px 0 0" : 9,
          padding: "16px 14px 12px", cursor: "pointer",
          textAlign: "left", position: "relative",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div style={goldBar(9)} />
        <div style={{ flex: 1, paddingTop: 4, minWidth: 0 }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#2D5016", lineHeight: 1.3 }}>
            {label}
          </div>
        </div>
        <div style={{
          flexShrink: 0, marginLeft: 12, width: 28, height: 28,
          borderRadius: "50%", background: open ? LINE : "#EAF3DE",
          color: open ? "#fff" : "#2D5016",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, lineHeight: 1,
          transition: "transform .25s ease, background .25s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          userSelect: "none",
        }}>+</div>
      </button>

      {open && (
        <div style={{
          borderLeft: `1.5px solid ${LINE}`, borderRight: `1.5px solid ${LINE}`,
          borderBottom: `1.5px solid ${LINE}`,
          borderRadius: "0 0 9px 9px", background: "#F7FCF0",
          padding: "12px 10px",
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

function PreachersWorkersPanel() {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      <div style={{ ...s.sideBox, width: "100%", height: "auto", flex: 1, minWidth: 0, padding: "12px 4px", whiteSpace: "normal" }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 700, color: "#2D5016", lineHeight: 1.2, wordBreak: "break-word" }}>Church Preachers</div>
      </div>
      <div style={{ ...s.sideBox, width: "100%", height: "auto", flex: 1, minWidth: 0, padding: "12px 4px", whiteSpace: "normal" }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 700, color: "#2D5016", lineHeight: 1.2, wordBreak: "break-word" }}>Church Workers</div>
      </div>
    </div>
  );
}

function toTitleCase(str: string): string {
  return str.replace(/[A-Za-z]+/g, (word: string) =>
    word.charAt(0) + word.slice(1).toLowerCase()
  );
}

function MobileTopCard({
  eyebrow, name, role, cardStyle, children,
}: {
  eyebrow: string; name: string; role: string;
  cardStyle: React.CSSProperties; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const bg = cardStyle.background as string;

  return (
    <div style={{ borderRadius: 11, width: "100%" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "block", width: "100%",
          background: bg, border: `1.5px solid ${LINE}`,
          borderRadius: open ? "11px 11px 0 0" : 11,
          padding: "16px 40px 12px 14px",
          cursor: "pointer", textAlign: "left", position: "relative",
          overflow: "hidden", WebkitTapHighlightColor: "transparent",
        }}
      >
        <div style={goldBar(11)} />
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.4px", marginBottom: 3 }}>
          {eyebrow}
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.3, ...nameWrap }}>
          {toTitleCase(name)}
        </div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#A8D080", marginTop: 4 }}>
          {toTitleCase(role)}
        </div>

        <div style={{
          position: "absolute", top: 12, right: 12,
          width: 20, height: 20, borderRadius: "50%",
          background: open ? "#fff" : "rgba(255,255,255,0.2)",
          color: open ? "#2D5016" : "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, lineHeight: 1,
          transition: "transform .25s ease, background .25s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          userSelect: "none",
        }}>+</div>
      </button>

      {open && (
        <div style={{
          borderLeft: `1.5px solid ${LINE}`, borderRight: `1.5px solid ${LINE}`,
          borderBottom: `1.5px solid ${LINE}`,
          borderRadius: "0 0 11px 11px", background: "#F7FCF0",
          padding: "12px 10px",
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

function MobileDirectorCard({
  name, role, preacher, subs,
}: {
  name: string; role: string; preacher?: boolean; subs?: string[];
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = (subs?.length ?? 0) > 0;

  return (
    <div style={{ borderRadius: 9, width: "100%" }}>
      <button
        onClick={() => { if (hasChildren) setOpen(v => !v); }}
        style={{
          display: "block", width: "100%",
          background: "#fff", border: `1.5px solid ${LINE}`,
          borderRadius: open && hasChildren ? "9px 9px 0 0" : 9,
          padding: hasChildren ? "16px 40px 12px 14px" : "16px 14px 12px",
          cursor: hasChildren ? "pointer" : "default",
          textAlign: "left", position: "relative",
          overflow: "hidden", WebkitTapHighlightColor: "transparent",
        }}
      >
        <div style={goldBar(9)} />
        {preacher && (
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.4px", marginBottom: 3 }}>
            PREACHER
          </div>
        )}
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#2D5016", lineHeight: 1.3, ...nameWrap }}>
          {toTitleCase(name)}
        </div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#4A7C2F", marginTop: 4 }}>
          {role}
        </div>

        {hasChildren && (
          <div style={{
            position: "absolute", top: 12, right: 12,
            width: 20, height: 20, borderRadius: "50%",
            background: open ? LINE : "#EAF3DE",
            color: open ? "#fff" : "#2D5016",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, lineHeight: 1,
            transition: "transform .25s ease, background .25s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            userSelect: "none",
          }}>+</div>
        )}
      </button>

      {hasChildren && open && (
        <div style={{
          borderLeft: `1.5px solid ${LINE}`, borderRight: `1.5px solid ${LINE}`,
          borderBottom: `1.5px solid ${LINE}`,
          borderRadius: "0 0 9px 9px", background: "#F7FCF0",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "10px 10px 10px 14px", borderLeft: "3px solid #A3C57A", margin: "0 8px 10px 8px" }}>
            {subs!.map((sub, i) => (
              <div key={i} style={{ ...s.sub, fontSize: 11, minHeight: "auto", padding: "7px 10px" }}>{sub}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DirCard({ name, role, preacher }: { name: string; role: string; preacher?: boolean }) {
  return (
    <div style={s.dirCard}>
      <div style={goldBar(11)} />
      {preacher && (
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.8px", marginBottom: 5 }}>
          PREACHER
        </div>
      )}
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.3, ...nameWrap }}>
        {name}
      </div>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", marginTop: 4 }}>
        {role}
      </div>
    </div>
  );
}

function BracketConnector() {
  return (
    <svg
      width={22}
      height={svgH}
      style={{ position: "absolute", top: 0, left: "100%", overflow: "visible", pointerEvents: "none" }}
    >
      <line x1={16} y1={trunkTopY} x2={16} y2={branch2CenterY} stroke={LINE} strokeWidth={2} />
      <line x1={16} y1={branch1CenterY} x2={0} y2={branch1CenterY} stroke={LINE} strokeWidth={2} />
      <line x1={16} y1={branch2CenterY} x2={0} y2={branch2CenterY} stroke={LINE} strokeWidth={2} />
      <polygon points={`0,${branch1CenterY - 4} 0,${branch1CenterY + 4} -6,${branch1CenterY}`} fill={LINE} />
      <polygon points={`0,${branch2CenterY - 4} 0,${branch2CenterY + 4} -6,${branch2CenterY}`} fill={LINE} />
    </svg>
  );
}

export default function OrgChart() {
  return (
    <div className="org-root" style={{ background: "#F4F8EE", borderRadius: 16, padding: "36px 28px", fontFamily: "'DM Sans', sans-serif", maxWidth: 1400, margin: "0 auto" }}>
      <style>{FONTS}</style>

      {/* ════ DESKTOP ════ */}
      <div className="org-desktop">

        {/* Chairman */}
        <div style={s.chairman}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.8px", marginBottom: 5 }}>
            APOSTLE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.3, ...nameWrap }}>
            REBERO L. ARMENION
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", marginTop: 4 }}>
            CHAIRMAN &amp; CHIEF EXECUTIVE
          </div>
        </div>

        <VLine h={24} />

        {/* Preachers / VC / Workers */}
        <div style={{ position: "relative" }}>
          <div style={{ height: STEM_W, background: LINE, width: "62%", margin: "0 auto" }} />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 36, paddingTop: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <VLine h={20} />
              <div style={s.sideBox}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <VLine h={20} />
              <div style={s.vc}>
                <div style={goldBar(11)} />
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.8px", marginBottom: 5 }}>
                  PASTOR
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.3, ...nameWrap }}>
                  BENJAMEN L. ARMENION, JR.
                </div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", marginTop: 4 }}>
                  VICE CHAIRMAN
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <VLine h={20} />
              <div style={s.sideBox}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
              </div>
            </div>
          </div>
        </div>

        <VLine h={24} />

        {/* Director tier */}
        <div style={{ borderTop: `${STEM_W}px solid ${LINE}`, paddingTop: 20 }}>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
            {directorColumns.map((col, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Dot />
                <VLine h={14} />
                <DirCard name={col.name} role={col.role} preacher={col.preacher} />
                <VLine h={10} />
                <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
                  {col.subs.map((sub, j) => <div key={j} style={s.sub}>{sub}</div>)}
                </div>
              </div>
            ))}

            {/* Bracket column */}
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Dot />
                <VLine h={STEM_1} />
                <DirCard name={bracketColumn.top.name} role={bracketColumn.top.role} />
                <VLine h={STEM_2} />
                <div style={{ display: "flex", flexDirection: "column", gap: BRANCH_GAP, width: "100%" }}>
                  {bracketColumn.branch.map((b, i) => (
                    <DirCard key={i} name={b.name} role={b.role} />
                  ))}
                </div>
              </div>
              <BracketConnector />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={s.footer}>
          <div style={goldBar(14)} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "2px" }}>
            CHURCH MEMBERS &amp; OUTREACHES
          </div>
        </div>
      </div>

      {/* ════ MOBILE ════ */}
      <div className="org-mobile" style={{ flexDirection: "column", gap: 12, alignItems: "stretch", padding: "0 4px" }}>

        {/* Chairman */}
        <MobileTopCard eyebrow="APOSTLE" name="REBERO L. ARMENION" role="CHAIRMAN & CHIEF EXECUTIVE" cardStyle={s.chairman}>
          <PreachersWorkersPanel />
        </MobileTopCard>

        <VLine h={16} />

        {/* Vice Chairman */}
        <MobileTopCard eyebrow="PASTOR" name="BENJAMEN L. ARMENION, JR." role="VICE CHAIRMAN" cardStyle={s.vc}>
          <PreachersWorkersPanel />
        </MobileTopCard>

        <VLine h={16} />

        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "2px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#A3C57A" }} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#4A7C2F", letterSpacing: "1.2px", whiteSpace: "nowrap" }}>DIRECTORS &amp; OFFICERS</div>
          <div style={{ flex: 1, height: 1, background: "#A3C57A" }} />
        </div>

        {directorColumns.map((col, i) => (
          <MobileDirectorCard key={i} name={col.name} role={col.role} preacher={col.preacher} subs={col.subs} />
        ))}
        <MobileDirectorCard name={bracketColumn.top.name} role={bracketColumn.top.role} subs={[]} />
        {bracketColumn.branch.map((b, i) => (
          <MobileDirectorCard key={`b-${i}`} name={b.name} role={b.role} subs={[]} />
        ))}

        <div style={{ ...s.footer, marginTop: 4, borderRadius: 11 }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "1.2px" }}>
            CHURCH MEMBERS &amp; OUTREACHES
          </div>
        </div>

      </div>
    </div>
  );
}