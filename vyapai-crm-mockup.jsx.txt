import React, { useState } from "react";
import {
  Search, MessageCircle, FileText, TrendingUp, Home, Camera, User,
  ChevronRight, LayoutDashboard, ArrowUp, CheckCircle2, Bot, Send, Mic,
  Sparkles, AlertCircle, QrCode, Phone, Building2, MapPin, Compass, ShieldAlert
} from "lucide-react";

const NAVY = "#14173A";
const BG = "#F5F2EC";
const CANVAS = "#E7E2F7";

function StatusBar() {
  return (
    <div className="flex justify-between items-center px-6 pt-4 pb-1 font-body text-[13px] font-semibold" style={{ color: NAVY }}>
      <span>9:41</span>
      <span>●●●● 📶 🔋</span>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="px-5 pt-3">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-display font-bold text-[22px] leading-tight" style={{ color: NAVY }}>Namaste, Ramesh Ji</p>
          <p className="font-body text-[13px]" style={{ color: "#8A87A0" }}>Aaj, 22 July</p>
        </div>
        <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: NAVY }}>
          <Search size={18} color={BG} />
        </div>
      </div>

      <div className="rounded-[28px] p-5 mb-3 relative overflow-hidden" style={{ background: NAVY }}>
        <p className="font-display font-semibold text-[15px]" style={{ color: "#C6FF3D" }}>Aaj ka Hisaab</p>
        <p className="font-display font-bold text-[34px] mt-1 text-white">₹18,420</p>
        <p className="font-body text-[12px] mt-0.5" style={{ color: "#9B98B5" }}>12 bikri • 3 udhaar entries</p>
        <div
          className="absolute -right-2 -bottom-3 w-28 h-24 rotate-6 shadow-lg flex flex-col justify-center px-3"
          style={{ background: BG, clipPath: "polygon(0 6%,8% 0,16% 5%,24% 0,32% 6%,40% 0,48% 5%,56% 0,64% 6%,72% 0,80% 5%,88% 0,96% 6%,100% 0,100% 100%,0 100%)" }}
        >
          <p className="font-body text-[9px] text-[#8A87A0]">Hisaab diary</p>
          <p className="font-display font-bold text-[11px]" style={{ color: NAVY }}>scanned ✓</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {["Aaj", "Hafta", "Mahina"].map((label, i) => (
          <div key={label} className="px-4 py-1.5 rounded-full font-body text-[12px] font-semibold"
            style={i === 0 ? { background: NAVY, color: BG } : { background: "#fff", color: NAVY }}>
            {label}
          </div>
        ))}
      </div>

      <p className="font-display font-semibold text-[17px] mb-2" style={{ color: NAVY }}>Aapka business</p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="rounded-[22px] p-4" style={{ background: "#FF5FA2" }}>
          <p className="font-body text-[11px] font-semibold text-white/80">Outstanding</p>
          <p className="font-display font-bold text-[24px] text-white mt-1">₹32,100</p>
          <p className="font-body text-[11px] text-white/80 mt-0.5">5 customers</p>
        </div>
        <div className="rounded-[22px] p-4 flex flex-col justify-between" style={{ background: "#C6FF3D" }}>
          <FileText size={20} color={NAVY} />
          <div>
            <p className="font-display font-bold text-[14px] mt-2" style={{ color: NAVY }}>Nayi Invoice</p>
            <p className="font-body text-[11px]" style={{ color: "#3A3E1F" }}>Banao & bhejo</p>
          </div>
        </div>
        <div className="rounded-[22px] p-4 col-span-2 flex items-center justify-between" style={{ background: "#5CC8FF" }}>
          <div>
            <p className="font-display font-bold text-[15px]" style={{ color: "#0B2E45" }}>Payment reminder bhejein</p>
            <p className="font-body text-[11px]" style={{ color: "#0B2E45", opacity: 0.75 }}>3 udhaar customers ko WhatsApp pe</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
            <MessageCircle size={18} color="#5CC8FF" />
          </div>
        </div>
      </div>

      <div className="rounded-[22px] p-4 mb-3" style={{ background: "#FF8B3D" }}>
        <div className="flex items-center justify-between mb-2">
          <p className="font-display font-bold text-[15px] text-white">Aaj ke 5 kaam</p>
          <TrendingUp size={16} color="#fff" />
        </div>
        {["Sharma ji ko 8-din purana udhaar yaad dilao", "Diwali stock ke liye 2 naye vendor jodo", "Best-seller item ka price check karo"].map((t, i) => (
          <div key={i} className="flex items-start gap-2 mb-1.5">
            <span className="font-display font-bold text-[12px] text-white/90 mt-0.5">{i + 1}</span>
            <p className="font-body text-[12px] text-white/95 leading-snug">{t}</p>
          </div>
        ))}
        <button className="mt-1 flex items-center gap-1 font-body text-[11px] font-semibold text-white/90">
          Sab 5 dekho <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}

function DashboardScreen() {
  const days = [40, 55, 35, 70, 60, 90, 75];
  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="px-5 pt-3">
      <p className="font-display font-bold text-[22px] mb-1" style={{ color: NAVY }}>Dashboard</p>
      <p className="font-body text-[13px] mb-4" style={{ color: "#8A87A0" }}>Pichle 7 din ka performance</p>

      <div className="rounded-[28px] p-5 mb-3" style={{ background: NAVY }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-body text-[12px]" style={{ color: "#9B98B5" }}>Is hafte ki bikri</p>
            <p className="font-display font-bold text-[28px] text-white">₹1,42,300</p>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: "#C6FF3D" }}>
            <ArrowUp size={12} color={NAVY} />
            <span className="font-body font-bold text-[11px]" style={{ color: NAVY }}>12%</span>
          </div>
        </div>
        <div className="flex items-end gap-2 h-20">
          {days.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-full" style={{ height: `${h}%`, background: i === 5 ? "#C6FF3D" : "#3A3D66" }} />
              <span className="font-body text-[9px]" style={{ color: "#8A87A0" }}>{dayLabels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="rounded-[22px] p-4" style={{ background: "#fff" }}>
          <p className="font-body text-[11px] font-semibold" style={{ color: "#8A87A0" }}>Naye customer</p>
          <p className="font-display font-bold text-[22px] mt-1" style={{ color: NAVY }}>8</p>
          <p className="font-body text-[10px] mt-0.5" style={{ color: "#3AA86B" }}>▲ is hafte</p>
        </div>
        <div className="rounded-[22px] p-4" style={{ background: "#fff" }}>
          <p className="font-body text-[11px] font-semibold" style={{ color: "#8A87A0" }}>Repeat customer</p>
          <p className="font-display font-bold text-[22px] mt-1" style={{ color: NAVY }}>62%</p>
          <p className="font-body text-[10px] mt-0.5" style={{ color: "#8A87A0" }}>total ka</p>
        </div>
      </div>

      <div className="rounded-[22px] p-4 mb-3" style={{ background: "#C6FF3D" }}>
        <p className="font-display font-bold text-[14px] mb-2" style={{ color: NAVY }}>Top items is hafte</p>
        {[["Basmati chawal 5kg", "₹18,400"], ["Sarso tel 1L", "₹11,200"], ["Maggi carton", "₹7,850"]].map(([n, v], i) => (
          <div key={i} className="flex items-center justify-between py-1.5" style={{ borderTop: i > 0 ? "1px solid rgba(20,23,58,0.1)" : "none" }}>
            <p className="font-body text-[12px]" style={{ color: "#2A2E10" }}>{n}</p>
            <p className="font-display font-bold text-[12px]" style={{ color: NAVY }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OCRScreen() {
  const rows = [
    { item: "Chawal 5kg", qty: "3", amt: "₹1,020", ok: true },
    { item: "Sarso tel", qty: "2", amt: "₹560", ok: true },
    { item: "??? (dhundhla)", qty: "1", amt: "₹—", ok: false },
  ];
  return (
    <div className="px-5 pt-3">
      <p className="font-display font-bold text-[22px] mb-1" style={{ color: NAVY }}>Khata Scan</p>
      <p className="font-body text-[13px] mb-4" style={{ color: "#8A87A0" }}>Diary ki photo lo, AI extract karega</p>

      <div
        className="rounded-[28px] p-6 mb-4 flex flex-col items-center justify-center text-center relative overflow-hidden"
        style={{ background: "#fff", border: "2px dashed #C7C3DE" }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ background: NAVY }}>
          <Camera size={26} color="#fff" />
        </div>
        <p className="font-display font-bold text-[15px]" style={{ color: NAVY }}>Diary page scan karo</p>
        <p className="font-body text-[11px] mt-1" style={{ color: "#8A87A0" }}>Photo kheecho ya gallery se chuno</p>
      </div>

      <div className="rounded-[22px] p-4 mb-3" style={{ background: NAVY }}>
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 size={16} color="#C6FF3D" />
          <p className="font-display font-bold text-[14px] text-white">2/3 entries extract hui</p>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between py-2" style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: r.ok ? "#3AA86B" : "#FF8B3D" }} />
              <p className="font-body text-[12px] text-white/90">{r.item} × {r.qty}</p>
            </div>
            <p className="font-display font-bold text-[12px]" style={{ color: r.ok ? "#fff" : "#FF8B3D" }}>{r.amt}</p>
          </div>
        ))}
        <div className="flex items-start gap-2 mt-2 p-2 rounded-xl" style={{ background: "rgba(255,139,61,0.15)" }}>
          <AlertCircle size={13} color="#FF8B3D" className="mt-0.5 shrink-0" />
          <p className="font-body text-[10px] text-white/80">1 entry ki likhawat dhundhli hai — manually check kar lo</p>
        </div>
      </div>

      <button className="w-full rounded-[22px] py-3.5 font-display font-bold text-[14px]" style={{ background: "#C6FF3D", color: NAVY }}>
        Sheet mein save karo
      </button>
    </div>
  );
}

function ChatScreen() {
  const messages = [
    { from: "agent", text: "नमस्ते Ramesh Ji! आज का हिसाब तैयार है — बताइए क्या मदद चाहिए?" },
    { from: "user", text: "Sharma ji ka udhaar kitna baaki hai?" },
    { from: "agent", text: "Sharma ji ke पास ₹4,200 बाकी है, 8 दिन से pending. Reminder भेजना चाहेंगे?" },
  ];
  return (
    <div className="px-5 pt-3 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: NAVY }}>
          <Bot size={20} color="#C6FF3D" />
        </div>
        <div>
          <p className="font-display font-bold text-[16px]" style={{ color: NAVY }}>Sudarshan AI</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#3AA86B" }} />
            <p className="font-body text-[11px]" style={{ color: "#8A87A0" }}>हिंदी में trained • online</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-3 mb-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[80%] rounded-[18px] px-4 py-2.5"
              style={m.from === "user"
                ? { background: NAVY, borderBottomRightRadius: 4 }
                : { background: "#fff", borderBottomLeftRadius: 4 }}
            >
              <p className="font-body text-[13px] leading-snug" style={{ color: m.from === "user" ? "#fff" : NAVY }}>{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-3 flex-wrap">
        {["आज का हिसाब", "Reminder भेजो", "Invoice बनाओ"].map((c) => (
          <div key={c} className="px-3 py-1.5 rounded-full font-body text-[11px] font-semibold flex items-center gap-1" style={{ background: "#fff", color: NAVY }}>
            <Sparkles size={11} color="#FF8B3D" /> {c}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-full px-4 py-2.5 mb-2" style={{ background: "#fff" }}>
        <p className="flex-1 font-body text-[12px]" style={{ color: "#8A87A0" }}>अपना सवाल लिखें...</p>
        <Mic size={16} color="#8A87A0" />
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: NAVY }}>
          <Send size={13} color="#fff" />
        </div>
      </div>
    </div>
  );
}

function ProfileScreen() {
  const [waMethod, setWaMethod] = useState("otp");
  const listings = [
    { name: "Google My Business", sub: "Maps + Search pe dikho", icon: Building2, color: "#5CC8FF" },
    { name: "Google Maps", sub: "Location pin karo", icon: MapPin, color: "#C6FF3D" },
    { name: "Bing Places", sub: "Microsoft search pe list ho", icon: Compass, color: "#FF8B3D" },
  ];
  return (
    <div className="px-5 pt-3">
      <p className="font-display font-bold text-[22px] mb-1" style={{ color: NAVY }}>Business Profile</p>
      <p className="font-body text-[13px] mb-4" style={{ color: "#8A87A0" }}>Ramesh Kirana Store, Lucknow</p>

      {/* WhatsApp connect */}
      <div className="rounded-[22px] p-4 mb-3" style={{ background: "#fff" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
            <MessageCircle size={15} color="#fff" />
          </div>
          <p className="font-display font-bold text-[14px]" style={{ color: NAVY }}>WhatsApp connect karo</p>
        </div>

        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setWaMethod("otp")}
            className="flex-1 rounded-2xl py-2.5 flex flex-col items-center gap-1"
            style={{ background: waMethod === "otp" ? NAVY : "#F5F2EC" }}
          >
            <Phone size={15} color={waMethod === "otp" ? "#C6FF3D" : NAVY} />
            <span className="font-body text-[11px] font-semibold" style={{ color: waMethod === "otp" ? "#fff" : NAVY }}>OTP se</span>
          </button>
          <button
            onClick={() => setWaMethod("qr")}
            className="flex-1 rounded-2xl py-2.5 flex flex-col items-center gap-1"
            style={{ background: waMethod === "qr" ? NAVY : "#F5F2EC" }}
          >
            <QrCode size={15} color={waMethod === "qr" ? "#C6FF3D" : NAVY} />
            <span className="font-body text-[11px] font-semibold" style={{ color: waMethod === "qr" ? "#fff" : NAVY }}>QR / Web</span>
          </button>
        </div>

        {waMethod === "otp" ? (
          <div>
            <div className="rounded-xl px-3 py-2.5 mb-2" style={{ background: "#F5F2EC" }}>
              <p className="font-body text-[12px]" style={{ color: "#8A87A0" }}>+91 98765 43210</p>
            </div>
            <button className="w-full rounded-xl py-2.5 font-body text-[12px] font-semibold" style={{ background: "#C6FF3D", color: NAVY }}>
              OTP bhejo
            </button>
          </div>
        ) : (
          <div className="flex items-start gap-2 p-2.5 rounded-xl" style={{ background: "rgba(255,139,61,0.15)" }}>
            <ShieldAlert size={14} color="#FF8B3D" className="mt-0.5 shrink-0" />
            <p className="font-body text-[10px] leading-snug" style={{ color: "#8A5A2A" }}>
              Unofficial method — Meta business number ban kar sakta hai. OTP zyada safe hai.
            </p>
          </div>
        )}
      </div>

      {/* Business listings */}
      <p className="font-display font-semibold text-[15px] mb-2" style={{ color: NAVY }}>Business listing karo</p>
      <div className="space-y-2 mb-3">
        {listings.map(({ name, sub, icon: Icon, color }) => (
          <button key={name} className="w-full rounded-[18px] p-3.5 flex items-center gap-3" style={{ background: "#fff" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: color }}>
              <Icon size={17} color={NAVY} />
            </div>
            <div className="flex-1 text-left">
              <p className="font-display font-bold text-[13px]" style={{ color: NAVY }}>{name}</p>
              <p className="font-body text-[10px]" style={{ color: "#8A87A0" }}>{sub}</p>
            </div>
            <ChevronRight size={15} color="#8A87A0" />
          </button>
        ))}
      </div>
      <p className="font-body text-[10px] text-center" style={{ color: "#8A87A0" }}>
        Har button seedha listing page kholega, naam & address pre-filled
      </p>
    </div>
  );
}

export default function VyapaiCRMMockup() {
  const [tab, setTab] = useState("home");
  const tabs = [
    { id: "home", icon: Home },
    { id: "dashboard", icon: LayoutDashboard },
    { id: "scan", icon: Camera },
    { id: "chat", icon: Bot },
    { id: "profile", icon: User },
  ];
  const screens = { home: <HomeScreen />, dashboard: <DashboardScreen />, scan: <OCRScreen />, chat: <ChatScreen />, profile: <ProfileScreen /> };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6" style={{ background: CANVAS, fontFamily: "'Poppins', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Baloo 2', system-ui, sans-serif; }
        .font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      <div className="relative w-[380px] rounded-[48px] p-3 shadow-2xl" style={{ background: "#0E1030" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-2xl z-20" style={{ background: "#0E1030" }} />
        <div className="rounded-[38px] overflow-hidden" style={{ background: BG }}>
          <StatusBar />
          <div className="pb-28 h-[760px] overflow-y-auto">{screens[tab]}</div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[88%] rounded-full flex items-center justify-between px-5 py-3" style={{ background: NAVY }}>
            {tabs.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: tab === id ? "#fff" : "transparent" }}
              >
                <Icon size={17} color={tab === id ? NAVY : "#7A78A0"} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
