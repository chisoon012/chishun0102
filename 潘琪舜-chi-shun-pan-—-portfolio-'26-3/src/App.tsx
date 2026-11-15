import React, { useState, useEffect } from "react";
import {
  Copy,
  Check,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";
import festivalHeroImg from "./assets/images/regenerated_image_1792477686420.jpg";
import festivalStageImg from "./assets/images/regenerated_image_1792323420755.jpg";
import festivalCrowdImg from "./assets/images/regenerated_image_1792323424652.jpg";
import speakerImg from "./assets/images/regenerated_image_1792322145230.jpg";
import ted2024AudienceImg from "./assets/images/regenerated_image_1792324961479.jpg";
import ted2025StageImg from "./assets/images/regenerated_image_1792477691610.jpg";
import ted2025MeetingImg from "./assets/images/regenerated_image_1792323615752.jpg";

/* ─── IMAGES ────────────────────────────────────────────────────────── */
const IMG = {
  // VOL.3 雨山祭 (3 photos)
  festival: festivalHeroImg,
  festivalStage: festivalStageImg,
  festivalCrowd: festivalCrowdImg,

  // VOL.4 TEDx2024 (2 photos)
  ted2024Audience: ted2024AudienceImg,
  ted2024Speaker: speakerImg,

  // VOL.5 TEDx2025 (2 photos)
  ted2025Stage: ted2025StageImg,
  ted2025Meeting: ted2025MeetingImg,
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
    summary:
      "NCCU Music Festival (政大雨山祭) 為政大最具指標性的全校型音樂祭典，結合音樂展演、市集、裝置藝術與學生共創。身處活動核心籌備組，負責將龐大繁複的多軌活動方案收束為具體可行且具情感張力的現場體驗。",
    highlights: [
      {
        title: "活動形式設計與當日流程規劃",
        desc: "參與前期活動內容發想，將構想轉化為具體可執行的互動形式；並細緻編排當日各時段流程表，反覆確認節奏銜接、場地引導與參與動線，讓破千人次的現場活動流暢有序。",
      },
      {
        title: "雨備方案規劃與前置準備",
        desc: "考量政大文山區多雨且天氣變化快的特性，在籌備期間便預先制定完整的雨天備案，提前盤點晴雨切換時機、活動調整形式與場地備援需求，隨時做好準備以確保活動如期順利進行。",
      },
      {
        title: "負責活動項目之人力規劃與協作",
        desc: "針對自己所負責的活動環節進行現場人力安排，明確整理各時段工作清單、支援組員職責與交接注意事項，協助夥伴快速掌握節奏並順利銜接執行。",
      },
    ],
    reflection:
      "將政大多雨山城的潮濕與浪漫揉進空間動線。透過鋪陳從市集探索、到細雨中聽團的節奏轉換，音樂與雨霧在現場交織，凝聚出台下觀眾與舞台之間最深切的共鳴。",
  },
  vol4: {
    id: "vol4",
    tag: "TED CURATION",
    title: "2024 TEDxNCCU《吾・限》",
    sub: "活動企劃與團隊協作",
    period: "2023.09 – 2024.06",
    impact: "100+ 人到場參與",
    summary:
      "年度年會主題《吾・限》旨在探討個體自我邊界與社會框架的打破與重構。身為策展團隊核心成員，全程參與講者遴選、演講論點梳理、舞台視覺協作至當日主持節奏掌控。",
    highlights: [
      {
        title: "講者邀約與敘事架構打磨",
        desc: "接觸不同領域（藝術、科研、社會創新）之指標講者，進行3輪一對一試講排練，將艱深專業轉化為具傳播力之18分鐘TED標準演說。",
      },
      {
        title: "講者交流與觀眾提問互動",
        desc: "在講者分享結束後規劃並主持現場開放觀眾提問環節，引導聽眾與講者深度對話交流，現場互動踴躍並獲得極佳的反饋與好評。",
      },
    ],
    reflection:
      "TED演講不僅僅是台上人的獨白，而是一場台上台下能量流動的儀式。策展過程讓我理解：溝通的本質不是輸出你的資訊，而是引導對方找到共鳴。",
  },
  vol5: {
    id: "vol5",
    tag: "LEADERSHIP & MANAGEMENT",
    title: "2025 TEDxNCCU《流・形》",
    sub: "部長 / 活動企劃與團隊管理",
    period: "2024.07 – 2025.06",
    impact: "累計 200+ 人次參與",
    summary:
      "升任部長，引領活動企劃部全面負責2025年度大會《流・形》的主題定調、團隊架構建立、資源分配與兩場系列沙龍之規劃與落地。",
    highlights: [
      {
        title: "大會核心哲學定調《流・形》",
        desc: "從流動（Flow）與形態（Form）的辯證出發，勾勒當代青年在不確定時代中形塑自我姿態的策展主軸。過程中帶領團隊反覆收斂講者領域與年會體驗設計，並與設計、行銷等部門對齊核心敘事，確保活動形式與視覺語言一致傳遞大會精神。",
      },
      {
        title: "團隊組織培力與激勵機制",
        desc: "管理十餘名組員，導入一對一反饋與定期覆盤機制，降低組織流失率，營造主動提問與包容創新的心理安全感。針對不同組員的性格與專長調整任務分配及討論節奏，在給予足夠自主發揮空間的同時提供即時支持，協助夥伴逐步建立對專案的掌控感。",
      },
      {
        title: "開拓系列延伸小沙龍",
        desc: "打破單一年會限制，策劃2場聚焦青年職涯與心智健康的微型沙龍，縮短受眾距離，延伸品牌全年度影響力。從議題設定、互動環節設計到現場節奏把控全程陪伴組員落地執行，讓參與者能在更近距離、低壓力的對話場域中產生深度交流。",
      },
    ],
    reflection:
      "從執行者跨越到管理者，最大的轉變是『透過成就他人來成就專案』。體認到領導上的價值是辨識每位組員的獨特與焦慮來源，創造適當的自主空間、對話環境。",
  },
};

/* ─── SAFE IMAGE COMPONENT ──────────────────────────────────────────── */
function SafeImg({
  src,
  alt,
  className = "",
  style,
  onImageClick,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onImageClick?: () => void;
}) {
  const [err, setErr] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative bg-[#EAEAEA] overflow-hidden ${onImageClick ? "cursor-pointer" : "cursor-default"} ${className}`}
      style={style}
      onClick={onImageClick}
    >
      {!err ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setErr(true)}
          className="block w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
          style={{
            objectPosition: style?.objectPosition ?? "center 38%",
            opacity: loaded ? 1 : 0.45,
          }}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#F0F0F0] text-[#737373] p-6 text-center">
          <span className="text-lg mb-2 text-[#E5482B]">◆</span>
          <span className="text-xs font-sans-meta tracking-wider">{alt}</span>
        </div>
      )}
    </div>
  );
}

/* ─── EYEBROW LABEL ─────────────────────────────────────────────────── */
function Eye({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-[11px] font-sans-meta font-semibold uppercase tracking-[0.2em] text-[#E5482B] mb-3 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── SECTION HEADER (TDRI ARCHITECTURAL RULE) ──────────────────────── */
function SecHead({ title }: { title: string }) {
  return (
    <div className="fu1 flex items-center gap-3 pb-4 mb-12 border-b border-[#111111]">
      <span className="w-2 h-2 bg-[#E5482B] shrink-0" aria-hidden="true" />
      <span className="text-xs font-sans-meta font-bold tracking-[0.18em] uppercase text-[#111111]">
        {title}
      </span>
    </div>
  );
}

/* ─── IMPACT ACTION BAR WITH FLOATING PREVIEW CARD ──────────────────── */
function Impact({
  text,
  onClick,
  tooltip,
}: {
  text: string;
  onClick?: () => void;
  tooltip?: {
    tag: string;
    title: string;
    bullets: { label: string; desc: string }[];
    note?: string;
  };
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-3 bg-white border border-[#111111] px-6 py-3.5 text-xs font-sans-meta text-[#111111] tracking-[0.04em] hover:bg-[#111111] hover:text-white transition-colors duration-200 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5482B]"
      >
        <span className="text-[#E5482B] shrink-0 text-[11px]" aria-hidden="true">
          ◆
        </span>
        <span className="font-semibold text-left">{text}</span>
        {onClick && (
          <ChevronRight
            size={15}
            className="text-[#E5482B] ml-2 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        )}
      </button>

      {/* Architectural Floating Preview Card */}
      {tooltip && isHovered && (
        <div
          className="hidden md:block absolute bottom-[calc(100%+12px)] left-0 z-50 w-[min(400px,88vw)] bg-white border border-[#111111] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)] text-left"
          style={{ animation: "fadeUp 0.18s cubic-bezier(0.16, 1, 0.3, 1) both" }}
        >
          <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-[#E5E5E5]">
            <span className="text-[10px] font-sans-meta font-bold uppercase tracking-[0.14em] text-[#E5482B]">
              {tooltip.tag}
            </span>
            <span className="text-[10px] font-sans-meta font-semibold tracking-[0.14em] text-[#737373]">
              HIGHLIGHTS
            </span>
          </div>

          <div className="text-sm font-bold text-[#111111] leading-snug mb-3 tracking-[0.02em]">
            {tooltip.title}
          </div>

          <div className="flex flex-col gap-2.5 mb-4">
            {tooltip.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs leading-relaxed">
                <span className="text-[#E5482B] mt-0.5 shrink-0 font-bold">·</span>
                <div>
                  <span className="text-[#111111] font-semibold">{b.label}：</span>
                  <span className="text-[#555555]">{b.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#E5E5E5] text-[10px] font-sans-meta text-[#737373]">
            <span>{tooltip.note || "點擊按鈕查看深入覆盤"}</span>
            <span className="text-[#E5482B] font-semibold">VIEW CASE ↗</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── RESPONSIBILITY ROW (TDRI SPECIFICATION TABLE STYLE) ────────────── */
function Resp({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-start w-full py-5 border-b border-[#E2E2E2] last:border-b-0">
      <span className="font-editorial-serif tabular-nums text-[#E5482B] font-semibold text-base w-8 shrink-0 tracking-wider">
        {n}.
      </span>
      <span className="text-[#111111] font-semibold text-sm tracking-[0.04em] sm:w-40 shrink-0 leading-relaxed">
        {title}
      </span>
      <span className="text-[#4A4A4A] text-xs sm:text-[13px] leading-[1.85] tracking-[0.03em] flex-1 min-w-0">
        {desc}
      </span>
    </div>
  );
}

/* ─── PHOTO HERO (TDRI EDITORIAL FRAMING) ────────────────────────────── */
function PhotoHero({
  src,
  alt,
  heightClass = "h-[360px] md:h-[430px]",
  label,
  onZoom,
}: {
  src: string;
  alt: string;
  heightClass?: string;
  label?: string;
  onZoom?: () => void;
}) {
  return (
    <div
      className={`relative w-full ${heightClass} border border-[#E2E2E2] overflow-hidden shrink-0 group bg-[#111111]`}
    >
      <SafeImg
        src={src}
        alt={alt}
        className="w-full h-full"
        onImageClick={onZoom}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 inset-x-0 px-5 py-4 flex items-center justify-between gap-4 z-10 pointer-events-none">
        {label ? (
          <span className="text-white/95 text-xs font-sans-meta font-medium tracking-[0.12em] uppercase">
            {label}
          </span>
        ) : (
          <span />
        )}
        {onZoom && (
          <button
            type="button"
            onClick={onZoom}
            className="pointer-events-auto bg-black/65 hover:bg-[#E5482B] text-white p-2 border border-white/25 transition-colors cursor-pointer"
            title="放大預覽"
            aria-label="放大圖片"
          >
            <Maximize2 size={13} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── ARCHITECTURAL MARQUEE DIVIDER ─────────────────────────────────── */
function Ticker({ items }: { items: string[] }) {
  return (
    <div className="ticker-container overflow-hidden relative h-11 flex items-center border-y border-[#E2E2E2] bg-[#FAFAFA]">
      <div
        className="ticker-track flex items-center gap-8 whitespace-nowrap"
        style={{
          animation: "ticker 48s linear infinite",
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3].map((setIndex) => (
          <span key={setIndex} className="inline-flex items-center gap-8">
            {items.map((item, idx) => (
              <span key={`${setIndex}-${idx}`} className="inline-flex items-center gap-8">
                <span className="ticker-text-item font-sans-meta cursor-default select-none uppercase text-[#666666] opacity-85 text-xs tracking-[0.14em] font-medium leading-none">
                  {item}
                </span>
                <span
                  className="text-[#E5482B] opacity-60 text-xs select-none leading-none"
                  aria-hidden="true"
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
  surface = "white",
  paddingClass = "py-20 md:py-24",
  className = "",
  children,
}: {
  id?: string;
  surface?: "white" | "mist";
  paddingClass?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const bgClass = surface === "mist" ? "bg-[#F6F6F6]" : "bg-white";
  return (
    <section
      id={id}
      className={`w-full ${bgClass} ${paddingClass} px-6 md:px-10 ${className}`}
    >
      <div className="w-full max-w-[1240px] mx-auto">{children}</div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT: TDRI INSTITUTIONAL EDITORIAL PORTFOLIO
══════════════════════════════════════════════════════════════════════ */
export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("vol1");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    const IDS = ["vol1", "vol2", "vol3", "vol4", "vol5", "vol6", "vol7"];
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 16);

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

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImg(null);
        setSelectedCase(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
    { id: "vol3", label: "VOL.3 雨山祭" },
    { id: "vol4", label: "VOL.4 TEDx2024" },
    { id: "vol5", label: "VOL.5 TEDx2025" },
    { id: "vol6", label: "VOL.6 OpenNCCU" },
    { id: "vol7", label: "VOL.7 Vision" },
  ];

  const activeCaseData = selectedCase
    ? CASE_DETAILS[selectedCase as keyof typeof CASE_DETAILS]
    : null;

  return (
    <div className="min-h-screen w-full bg-white text-[#111111] relative">
      {/* ══ TOP PROGRESS LINE ═══════════════════════════════════════ */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#E5482B] z-[2000] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />

      {/* ══ TOAST NOTIFICATION ══════════════════════════════════════ */}
      {copyFeedback && (
        <div
          className="fixed bottom-8 right-8 z-[3000] bg-[#111111] text-white border border-[#2A2A2A] px-5 py-3 flex items-center gap-3 shadow-xl text-xs font-sans-meta"
          style={{ animation: "fadeUp 0.25s ease both" }}
        >
          <Check size={15} className="text-[#E5482B]" />
          <span>已成功複製 {copyFeedback} 至剪貼簿</span>
        </div>
      )}

      {/* ══ TDRI CLEAN 3-ZONE TOP HEADER ════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] h-16 px-6 md:px-10 flex items-center justify-between gap-6 transition-colors duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E2E2E2]"
            : "bg-white border-b border-[#E2E2E2]"
        }`}
      >
        {/* Zone 1: Brand Wordmark (single line) */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-bold tracking-[0.04em] text-[#111111] whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#E5482B]"
        >
          <span className="w-2 h-2 bg-[#E5482B]" aria-hidden="true" />
          <span>潘琪舜</span>
          <span className="text-[#737373] font-medium hidden sm:inline">Chi-shun Pan</span>
        </button>

        {/* Zone 2: Clean Typographic Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="主要導覽">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => go(n.id)}
                className={`relative py-5 text-xs font-sans-meta tracking-[0.06em] whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  isActive
                    ? "text-[#111111] font-bold"
                    : "text-[#666666] hover:text-[#111111] font-medium"
                }`}
              >
                {n.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5482B]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action / Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => go("contact-band")}
            className="hidden lg:inline-flex items-center gap-2 bg-[#111111] hover:bg-[#E5482B] text-white px-4 py-2 text-xs font-sans-meta font-semibold tracking-[0.08em] whitespace-nowrap shrink-0 transition-colors cursor-pointer"
          >
            <span>聯絡資訊</span>
            <ArrowUpRight size={14} />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-[#E2E2E2] bg-white text-[#111111] cursor-pointer"
            aria-label="選單"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 inset-x-0 bg-white border-b border-[#111111] z-[999] px-6 py-4 flex flex-col gap-1 lg:hidden shadow-lg">
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => go(n.id)}
              className={`text-left py-3 px-2 border-b border-[#F0F0F0] last:border-b-0 text-sm font-sans-meta flex items-center justify-between cursor-pointer ${
                active === n.id ? "text-[#E5482B] font-bold" : "text-[#111111] font-medium"
              }`}
            >
              <span>{n.label}</span>
              {active === n.id && <span className="text-[#E5482B] text-xs">●</span>}
            </button>
          ))}
        </div>
      )}

      {/* spacer for fixed header */}
      <div className="h-16" />

      {/* ══ VOL.1 — ABOUT ═══════════════════════════════════════════ */}
      <Sec id="vol1" surface="white" className="border-b border-[#E2E2E2]">
        <SecHead title="VOL.1 ABOUT ME & PHILOSOPHY" />

        <div className="fu2 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left Nameplate */}
          <div className="md:col-span-4">
            <Eye>APPLICANT</Eye>
            <h1 className="text-[2.75rem] md:text-[3.4rem] font-bold tracking-[0.02em] leading-[1.12] text-[#111111] mb-2">
              潘琪舜
            </h1>
            <div className="text-base font-sans-meta font-semibold tracking-[0.08em] text-[#E5482B] mb-6">
              Chi-shun Pan
            </div>
            <div className="pt-5 border-t border-[#E2E2E2] text-sm text-[#555555] leading-relaxed tracking-[0.04em]">
              國立政治大學
              <br />
              心理學系
            </div>
          </div>

          {/* Right Core Belief Statement */}
          <div className="md:col-span-8">
            <Eye>CORE BELIEF &amp; RESEARCH-DRIVEN PERSPECTIVE</Eye>
            <p className="font-[Georgia] text-lg md:text-[1.35rem] leading-[1.95] tracking-[0.03em] text-[#111111] font-normal max-w-[65ch] mb-8">
              我是一位以心理學為基礎、對人的行為與體驗充滿好奇的學生。樂於從不同角度觀察問題，從理解人的需求出發，找出問題、提出方案並持續驗證與調整，將對人的理解轉化為實際的服務與體驗。
            </p>

            {/* Unboxed Architectural Metadata Strip */}
            <div className="pt-6 border-t border-[#E2E2E2] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-sans-meta text-[#555555] font-medium tracking-[0.04em]">
              {[
                "使用者行為洞察",
                "現場體驗架構",
                "大型年會策展",
                "跨職能團隊領導",
                "敏捷排程與應變",
              ].map((tag, idx, arr) => (
                <React.Fragment key={tag}>
                  <span className="text-[#111111] font-semibold">#{tag}</span>
                  {idx < arr.length - 1 && (
                    <span className="text-[#CCCCCC]" aria-hidden="true">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ══ VOL.2 — OVERVIEW ════════════════════════════════════════ */}
      <Sec id="vol2" surface="mist">
        <SecHead title="VOL.2 CASE STUDIES OVERVIEW" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E2E2] border border-[#E2E2E2]">
          {[
            {
              num: "01",
              tag: "NCCU MUSIC FESTIVAL",
              tgt: "vol3",
              title: "政大雨山祭 · NCCU Music Festival",
              period: "2025.09 – 2026.04",
              role: "活動企劃與現場執行",
              desc: "校園千人大型音樂祭典，規劃活動形式、當日流程與天候應變機制",
              impact: "1,000+ 人次參與",
            },
            {
              num: "02",
              tag: "TED CURATOR",
              tgt: "vol4",
              title: "2024 TEDxNCCU《吾・限》",
              period: "2023.09 – 2024.06",
              role: "活動企劃與團隊協作",
              desc: "國際標準年會策展，負責講者深度溝通、跨組時程與中場互動",
              impact: "100+ 人到場參與",
            },
            {
              num: "03",
              tag: "LEADERSHIP",
              tgt: "vol5",
              title: "2025 TEDxNCCU《流・形》",
              period: "2024.07 – 2025.06",
              role: "部長 / 企劃與團隊管理",
              desc: "統籌年度方向定調、團隊激勵、專案決策與系列延伸沙龍籌劃",
              impact: "200+ 人次參與",
            },
            {
              num: "04",
              tag: "IN DEVELOPMENT",
              tgt: "vol6",
              title: "OpenNCCU 排課系統",
              period: "進行中 · 開發階段",
              role: "PM Intern",
              desc: "政大學生開源數位服務，參與排課系統前期產品規劃、需求梳理與跨開發協作",
              impact: "開發階段專案",
            },
          ].map((p, i) => (
            <div
              key={p.num}
              role="button"
              tabIndex={0}
              onClick={() => go(p.tgt)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  go(p.tgt);
                }
              }}
              className={`${i < 2 ? "fu2" : "fu3"} bg-white hover:bg-[#FAFAFA] p-8 lg:p-10 flex flex-col justify-between transition-colors duration-200 cursor-pointer group focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#E5482B]`}
            >
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#EFEFEF]">
                  <span className="font-editorial-serif tabular-nums text-[#E5482B] text-2xl font-semibold tracking-wider">
                    {p.num}.
                  </span>
                  <span className="text-[11px] font-sans-meta font-semibold tracking-[0.14em] text-[#737373] uppercase">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#111111] tracking-[0.02em] leading-snug mb-2 group-hover:text-[#E5482B] transition-colors">
                  {p.title}
                </h3>
                <div className="text-xs font-sans-meta text-[#737373] tracking-[0.06em] mb-1.5 tabular-nums">
                  {p.period}
                </div>
                <div className="text-xs font-semibold text-[#E5482B] tracking-[0.04em] mb-4">
                  {p.role}
                </div>
                <p className="text-xs sm:text-[13px] text-[#555555] leading-[1.85] mb-8">
                  {p.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-[#EFEFEF] flex items-center justify-between gap-3">
                <span className="text-xs font-sans-meta font-bold text-[#111111] tracking-[0.04em]">
                  {p.impact}
                </span>
                <span className="text-xs font-sans-meta font-semibold text-[#555555] group-hover:text-[#E5482B] inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0">
                  閱讀專案 <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* ══ VOL.3 — NCCU MUSIC FESTIVAL ═════════════════════════════ */}
      <Sec id="vol3" surface="white">
        <SecHead title="VOL.3 CASE STUDY 01 / 2025.09 – 2026.04" />

        <div className="fu2 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-12 items-start">
          <div className="md:col-span-5">
            <Eye>PROJECT TITLE</Eye>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#111111] tracking-[0.03em] leading-[1.25] mb-3 text-balance">
              政大雨山祭
              <br />
              <span className="text-xl md:text-2xl font-medium text-[#555555]">
                NCCU Music Festival
              </span>
            </h2>
            <div className="text-sm font-semibold text-[#E5482B] tracking-[0.04em]">
              活動企劃與現場執行
            </div>
          </div>

          <div className="md:col-span-7">
            <Eye>PROJECT OVERVIEW</Eye>
            <p className="text-base text-[#4A4A4A] leading-[1.95] tracking-[0.03em] max-w-[68ch]">
              校內大型學生音樂祭典，參與活動組，負責前期活動企劃、當日流程規劃、人力場地協調與現場突發狀況處置。將龐雜的音樂展演與市集化為井然有序的沉浸式校園節慶。
            </p>
          </div>
        </div>

        {/* 3 Photos Gallery */}
        <div className="fu3 grid grid-cols-1 lg:grid-cols-12 gap-5 mb-12">
          <div className="lg:col-span-7">
            <PhotoHero
              src={IMG.festival}
              alt="政大雨山祭 NCCU Music Festival 現場氛圍"
              heightClass="h-[320px] lg:h-[440px]"
              label="NCCU Music Festival · 主舞台現場"
              onZoom={() =>
                setLightboxImg({
                  src: IMG.festival,
                  caption: "政大雨山祭 NCCU Music Festival · 校內大型音樂祭典主舞台",
                })
              }
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <PhotoHero
              src={IMG.festivalStage}
              alt="政大雨山祭 · 樂團現場演出震撼"
              heightClass="h-[210px]"
              label="LIVE STAGE · 舞台演出震撼"
              onZoom={() =>
                setLightboxImg({
                  src: IMG.festivalStage,
                  caption: "政大雨山祭 · 舞台演出震撼與現場燈光",
                })
              }
            />
            <PhotoHero
              src={IMG.festivalCrowd}
              alt="政大雨山祭 · 校園市集與漫步人潮"
              heightClass="h-[210px]"
              label="FESTIVAL VIBE · 校園市集與漫步"
              onZoom={() =>
                setLightboxImg({
                  src: IMG.festivalCrowd,
                  caption: "政大雨山祭 · 校園市集漫步與人潮氛圍",
                })
              }
            />
          </div>
        </div>

        {/* Responsibilities */}
        <Eye className="mb-3">KEY RESPONSIBILITIES</Eye>
        <div className="border-t border-[#111111] border-b border-[#E2E2E2] bg-white mb-10">
          {[
            {
              n: "01",
              t: "前期企劃發想",
              d: "參與前期活動內容發想與企劃，規劃活動形式與執行流程，制定舞台節目與周邊互動方案。",
            },
            {
              n: "02",
              t: "流程規劃統籌",
              d: "規劃當日流程，精準確認人力配置、場地權責與各項硬體搭建事項，落實雨天撤收備案。",
            },
            {
              n: "03",
              t: "現場執行調度",
              d: "負責現場執行與流程掌控，依現場人潮即時調整通道，冷靜處置設備突發狀況，確保活動如期圓滿。",
            },
          ].map((r) => (
            <Resp key={r.n} n={r.n} title={r.t} desc={r.d} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Impact
            text="1,000+ 人次參與｜將企劃成功轉化為流暢現場體驗"
            onClick={() => setSelectedCase("vol3")}
            tooltip={{
              tag: "NCCU MUSIC FESTIVAL · 現場成果速覽",
              title: "1,000+ 人次參與 · 活動企劃與雨備前置規劃",
              bullets: [
                {
                  label: "活動流程與動線規劃",
                  desc: "細緻編排當日時段流程與場地引導，確保人潮順暢參與",
                },
                {
                  label: "雨備方案前置準備",
                  desc: "因應文山區氣候提前規劃晴雨切換與調整機制，隨時做好準備",
                },
                {
                  label: "負責項目人力規劃",
                  desc: "針對負責活動安排支援人力與交接清單，讓現場順利銜接",
                },
              ],
              note: "點擊按鈕開啟完整策展覆盤",
            }}
          />
        </div>
      </Sec>

      <Ticker
        items={[
          "CASE STUDY 01",
          "政大雨山祭",
          "NCCU Music Festival",
          "1,000+ 人次",
          "活動企劃",
          "現場執行",
          "流程規劃",
          "NCCU",
        ]}
      />

      {/* ══ VOL.4 — TEDx2024 ════════════════════════════════════════ */}
      <Sec id="vol4" surface="mist">
        <SecHead title="VOL.4 CASE STUDY 02 / 2023.09 – 2024.06" />

        <div className="fu2 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-12 items-start">
          <div className="md:col-span-5">
            <Eye>PROJECT TITLE</Eye>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#111111] tracking-[0.03em] leading-[1.25] mb-2">
              2024 TEDxNCCU
            </h2>
            <div className="text-xl font-bold text-[#E5482B] tracking-[0.08em] mb-2">
              《吾・限》
            </div>
            <div className="text-sm font-semibold text-[#555555] tracking-[0.04em]">
              活動企劃與團隊協作
            </div>
          </div>

          <div className="md:col-span-7">
            <Eye>PROJECT OVERVIEW</Eye>
            <p className="text-base text-[#4A4A4A] leading-[1.95] tracking-[0.03em] max-w-[68ch]">
              參與年度活動《吾・限》，將抽象概念轉化為具體規劃，負責講者邀請、跨組溝通與現場執行。陪伴講者梳理演說架構，並藉由多輪試講將其理念打磨、重構與呈現。
            </p>
          </div>
        </div>

        {/* Two photos balanced duo gallery */}
        <div className="fu3 grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <PhotoHero
            src={IMG.ted2024Audience}
            alt="TEDxNCCU 2024 年會現場盛況"
            heightClass="h-[300px] md:h-[380px]"
            label="TEDxNCCU 2024 · 年會盛況"
            onZoom={() =>
              setLightboxImg({
                src: IMG.ted2024Audience,
                caption: "2024 TEDxNCCU《吾・限》· 年會國際廳現場盛況",
              })
            }
          />
          <PhotoHero
            src={IMG.ted2024Speaker}
            alt="2024 TEDxNCCU《吾・限》年會主視覺"
            heightClass="h-[300px] md:h-[380px]"
            label="KEY VISUAL · 年會主視覺"
            onZoom={() =>
              setLightboxImg({
                src: IMG.ted2024Speaker,
                caption: "2024 TEDxNCCU《吾・限》· 年會主視覺",
              })
            }
          />
        </div>

        <Eye className="mb-3">KEY RESPONSIBILITIES</Eye>
        <div className="border-t border-[#111111] border-b border-[#E2E2E2] bg-white px-6 md:px-8 mb-10">
          {[
            {
              n: "01",
              t: "主題內容發想",
              d: "參與年度活動主題與內容發想，將抽象概念轉化為具體活動規劃與舞台演繹形式。",
            },
            {
              n: "02",
              t: "講者邀請溝通",
              d: "負責講者邀請與深度溝通，與不同背景講者建立聯繫，協助梳理論點與排練試講。",
            },
            {
              n: "03",
              t: "跨組協作追蹤",
              d: "進行跨組（行銷、設計、行政）溝通與工作協調，追蹤任務進度並依反饋敏捷調整執行方式。",
            },
          ].map((r) => (
            <Resp key={r.n} n={r.n} title={r.t} desc={r.d} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Impact
            text="100+ 人到場參與｜從團隊成員成長為核心幹部（部長）"
            onClick={() => setSelectedCase("vol4")}
            tooltip={{
              tag: "TEDxNCCU 2024 · 核心策展成果",
              title: "100+ 人滿座 · 概念打磨與講者培育",
              bullets: [
                {
                  label: "多輪試講陪伴",
                  desc: "陪伴跨領域講者梳理演說論點、節奏與台風演練",
                },
                {
                  label: "觀眾提問互動",
                  desc: "規劃講者分享後提問交流，現場互動踴躍並獲熱烈回饋",
                },
                {
                  label: "幹部梯隊成長",
                  desc: "以扎實執行力贏得團隊信任，獲推選為新任活動部長",
                },
              ],
              note: "點擊按鈕開啟完整策展覆盤",
            }}
          />
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
      />

      {/* ══ VOL.5 — TEDx2025 ════════════════════════════════════════ */}
      <Sec id="vol5" surface="white">
        <SecHead title="VOL.5 CASE STUDY 03 / 2024.07 – 2025.06" />

        <div className="fu2 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-12 items-start">
          <div className="md:col-span-5">
            <Eye>PROJECT TITLE</Eye>
            <h2 className="text-3xl md:text-[2.25rem] font-bold text-[#111111] tracking-[0.03em] leading-[1.25] mb-2">
              2025 TEDxNCCU
            </h2>
            <div className="text-xl font-bold text-[#E5482B] tracking-[0.08em] mb-2">
              《流・形》
            </div>
            <div className="text-sm font-semibold text-[#555555] tracking-[0.04em]">
              部長 / 活動企劃與團隊管理
            </div>
          </div>

          <div className="md:col-span-7">
            <Eye>PROJECT OVERVIEW</Eye>
            <p className="text-base text-[#4A4A4A] leading-[1.95] tracking-[0.03em] max-w-[68ch]">
              擔任部長，負責年度大會《流・形》整體方向定調、團隊決策、專案管理與延伸沙龍籌辦。引領團隊由上而下建立透明且具同理心的決策流程。
            </p>
          </div>
        </div>

        {/* Two photos balanced duo gallery */}
        <div className="fu3 grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <PhotoHero
            src={IMG.ted2025Stage}
            alt="TEDxNCCU 2025 年會大會現場"
            heightClass="h-[300px] md:h-[380px]"
            label="TEDxNCCU 2025 · 年會大會"
            onZoom={() =>
              setLightboxImg({
                src: IMG.ted2025Stage,
                caption: "2025 TEDxNCCU《流・形》· 年會大會舞台現場",
              })
            }
          />
          <PhotoHero
            src={IMG.ted2025Meeting}
            alt="2025 TEDxNCCU《流・形》年會主視覺"
            heightClass="h-[300px] md:h-[380px]"
            label="KEY VISUAL · 年會主視覺"
            onZoom={() =>
              setLightboxImg({
                src: IMG.ted2025Meeting,
                caption: "2025 TEDxNCCU《流・形》· 年會主視覺",
              })
            }
          />
        </div>

        {/* Leadership Role Highlight Strip */}
        <div className="fu3 border border-[#E2E2E2] bg-[#FAFAFA] px-7 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <Eye className="mb-1.5">LEADERSHIP ROLE</Eye>
            <div className="text-lg font-bold text-[#111111] tracking-[0.03em]">
              活動部 部長 ·{" "}
              <span className="text-[#E5482B] font-semibold text-sm font-sans-meta">
                Department Director / Project Lead
              </span>
            </div>
          </div>
          <div className="text-[#555555] text-xs sm:text-[13px] tracking-[0.03em] max-w-[520px] leading-relaxed">
            領導活動部 12+ 名組員 · 橫向串聯 4 大功能部門 · 主導大會定調與 2 場延伸青年沙龍
          </div>
        </div>

        <Eye className="mb-3">KEY RESPONSIBILITIES</Eye>
        <div className="border-t border-[#111111] border-b border-[#E2E2E2] bg-white mb-10">
          {[
            {
              n: "01",
              t: "整體方向定調",
              d: "參與年度活動整體方向與主題定調，進行企劃核心討論與重大策略決策制定。",
            },
            {
              n: "02",
              t: "跨組統整協調",
              d: "統整各組工作進度與資源需求，化解不同職能間的衝突，建立高效資訊流通網絡。",
            },
            {
              n: "03",
              t: "延伸沙龍籌辦",
              d: "參與後續系列沙龍活動規劃與執行，深化受眾連結，延續 TEDxNCCU 與校內外社群之交流。",
            },
          ].map((r) => (
            <Resp key={r.n} n={r.n} title={r.t} desc={r.d} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Impact
            text="累計 200+ 人次參與｜建立團隊協作與專案決策機制"
            onClick={() => setSelectedCase("vol5")}
            tooltip={{
              tag: "TEDxNCCU 2025 · 部長領導成果",
              title: "200+ 人次參與 · 跨組決策與延伸沙龍",
              bullets: [
                {
                  label: "年度方向定調",
                  desc: "確立《流・形》大會核心精神、視覺調性與策略方針",
                },
                {
                  label: "領導12+人團隊",
                  desc: "建立高透明度決策制度，橫向串聯 4 大功能部門",
                },
                {
                  label: "深化社群對話",
                  desc: "籌劃系列延伸沙龍活動，持續擴大影響力與知識共鳴",
                },
              ],
              note: "點擊按鈕開啟完整策展覆盤",
            }}
          />
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
      />

      {/* ══ VOL.6 — ONGOING PROJECT: OPENNCCU ═══════════════════════ */}
      <Sec id="vol6" surface="mist" paddingClass="py-16 md:py-20">
        <SecHead title="VOL.6 ONGOING PROJECT / IN DEVELOPMENT" />

        <div className="bg-white border border-[#E2E2E2] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Summary Column */}
          <div className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#E2E2E2] flex flex-col justify-between gap-8">
            <div>
              <Eye>CURRENT PRACTICE · EARLY DEVELOPMENT</Eye>
              <h2 className="text-2xl md:text-[1.85rem] font-bold text-[#111111] tracking-[0.02em] leading-[1.3] mb-3">
                OpenNCCU 排課系統
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-xs font-sans-meta font-semibold text-[#555555] mb-6">
                <span className="text-[#E5482B]">PM Intern</span>
                <span aria-hidden="true">·</span>
                <span>進行中（已進入開發階段）</span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#4A4A4A] leading-[1.9] tracking-[0.03em]">
                參與政大學生自主發起的校園開源數位服務 OpenNCCU，擔任排課系統專案 PM Intern。從學生實際選課與課程查詢情境出發，協助梳理功能需求並與開發端協作推進實作。
              </p>
            </div>

            <div className="pt-5 border-t border-[#EFEFEF]">
              <a
                href="https://opennccu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans-meta font-semibold text-[#111111] hover:text-[#E5482B] tracking-[0.06em] transition-colors"
              >
                <span>前往 OpenNCCU 專案網站</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Specification Column */}
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
            <Eye className="mb-2">ROLE &amp; CURRENT STAGE</Eye>
            <div className="border-t border-[#111111]">
              <Resp
                n="01"
                title="角色定位"
                desc="擔任 PM Intern，參與排課系統前期產品規劃與跨組協調，確保產品功能聚焦於使用者真實需求。"
              />
              <Resp
                n="02"
                title="切入方向"
                desc="針對政大學生在課程檢索、課表規劃與選課決策過程中的操作痛點，重新梳理使用流程並整理具體的功能規格方向。"
              />
              <Resp
                n="03"
                title="目前進度"
                desc="專案已由前期規劃正式推進至開發端實作階段，持續與開發夥伴對齊實作細節、功能驗證與後續優化方向。"
              />
            </div>
          </div>
        </div>
      </Sec>

      {/* ══ VOL.7 — VISION ══════════════════════════════════════════ */}
      <Sec id="vol7" surface="white">
        <SecHead title="VOL.7 FUTURE VISION & FIT" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2E2E2] border border-[#E2E2E2]">
          {[
            {
              num: "01",
              zh: "需求研究與設計思考",
              en: "Research & Design Thinking",
              body: "運用心理學紮實之質性訪談與行為數據訓練，深入研究不同族群在各場景的心理路徑與文化脈絡，提供精準之設計決策依據與服務架構。",
            },
            {
              num: "02",
              zh: "大規模專案決策與協作",
              en: "Large-Scale Project Decision",
              body: "學習在節奏緊湊與跨利害關係人的複雜環境中，進行資源優先級排序、風險預判管理、敏捷排程與高質量團隊決策制定。",
            },
            {
              num: "03",
              zh: "服務與體驗設計落地",
              en: "Service & Experience Design",
              body: "透過實際場域接觸，體驗研究者的第一線感知力，將抽象的品牌概念，轉化為真實受眾可以感動的立體體驗。",
            },
          ].map((g, i) => (
            <div
              key={g.num}
              className={`fu${i + 2} bg-white p-8 lg:p-9 flex flex-col justify-between`}
            >
              <div>
                <div className="font-editorial-serif tabular-nums text-[#E5482B] text-2xl font-semibold tracking-wider mb-5">
                  {g.num}.
                </div>
                <h3 className="text-lg font-bold text-[#111111] tracking-[0.03em] leading-snug mb-1.5">
                  {g.zh}
                </h3>
                <div className="text-xs font-sans-meta font-medium tracking-[0.08em] text-[#737373] mb-5">
                  {g.en}
                </div>
                <p className="text-xs sm:text-[13px] text-[#555555] leading-[1.9] tracking-[0.03em]">
                  {g.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* ══ TDRI SIGNATURE INK-BLACK CONTACT & FOOTER BAND ══════════ */}
      <div id="contact-band" className="w-full bg-[#111111] text-white">
        <div className="w-full max-w-[1240px] mx-auto px-6 md:px-10 pt-20 pb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-white/15">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14">
              {/* Telephone */}
              <div>
                <div className="text-[11px] font-sans-meta font-bold tracking-[0.18em] text-[#E5482B] mb-2.5 uppercase">
                  PHONE
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-editorial-serif tabular-nums text-white text-lg font-semibold tracking-[0.06em]">
                    +886 90707156
                  </span>
                  <button
                    type="button"
                    onClick={() => copyText("0907071156", "電話號碼")}
                    className="text-white/50 hover:text-[#E5482B] transition-colors p-1 cursor-pointer"
                    title="點擊複製"
                    aria-label="複製電話"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="text-[11px] font-sans-meta font-bold tracking-[0.18em] text-[#E5482B] mb-2.5 uppercase">
                  EMAIL
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-editorial-serif text-white text-lg font-semibold tracking-[0.04em]">
                    CHISOON7128@GMAIL.COM
                  </span>
                  <button
                    type="button"
                    onClick={() => copyText("chisoon7128@gmail.com", "Email")}
                    className="text-white/50 hover:text-[#E5482B] transition-colors p-1 cursor-pointer"
                    title="點擊複製"
                    aria-label="複製 Email"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              </div>

              {/* University */}
              <div>
                <div className="text-[11px] font-sans-meta font-bold tracking-[0.18em] text-[#E5482B] mb-2.5 uppercase">
                  UNIVERSITY
                </div>
                <div className="text-sm font-semibold text-white tracking-[0.04em]">
                  國立政治大學 · 心理學系
                </div>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="text-[11px] font-sans-meta font-bold tracking-[0.18em] text-[#E5482B] mb-2.5 uppercase">
                APPLYING FOR
              </div>
              <div className="text-sm font-bold text-white tracking-[0.04em] leading-relaxed">
                Curation · Project Management
                <br />
                Experience Design
              </div>
            </div>
          </div>

          {/* Minimalist Institutional Footer */}
          <footer className="pt-8 flex flex-wrap items-center justify-between gap-6">
            <span className="text-xs font-sans-meta text-white/55 tracking-[0.08em] font-medium">
              © 2026 潘琪舜 Chi-shun Pan — Portfolio &#39;26
            </span>

            <div className="flex items-center gap-5 flex-wrap">
              {["VOL.1", "VOL.2", "VOL.3", "VOL.4", "VOL.5", "VOL.6"].map((v) => (
                <span
                  key={v}
                  className="text-xs font-sans-meta text-white/45 tracking-[0.1em]"
                >
                  {v}
                </span>
              ))}
              <span className="text-xs font-sans-meta text-[#E5482B] tracking-[0.1em] font-bold">
                VOL.7 ✦
              </span>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ml-2 text-xs font-sans-meta font-semibold text-white border border-white/25 hover:border-[#E5482B] hover:bg-[#E5482B] px-3.5 py-1.5 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                title="回到頁首"
              >
                <ArrowUp size={12} />
                <span>TOP</span>
              </button>
            </div>
          </footer>
        </div>
      </div>

      {/* ══ CASE STUDY DETAIL MODAL (CRISP EDITORIAL DIALOG) ═════════ */}
      {activeCaseData && (
        <div
          className="fixed inset-0 z-[4000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white text-[#111111] border border-[#111111] w-full max-w-[700px] max-h-[88vh] overflow-y-auto p-7 sm:p-10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 text-[#737373] hover:text-[#111111] border border-[#E2E2E2] hover:border-[#111111] p-2 transition-colors cursor-pointer"
              aria-label="關閉"
            >
              <X size={18} />
            </button>

            <div className="text-xs font-sans-meta font-bold tracking-[0.18em] text-[#E5482B] mb-2 uppercase pr-10">
              {activeCaseData.tag}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-2 pr-10">
              {activeCaseData.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#555555] pb-6 mb-6 border-b border-[#E2E2E2]">
              <span>{activeCaseData.sub}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{activeCaseData.period}</span>
              <span aria-hidden="true">·</span>
              <span className="font-bold text-[#111111]">{activeCaseData.impact}</span>
            </div>

            <p className="text-sm sm:text-base text-[#333333] leading-[1.9] mb-8">
              {activeCaseData.summary}
            </p>

            <div className="mb-8">
              <Eye className="mb-3">KEY PROJECT DELIVERABLES &amp; CHALLENGES</Eye>
              <div className="border-t border-[#111111] border-b border-[#E2E2E2]">
                {activeCaseData.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="py-4 border-b border-[#E2E2E2] last:border-b-0"
                  >
                    <div className="text-sm font-bold text-[#111111] mb-1.5">
                      {h.title}
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#555555] leading-[1.8]">
                      {h.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Eye className="mb-3">CURATOR&apos;S REFLECTION &amp; PSYCHOLOGY INSIGHT</Eye>
              <div className="bg-[#F6F6F6] border border-[#E2E2E2] p-6">
                <p className="text-[15px] text-[#222222] leading-[1.95] tracking-[0.02em]">
                  {activeCaseData.reflection}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="bg-[#111111] hover:bg-[#E5482B] text-white px-7 py-2.5 text-xs font-sans-meta font-semibold tracking-[0.08em] transition-colors cursor-pointer"
              >
                關閉視窗
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ LIGHTBOX MODAL ══════════════════════════════════════════ */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[5000] bg-black/92 backdrop-blur-sm flex flex-col items-center justify-center p-6"
          onClick={() => setLightboxImg(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-[#E5482B] border border-white/25 p-2.5 transition-colors cursor-pointer"
            aria-label="關閉預覽"
          >
            <X size={20} />
          </button>
          <img
            src={lightboxImg.src}
            alt={lightboxImg.caption}
            referrerPolicy="no-referrer"
            className="max-w-[92vw] max-h-[80vh] object-contain border border-white/15 shadow-2xl"
          />
          {lightboxImg.caption && (
            <div className="mt-5 text-white text-xs font-sans-meta tracking-[0.08em] bg-[#111111] border border-white/20 px-5 py-2.5">
              {lightboxImg.caption}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
