import React, { useState, useMemo } from "react";
import {
  Copy,
  Check,
  ChevronRight,
  Menu,
  X,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";
import festivalHeroImg from "./assets/images/regenerated_image_1792477686420.jpg";
import festivalStageImg from "./assets/images/regenerated_image_1792323420755.jpg";
import festivalCrowdImg from "./assets/images/regenerated_image_1792323424652.jpg";
import festivalCrewImg from "./assets/images/user_portrait_cutout.png";
import speakerImg from "./assets/images/regenerated_image_1792322145230.jpg";
import ted2024AudienceImg from "./assets/images/regenerated_image_1792324961479.jpg";
import ted2025StageImg from "./assets/images/regenerated_image_1792477691610.jpg";
import ted2025MeetingImg from "./assets/images/regenerated_image_1792323615752.jpg";

/* ─── PEARL LIGHT CHROMATIC ATMOSPHERES ────────────────────────────── */
const ATMOSPHERES: Record<string, {
  name: string;
  en: string;
  accent: string;
  accentHov: string;
  accentGrad: string;
  accentBg: string;
  glow: string;
  bgGradLight: string;
}> = {
  vol1: {
    name: "晨曦暖光",
    en: "Dawn Mist",
    accent: "#E0533C",
    accentHov: "#F06449",
    accentGrad: "linear-gradient(135deg, #FF6B50 0%, #E0533C 100%)",
    accentBg: "rgba(224, 83, 60, 0.08)",
    glow: "rgba(224, 83, 60, 0.25)",
    bgGradLight: `
      radial-gradient(ellipse 65% 85% at 92% 20%, rgba(255, 180, 160, 0.35) 0%, rgba(254, 215, 195, 0.15) 45%, transparent 80%),
      radial-gradient(ellipse 60% 70% at 20% 65%, rgba(210, 190, 250, 0.25) 0%, transparent 85%),
      linear-gradient(180deg, #FAFAFC 0%, #F4F4F8 50%, #FAFAFC 100%)
    `,
  },
  vol2: {
    name: "紫藤暮光",
    en: "Twilight Wisteria",
    accent: "#7C3AED",
    accentHov: "#8B5CF6",
    accentGrad: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    accentBg: "rgba(124, 58, 237, 0.08)",
    glow: "rgba(124, 58, 237, 0.22)",
    bgGradLight: `
      radial-gradient(ellipse 65% 85% at 88% 25%, rgba(221, 214, 254, 0.4) 0%, rgba(254, 215, 215, 0.2) 50%, transparent 85%),
      radial-gradient(ellipse 65% 75% at 15% 60%, rgba(196, 181, 253, 0.25) 0%, transparent 80%),
      linear-gradient(180deg, #FAFAFC 0%, #F4F4F8 50%, #FAFAFC 100%)
    `,
  },
  vol3: {
    name: "音樂祭夕霞",
    en: "Festival Sunset",
    accent: "#E64A19",
    accentHov: "#FF5722",
    accentGrad: "linear-gradient(135deg, #FF5722 0%, #E64A19 100%)",
    accentBg: "rgba(230, 74, 25, 0.08)",
    glow: "rgba(230, 74, 25, 0.25)",
    bgGradLight: `
      radial-gradient(ellipse 70% 90% at 92% 20%, rgba(255, 160, 130, 0.35) 0%, rgba(255, 210, 150, 0.2) 45%, transparent 85%),
      radial-gradient(ellipse 60% 70% at 18% 55%, rgba(255, 205, 210, 0.25) 0%, transparent 80%),
      linear-gradient(180deg, #FAFAFC 0%, #F4F4F8 50%, #FAFAFC 100%)
    `,
  },
  vol4: {
    name: "深海星瀾",
    en: "Deep Ocean",
    accent: "#4F46E5",
    accentHov: "#6366F1",
    accentGrad: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    accentBg: "rgba(79, 70, 229, 0.08)",
    glow: "rgba(79, 70, 229, 0.22)",
    bgGradLight: `
      radial-gradient(ellipse 65% 85% at 90% 30%, rgba(199, 210, 254, 0.4) 0%, rgba(224, 231, 255, 0.2) 45%, transparent 85%),
      radial-gradient(ellipse 60% 70% at 20% 60%, rgba(221, 214, 254, 0.25) 0%, transparent 80%),
      linear-gradient(180deg, #FAFAFC 0%, #F4F4F8 50%, #FAFAFC 100%)
    `,
  },
  vol5: {
    name: "翡翠流瀾",
    en: "Emerald Jade",
    accent: "#059669",
    accentHov: "#10B981",
    accentGrad: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    accentBg: "rgba(5, 150, 105, 0.08)",
    glow: "rgba(5, 150, 105, 0.22)",
    bgGradLight: `
      radial-gradient(ellipse 65% 90% at 92% 35%, rgba(167, 243, 208, 0.4) 0%, rgba(207, 250, 254, 0.2) 50%, transparent 88%),
      radial-gradient(ellipse 60% 70% at 15% 65%, rgba(204, 251, 241, 0.25) 0%, transparent 80%),
      linear-gradient(180deg, #FAFAFC 0%, #F4F4F8 50%, #FAFAFC 100%)
    `,
  },
};

/* ─── BASE LIGHT TOKENS ────────────────────────────────────────────── */
const T = {
  text:    "#18181B",
  textSub: "#52525B",
  textDim: "#71717A",
  card:    "linear-gradient(155deg, rgba(255, 255, 255, 0.92) 0%, rgba(248, 248, 250, 0.98) 100%)",
  cardHov: "linear-gradient(155deg, #FFFFFF 0%, #F4F4F6 100%)",
  border:  "rgba(0, 0, 0, 0.08)",
  navBg:   "rgba(250, 250, 252, 0.85)",
  shadow:  "0 18px 40px -12px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)",
};

/* ─── IMAGES ────────────────────────────────────────────────────────── */
const IMG = {
  festival: festivalHeroImg,
  festivalStage: festivalStageImg,
  festivalCrowd: festivalCrowdImg,
  festivalCrew: festivalCrewImg,
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
    title: "雨山祭 音樂祭策展",
    sub: "觀眾體驗旅程與場域氛圍設計",
    period: "2025.09 – 2026.04",
    impact: "1,000+ 人次參與",
    summary: "雨山祭結合政大人文氣息與文山地景風光，以『春雨霏霏之際的舒緩慶典』為核心。運用 UX 體驗思維，將政大多雨山城的場域特性轉化為慶典記憶點，打造讓受眾在雨中暫時放下生活重量、深度沉浸的情感共鳴現場。",
    highlights: [
      {
        label: "動線設計",
        desc: "梳理樂迷踏入山城、穿梭市集至舞台觀演的 Audience Journey，優化節奏與排隊等待體驗。"
      },
      {
        label: "劣勢翻轉",
        desc: "不把三月涼意與春雨當阻礙，將雨水轉化為連結台上台下的浪漫沉浸氛圍。"
      },
      {
        label: "跨組溝通",
        desc: "橫向協調節目、場務與市集組別，平衡整體策展願景與現場微觀執行細節。"
      }
    ],
    reflection: "「雨山祭讓我相信，當你把自己最純粹的熱愛灌注進去，連山城的細雨都能變成台上台下最浪漫的情感共鳴。」"
  },
  vol4: {
    id: "vol4",
    tag: "TED CURATION",
    title: "2024 TEDxNCCU《吾・限》",
    sub: "活動企劃與跨團隊協作",
    period: "2023.09 – 2024.06",
    impact: "100+ 人到場參與",
    summary: "年度年會主題《吾・限》旨在探討個體自我邊界與社會框架的打破與重構。身為策展團隊核心成員，全程參與講者遴選、演講論點梳理、舞台視覺協作至當日節奏掌控。",
    highlights: [
      {
        label: "概念轉譯",
        desc: "將『打破社會標籤、定義自我』龐大哲學收斂為具體議題，協助講者進行3輪試講排練。"
      },
      {
        label: "現場對話",
        desc: "規劃並主持現場觀眾提問環節，引導聽眾與講者深度對話交流，獲得極佳反饋。"
      }
    ],
    reflection: "「把『打破標籤、定義自我』這樣龐大的哲學概念，轉化為現場上百人能產生共鳴的舞台與故事，是我在 TEDx 最寶貴的實踐。」"
  },
  vol5: {
    id: "vol5",
    tag: "LEADERSHIP & MANAGEMENT",
    title: "2025 TEDxNCCU《流・形》",
    sub: "講者部部長 · Project Lead",
    period: "2024.07 – 2025.06",
    impact: "累計 200+ 人次參與",
    summary: "升任講者部部長，引領團隊全面負責2025年度大會《流・形》的主題定調、講者組跨域合作、資源分配與系列沙龍之規劃與落地。",
    highlights: [
      {
        label: "哲學定調",
        desc: "以『奔流河川與碎石』為隱喻，探討擺脫主流焦慮、擁抱真實自我的策展主軸。"
      },
      {
        label: "組織培力",
        desc: "管理十餘名組員，導入一對一溝通與定期檢討機制，建立包容的心理安全感。"
      },
      {
        label: "沙龍延伸",
        desc: "策劃3場微型沙龍，縮短受眾距離，延伸品牌全年度影響力。"
      }
    ],
    reflection: "「把『不隨波逐流、擁抱真實自我』這樣詩意且深刻的哲學，轉化為上百位觀眾能感同身受的舞台與故事。」"
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
        background: "rgba(0, 0, 0, 0.04)",
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
          padding: 24, textAlign: "center"
        }}>
          <span style={{ fontSize: 24, marginBottom: 8, color: T.textDim }}>✦</span>
          <span className="text-xs font-sans-meta" style={{ letterSpacing: "0.08em", color: T.textDim }}>{alt}</span>
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
        color: "#FFFFFF",
        borderRadius: 999,
        padding: "6px 18px 6px 13px",
        letterSpacing: "0.06em",
        whiteSpace: "nowrap",
        flexShrink: 0,
        fontWeight: 700,
        boxShadow: inv ? "none" : `0 4px 16px ${glow}`,
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
          background: "currentColor",
          opacity: 0.9,
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
            background: "rgba(0, 0, 0, 0.04)",
            border: `1px solid ${T.border}`,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
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
          <span style={{ width: 1, height: 11, background: "rgba(0, 0, 0, 0.12)" }} />
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
            background: "linear-gradient(150deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 245, 248, 0.98) 100%)",
            backdropFilter: "blur(24px)",
            borderRadius: 20,
            padding: "20px 22px",
            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.08)",
            animation: "fadeUp .2s cubic-bezier(0.16, 1, 0.3, 1) both",
            pointerEvents: "auto",
          }}
          className="text-left"
        >
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
                background: "rgba(0, 0, 0, 0.05)",
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
              borderTop: "1px solid rgba(0, 0, 0, 0.06)",
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
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
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
            "linear-gradient(to top, rgba(14,13,18,0.85) 0%, rgba(14,13,18,0.2) 50%, rgba(255,255,255,0.02) 100%)",
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
              color: "rgba(255,255,255,0.92)",
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
            className={`text-xs bg-white/20 hover:bg-white/35 text-white ${isCompact ? "p-2" : "p-2.5"} rounded-full backdrop-blur-md transition-all cursor-pointer`}
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
function Ticker({ items, accent = "#E0533C" }: { items: string[]; accent?: string }) {
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
                    opacity: 0.85,
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
                    opacity: 0.5,
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
        padding: "80px 32px 100px 32px",
        position: "relative",
        zIndex: 1,
        transition: "background 0.7s ease",
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
            }}
          />
        </div>
      )}

      <div
        style={{
          width: "100%",
          maxWidth: 1200,
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
   MAIN COMPONENT: CHI-SHUN PAN PORTFOLIO (MINIMAL PEARL LIGHT)
══════════════════════════════════════════════════════════════════════ */
export default function Portfolio() {
  const [active, setActive] = useState("vol1");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string } | null>(null);

  const curAtmo = ATMOSPHERES[active] || ATMOSPHERES.vol1;

  const tickerSkills = [
    "UX Research & Personas",
    "Audience Journey Mapping",
    "Content & Concept Translation",
    "Event Curation & Management",
    "Cross-functional Leadership",
    "Behavioral Insight & Inquiry",
  ];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopyFeedback("Email 已成功複製！");
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  return (
    <div
      style={{
        background: "#FAFAFC",
        color: T.text,
        minHeight: "100vh",
        position: "relative",
        fontFamily: "'Noto Serif TC', serif",
      }}
    >
      {/* Background Flowing Pearl Glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: curAtmo.bgGradLight,
          transition: "background 1s ease",
        }}
      />

      {/* Navigation Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: T.navBg,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${T.border}`,
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: curAtmo.accent, fontWeight: 700, letterSpacing: "0.1em" }} className="font-sans-meta text-sm">
            PAN CHI-SHUN
          </span>
          <span style={{ color: T.textDim }} className="text-xs font-sans-meta hidden sm:inline">
            | 潘琪舜 作品集
          </span>
        </div>

        {/* Atmosphere Presets Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden md:flex">
          <nav style={{ display: "flex", gap: 8 }} className="font-sans-meta text-xs">
            {Object.entries(ATMOSPHERES).map(([key, atmo]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  background: active === key ? atmo.accentBg : "transparent",
                  color: active === key ? atmo.accent : T.textSub,
                  border: active === key ? `1px solid ${atmo.accent}` : "1px solid transparent",
                  padding: "6px 14px",
                  borderRadius: 999,
                  cursor: "pointer",
                  transition: "all .3s ease",
                  fontWeight: active === key ? 600 : 400,
                }}
              >
                {atmo.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: "transparent", color: T.text, cursor: "pointer" }}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Hero Section */}
      <section style={{ position: "relative", zIndex: 1, padding: "90px 32px 50px", maxWidth: 1200, margin: "0 auto" }}>
        <Eye accent={curAtmo.accent}>UX Research · Content Translation · Experience Curation</Eye>

        <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", fontWeight: 700, lineHeight: 1.25, marginBottom: 28, letterSpacing: "-0.01em", color: "#09090B" }}>
          以心理學研究為基底、熱愛為驅動，<br />
          將抽象概念轉譯為打動人心的體驗。
        </h1>

        <p style={{ color: T.textSub, fontSize: "1.08rem", lineHeight: 1.85, maxWidth: 820, marginBottom: 36 }}>
          我是政大心理系的潘琪舜。心理學的嚴謹訓練，讓我習慣從「人的視角」發掘根本需求；而對音樂與文化的熱情，則驅使我結合 UX 體驗思考與文字轉譯能力，把深奧、抽象或有門檻的概念，轉化為大家能產生深刻共鳴的企劃與現場記憶。
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => handleCopyEmail("chishun.pan@gmail.com")}
            style={{
              background: curAtmo.accentGrad,
              color: "#FFFFFF",
              borderRadius: 999,
              padding: "12px 28px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: `0 4px 18px ${curAtmo.glow}`,
            }}
            className="font-sans-meta text-xs"
          >
            {copyFeedback ? <Check size={14} /> : <Copy size={14} />}
            <span>{copyFeedback || "複製聯絡 Email"}</span>
          </button>

          <a
            href="#academic"
            style={{
              color: T.text,
              border: `1px solid ${T.border}`,
              background: "rgba(0,0,0,0.03)",
              borderRadius: 999,
              padding: "12px 28px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
            }}
            className="font-sans-meta text-xs"
          >
            <span>探索經歷與專案</span>
            <ChevronRight size={14} />
          </a>
        </div>
      </section>

      {/* Infinite Skills Ticker */}
      <section style={{ position: "relative", zIndex: 1, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, margin: "40px 0" }}>
        <Ticker items={tickerSkills} accent={curAtmo.accent} />
      </section>

      {/* SECTION 1: Academic Research Background */}
      <Sec id="academic" ambientColor={curAtmo.accent}>
        <SecHead
          pill="ACADEMIC BACKGROUND"
          badge={{ index: "01", period: "政大心理學系" }}
          accent={curAtmo.accent}
          accentGrad={curAtmo.accentGrad}
          accentBg={curAtmo.accentBg}
          glow={curAtmo.glow}
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 24,
              padding: "36px",
              boxShadow: T.shadow,
            }}
          >
            <Eye accent={curAtmo.accent}>RESEARCH RIGOR & BEHAVIORAL INSIGHT</Eye>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 20 }}>學術訓練與研究思維</h3>

            <div style={{ borderLeft: `3px solid ${curAtmo.accent}`, paddingLeft: 20, marginBottom: 24 }}>
              <p style={{ color: T.text, fontSize: "1.05rem", lineHeight: 1.75, fontWeight: 600 }}>
                「學術訓練留給我最大的資產是『嚴謹』，它讓我習慣在做企劃前，先去釐清受眾行為背後的真正原因。」
              </p>
            </div>

            <p style={{ color: T.textSub, fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 28 }}>
              在政大心理系的學術訓練中，學習研究設計與行為觀察，習慣在設計體驗前先梳理認知與動機脈絡，將抽象的心理學觀點轉化為可驗證的研究架構，為後續企劃提供扎實的洞察基礎。
            </p>

            <Resp n="01" title="嚴謹思維" desc="習慣透過研究設計與行為觀察，釐清受眾行為背後的根本原因。" accent={curAtmo.accent} />
            <Resp n="02" title="體驗轉譯" desc="將深奧的研究與洞察，轉化為好懂、有感的體驗與互動介面。" accent={curAtmo.accent} />
          </div>
        </div>
      </Sec>

      {/* SECTION 2: 2025 TEDxNCCU《流・形》 */}
      <Sec id="ted2025" ambientColor={curAtmo.accent}>
        <SecHead
          pill="TEDxCURATION & LEADERSHIP"
          badge={{ index: "02", period: "2024.07 – 2025.06" }}
          accent={curAtmo.accent}
          accentGrad={curAtmo.accentGrad}
          accentBg={curAtmo.accentBg}
          glow={curAtmo.glow}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "start" }}>
          <div>
            <PhotoHero
              src={IMG.ted2025Stage}
              alt="2025 TEDx舞台"
              h={380}
              pill="2025《流・形》"
              cap="200+ 人次參與"
              accent={curAtmo.accent}
              accentGrad={curAtmo.accentGrad}
              accentBg={curAtmo.accentBg}
              glow={curAtmo.glow}
              onZoom={() => setLightboxImg({ src: IMG.ted2025Stage, caption: "2025 TEDxNCCU《流・形》大會現場" })}
            />
          </div>

          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 24,
              padding: "36px",
              boxShadow: T.shadow,
            }}
          >
            <Eye accent={curAtmo.accent}>PROJECT LEAD & SPEAKER CURATION</Eye>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 12 }}>2025 TEDxNCCU《流・形》</h3>
            <div style={{ color: T.textDim, fontSize: "0.88rem", marginBottom: 20 }} className="font-sans-meta">
              講者部部長 · Project Lead
            </div>

            <div style={{ borderLeft: `3px solid ${curAtmo.accent}`, paddingLeft: 16, marginBottom: 24 }}>
              <p style={{ color: T.text, fontSize: "0.98rem", lineHeight: 1.7, fontWeight: 500 }}>
                「把『不隨波逐流、擁抱真實自我』這樣詩意且深刻的哲學，轉化為上百位觀眾能感同身受的舞台與故事。」
              </p>
            </div>

            <p style={{ color: T.textSub, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 24 }}>
              本屆年會以『奔流的河川與河邊碎石』為隱喻，探討現代人在主流價值下的焦慮，鼓勵人們像流水般擁抱自己最真實的形態。主導主題定調、講者觀點轉譯與十餘名組員的帶領培育。
            </p>

            <Impact
              text="查看 2025 專案亮點覆盤"
              onClick={() => setSelectedCase("vol5")}
              accent={curAtmo.accent}
              accentBg={curAtmo.accentBg}
              tooltip={{
                tag: "PROJECT LEAD",
                title: "2025 TEDxNCCU《流・形》",
                bullets: [
                  { label: "哲學定調", desc: "主導《流・形》核心議題架構" },
                  { label: "團隊領導", desc: "帶領 10+ 人講者部與跨組協作" }
                ]
              }}
            />
          </div>
        </div>
      </Sec>

      {/* SECTION 3: 2024 TEDxNCCU《吾・限》 */}
      <Sec id="ted2024" ambientColor={curAtmo.accent}>
        <SecHead
          pill="TEDxCURATION"
          badge={{ index: "03", period: "2023.09 – 2024.06" }}
          accent={curAtmo.accent}
          accentGrad={curAtmo.accentGrad}
          accentBg={curAtmo.accentBg}
          glow={curAtmo.glow}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "start" }}>
          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 24,
              padding: "36px",
              boxShadow: T.shadow,
            }}
          >
            <Eye accent={curAtmo.accent}>CONCEPT TRANSLATION</Eye>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 12 }}>2024 TEDxNCCU《吾・限》</h3>
            <div style={{ color: T.textDim, fontSize: "0.88rem", marginBottom: 20 }} className="font-sans-meta">
              核心幹部 · 活動企劃
            </div>

            <div style={{ borderLeft: `3px solid ${curAtmo.accent}`, paddingLeft: 16, marginBottom: 24 }}>
              <p style={{ color: T.text, fontSize: "0.98rem", lineHeight: 1.7, fontWeight: 500 }}>
                「把『打破標籤、定義自我』這樣龐大的哲學概念，轉化為現場上百人能產生共鳴的舞台與故事。」
              </p>
            </div>

            <p style={{ color: T.textSub, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 24 }}>
              年會主題以「∞」串聯自我與極限，探討個體如何擺脫社會標籤。全程參與講者遴選、演講論點梳理、跨組別溝通與現場開放提問環節的主持控制。
            </p>

            <Impact
              text="查看 2024 專案亮點覆盤"
              onClick={() => setSelectedCase("vol4")}
              accent={curAtmo.accent}
              accentBg={curAtmo.accentBg}
              tooltip={{
                tag: "CORE MEMBER",
                title: "2024 TEDxNCCU《吾・限》",
                bullets: [
                  { label: "講者輔導", desc: "3 輪一對一試講排練" },
                  { label: "現場主持", desc: "規劃並主持觀眾提問互動" }
                ]
              }}
            />
          </div>

          <div>
            <PhotoHero
              src={IMG.ted2024Audience}
              alt="2024 TEDx觀眾"
              h={380}
              pill="2024《吾・限》"
              cap="100+ 到場觀眾"
              accent={curAtmo.accent}
              accentGrad={curAtmo.accentGrad}
              accentBg={curAtmo.accentBg}
              glow={curAtmo.glow}
              onZoom={() => setLightboxImg({ src: IMG.ted2024Audience, caption: "2024 TEDxNCCU《吾・限》大會觀眾席" })}
            />
          </div>
        </div>
      </Sec>

      {/* SECTION 4: 雨山祭 NCCU Music Festival */}
      <Sec id="festival" ambientColor={curAtmo.accent}>
        <SecHead
          pill="NCCU MUSIC FESTIVAL"
          badge={{ index: "04", period: "2025.09 – 2026.04" }}
          accent={curAtmo.accent}
          accentGrad={curAtmo.accentGrad}
          accentBg={curAtmo.accentBg}
          glow={curAtmo.glow}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "start" }}>
          <div>
            <PhotoHero
              src={IMG.festival}
              alt="雨山祭現場"
              h={380}
              pill="雨山祭 慶典現場"
              cap="1,000+ 人次參與"
              accent={curAtmo.accent}
              accentGrad={curAtmo.accentGrad}
              accentBg={curAtmo.accentBg}
              glow={curAtmo.glow}
              onZoom={() => setLightboxImg({ src: IMG.festival, caption: "雨山祭現場與地景風光" })}
            />
          </div>

          <div
            style={{
              background: T.card,
              border: `1px solid ${T.border}`,
              borderRadius: 24,
              padding: "36px",
              boxShadow: T.shadow,
            }}
          >
            <Eye accent={curAtmo.accent}>AUDIENCE JOURNEY & EXPERIENCE DESIGN</Eye>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 12 }}>雨山祭 音樂祭策展</h3>
            <div style={{ color: T.textDim, fontSize: "0.88rem", marginBottom: 20 }} className="font-sans-meta">
              觀眾體驗旅程與場域氛圍設計
            </div>

            <div style={{ borderLeft: `3px solid ${curAtmo.accent}`, paddingLeft: 16, marginBottom: 24 }}>
              <p style={{ color: T.text, fontSize: "0.98rem", lineHeight: 1.7, fontWeight: 500 }}>
                「把『春雨霏霏中的舒服尺度』轉化為具體的樂迷旅程，讓山城的雨水與音樂成為大家的獨特記憶。」
              </p>
            </div>

            <p style={{ color: T.textSub, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 24 }}>
              結合政大人文氣息與文山地景風光，運用 UX 體驗思維，梳理樂迷踏入山城、穿梭市集至舞台聽團的全流程體驗。將政大多雨的氣候劣勢翻轉為被理解與撫慰的情感共鳴點。
            </p>

            <Impact
              text="查看 雨山祭 專案亮點覆盤"
              onClick={() => setSelectedCase("vol3")}
              accent={curAtmo.accent}
              accentBg={curAtmo.accentBg}
              tooltip={{
                tag: "EXPERIENCE DESIGN",
                title: "雨山祭 音樂祭策展",
                bullets: [
                  { label: "動線梳理", desc: "設計流暢的樂迷情緒與人流動線" },
                  { label: "雨備處置", desc: "翻轉劣勢，打造雨中獨特記憶" }
                ]
              }}
            />
          </div>
        </div>
      </Sec>

      {/* Case Study Drawer Modal */}
      {selectedCase && CASE_DETAILS[selectedCase as keyof typeof CASE_DETAILS] && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
          onClick={() => setSelectedCase(null)}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: `1px solid ${T.border}`,
              borderRadius: 24,
              maxWidth: 720,
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "36px",
              position: "relative",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCase(null)}
              style={{ position: "absolute", top: 20, right: 20, background: "transparent", color: T.textSub, cursor: "pointer" }}
            >
              <X size={22} />
            </button>

            {(() => {
              const c = CASE_DETAILS[selectedCase as keyof typeof CASE_DETAILS];
              const atmo = ATMOSPHERES[selectedCase] || curAtmo;
              return (
                <div>
                  <span style={{ color: atmo.accent, fontSize: "11px", letterSpacing: "0.14em", fontWeight: 700 }} className="font-sans-meta uppercase">
                    {c.tag}
                  </span>
                  <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: 6, marginBottom: 6, color: "#09090B" }}>{c.title}</h2>
                  <p style={{ color: T.textDim, fontSize: "0.9rem", marginBottom: 24 }} className="font-sans-meta">
                    {c.sub} （{c.period}）
                  </p>

                  <div
                    style={{
                      background: atmo.accentBg,
                      borderLeft: `3px solid ${atmo.accent}`,
                      padding: "16px 20px",
                      borderRadius: "0 12px 12px 0",
                      marginBottom: 28,
                    }}
                  >
                    <p style={{ color: T.text, fontSize: "0.98rem", lineHeight: 1.7, fontWeight: 500 }}>{c.reflection}</p>
                  </div>

                  <h4 style={{ color: "#09090B", fontSize: "1.1rem", fontWeight: 700, marginBottom: 14 }}>核心任務與成果亮點</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                    {c.highlights.map((h, i) => (
                      <div key={i} style={{ background: "#F4F4F5", borderRadius: 12, padding: 16 }}>
                        <div style={{ color: atmo.accent, fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>{h.label}</div>
                        <div style={{ color: T.textSub, fontSize: "0.88rem", lineHeight: 1.6 }}>{h.desc}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(null)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: 12,
                      background: atmo.accentGrad,
                      color: "#FFFFFF",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "0.9rem",
                    }}
                    className="font-sans-meta"
                  >
                    關閉視窗
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {lightboxImg && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(20px)",
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
            style={{ position: "absolute", top: 24, right: 24, color: "#FFFFFF", background: "transparent", cursor: "pointer" }}
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImg.src}
            alt={lightboxImg.caption}
            style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: 16, objectFit: "contain", marginBottom: 16 }}
          />
          <span style={{ color: "#A1A1AA", fontSize: "0.9rem" }} className="font-sans-meta">
            {lightboxImg.caption}
          </span>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${T.border}`,
          padding: "48px 32px",
          textAlign: "center",
          color: T.textDim,
        }}
        className="font-sans-meta text-xs"
      >
        © {new Date().getFullYear()} Chi-Shun Pan (潘琪舜). Built with React & Tailored Design Systems.
      </footer>
    </div>
  );
}
