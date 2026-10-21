import React, { useState, useEffect, useMemo } from "react";
import {
  Copy,
  Check,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Maximize2,
  FileText,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import festivalHeroImg from "./assets/images/regenerated_image_1792477686420.jpg";
import festivalStageImg from "./assets/images/regenerated_image_1792323420755.jpg";
import festivalCrowdImg from "./assets/images/regenerated_image_1792323424652.jpg";
import festivalCrewImg from "./assets/images/user_portrait_cutout.png";
import speakerImg from "./assets/images/regenerated_image_1792322145230.jpg";
import ted2024AudienceImg from "./assets/images/regenerated_image_1792324961479.jpg";
import ted2025StageImg from "./assets/images/regenerated_image_1792477691610.jpg";
import ted2025MeetingImg from "./assets/images/regenerated_image_1792323615752.jpg";

/* ─── OBSIDIAN BLACK PALETTE & CHROMATIC AURORA FLOW ────────────────── */
const ATMOSPHERES: Record<string, {
  name: string;
  en: string;
  accent: string;
  accentHov: string;
  accentGrad: string;
  accentBg: string;
  glow: string;
  flow1: string;
  flow2: string;
  flow3: string;
  bgGrad: string;
}> = {
  vol1: {
    name: "晨曦夜芒",
    en: "Dawn Mist Nocturne",
    accent: "#FF7356",
    accentHov: "#FF8A72",
    accentGrad: "linear-gradient(135deg, #FF7E62 0%, #F55F43 50%, #E84D30 100%)",
    accentBg: "linear-gradient(135deg, rgba(255, 115, 86, 0.16) 0%, rgba(254, 185, 145, 0.06) 100%)",
    glow: "rgba(255, 115, 86, 0.45)",
    flow1: "rgba(255, 115, 86, 0.40)",
    flow2: "rgba(167, 139, 250, 0.28)",
    flow3: "rgba(254, 185, 145, 0.22)",
    bgGrad: `
      radial-gradient(ellipse 65% 85% at 92% 20%, rgba(255, 115, 86, 0.32) 0%, rgba(254, 185, 145, 0.16) 45%, transparent 80%),
      radial-gradient(ellipse 60% 70% at 20% 65%, rgba(167, 139, 250, 0.22) 0%, transparent 85%),
      linear-gradient(180deg, #050508 0%, #08080C 50%, #050508 100%)
    `,
  },
  vol2: {
    name: "紫藤暮夜",
    en: "Twilight Wisteria",
    accent: "#A78BFA",
    accentHov: "#BBA4FB",
    accentGrad: "linear-gradient(135deg, #B59BFB 0%, #8B6CE8 50%, #F47255 100%)",
    accentBg: "linear-gradient(135deg, rgba(167, 139, 250, 0.18) 0%, rgba(244, 114, 85, 0.06) 100%)",
    glow: "rgba(167, 139, 250, 0.45)",
    flow1: "rgba(167, 139, 250, 0.40)",
    flow2: "rgba(244, 114, 85, 0.26)",
    flow3: "rgba(139, 92, 246, 0.30)",
    bgGrad: `
      radial-gradient(ellipse 65% 85% at 88% 25%, rgba(167, 139, 250, 0.34) 0%, rgba(255, 140, 115, 0.16) 50%, transparent 85%),
      radial-gradient(ellipse 65% 75% at 15% 60%, rgba(139, 92, 246, 0.24) 0%, transparent 80%),
      linear-gradient(180deg, #050508 0%, #08080C 50%, #050508 100%)
    `,
  },
  vol3: {
    name: "音樂祭夜霞",
    en: "Festival Sunset & Amber",
    accent: "#FF5E3D",
    accentHov: "#FF785C",
    accentGrad: "linear-gradient(135deg, #FF6F52 0%, #E84328 50%, #F59E0B 100%)",
    accentBg: "linear-gradient(135deg, rgba(255, 94, 61, 0.18) 0%, rgba(245, 158, 11, 0.08) 100%)",
    glow: "rgba(255, 94, 61, 0.48)",
    flow1: "rgba(235, 60, 40, 0.38)",
    flow2: "rgba(245, 158, 11, 0.24)",
    flow3: "rgba(255, 126, 98, 0.20)",
    bgGrad: `
      radial-gradient(ellipse 70% 90% at 92% 20%, rgba(255, 94, 61, 0.36) 0%, rgba(245, 158, 11, 0.20) 45%, transparent 85%),
      radial-gradient(ellipse 60% 70% at 18% 55%, rgba(225, 29, 72, 0.18) 0%, transparent 80%),
      linear-gradient(180deg, #050508 0%, #08080C 50%, #050508 100%)
    `,
  },
  vol4: {
    name: "深海星瀾",
    en: "Deep Ocean & Indigo",
    accent: "#818CF8",
    accentHov: "#9FA8FE",
    accentGrad: "linear-gradient(135deg, #98A2FE 0%, #6366F1 50%, #38BDF8 100%)",
    accentBg: "linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(56, 189, 248, 0.06) 100%)",
    glow: "rgba(99, 102, 241, 0.45)",
    flow1: "rgba(99, 102, 241, 0.36)",
    flow2: "rgba(56, 189, 248, 0.24)",
    flow3: "rgba(139, 92, 246, 0.24)",
    bgGrad: `
      radial-gradient(ellipse 65% 85% at 90% 30%, rgba(99, 102, 241, 0.34) 0%, rgba(56, 189, 248, 0.16) 45%, transparent 85%),
      radial-gradient(ellipse 60% 70% at 20% 60%, rgba(139, 92, 246, 0.22) 0%, transparent 80%),
      linear-gradient(180deg, #050508 0%, #08080C 50%, #050508 100%)
    `,
  },
  vol5: {
    name: "翡翠流瀾",
    en: "Emerald & Jade",
    accent: "#10B981",
    accentHov: "#34D399",
    accentGrad: "linear-gradient(135deg, #34D399 0%, #10B981 50%, #06B6D4 100%)",
    accentBg: "linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(6, 182, 212, 0.08) 100%)",
    glow: "rgba(16, 185, 129, 0.45)",
    flow1: "rgba(16, 185, 129, 0.34)",
    flow2: "rgba(20, 184, 166, 0.24)",
    flow3: "rgba(6, 182, 212, 0.20)",
    bgGrad: `
      radial-gradient(ellipse 65% 90% at 92% 35%, rgba(16, 185, 129, 0.32) 0%, rgba(20, 184, 166, 0.18) 50%, transparent 88%),
      radial-gradient(ellipse 60% 70% at 15% 65%, rgba(6, 182, 212, 0.18) 0%, transparent 80%),
      linear-gradient(180deg, #050508 0%, #08080C 50%, #050508 100%)
    `,
  },
  vol6: {
    name: "名片星芒",
    en: "Brand Aura",
    accent: "#FF7356",
    accentHov: "#FF8A72",
    accentGrad: "linear-gradient(135deg, #FF7E62 0%, #F55F43 50%, #E84D30 100%)",
    accentBg: "linear-gradient(135deg, rgba(255, 115, 86, 0.20) 0%, rgba(254, 185, 145, 0.08) 100%)",
    glow: "rgba(255, 115, 86, 0.50)",
    flow1: "rgba(255, 115, 86, 0.42)",
    flow2: "rgba(254, 185, 145, 0.28)",
    flow3: "rgba(167, 139, 250, 0.26)",
    bgGrad: `
      radial-gradient(ellipse 65% 85% at 94% 25%, rgba(255, 115, 86, 0.42) 0%, rgba(254, 185, 145, 0.24) 40%, transparent 90%),
      radial-gradient(ellipse 60% 70% at 20% 70%, rgba(167, 139, 250, 0.24) 0%, transparent 80%),
      linear-gradient(180deg, #050508 0%, #08080C 50%, #050508 100%)
    `,
  },
};

/* ─── BASE OBSIDIAN BLACK TOKENS ─────────────────────────────────────── */
const T = {
  text:    "#FFFFFF",
  textSub: "#A1A1AA",
  textDim: "#71717A",
  card:    "linear-gradient(155deg, rgba(18, 18, 24, 0.72) 0%, rgba(8, 8, 12, 0.86) 100%)",
  cardHov: "linear-gradient(155deg, rgba(28, 28, 36, 0.86) 0%, rgba(14, 14, 20, 0.94) 100%)",
  navBg:   "rgba(5, 5, 8, 0.85)",
  shadow:  "0 22px 55px -12px rgba(0, 0, 0, 0.85), 0 4px 18px rgba(0, 0, 0, 0.6)",
};

/* ─── GLOBAL RESET, FLOWING GRADIENT ANIMATIONS & OBSIDIAN STYLES ───── */
const CSS = `
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}
html {
  scroll-behavior: smooth;
}
html, body {
  overflow-x: hidden;
  background: #050508;
  color: ${T.text};
  font-family: 'Noto Serif TC', 'Cormorant Garamond', 'Georgia', serif;
}
.font-sans-meta {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity;
}

@keyframes flowOrb1 {
  0%   { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
  25%  { transform: translate3d(7vw, 10vh, 0) scale(1.15) rotate(45deg); }
  50%  { transform: translate3d(-5vw, 16vh, 0) scale(0.9) rotate(90deg); }
  75%  { transform: translate3d(-8vw, 6vh, 0) scale(1.1) rotate(135deg); }
  100% { transform: translate3d(0, 0, 0) scale(1) rotate(180deg); }
}

@keyframes flowOrb2 {
  0%   { transform: translate3d(0, 0, 0) scale(1) rotate(0deg); }
  30%  { transform: translate3d(-8vw, -8vh, 0) scale(1.2) rotate(-50deg); }
  60%  { transform: translate3d(8vw, -12vh, 0) scale(0.85) rotate(-100deg); }
  100% { transform: translate3d(0, 0, 0) scale(1) rotate(-150deg); }
}

@keyframes flowOrb3 {
  0%   { transform: translate3d(0, 0, 0) scale(0.9); opacity: 0.35; }
  50%  { transform: translate3d(9vw, -9vh, 0) scale(1.3); opacity: 0.7; }
  100% { transform: translate3d(0, 0, 0) scale(0.9); opacity: 0.35; }
}

@keyframes flowOrb4 {
  0%   { transform: translate3d(0, 0, 0) scale(1.1); opacity: 0.25; }
  50%  { transform: translate3d(-8vw, 12vh, 0) scale(0.85); opacity: 0.55; }
  100% { transform: translate3d(0, 0, 0) scale(1.1); opacity: 0.25; }
}

@keyframes streamShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes progressFlow {
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

@keyframes fadeUp {
  from { opacity:0; transform:translateY(18px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes ticker {
  0%   { transform:translateX(0); }
  100% { transform:translateX(-50%); }
}

.ticker-container:hover .ticker-track {
  animation-play-state: paused;
}

.ticker-text-item {
  transition: opacity 0.25s ease, color 0.25s ease;
}
.ticker-text-item:hover {
  opacity: 1 !important;
  color: #FFFFFF !important;
}

.fu1 { animation: fadeUp .65s cubic-bezier(0.16, 1, 0.3, 1) both .0s; }
.fu2 { animation: fadeUp .65s cubic-bezier(0.16, 1, 0.3, 1) both .08s; }
.fu3 { animation: fadeUp .65s cubic-bezier(0.16, 1, 0.3, 1) both .16s; }
.fu4 { animation: fadeUp .65s cubic-bezier(0.16, 1, 0.3, 1) both .24s; }

.navbtn {
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;
  transition: all .28s ease;
  position: relative;
}

.hovcard {
  transition: transform .32s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow .32s ease, background .32s ease, border-color .32s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.hovcard:hover {
  transform: translateY(-5px);
  background: ${T.cardHov} !important;
  border-color: rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 24px 50px -12px rgba(0, 0, 0, 0.9), 0 0 24px rgba(255, 255, 255, 0.03);
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(140, 130, 170, 0.3);
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #FF7356;
}
`;

/* ─── IMAGES ────────────────────────────────────────────────────────── */
const IMG = {
  festival: festivalHeroImg,
  festivalStage: festivalStageImg,
  festivalCrowd: festivalCrowdImg,
  festivalCrew: festivalHeroImg,
  ted2024Audience: ted2024AudienceImg,
  ted2024Speaker: speakerImg,
  ted2025Stage: ted2025StageImg,
  ted2025Meeting: ted2025MeetingImg,
  speaker: speakerImg,
  audience: ted2024AudienceImg,
  meeting: ted2025MeetingImg,
};

/* ─── CASE STUDY EXTENDED DATA ──────────────────────────────────────── */
const CASE_DETAILS = {
  vol3: {
    id: "vol3",
    tag: "NCCU MUSIC FESTIVAL",
    title: "政大雨山祭 NCCU Music Festival",
    sub: "活動企劃與現場執行",
    period: "2025.09 – 2026.04",
    impact: "1,000+ 人次參與",
    summary: "NCCU Music Festival (政大雨山祭) 為政大具指標性的校園音樂祭，結合音樂展演、市集、裝置藝術與學生共創。我身處活動核心籌備組，負責將多軌活動方案收束為具體可行及張力的現場體驗。",
    highlights: [
      {
        title: "跨動線人流控管與分區體驗",
        desc: "預估戶外舞台與室內展區尖峰人潮破千，主導動線與分流SOP，確保安全與低排隊等待時間。"
      },
      {
        title: "當天天氣與設備備援",
        desc: "依文山區多雨氣候特性下制定雨天備案（含雨備場地移轉排程與設備防潮罩布配置），並在突發陣雨強風中20分鐘內完成雨備處置。"
      },
      {
        title: "人員安排與調度",
        desc: "編制志工職能分配表，建立單一指揮窗口降低訊息延遲。"
      }
    ],
    reflection: "音樂祭的靈魂在於台下觀眾與現場氛圍的共鳴。雨山祭乘載著政大多雨山城的特有氣息，心理學背景讓我在規劃時聚焦於『觀眾體驗旅程』——從樂迷踏入山城、穿梭市集的探索節奏，到站在台下聽團、即使細雨綿綿仍能沉浸在內。"
  },
  vol4: {
    id: "vol4",
    tag: "TED CURATION",
    title: "2024 TEDxNCCU《吾・限》",
    sub: "活動企劃與團隊協作",
    period: "2023.09 – 2024.06",
    impact: "100+ 人到場參與",
    summary: "年度年會主題《吾・限》旨在探討個體自我邊界與社會框架的打破與重構。身為策展團隊核心成員，全程參與講者遴選、演講論點梳理、舞台視覺協作至當日節奏掌控。",
    highlights: [
      {
        title: "講者邀約與敘事打磨",
        desc: "接觸不同領域（藝術、科研、社會創新）之指標講者，進行3輪一對一試講排練，將經歷轉化為具傳播力之18分鐘TED標準演說。"
      },
      {
        title: "講者交流與觀眾提問互動",
        desc: "在講者分享結束後規劃並主持現場開放觀眾提問環節，引導聽眾與講者深度對話交流，現場互動踴躍並獲得極佳的反饋與好評。"
      }
    ],
    reflection: "TED演講不僅僅是台上人的獨白，而是一場台上台下能量流動的儀式。策展過程讓我深刻理解：溝通的本質不是輸出你的資訊，而是引導對方找到共鳴。"
  },
  vol5: {
    id: "vol5",
    tag: "LEADERSHIP & MANAGEMENT",
    title: "2025 TEDxNCCU《流・形》",
    sub: "講者部 部長 · Project Lead",
    period: "2024.07 – 2025.06",
    impact: "累計 200+ 人次參與",
    summary: "升任講者部部長，引領團隊全面負責2025年度大會《流・形》的主題定調、講者組跨域合作、資源分配與系列沙龍之規劃與落地。",
    highlights: [
      {
        title: "大會核心哲學定調《流・形》",
        desc: "從流動（Flow）與形態（Form）的辯證出發，勾勒當代青年在不確定時代中形塑自我姿態的策展主軸。"
      },
      {
        title: "團隊組織培力與激勵機制",
        desc: "管理十餘名組員，導入一對一溝通與定期檢討機制，降低組織流失率，營造主動提問與包容的心理安全感。"
      },
      {
        title: "開拓系列延伸小沙龍",
        desc: "打破單一年會限制，策劃3場聚焦青年的微型沙龍，縮短受眾距離，延伸品牌全年度影響力。"
      }
    ],
    reflection: "從執行者跨越到管理者，最大的轉變是『透過成就他人來成就專案』。體認到領導上的價值是辨識每位組員的獨特稟賦與焦慮來源，給予適當的自主空間與安全網。"
  }
};

/* ─── SAFE IMAGE COMPONENT ──────────────────────────────────────────── */
function SafeImg({
  src,
  alt,
  style,
  onImageClick,
}: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  onImageClick?: () => void;
}) {
  const [err, setErr] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        background: "rgba(16, 16, 22, 0.7)",
        overflow: "hidden",
        cursor: onImageClick ? "pointer" : "default",
        ...style
      }}
      onClick={onImageClick}
    >
      {!err ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErr(true)}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: style?.objectFit ?? "cover",
            objectPosition: style?.objectPosition ?? "center",
            opacity: loaded ? 1 : 0.45,
            transition: "opacity .6s ease, transform .6s ease",
          }}
        />
      ) : (
        <div style={{
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: "rgba(16, 16, 22, 0.7)",
          color: T.textDim,
          padding: 24, textAlign: "center"
        }}>
          <span style={{ fontSize: 24, marginBottom: 8 }}>✦</span>
          <span className="text-xs font-sans-meta" style={{ letterSpacing: "0.08em" }}>{alt}</span>
        </div>
      )}
    </div>
  );
}

/* ─── DYNAMIC PILL BADGE ────────────────────────────────────────────── */
function Pill({
  children,
  inv,
  accent,
  accentGrad,
  accentBg,
  glow,
}: {
  children: React.ReactNode;
  inv?: boolean;
  accent: string;
  accentGrad: string;
  accentBg: string;
  glow: string;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: inv ? accentBg : accentGrad,
        color: inv ? accent : "#050508",
        borderRadius: 999,
        padding: "6px 18px 6px 13px",
        letterSpacing: "0.06em",
        whiteSpace: "nowrap",
        flexShrink: 0,
        fontWeight: 700,
        boxShadow: inv ? "none" : `0 4px 18px ${glow}`,
        transition: "all .45s ease",
      }}
      className="text-xs font-sans-meta"
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          flexShrink: 0,
          background: inv ? accent : "currentColor",
          opacity: inv ? 1 : 0.9,
          transition: "background .45s ease",
        }}
      />
      {children}
    </span>
  );
}

/* ─── DYNAMIC EYEBROW LABEL ─────────────────────────────────────────── */
function Eye({
  s,
  children,
  accent,
}: {
  s?: React.CSSProperties;
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <div
      style={{
        color: accent,
        letterSpacing: "0.22em",
        marginBottom: 12,
        textTransform: "uppercase",
        fontWeight: 700,
        opacity: 0.95,
        transition: "color .45s ease",
        ...s,
      }}
      className="text-xs font-sans-meta"
    >
      {children}
    </div>
  );
}

/* ─── SECTION HEADER ────────────────────────────────────────────────── */
function SecHead({
  pill,
  right,
  badge,
  accent,
  accentGrad,
  accentBg,
  glow,
}: {
  pill: string;
  right?: string;
  badge?: {
    index: string;
    period: string;
  };
  accent: string;
  accentGrad: string;
  accentBg: string;
  glow: string;
}) {
  return (
    <div
      className="fu1"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        marginBottom: 52,
      }}
    >
      <Pill accent={accent} accentGrad={accentGrad} accentBg={accentBg} glow={glow}>
        {pill}
      </Pill>

      {badge ? (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 16px",
            borderRadius: 9999,
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: `0 4px 18px -4px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
          }}
          className="font-sans-meta text-xs"
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 8px ${accent}`,
              flexShrink: 0,
            }}
          />
          <span style={{ color: accent, fontWeight: 700, letterSpacing: "0.14em" }}>
            {badge.index}
          </span>
          <span style={{ width: 1, height: 11, background: "rgba(255, 255, 255, 0.16)" }} />
          <span style={{ color: T.textSub, letterSpacing: "0.06em", fontWeight: 500 }}>
            {badge.period}
          </span>
        </div>
      ) : right ? (
        <div
          style={{
            color: T.textDim,
            letterSpacing: "0.16em",
            fontSize: "11px",
            fontWeight: 600,
          }}
          className="font-sans-meta uppercase"
        >
          {right}
        </div>
      ) : null}
    </div>
  );
}

/* ─── DYNAMIC IMPACT BADGE WITH FLOATING TOOLTIP CARD ───────────────── */
function Impact({
  text,
  onClick,
  accent,
  accentBg,
  tooltip,
}: {
  text: string;
  onClick?: () => void;
  accent: string;
  accentBg: string;
  tooltip?: {
    tag: string;
    title: string;
    bullets: { label: string; desc: string }[];
    note?: string;
  };
}) {
  const [isHovered, setIsHovered] = useState(false);
  const displayText = text.replace(/\s*→\s*$/, "");

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={onClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "transparent",
          border: "none",
          padding: "4px 2px",
          color: accent,
          cursor: "pointer",
          letterSpacing: "0.03em",
          lineHeight: "1.5",
          transition: "all .25s ease",
          outline: "none",
        }}
        className="group text-sm md:text-base font-medium font-sans-meta select-none"
      >
        <span
          style={{ transition: "all .22s ease" }}
          className="group-hover:brightness-125 group-hover:underline underline-offset-6 decoration-current/40"
        >
          {displayText}
        </span>
        <span
          style={{
            display: "inline-block",
            fontSize: "1.1em",
            fontWeight: 600,
            transition: "transform .22s cubic-bezier(0.16, 1, 0.3, 1), filter .22s ease",
          }}
          className="group-hover:translate-x-1.5 group-hover:brightness-125"
        >
          →
        </span>
      </div>

      {tooltip && isHovered && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 12px)",
            right: 0,
            zIndex: 100,
            width: "min(390px, 86vw)",
            background: "linear-gradient(150deg, rgba(16, 16, 22, 0.98) 0%, rgba(6, 6, 9, 0.98) 100%)",
            backdropFilter: "blur(24px)",
            borderRadius: 20,
            padding: "20px 22px",
            boxShadow: "0 24px 50px -10px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.12)",
            animation: "fadeUp .2s cubic-bezier(0.16, 1, 0.3, 1) both",
            pointerEvents: "auto",
          }}
          className="text-left"
        >
          <div
            style={{
              position: "absolute",
              bottom: -6,
              right: 28,
              width: 12,
              height: 12,
              background: "rgba(6, 6, 9, 0.98)",
              transform: "rotate(45deg)",
              borderRight: "1px solid rgba(255, 255, 255, 0.12)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                color: accent,
                letterSpacing: "0.14em",
                fontWeight: 700,
                fontSize: "10px",
              }}
              className="font-sans-meta uppercase"
            >
              {tooltip.tag}
            </span>
            <span
              style={{
                fontSize: "10px",
                color: T.textDim,
                background: "rgba(255, 255, 255, 0.06)",
                padding: "2px 8px",
                borderRadius: 999,
              }}
              className="font-sans-meta"
            >
              HIGHLIGHTS
            </span>
          </div>

          <div
            style={{
              color: T.text,
              fontSize: "13.5px",
              fontWeight: 700,
              lineHeight: 1.45,
              marginBottom: 12,
              letterSpacing: "0.02em",
            }}
          >
            {tooltip.title}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
            {tooltip.bullets.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontSize: "11px",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: accent, marginTop: 1, flexShrink: 0 }}>•</span>
                <div>
                  <span style={{ color: T.text, fontWeight: 600 }}>{b.label}：</span>
                  <span style={{ color: T.textSub }}>{b.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 10,
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              fontSize: "10px",
              color: T.textDim,
            }}
            className="font-sans-meta"
          >
            <span>{tooltip.note || "點擊按鈕查看深入覆盤"}</span>
            <span style={{ color: accent, display: "flex", alignItems: "center", gap: 3, fontWeight: 600 }}>
              VIEW CASE ➔
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── RESPONSIBILITY ROW ────────────────────────────────────────────── */
function Resp({
  n,
  title,
  desc,
  accent,
}: {
  n: string;
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        width: "100%",
        padding: "16px 0",
      }}
    >
      <span
        style={{
          color: accent,
          letterSpacing: "0.1em",
          flexShrink: 0,
          width: 32,
          fontWeight: 700,
          fontSize: "14px",
          fontFamily: "'Cormorant Garamond', serif",
          transition: "color .4s ease",
        }}
      >
        {n}.
      </span>
      <span
        style={{
          color: T.text,
          letterSpacing: "0.04em",
          lineHeight: 1.6,
          flexShrink: 0,
          width: 145,
          fontWeight: 600,
        }}
        className="text-sm"
      >
        {title}
      </span>
      <span
        style={{
          color: T.textSub,
          lineHeight: "1.9",
          letterSpacing: "0.04em",
          flex: 1,
          minWidth: 0,
        }}
        className="text-xs"
      >
        {desc}
      </span>
    </div>
  );
}

/* ─── PHOTO HERO ────────────────────────────────────────────────────── */
function PhotoHero({
  src,
  alt,
  h = 430,
  pill,
  cap,
  pos,
  onZoom,
  accent,
  accentGrad,
  accentBg,
  glow,
}: {
  src: string;
  alt: string;
  h?: number;
  pill?: string;
  cap?: string;
  pos?: string;
  onZoom?: () => void;
  accent: string;
  accentGrad: string;
  accentBg: string;
  glow: string;
}) {
  const isCompact = h < 260;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: h,
        borderRadius: 24,
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: T.shadow,
      }}
      className="group"
    >
      <SafeImg
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: pos ?? "center 38%",
        }}
        onImageClick={onZoom}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(14,13,18,0.92) 0%, rgba(14,13,18,0.35) 50%, rgba(255,255,255,0.02) 100%)",
          pointerEvents: "none",
        }}
      />
      {pill && (
        <div style={{ position: "absolute", bottom: isCompact ? 16 : 26, left: isCompact ? 18 : 30, zIndex: 2 }}>
          <Pill accent={accent} accentGrad={accentGrad} accentBg={accentBg} glow={glow}>
            {pill}
          </Pill>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: isCompact ? 16 : 26,
          right: isCompact ? 18 : 30,
          display: "flex",
          alignItems: "center",
          gap: isCompact ? 8 : 14,
          zIndex: 2,
        }}
      >
        {cap && (
          <span
            style={{
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
            className={`${isCompact ? "hidden sm:inline-block text-[11px]" : "text-xs"} font-sans-meta`}
          >
            {cap}
          </span>
        )}
        {onZoom && (
          <button
            onClick={onZoom}
            className={`text-xs bg-white/10 hover:bg-white/25 text-white ${isCompact ? "p-2" : "p-2.5"} rounded-full backdrop-blur-md transition-all cursor-pointer`}
            title="放大預覽"
            aria-label="放大圖片"
          >
            <Maximize2 size={isCompact ? 12 : 13} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── TICKER ────────────────────────────────────────────────────────── */
function Ticker({ items, accent = "#FF7356" }: { items: string[]; accent?: string }) {
  return (
    <div
      className="ticker-container"
      style={{
        overflow: "hidden",
        position: "relative",
        padding: "16px 0",
        margin: "0",
        zIndex: 2,
        background: "transparent",
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: "inline-flex",
          gap: 32,
          animation: "ticker 48s linear infinite",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3].map((setIndex) => (
          <span key={setIndex} className="inline-flex items-center gap-8">
            {items.map((item, idx) => (
              <span key={`${setIndex}-${idx}`} className="inline-flex items-center gap-8">
                <span
                  className="ticker-text-item font-sans-meta cursor-default select-none uppercase"
                  style={{
                    color: T.textSub,
                    opacity: 0.65,
                    fontSize: "0.82rem",
                    letterSpacing: "0.14em",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
                <span
                  style={{
                    color: accent,
                    opacity: 0.45,
                    fontSize: "0.85rem",
                    userSelect: "none",
                  }}
                >
                  ·
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── SECTION WRAPPER ──────────────────────────────────────────────── */
const HDR = 64;

function Sec({
  id,
  bg,
  ambientColor,
  children,
}: {
  id?: string;
  bg?: string;
  ambientColor?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{
        width: "100%",
        background: bg ?? "transparent",
        padding: "104px 36px 116px 36px",
        position: "relative",
        zIndex: 1,
        transition: "background 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {ambientColor && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "8%",
              right: "8%",
              height: "70%",
              background: `radial-gradient(ellipse 75% 55% at 50% 0%, ${ambientColor} 0%, transparent 72%)`,
              opacity: 0.12,
              filter: "blur(65px)",
              WebkitFilter: "blur(65px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(180deg, transparent 0%, ${ambientColor} 20%, ${ambientColor} 78%, transparent 100%)`,
              opacity: 0.04,
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      )}

      <div
        style={{
          width: "100%",
          maxWidth: 1300,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT: DARK THEME WITH CHROMATIC SCROLL SHIFT
══════════════════════════════════════════════════════════════════════ */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("vol1");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string } | null>(null);

  const curAtmos = useMemo(() => ATMOSPHERES[active] || ATMOSPHERES.vol1, [active]);

  useEffect(() => {
    const IDS = ["vol1", "vol2", "vol3", "vol4", "vol5", "vol6"];
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      setScrollProgress(progress);

      for (let i = IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(IDS[i]);
        if (el && el.getBoundingClientRect().top <= HDR + 120) {
          setActive(IDS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HDR + 4;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(label);
    setTimeout(() => setCopyFeedback(null), 2400);
  };

  const NAV = [
    { id: "vol1", label: "VOL.1 About" },
    { id: "vol2", label: "VOL.2 Overview" },
    { id: "vol3", label: "VOL.3 NCCU Music Festival" },
    { id: "vol4", label: "VOL.4 TEDx2024" },
    { id: "vol5", label: "VOL.5 TEDx2025" },
    { id: "vol6", label: "VOL.6 Vision" },
  ];

  const activeCaseData = selectedCase ? CASE_DETAILS[selectedCase as keyof typeof CASE_DETAILS] : null;

  return (
    <>
      <style>{CSS}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#050508",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {Object.entries(ATMOSPHERES).map(([id, atmos]) => (
        <div
          key={id}
          className="bg-layer"
          style={{
            opacity: active === id ? 1 : 0,
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              top: "-15%",
              right: "-10%",
              width: "75vw",
              height: "75vw",
              maxWidth: 920,
              maxHeight: 920,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${atmos.flow1} 0%, rgba(5, 5, 8, 0) 68%)`,
              filter: "blur(95px)",
              WebkitFilter: "blur(95px)",
              animation: "flowOrb1 22s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate",
              willChange: "transform",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "-12%",
              width: "82vw",
              height: "82vw",
              maxWidth: 980,
              maxHeight: 980,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${atmos.flow2} 0%, rgba(5, 5, 8, 0) 70%)`,
              filter: "blur(110px)",
              WebkitFilter: "blur(110px)",
              animation: "flowOrb2 28s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate",
              willChange: "transform",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "38%",
              right: "6%",
              width: "55vw",
              height: "55vw",
              maxWidth: 680,
              maxHeight: 680,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${atmos.flow3} 0%, rgba(5, 5, 8, 0) 66%)`,
              filter: "blur(85px)",
              WebkitFilter: "blur(85px)",
              animation: "flowOrb3 18s ease-in-out infinite alternate",
              willChange: "transform",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "12%",
              left: "4%",
              width: "52vw",
              height: "52vw",
              maxWidth: 620,
              maxHeight: 620,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${atmos.flow1} 0%, rgba(5, 5, 8, 0) 66%)`,
              filter: "blur(95px)",
              WebkitFilter: "blur(95px)",
              animation: "flowOrb4 24s ease-in-out infinite alternate",
              willChange: "transform",
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "linear-gradient(135deg, rgba(255, 115, 86, 0.08) 0%, rgba(167, 139, 250, 0.10) 30%, rgba(244, 88, 118, 0.08) 60%, rgba(255, 109, 74, 0.10) 100%)",
          backgroundSize: "300% 300%",
          animation: "streamShift 16s ease infinite",
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "screen",
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 30%, rgba(5, 5, 8, 0.5) 70%, #050508 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div
        style={{
          color: T.text,
          width: "100%",
          minHeight: "100vh",
          overflowX: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${scrollProgress * 100}%`,
            height: "3px",
            backgroundImage: `linear-gradient(90deg, ${curAtmos.accent}, #A78BFA, ${curAtmos.accent})`,
            backgroundSize: "200% 100%",
            animation: "progressFlow 3s linear infinite",
            zIndex: 2000,
            transition: "width .15s ease-out",
            boxShadow: `0 0 16px ${curAtmos.glow}, 0 0 6px ${curAtmos.accent}`,
          }}
        />

        {copyFeedback && (
          <div
            style={{
              position: "fixed",
              bottom: 32,
              right: 32,
              zIndex: 3000,
              background: "rgba(16, 16, 22, 0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: T.text,
              borderRadius: 16,
              padding: "12px 22px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: T.shadow,
              animation: "fadeUp .3s ease both",
            }}
            className="text-xs font-sans-meta"
          >
            <Check size={16} style={{ color: curAtmos.accent }} />
            <span>已成功複製 {copyFeedback} 至剪貼簿</span>
          </div>
        )}

        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            height: HDR,
            background: scrolled ? "rgba(5, 5, 8, 0.78)" : "transparent",
            backdropFilter: scrolled ? "blur(18px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
            boxShadow: scrolled ? "0 8px 30px rgba(0, 0, 0, 0.4)" : "none",
            transition: "all .35s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
          }}
        >
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ flexShrink: 0, cursor: "pointer" }}
          >
            <div
              style={{ color: T.textDim, letterSpacing: "0.18em", lineHeight: 1 }}
              className="text-xs font-sans-meta"
            >
              PORTFOLIO &#39;26
            </div>
            <div style={{ color: T.text, letterSpacing: "0.04em", marginTop: 4, fontWeight: 700 }} className="text-sm">
              <em style={{ fontStyle: "normal", color: curAtmos.accent, transition: "color .4s ease" }}>潘琪舜</em>&ensp;Chi-shun Pan
            </div>
          </div>

          <nav
            className="hidden md:flex items-center gap-1"
            style={{
              background: scrolled ? "transparent" : "rgba(16, 16, 22, 0.65)",
              border: scrolled ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px)",
              padding: "5px 8px",
              borderRadius: 999,
              transition: "background .3s ease",
            }}
          >
            {NAV.map((n) => (
              <button
                key={n.id}
                className="navbtn text-xs font-sans-meta"
                onClick={() => go(n.id)}
                style={{
                  padding: "7px 18px",
                  borderRadius: 999,
                  background: active === n.id ? "rgba(255, 255, 255, 0.1)" : "transparent",
                  color: active === n.id ? curAtmos.accent : T.textSub,
                  letterSpacing: "0.06em",
                  fontWeight: active === n.id ? 700 : 500,
                  boxShadow: active === n.id ? "0 4px 16px rgba(0, 0, 0, 0.5)" : "none",
                }}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full cursor-pointer"
              style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.1)", color: T.text }}
              aria-label="選單"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        <div
          style={{
            position: "fixed",
            top: HDR,
            left: 0,
            right: 0,
            height: 38,
            background: "linear-gradient(to bottom, rgba(5, 5, 8, 0.78) 0%, rgba(5, 5, 8, 0.28) 55%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 999,
            opacity: scrolled ? 1 : 0,
            transition: "opacity .35s ease",
          }}
          aria-hidden="true"
        />

        {mobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: HDR,
              left: 20,
              right: 20,
              background: "rgba(12, 12, 16, 0.98)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: 20,
              boxShadow: T.shadow,
              zIndex: 999,
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            className="md:hidden animate-in fade-in"
          >
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                style={{
                  textAlign: "left",
                  padding: "12px 18px",
                  borderRadius: 14,
                  background: active === n.id ? curAtmos.accentBg : "transparent",
                  color: active === n.id ? curAtmos.accent : T.text,
                  letterSpacing: "0.06em",
                  fontWeight: active === n.id ? 700 : 500,
                }}
                className="text-sm font-sans-meta flex items-center justify-between cursor-pointer"
              >
                <span>{n.label}</span>
                {active === n.id && <span style={{ color: curAtmos.accent }}>✦</span>}
              </button>
            ))}
          </div>
        )}

        <div style={{ height: HDR + 20 }} />

        {/* ══ VOL.1 — ABOUT ════════════════════════════════════════ */}
        <Sec id="vol1">
          <SecHead
            pill="VOL.1 ABOUT ME & PHILOSOPHY"
            right="SELF-INTRODUCTION"
            accent={ATMOSPHERES.vol1.accent}
            accentGrad={ATMOSPHERES.vol1.accentGrad}
            accentBg={ATMOSPHERES.vol1.accentBg}
            glow={ATMOSPHERES.vol1.glow}
          />

          <div
            className="fu2"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 48,
              marginBottom: 72,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                flexWrap: "wrap",
                flex: "0 0 auto",
              }}
            >
              <div style={{ minWidth: 200 }}>
                <Eye accent={ATMOSPHERES.vol1.accent}>APPLICANT</Eye>
                <h1
                  style={{
                    color: T.text,
                    lineHeight: 1.15,
                    letterSpacing: "0.03em",
                    marginBottom: 8,
                    fontSize: "3.2rem",
                    fontWeight: 600,
                  }}
                >
                  潘琪舜
                </h1>
                <div
                  style={{ color: ATMOSPHERES.vol1.accent, letterSpacing: "0.08em", marginBottom: 20, fontWeight: 700 }}
                  className="text-base font-sans-meta"
                >
                  Chi-shun Pan
                </div>
                <div style={{ color: T.textSub, letterSpacing: "0.04em", lineHeight: 1.9 }} className="text-sm">
                  國立政治大學<br />
                  心理學系
                </div>
              </div>
            </div>

            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <div
                style={{
                  color: ATMOSPHERES.vol1.accent,
                  letterSpacing: "0.18em",
                  marginBottom: 20,
                  fontWeight: 700,
                }}
                className="text-xs font-sans-meta"
              >
                CORE BELIEF & RESEARCH-DRIVEN PERSPECTIVE
              </div>
              <p
                style={{
                  color: T.text,
                  lineHeight: "2.1",
                  letterSpacing: "0.05em",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  marginBottom: 28,
                }}
              >
                我是政大心理系的潘琪舜。心理學的訓練讓我習慣從「人的需求」出發去觀察與思考；而對於各式文化的熱愛，則驅使我把這些洞察轉化為實際的企劃。我擅於將抽象的行為觀察收斂成具體的方案，並在實際執行中持續疊代驗證。我期望結合心理學洞察、設計思考與專案管理，打造出能解決問題、引發共鳴的體驗。
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "使用者行為洞察",
                  "現場體驗架構",
                  "大型年會策展",
                  "跨職能團隊領導",
                  "敏捷排程與應變",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(10px)",
                      color: T.textSub,
                      padding: "7px 18px",
                      borderRadius: 999,
                      fontSize: "12px",
                      letterSpacing: "0.04em",
                      fontWeight: 600,
                    }}
                    className="font-sans-meta"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Sec>

        <Ticker
          items={[
            "政大雨山祭 NCCU Music Festival",
            "TEDxNCCU 2024《吾・限》",
            "TEDxNCCU 2025《流・形》",
            "活動企劃",
            "專案管理",
            "體驗設計",
            "現場執行",
            "心理學需求洞察",
          ]}
          accent={curAtmos.accent}
        />

        {/* ══ VOL.2 — OVERVIEW ═════════════════════════════════════ */}
        <Sec id="vol2">
          <SecHead
            pill="VOL.2 CASE STUDIES OVERVIEW"
            right="THREE PROJECTS / 2023–2026"
            accent={ATMOSPHERES.vol2.accent}
            accentGrad={ATMOSPHERES.vol2.accentGrad}
            accentBg={ATMOSPHERES.vol2.accentBg}
            glow={ATMOSPHERES.vol2.glow}
          />

          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {[
              {
                num: "01",
                tag: "NCCU MUSIC FESTIVAL",
                tgt: "vol3",
                title: "政大雨山祭 · NCCU Music Festival",
                period: "2025.09 – 2026.04",
                role: "活動企劃與現場執行",
                impact: "1,000+ 人次參與",
                accent: ATMOSPHERES.vol3.accent,
                accentBg: ATMOSPHERES.vol3.accentBg,
              },
              {
                num: "02",
                tag: "TED CURATOR",
                tgt: "vol4",
                title: "2024 TEDxNCCU《吾・限》",
                period: "2023.09 – 2024.06",
                role: "活動企劃與團隊協作",
                impact: "100+ 人到場參與",
                accent: ATMOSPHERES.vol4.accent,
                accentBg: ATMOSPHERES.vol4.accentBg,
              },
              {
                num: "03",
                tag: "LEADERSHIP",
                tgt: "vol5",
                title: "2025 TEDxNCCU《流・形》",
                period: "2024.07 – 2025.06",
                role: "講者部 部長 · Project Lead",
                impact: "200+ 人次參與",
                accent: ATMOSPHERES.vol5.accent,
                accentBg: ATMOSPHERES.vol5.accentBg,
              },
            ].map((p, i) => (
              <div
                key={p.num}
                className={`hovcard fu${i + 2}`}
                onClick={() => go(p.tgt)}
                style={{
                  flex: "1 1 300px",
                  minWidth: 0,
                  background: T.card,
                  backdropFilter: "blur(20px)",
                  borderRadius: 24,
                  padding: "36px 30px",
                  boxShadow: T.shadow,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 24,
                    }}
                  >
                    <span
                      style={{
                        color: p.accent,
                        letterSpacing: "0.1em",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {p.num}.
                    </span>
                    <span
                      style={{ color: T.textDim, letterSpacing: "0.14em", fontWeight: 700 }}
                      className="text-xs font-sans-meta"
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div
                    style={{
                      color: T.text,
                      letterSpacing: "0.04em",
                      lineHeight: 1.4,
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                    className="text-xl"
                  >
                    {p.title}
                  </div>
                  <div
                    style={{ color: T.textDim, letterSpacing: "0.06em", marginBottom: 6 }}
                    className="text-xs font-sans-meta"
                  >
                    {p.period}
                  </div>
                  <div
                    style={{ color: p.accent, letterSpacing: "0.04em", marginBottom: 14, fontWeight: 700 }}
                    className="text-xs"
                  >
                    {p.role}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                  <Pill
                    inv
                    accent={p.accent}
                    accentGrad={ATMOSPHERES.vol2.accentGrad}
                    accentBg={p.accentBg}
                    glow={ATMOSPHERES.vol2.glow}
                  >
                    {p.impact}
                  </Pill>
                  <span
                    style={{ color: T.textDim }}
                    className="text-xs font-sans-meta flex items-center gap-1 group-hover:text-[#FF7356] transition-colors"
                  >
                    閱讀專案 <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Sec>

        {/* ══ VOL.3 — NCCU MUSIC FESTIVAL ═══════════════════════════ */}
        <Sec id="vol3" ambientColor={ATMOSPHERES.vol3.accent}>
          <SecHead
            pill="VOL.3 CASE STUDY 01"
            badge={{ index: "01 / 03", period: "2025 – 2026" }}
            right="NCCU Music Festival Production & Execution"
            accent={ATMOSPHERES.vol3.accent}
            accentGrad={ATMOSPHERES.vol3.accentGrad}
            accentBg={ATMOSPHERES.vol3.accentBg}
            glow={ATMOSPHERES.vol3.glow}
          />

          <div className="fu2" style={{ display: "flex", flexWrap: "wrap", gap: 56, marginBottom: 52 }}>
            <div style={{ flex: "0 0 320px", minWidth: 0 }}>
              <Eye accent={ATMOSPHERES.vol3.accent}>PROJECT TITLE</Eye>
              <h2
                style={{
                  color: T.text,
                  letterSpacing: "0.05em",
                  lineHeight: 1.3,
                  marginBottom: 8,
                  fontSize: "2.2rem",
                  fontWeight: 700,
                }}
              >
                政大雨山祭<br />
                <span style={{ fontSize: "1.5rem", color: T.textSub, fontWeight: 500 }}>NCCU Music Festival</span>
              </h2>
              <div style={{ color: ATMOSPHERES.vol3.accent, letterSpacing: "0.05em", fontWeight: 700 }} className="text-sm">
                活動企劃與現場執行
              </div>
            </div>
            <div style={{ flex: "1 1 320px", minWidth: 0 }}>
              <Eye accent={ATMOSPHERES.vol3.accent}>PROJECT OVERVIEW</Eye>
              <p
                style={{ color: T.textSub, lineHeight: "2.0", letterSpacing: "0.05em" }}
                className="text-base"
              >
                雨山祭為校內大型學生音樂祭，我負責前期企劃、流程規劃、人力場地協調與現場應變。整合主舞台表演與周邊市集，設計無縫切換的現場動線，讓聽眾能在聽音樂與逛市集之間享受最高品質的活動體驗。
              </p>
            </div>
          </div>

          <div
            className="fu3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 52,
            }}
          >
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <PhotoHero
                src={IMG.festival}
                alt="政大雨山祭 NCCU Music Festival 現場氛圍"
                h={380}
                pill="NCCU Music Festival · 主舞台現場"
                onZoom={() => setLightboxImg({ src: IMG.festival, caption: "政大雨山祭 NCCU Music Festival · 校內大型音樂祭典主舞台" })}
                accent={ATMOSPHERES.vol3.accent}
                accentGrad={ATMOSPHERES.vol3.accentGrad}
                accentBg={ATMOSPHERES.vol3.accentBg}
                glow={ATMOSPHERES.vol3.glow}
              />
            </div>

            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <PhotoHero
                src={IMG.festivalStage}
                alt="政大雨山祭 · 紀念周邊與活動現場"
                h={380}
                pill="MERCH & STAGE · 活動周邊與現場"
                onZoom={() => setLightboxImg({ src: IMG.festivalStage, caption: "政大雨山祭 · 紀念毛巾與現場周邊" })}
                accent={ATMOSPHERES.vol3.accent}
                accentGrad={ATMOSPHERES.vol3.accentGrad}
                accentBg={ATMOSPHERES.vol3.accentBg}
                glow={ATMOSPHERES.vol3.glow}
              />
            </div>
          </div>

          <Eye s={{ marginBottom: 16 }} accent={ATMOSPHERES.vol3.accent}>KEY RESPONSIBILITIES</Eye>
          <div
            style={{
              background: T.card,
              backdropFilter: "blur(20px)",
              borderRadius: 24,
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 44,
              boxShadow: T.shadow,
            }}
          >
            {[
              { n: "01", t: "前期企劃發想", d: "參與前期活動內容發想與企劃，規劃活動形式與執行流程，制定舞台節目與市集周邊互動方案。" },
              { n: "02", t: "流程規劃統籌", d: "規劃當日流程，確認人力配置、場地與各項硬體搭建事項，落實雨天備案。" },
              { n: "03", t: "現場執行調度", d: "負責現場執行與流程掌控，依現場人潮即時調整通道，處置突發狀況，確保活動如期圓滿。" },
            ].map((r) => (
              <Resp key={r.n} n={r.n} title={r.t} desc={r.d} accent={ATMOSPHERES.vol3.accent} />
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingTop: 18,
                marginTop: 10,
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              }}
              className="pt-5 mt-3 flex justify-end"
            >
              <Impact
                text="1,000+ 人次數據覆盤與亮點分析 →"
                onClick={() => setSelectedCase("vol3")}
                accent={ATMOSPHERES.vol3.accent}
                accentBg={ATMOSPHERES.vol3.accentBg}
                tooltip={{
                  tag: "NCCU MUSIC FESTIVAL · 現場成果速覽",
                  title: "1,000+ 人次參與 · 零延遲現場調度",
                  bullets: [
                    { label: "雙向動線分流", desc: "尖峰人潮破千，主導動線標記與進出場 SOP，確保動線暢通" },
                    { label: "20分鐘雨備處置", desc: "文山區多雨氣候下制定雨備方案，20分鐘內完成硬體穩固" },
                    { label: "人員安排與調度", desc: "編制現場組員職能分配表，單一指揮窗口降低訊息延遲" },
                  ],
                  note: "點擊按鈕開啟完整策展覆盤",
                }}
              />
            </div>
          </div>
        </Sec>

        <Ticker
          items={["CASE STUDY 01", "政大雨山祭", "NCCU Music Festival", "1,000+ 人次", "活動企劃", "現場執行", "流程規劃", "NCCU"]}
          accent={curAtmos.accent}
        />

        {/* ══ VOL.4 — TEDx2024 ══════════════════════════════════════ */}
        <Sec id="vol4" ambientColor={ATMOSPHERES.vol4.accent}>
          <SecHead
            pill="VOL.4 CASE STUDY 02"
            badge={{ index: "02 / 03", period: "2023 – 2024" }}
            right="Content Curation & Team Collaboration"
            accent={ATMOSPHERES.vol4.accent}
            accentGrad={ATMOSPHERES.vol4.accentGrad}
            accentBg={ATMOSPHERES.vol4.accentBg}
            glow={ATMOSPHERES.vol4.glow}
          />

          <div className="fu2" style={{ display: "flex", flexWrap: "wrap", gap: 56, marginBottom: 52 }}>
            <div style={{ flex: "0 0 300px", minWidth: 0 }}>
              <Eye accent={ATMOSPHERES.vol4.accent}>PROJECT TITLE</Eye>
              <h2
                style={{
                  color: T.text,
                  letterSpacing: "0.05em",
                  lineHeight: 1.3,
                  marginBottom: 8,
                  fontSize: "2.25rem",
                  fontWeight: 700,
                }}
              >
                2024 TEDxNCCU
              </h2>
              <div
                style={{ color: ATMOSPHERES.vol4.accent, letterSpacing: "0.1em", marginBottom: 8, fontWeight: 700 }}
                className="text-xl"
              >
                《吾・限》
              </div>
              <div style={{ color: T.textSub, letterSpacing: "0.04em", fontWeight: 600 }} className="text-sm">
                活動企劃與團隊協作
              </div>
            </div>
            <div style={{ flex: "1 1 320px", minWidth: 0 }}>
              <Eye accent={ATMOSPHERES.vol4.accent}>PROJECT OVERVIEW</Eye>
              <p
                style={{ color: T.textSub, lineHeight: "2.0", letterSpacing: "0.05em" }}
                className="text-base"
              >
                參與年度活動《吾・限》，將抽象概念轉化為具體規劃。我負責講者邀請、跨組溝通與現場執行，陪伴講者梳理演說架構，並藉由多輪試講將其理念打磨為有架構的內容。
              </p>
            </div>
          </div>

          <div
            className="fu3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 52,
            }}
          >
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <PhotoHero
                src={IMG.ted2024Audience}
                alt="TEDxNCCU 2024 · 現場團隊協作"
                h={380}
                pill="EVENT CREW · 現場團隊協作"
                onZoom={() => setLightboxImg({ src: IMG.ted2024Audience, caption: "2024 TEDxNCCU《吾・限》· 現場籌備與團隊協作" })}
                accent={ATMOSPHERES.vol4.accent}
                accentGrad={ATMOSPHERES.vol4.accentGrad}
                accentBg={ATMOSPHERES.vol4.accentBg}
                glow={ATMOSPHERES.vol4.glow}
              />
            </div>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <PhotoHero
                src={IMG.ted2024Speaker}
                alt="2024 TEDxNCCU《吾・限》· 年會主視覺"
                h={380}
                pill="KEY VISUAL · 年會主視覺"
                onZoom={() => setLightboxImg({ src: IMG.ted2024Speaker, caption: "2024 TEDxNCCU《吾・限》· 年會主視覺概念" })}
                accent={ATMOSPHERES.vol4.accent}
                accentGrad={ATMOSPHERES.vol4.accentGrad}
                accentBg={ATMOSPHERES.vol4.accentBg}
                glow={ATMOSPHERES.vol4.glow}
              />
            </div>
          </div>

          <Eye s={{ marginBottom: 16 }} accent={ATMOSPHERES.vol4.accent}>KEY RESPONSIBILITIES</Eye>
          <div
            style={{
              background: T.card,
              backdropFilter: "blur(20px)",
              borderRadius: 24,
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 44,
              boxShadow: T.shadow,
            }}
          >
            {[
              { n: "01", t: "主題內容發想", d: "參與年度活動主題與內容發想，將抽象概念轉化為具體活動規劃與舞台演繹形式。" },
              { n: "02", t: "講者邀請溝通", d: "負責講者邀請與深度溝通，與不同背景講者建立聯繫，協助梳理論點與排練試講。" },
              { n: "03", t: "跨組協作追蹤", d: "進行跨組（行銷、設計、行政）溝通與工作協調，追蹤任務進度並依反饋敏捷調整執行方式。" },
            ].map((r) => (
              <Resp key={r.n} n={r.n} title={r.t} desc={r.d} accent={ATMOSPHERES.vol4.accent} />
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingTop: 18,
                marginTop: 10,
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              }}
              className="pt-5 mt-3 flex justify-end"
            >
              <Impact
                text="100+ 人到場參與 · 策展覆盤與亮點分析 →"
                onClick={() => setSelectedCase("vol4")}
                accent={ATMOSPHERES.vol4.accent}
                accentBg={ATMOSPHERES.vol4.accentBg}
                tooltip={{
                  tag: "TEDxNCCU 2024 · 核心策展成果",
                  title: "100+ 人滿座 · 概念打磨與講者培育",
                  bullets: [
                    { label: "多輪試講陪伴", desc: "陪伴跨領域講者梳理演說論點、節奏與台風演練" },
                    { label: "觀眾提問互動", desc: "規劃講者分享後提問交流，現場互動踴躍並獲熱烈回饋" },
                    { label: "幹部梯隊成長", desc: "以扎實執行力贏得團隊信任，獲推選為新任活動部長" },
                  ],
                  note: "點擊按鈕開啟完整策展覆盤",
                }}
              />
            </div>
          </div>
        </Sec>

        <Ticker
          items={[
            "CASE STUDY 02",
            "2024 TEDxNCCU",
            "《吾・限》",
            "100+ 人到場",
            "內容策展",
            "講者培訓",
            "問答互動",
            "核心幹部養成",
          ]}
          accent={curAtmos.accent}
        />

        {/* ══ VOL.5 — TEDx2025 ══════════════════════════════════════ */}
        <Sec id="vol5" ambientColor={ATMOSPHERES.vol5.accent}>
          <SecHead
            pill="VOL.5 CASE STUDY 03"
            badge={{ index: "03 / 03", period: "2024 – 2025" }}
            right="Team Leadership & Project Management"
            accent={ATMOSPHERES.vol5.accent}
            accentGrad={ATMOSPHERES.vol5.accentGrad}
            accentBg={ATMOSPHERES.vol5.accentBg}
            glow={ATMOSPHERES.vol5.glow}
          />

          <div className="fu2" style={{ display: "flex", flexWrap: "wrap", gap: 56, marginBottom: 52 }}>
            <div style={{ flex: "0 0 300px", minWidth: 0 }}>
              <Eye accent={ATMOSPHERES.vol5.accent}>PROJECT TITLE</Eye>
              <h2
                style={{
                  color: T.text,
                  letterSpacing: "0.05em",
                  lineHeight: 1.3,
                  marginBottom: 8,
                  fontSize: "2.25rem",
                  fontWeight: 700,
                }}
              >
                2025 TEDxNCCU
              </h2>
              <div
                style={{ color: ATMOSPHERES.vol5.accent, letterSpacing: "0.1em", marginBottom: 8, fontWeight: 700 }}
                className="text-xl"
              >
                《流・形》
              </div>
              <div style={{ color: T.textSub, letterSpacing: "0.04em", fontWeight: 600 }} className="text-sm">
                講者部 部長 · Project Lead
              </div>
            </div>
            <div style={{ flex: "1 1 320px", minWidth: 0 }}>
              <Eye accent={ATMOSPHERES.vol5.accent}>PROJECT OVERVIEW</Eye>
              <p
                style={{ color: T.textSub, lineHeight: "2.0", letterSpacing: "0.05em" }}
                className="text-base"
              >
                擔任講者部部長，負責年度大會《流・形》整體方向定調、講者團隊協調、專案決策與延伸沙龍籌辦。引領團隊由上而下建立透明且具同理心的決策流程。
              </p>
            </div>
          </div>

          <div
            className="fu3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 44,
            }}
          >
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <PhotoHero
                src={IMG.ted2025Stage}
                alt="TEDxNCCU 2025 年會大會現場"
                h={380}
                pill="TEDxNCCU 2025 · 年會大會"
                onZoom={() => setLightboxImg({ src: IMG.ted2025Stage, caption: "2025 TEDxNCCU《流・形》· 年會大會舞台現場" })}
                accent={ATMOSPHERES.vol5.accent}
                accentGrad={ATMOSPHERES.vol5.accentGrad}
                accentBg={ATMOSPHERES.vol5.accentBg}
                glow={ATMOSPHERES.vol5.glow}
              />
            </div>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <PhotoHero
                src={IMG.ted2025Meeting}
                alt="2025 TEDxNCCU《流・形》· 年會主視覺"
                h={380}
                pill="KEY VISUAL · 年會主視覺"
                onZoom={() => setLightboxImg({ src: IMG.ted2025Meeting, caption: "2025 TEDxNCCU《流・形》· 年會主視覺海報" })}
                accent={ATMOSPHERES.vol5.accent}
                accentGrad={ATMOSPHERES.vol5.accentGrad}
                accentBg={ATMOSPHERES.vol5.accentBg}
                glow={ATMOSPHERES.vol5.glow}
              />
            </div>
          </div>

          <Eye s={{ marginBottom: 16 }} accent={ATMOSPHERES.vol5.accent}>KEY RESPONSIBILITIES</Eye>
          <div
            style={{
              background: T.card,
              backdropFilter: "blur(20px)",
              borderRadius: 24,
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 44,
              boxShadow: T.shadow,
            }}
          >
            {[
              { n: "01", t: "整體方向定調", d: "參與年度活動整體方向與主題定調，進行企劃核心討論與重大策略決策制定。" },
              { n: "02", t: "跨組統整協調", d: "統整各組工作進度與資源需求，化解不同職能間的衝突，建立高效資訊流通網絡。" },
              { n: "03", t: "延伸沙龍籌辦", d: "參與後續系列沙龍活動規劃與執行，深化受眾連結，延續 TEDxNCCU 與校內外社群之交流。" },
            ].map((r) => (
              <Resp key={r.n} n={r.n} title={r.t} desc={r.d} accent={ATMOSPHERES.vol5.accent} />
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingTop: 18,
                marginTop: 10,
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              }}
              className="pt-5 mt-3 flex justify-end"
            >
              <Impact
                text="累計 200+ 人次參與 · 專案覆盤與亮點分析 →"
                onClick={() => setSelectedCase("vol5")}
                accent={ATMOSPHERES.vol5.accent}
                accentBg={ATMOSPHERES.vol5.accentBg}
                tooltip={{
                  tag: "TEDxNCCU 2025 · 部長領導成果",
                  title: "200+ 人次參與 · 跨組決策與延伸沙龍",
                  bullets: [
                    { label: "年度方向定調", desc: "確立《流・形》大會核心精神、視覺調性與策略方針" },
                    { label: "領導12+人團隊", desc: "建立高透明度決策制度，橫向串聯 4 大功能部門" },
                    { label: "深化社群對話", desc: "籌劃系列延伸沙龍活動，持續擴大影響力與知識共鳴" },
                  ],
                  note: "點擊按鈕開啟完整策展覆盤",
                }}
              />
            </div>
          </div>
        </Sec>

        <Ticker
          items={[
            "CASE STUDY 03",
            "2025 TEDxNCCU",
            "《流・形》",
            "部長",
            "200+ 人次",
            "專案管理",
            "延伸沙龍",
            "組織領導力",
          ]}
          accent={curAtmos.accent}
        />

        {/* ══ VOL.6 — VISION & CONTACT ═══════════════════════════════ */}
        <Sec id="vol6">
          <SecHead
            pill="VOL.6 FUTURE VISION & FIT"
            right="INTERNSHIP APPLICATION"
            accent={ATMOSPHERES.vol6.accent}
            accentGrad={ATMOSPHERES.vol6.accentGrad}
            accentBg={ATMOSPHERES.vol6.accentBg}
            glow={ATMOSPHERES.vol6.glow}
          />

          {/* 2 goal cards */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 72 }}>
            {[
              {
                num: "01",
                zh: "認知防衛與決策機制研究",
                en: "Self-Esteem, Task Difficulty & Self-Handicapping",
                body: "探討個體在面對壓力情境時的自我設限行為與心理防衛機制。透過嚴謹的實驗設計與變因控制，量化分析不同自尊程度者在困難挑戰下的行為決策，鍛鍊將複雜行為歸因轉化為使用者動機洞察的能力。",
              },
              {
                num: "02",
                zh: "脈絡洞察與質性發展研究",
                en: "Atypical Family Structures & Child Development",
                body: "深入非典型家庭結構的真實生活脈絡，運用質性深度訪談與情境觀察，拆解環境因素對兒童心理發展的交互影響。養成從系統化角度剖析非典型族群需求、發掘隱性痛點的敏銳觀察力。",
              },
            ].map((g, i) => (
              <div
                key={g.num}
                className={`hovcard fu${i + 2}`}
                style={{
                  flex: "1 1 340px",
                  minWidth: 0,
                  background: T.card,
                  backdropFilter: "blur(20px)",
                  borderRadius: 24,
                  padding: "36px 30px",
                  boxShadow: T.shadow,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      color: ATMOSPHERES.vol6.accent,
                      letterSpacing: "0.1em",
                      marginBottom: 18,
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {g.num}.
                  </div>
                  <div
                    style={{
                      color: T.text,
                      letterSpacing: "0.04em",
                      lineHeight: 1.45,
                      marginBottom: 6,
                      fontWeight: 700,
                    }}
                    className="text-lg"
                  >
                    {g.zh}
                  </div>
                  <div
                    style={{ color: T.textDim, letterSpacing: "0.1em", marginBottom: 18 }}
                    className="text-xs font-sans-meta font-medium"
                  >
                    {g.en}
                  </div>
                  <p style={{ color: T.textSub, lineHeight: "1.9", letterSpacing: "0.04em" }} className="text-xs">
                    {g.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "linear-gradient(155deg, rgba(18, 18, 24, 0.88) 0%, rgba(8, 8, 12, 0.95) 100%)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 28,
              padding: "48px 44px",
              boxShadow: T.shadow,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "42%",
                background: "linear-gradient(to right, transparent 0%, rgba(255, 115, 86, 0.22) 55%, rgba(254, 185, 145, 0.28) 100%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 40,
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 48, maxWidth: 800 }}>
                <div>
                  <div
                    style={{ color: ATMOSPHERES.vol6.accent, letterSpacing: "0.18em", marginBottom: 8, fontWeight: 700 }}
                    className="text-xs font-sans-meta"
                  >
                    PHONE
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        color: T.text,
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                        fontSize: "1.15rem",
                        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      }}
                    >
                      +886 907071156
                    </span>
                    <button
                      onClick={() => copyText("0907071156", "電話號碼")}
                      style={{ color: T.textDim }}
                      className="hover:text-[#FF7356] transition-colors p-1 cursor-pointer"
                      title="點擊複製"
                      aria-label="複製電話"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  <div
                    style={{ color: ATMOSPHERES.vol6.accent, letterSpacing: "0.18em", marginBottom: 8, fontWeight: 700 }}
                    className="text-xs font-sans-meta"
                  >
                    EMAIL
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        color: T.text,
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                        fontSize: "1.15rem",
                        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      }}
                    >
                      CHISOON7128@GMAIL.COM
                    </span>
                    <button
                      onClick={() => copyText("chisoon7128@gmail.com", "Email")}
                      style={{ color: T.textDim }}
                      className="hover:text-[#FF7356] transition-colors p-1 cursor-pointer"
                      title="點擊複製"
                      aria-label="複製 Email"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  <div
                    style={{ color: ATMOSPHERES.vol6.accent, letterSpacing: "0.18em", marginBottom: 8, fontWeight: 700 }}
                    className="text-xs font-sans-meta"
                  >
                    UNIVERSITY
                  </div>
                  <div style={{ color: T.text, letterSpacing: "0.04em", fontWeight: 600 }} className="text-sm">
                    國立政治大學 · 心理學系
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "right", minWidth: 240 }}>
                <div
                  style={{ color: ATMOSPHERES.vol6.accent, letterSpacing: "0.18em", marginBottom: 8, fontWeight: 700 }}
                  className="text-xs font-sans-meta"
                >
                  APPLYING FOR
                </div>
                <div
                  style={{ color: T.text, letterSpacing: "0.05em", lineHeight: 1.6, fontWeight: 700 }}
                  className="text-sm"
                >
                  Curation · Project Management<br />
                  Experience Design
                </div>
              </div>
            </div>
          </div>
        </Sec>

        {/* ══ FOOTER ════════════════════════════════════════════════ */}
        <footer
          style={{
            background: "transparent",
            width: "100%",
            padding: "36px 40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <span style={{ color: T.textDim, letterSpacing: "0.08em", fontWeight: 500 }} className="text-xs font-sans-meta">
            © 2026 潘琪舜 Chi-shun Pan — Portfolio &#39;26
          </span>

          <div style={{ display: "flex", gap: 20, itemsCenter: "center", flexWrap: "wrap" }}>
            {["VOL.1", "VOL.2", "VOL.3", "VOL.4", "VOL.5"].map((v) => (
              <span key={v} style={{ color: T.textDim, letterSpacing: "0.1em", opacity: 0.7 }} className="text-xs font-sans-meta">
                {v}
              </span>
            ))}
            <span style={{ color: curAtmos.accent, letterSpacing: "0.1em", fontWeight: 700, transition: "color .4s ease" }} className="text-xs font-sans-meta">
              VOL.6 ✦
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                color: T.textSub,
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "6px 14px",
                borderRadius: 999,
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
              }}
              className="ml-4 text-xs font-sans-meta hover:opacity-85 flex items-center gap-1.5 transition-all font-semibold"
              title="回到頁首"
            >
              <ArrowUp size={12} />
              <span>TOP</span>
            </button>
          </div>
        </footer>

        {/* ══ CASE STUDY DETAIL MODAL (OBSIDIAN FROSTED GLASS) ═══════ */}
        {activeCaseData && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 4000,
              background: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(24px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
            onClick={() => setSelectedCase(null)}
          >
            <div
              style={{
                background: "linear-gradient(160deg, rgba(18, 18, 24, 0.98) 0%, rgba(6, 6, 9, 0.99) 100%)",
                backdropFilter: "blur(28px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 28,
                width: "100%",
                maxWidth: 680,
                maxHeight: "88vh",
                overflowY: "auto",
                padding: "40px 36px",
                boxShadow: T.shadow,
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  position: "absolute",
                  top: 28,
                  right: 28,
                  color: T.textDim,
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "50%",
                  padding: 8,
                  cursor: "pointer",
                }}
                className="hover:opacity-75 transition-opacity"
                aria-label="關閉"
              >
                <X size={18} />
              </button>

              <div
                style={{ color: curAtmos.accent, letterSpacing: "0.18em", marginBottom: 10, fontWeight: 700 }}
                className="text-xs font-sans-meta"
              >
                {activeCaseData.tag}
              </div>
              <h3 style={{ color: T.text, fontSize: "1.9rem", fontWeight: 700, marginBottom: 8 }}>
                {activeCaseData.title}
              </h3>
              <div style={{ color: T.textSub, marginBottom: 22 }} className="text-sm">
                {activeCaseData.sub} · {activeCaseData.period}
              </div>

              <div style={{ marginBottom: 26 }}>
                <Pill
                  inv
                  accent={curAtmos.accent}
                  accentGrad={curAtmos.accentGrad}
                  accentBg={curAtmos.accentBg}
                  glow={curAtmos.glow}
                >
                  {activeCaseData.impact}
                </Pill>
              </div>

              <p style={{ color: T.text, lineHeight: "1.9", marginBottom: 32 }} className="text-base">
                {activeCaseData.summary}
              </p>

              <div style={{ marginBottom: 30 }}>
                <Eye s={{ marginBottom: 16 }} accent={curAtmos.accent}>KEY PROJECT DELIVERABLES & CHALLENGES</Eye>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {activeCaseData.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        borderRadius: 18,
                        padding: "18px 22px",
                      }}
                    >
                      <div style={{ color: T.text, fontWeight: 600, marginBottom: 6 }} className="text-sm">
                        {h.title}
                      </div>
                      <div style={{ color: T.textSub, lineHeight: "1.8" }} className="text-xs">
                        {h.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Eye s={{ marginBottom: 12 }} accent={curAtmos.accent}>CURATOR'S REFLECTION & PSYCHOLOGY INSIGHT</Eye>
                <div
                  style={{
                    background: curAtmos.accentBg,
                    borderRadius: 18,
                    padding: "20px 24px",
                  }}
                >
                  <p style={{ color: T.text, lineHeight: "1.9", fontStyle: "italic" }} className="text-sm">
                    "{activeCaseData.reflection}"
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setSelectedCase(null)}
                  style={{
                    background: curAtmos.accentGrad,
                    color: "#050508",
                    borderRadius: 999,
                    padding: "10px 26px",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                  className="text-xs font-sans-meta hover:opacity-90 transition-opacity"
                >
                  關閉視窗
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ══ LIGHTBOX MODAL ════════════════════════════════════════ */}
        {lightboxImg && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 5000,
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                color: "#fff",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "50%",
                padding: 10,
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.caption}
              style={{
                maxWidth: "92vw",
                maxHeight: "82vh",
                objectFit: "contain",
                borderRadius: 20,
                boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
              }}
            />
            {lightboxImg.caption && (
              <div
                style={{
                  marginTop: 20,
                  color: "#FFFFFF",
                  letterSpacing: "0.08em",
                  background: "rgba(16, 16, 22, 0.92)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "8px 22px",
                  borderRadius: 999,
                }}
                className="text-xs font-sans-meta"
              >
                {lightboxImg.caption}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
