// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   AlertTriangle, AudioLines, ChevronRight, CircleUserRound, Crosshair,
//   FileWarning, Gauge, MessageSquareQuote, Power, Radio, Sparkles,
// } from "lucide-react";

// const initialScenario = {
//   step: 2,
//   incident_vector: "THE_JOB_INTERVIEW.EXE",
//   situation_title: "THE UNEXPECTED SILENCE",
//   situation_description: "The interviewer asks where you see yourself in five years. Your mind goes completely blank, and the silence becomes an unpaid sixth member of the panel.",
//   options: [
//     { id: " Cheriya Scene ", tier: 1, tier_name: "Minor Glitch", hazard_level: "Cheriya Scene", action_text: "Give a safe, rehearsed answer about professional growth.", aura_penalty: -50, result_title: "MINOR VIBES DETECTED", result_description: "You answer like a perfectly serviceable office printer. The panel nods politely, but your aura has been downgraded to background furniture." },
//     { id: "Pani Paali  ", tier: 2, tier_name: "ELEVATED HAZARD", hazard_level: "Pani Paali", action_text: "Admit you have no idea and ask where they see you in five years.", aura_penalty: -500, result_title: "INTERVIEWER CONFUSION SPIKE", result_description: "The question bounces back across the table with the force of a boomerang made from red flags. They respect the confidence, but the calendar invite starts feeling cursed." },
//     { id: "Kattappoga", tier: 3, tier_name: "Terminal Error", hazard_level: "Kattappoga", action_text: "Stand up, point at the ceiling, and announce that you are already the CEO.", aura_penalty: -8500, result_title: "SECURITY THREAT ELEVATED", result_description: "The room enters a new era of silence as the panel silently messages security. You leave with no job, no dignity, and a story that will outlive the company." },
//   ],
// };

// const presets = ["Tinder Date Disaster", "Elevator Small Talk", "Company All-Hands Q&A", "Accidental Reply-All"];
// const badge = "rounded-sm px-2 py-1 text-[10px] font-bold tracking-wide";

// function Equalizer() {
//   return <div className="flex h-7 items-end gap-1">{[12, 20, 10, 25, 17, 28, 14, 23, 9, 19].map((height, index) => <span key={index} className={`w-1 rounded-t-sm ${index % 3 === 0 ? "bg-red-500" : "bg-cyan-400"}`} style={{ height }} />)}</div>;
// }

// export default function Home() {
//   const [totalAura, setTotalAura] = useState(0);
//   const [scenario, setScenario] = useState(initialScenario);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [prompt, setPrompt] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const playCardSound = (option) => {
//     // Use a heavy alarm or bass drop for Tier 3, and a glitch sound for Tiers 1 and 2
//     // console.log(option.tier)
//     const sit_no=option.tier
//     const soundFile = sit_no === 3 ? '/sounds/faa.mpeg' :(sit_no===2?'/sounds/second.mpeg':'/sounds/first.mpeg');
    

//     const audio = new Audio(soundFile);
//     audio.volume = 0.5; // Keeps it balanced for the room speakers
//     audio.play().catch(error => console.log("Browser blocked autoplay/audio:", error));
//   };
//     const getAuraRank = (score) => {
//     if (score > -500) return "NORMAL HUMAN (FOR NOW)";
//     if (score > -2000) return "LOCAL SCENE CREATOR 🤡";
//     if (score > -5000) return "WALKING RED FLAG 🚩";
//     if (score > -10000) return "VERUM SHOKAM (SOCIAL HAZARD) ⚠️";
//     return "NAATIL IRANGAN PATTATHA AVASTHA ☢️"; 
//   };

//   async function generateScenario(value = prompt) {
//     const cleanPrompt = value.trim();
//     if (!cleanPrompt || isGenerating) return;
//     setIsGenerating(true);
//     setSelectedOption(null);
//     try {
//       const response = await fetch("/api/scenario", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: cleanPrompt }) });
//       if (!response.ok) throw new Error("Scenario generation request failed");
//       setScenario(await response.json());
//       setPrompt(cleanPrompt);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsGenerating(false);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-zinc-100 px-4 py-6">
//       <div className="mx-auto flex max-w-4xl flex-col space-y-6">
//         <header className="rounded border border-zinc-300 bg-white p-4 shadow-sm">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <div>
//               <h1 className="text-lg font-black tracking-tight text-red-600">NEGATIVE AURA ENGINE</h1>
//               <p className="mt-1 text-[10px] font-bold text-zinc-500">Predict Your Negative Aura</p>
//             </div>
//             <div className="flex flex-wrap justify-between items-center gap-2">
//               <span className={`${badge} animate-pulse bg-red-100 text-red-700`}>STATUS: CRITICAL CRINGE DETECTED</span>
//               <span className={`${badge} bg-yellow-100 text-yellow-800`}>HAZARD INDEX: 94.8%</span>
//               <span className={`${badge} bg-zinc-200 text-zinc-600`}>FPS: 120 // LATENCY: 3MS</span>
//               {/* <span className={`${badge} bg-zinc-900 text-white`}>CHAMBER_04</span> */}
//               <CircleUserRound className="h-7 w-7 text-red-600" />
//             </div>
//           </div>
//         </header>

//         <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
//           <div className="flex items-center justify-between border-b border-zinc-200 pb-3 text-[11px] font-bold text-zinc-500">• REAL-TIME DISASTER INDEX // VECTOR DEGRADATION ACTIVE • <Gauge className="h-4 w-4 text-red-500" /></div>
//           <div className="py-7 text-center"><div className="text-5xl font-black tracking-tighter text-red-600 sm:text-6xl">{totalAura.toLocaleString()} <span className="text-2xl">AURA</span></div><span className={`${badge} mt-3 inline-block bg-red-100 text-red-700`}>CRITICAL</span></div>
        
//           {/* <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-center text-[10px] font-black text-yellow-900"><AlertTriangle className="h-4 w-4" />RANK: SOCIAL HAZARD LEVEL 4 (WALKING SOCIAL DISASTER)</div> */}
//           <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-center text-[10px] font-black text-yellow-900">
//             <AlertTriangle className="h-4 w-4" />
//              RANK: {getAuraRank(totalAura)}
//            </div>
//         </section>

//         <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
//           <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-3 text-[11px] font-bold"><span className="text-cyan-600">SIMULATION STEP: {String(scenario.step).padStart(2, "0")} / 03</span><span className="text-red-600">• INCIDENT VECTOR: {scenario.incident_vector} •</span></div>
//           <div className="grid gap-5 py-5 md:grid-cols-[150px_1fr]">
//             <div className="flex aspect-square flex-col justify-between rounded bg-zinc-900  text-[10px] text-zinc-400">
//               <Image src={"/negative_aura.jpeg"} width={400} height={400} alt='image' />
//               {/* <div className="flex justify-between"><span>TARGET_CAM_01</span><Crosshair className="h-4 w-4" /></div> */}
//               {/* <div className="flex items-center gap-2 font-bold text-red-500"><span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />REC</div> */}

//             </div>
//             <div className="flex flex-col justify-center"><div className="mb-3 flex items-center gap-2 text-xs font-bold text-zinc-500"><MessageSquareQuote className="h-4 w-4 text-cyan-600" />{scenario.situation_title}</div><p className="text-xl font-bold leading-relaxed text-zinc-800">“{scenario.situation_description}”</p></div></div>
//           {/* <div className="flex flex-col gap-3 border-t border-zinc-200 pt-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3 text-[10px] font-bold text-zinc-500"><AudioLines className="h-4 w-4 text-red-500" />NEURAL_STRESS_AUDIO_WAVE: <Equalizer /></div><span className="text-[10px] font-bold text-red-600">DECIBEL: 88.4 dB</span></div> */}
//         </section>

//         <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
//           <div className="flex flex-col gap-2 border-b border-zinc-200 pb-3 sm:flex-row sm:items-center sm:justify-between"><h2 className="text-xs font-black text-zinc-700">EXECUTE RESPONSE PROTOCOL [CHOOSE YOUR DAMAGE &amp; INTEL DOSSIER]</h2>
//             <span className="text-[10px] font-bold text-red-600">AURA PENALTY PROJECTION</span></div>
//           <div className="space-y-3 py-5">{scenario.options.map((option) => <button key={option.id} type="button" onClick={() => { setTotalAura((value) => value + option.aura_penalty); setSelectedOption(option);playCardSound(option)}} className={`group flex w-full items-center justify-between gap-4 rounded border p-4 text-left transition hover:-translate-y-0.5 ${option.tier === 3 ? "border-red-300 bg-red-50" : option.tier === 2 ? "border-orange-200 bg-orange-50" : "border-zinc-200 bg-zinc-50"}`}><div className="min-w-0"><div className="mb-1 flex flex-wrap gap-2 text-[10px] font-black"><span className={option.tier === 3 ? "text-red-600" : option.tier === 2 ? "text-orange-600" : "text-zinc-600"}>{option.tier_name}</span><span className="text-zinc-400">[{option.hazard_level}]</span></div><p className="text-sm font-bold text-zinc-800">{option.action_text}</p></div><span className={`flex shrink-0 items-center gap-1 rounded px-3 py-2 text-xs font-black text-white ${option.tier === 3 ? "bg-red-600 shadow-[0_0_14px_rgba(220,38,38,0.45)]" : option.tier === 2 ? "bg-orange-500" : "bg-zinc-800"}`}>{option.aura_penalty.toLocaleString()} AURA {option.tier === 3 && "[CATACLYSMIC] ⚡"}<ChevronRight className="h-4 w-4" /></span></button>)}</div>
//           {selectedOption && <div className="border-l-4 border-red-600 bg-red-50 p-4"><div className="flex items-center gap-2 text-xs font-black text-red-700"><FileWarning className="h-4 w-4" />{selectedOption.result_title}</div><p className="mt-2 text-sm leading-relaxed text-red-950">{selectedOption.result_description}</p></div>}
//         </section>

//         <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
//           <div className="flex items-center justify-between border-b border-zinc-200 pb-3"><h2 className="text-xs font-black text-zinc-700">COMMAND LINE SCENARIO GENERATOR</h2><span className="text-[10px] font-bold text-green-600">READY FOR INPUT</span></div>
//           <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); generateScenario(); }}><div className="flex flex-1 items-center rounded border border-zinc-300 bg-zinc-50 px-3"><span className="mr-2 shrink-0 text-xs font-bold text-red-600">SIM PROMPT://</span><input value={prompt} onChange={(event) => setPrompt(event.target.value)} className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" placeholder="Type a custom scenario (e.g. First date at a fancy restaurant)" /></div><button type="submit" disabled={isGenerating} className="flex items-center justify-center gap-2 rounded bg-red-600 px-5 py-3 text-xs font-black text-white hover:bg-red-700 disabled:opacity-60"><Power className="h-4 w-4" />{isGenerating ? "CALCULATING..." : "GENERATE CHAOS"}</button></form>
//           <div className="mt-4 flex flex-wrap gap-2">{presets.map((preset) => <button key={preset} type="button" onClick={() => { setPrompt(preset); generateScenario(preset); }} className="rounded-full border border-zinc-300 px-3 py-1.5 text-[10px] font-bold text-zinc-600 hover:border-red-400 hover:text-red-600"># {preset}</button>)}</div>
//           <div className="mt-5 flex items-center justify-between text-[10px] text-zinc-400"><span className="flex items-center gap-1"><Radio className="h-3 w-3" />GEMINI SOCIAL SIMULATION CORE</span><span className="flex items-center gap-1">LIVE VECTOR FEED <Sparkles className="h-3 w-3 text-yellow-500" /></span></div>
//         </section>
//       </div>
//     </main>
//   );
// }


// new code

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AlertTriangle, AudioLines, ChevronRight, CircleUserRound, Crosshair,
  FileWarning, Gauge, MessageSquareQuote, Power, Radio, Sparkles,
} from "lucide-react";

const initialScenario = {
  step: 2,
  incident_vector: "THE_JOB_INTERVIEW.EXE",
  situation_title: "THE UNEXPECTED SILENCE",
  situation_description: "The interviewer asks where you see yourself in five years. Your mind goes completely blank, and the silence becomes an unpaid sixth member of the panel.",
  options: [
    { id: " Cheriya Scene ", tier: 1, tier_name: "Minor Glitch", hazard_level: "Cheriya Scene", action_text: "Give a safe, rehearsed answer about professional growth.", aura_penalty: -50, result_title: "MINOR VIBES DETECTED", result_description: "You answer like a perfectly serviceable office printer. The panel nods politely, but your aura has been downgraded to background furniture." },
    { id: "Pani Paali  ", tier: 2, tier_name: "ELEVATED HAZARD", hazard_level: "Pani Paali", action_text: "Admit you have no idea and ask where they see you in five years.", aura_penalty: -500, result_title: "INTERVIEWER CONFUSION SPIKE", result_description: "The question bounces back across the table with the force of a boomerang made from red flags. They respect the confidence, but the calendar invite starts feeling cursed." },
    { id: "Kattappoga", tier: 3, tier_name: "Terminal Error", hazard_level: "Kattappoga", action_text: "Stand up, point at the ceiling, and announce that you are already the CEO.", aura_penalty: -8500, result_title: "SECURITY THREAT ELEVATED", result_description: "The room enters a new era of silence as the panel silently messages security. You leave with no job, no dignity, and a story that will outlive the company." },
  ],
};

const presets = ["Tinder Date Disaster", "Elevator Small Talk", "Company All-Hands Q&A", "Accidental Reply-All"];
const badge = "rounded-sm px-2 py-1 text-[10px] font-bold tracking-wide";

function Equalizer() {
  return <div className="flex h-7 items-end gap-1">{[12, 20, 10, 25, 17, 28, 14, 23, 9, 19].map((height, index) => <span key={index} className={`w-1 rounded-t-sm ${index % 3 === 0 ? "bg-red-500" : "bg-cyan-400"}`} style={{ height }} />)}</div>;
}

export default function Home() {
  const [totalAura, setTotalAura] = useState(0); // I changed this back to 0 so you start fresh!
  const [scenario, setScenario] = useState(initialScenario);
  const [selectedOption, setSelectedOption] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // 👇 ADDED: Dynamic Manglish Rank Function 👇
  const getAuraRank = (score) => {
    if (score > -500) return "NORMAL HUMAN (FOR NOW)";
    if (score > -2000) return "LOCAL SCENE CREATOR 🤡";
    if (score > -5000) return "WALKING RED FLAG 🚩";
    if (score > -10000) return "VERUM SHOKAM (SOCIAL HAZARD) ⚠️";
    return "NAATIL IRANGAN PATTATHA AVASTHA ☢️"; 
  };
  // 👆 --------------------------------------- 👆

  const playCardSound = (option) => {
    const sit_no = option.tier;
    const soundFile = sit_no === 3 ? '/sounds/faa.mpeg' : (sit_no === 2 ? '/sounds/second.mpeg' : '/sounds/first.mpeg');
    const audio = new Audio(soundFile);
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Browser blocked autoplay/audio:", error));
  };

  async function generateScenario(value = prompt) {
    const cleanPrompt = value.trim();
    if (!cleanPrompt || isGenerating) return;
    setIsGenerating(true);
    setSelectedOption(null);
    try {
      const response = await fetch("/api/scenario", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: cleanPrompt }) });
      if (!response.ok) throw new Error("Scenario generation request failed");
      setScenario(await response.json());
      setPrompt(cleanPrompt);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-100 px-4 py-6">
      <div className="mx-auto flex max-w-4xl flex-col space-y-6">
        <header className="rounded border border-zinc-300 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-lg font-black tracking-tight text-red-600">NEGATIVE AURA ENGINE</h1>
              <p className="mt-1 text-[10px] font-bold text-zinc-500">Predict Your Negative Aura</p>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-2">
              <span className={`${badge} animate-pulse bg-red-100 text-red-700`}>STATUS: CRITICAL CRINGE DETECTED</span>
              <span className={`${badge} bg-yellow-100 text-yellow-800`}>HAZARD INDEX: 94.8%</span>
              <span className={`${badge} bg-zinc-200 text-zinc-600`}>FPS: 120 // LATENCY: 3MS</span>
              <CircleUserRound className="h-7 w-7 text-red-600" />
            </div>
          </div>
        </header>

        <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3 text-[11px] font-bold text-zinc-500">• REAL-TIME DISASTER INDEX // VECTOR DEGRADATION ACTIVE • <Gauge className="h-4 w-4 text-red-500" /></div>
          <div className="py-7 text-center">
            <div className="text-5xl font-black tracking-tighter text-red-600 sm:text-6xl">
              {totalAura.toLocaleString()} <span className="text-2xl">AURA</span>
            </div>
            <span className={`${badge} mt-3 inline-block bg-red-100 text-red-700`}>CRITICAL</span>
          </div>
        
          {/* 👇 UPDATED: Dynamic Yellow Rank Badge 👇 */}
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-center text-[10px] font-black text-yellow-900">
            <AlertTriangle className="h-4 w-4" />
            RANK: {getAuraRank(totalAura)}
          </div>
          {/* 👆 ---------------------------------- 👆 */}
        </section>

        <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-3 text-[11px] font-bold"><span className="text-cyan-600">SIMULATION STEP: {String(scenario.step).padStart(2, "0")} / 03</span><span className="text-red-600">• INCIDENT VECTOR: {scenario.incident_vector} •</span></div>
          <div className="grid gap-5 py-5 md:grid-cols-[150px_1fr]">
            <div className="flex aspect-square flex-col justify-between rounded bg-zinc-900  text-[10px] text-zinc-400">
              <Image src={"/negative_aura.jpeg"} width={400} height={400} alt='image' />
            </div>
            <div className="flex flex-col justify-center"><div className="mb-3 flex items-center gap-2 text-xs font-bold text-zinc-500"><MessageSquareQuote className="h-4 w-4 text-cyan-600" />{scenario.situation_title}</div><p className="text-xl font-bold leading-relaxed text-zinc-800">“{scenario.situation_description}”</p></div></div>
        </section>

        <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 border-b border-zinc-200 pb-3 sm:flex-row sm:items-center sm:justify-between"><h2 className="text-xs font-black text-zinc-700">EXECUTE RESPONSE PROTOCOL [CHOOSE YOUR DAMAGE &amp; INTEL DOSSIER]</h2>
            <span className="text-[10px] font-bold text-red-600">AURA PENALTY PROJECTION</span></div>
          <div className="space-y-3 py-5">{scenario.options.map((option) => <button key={option.id} type="button" onClick={() => { setTotalAura((value) => value + option.aura_penalty); setSelectedOption(option);playCardSound(option)}} className={`group flex w-full items-center justify-between gap-4 rounded border p-4 text-left transition hover:-translate-y-0.5 ${option.tier === 3 ? "border-red-300 bg-red-50" : option.tier === 2 ? "border-orange-200 bg-orange-50" : "border-zinc-200 bg-zinc-50"}`}><div className="min-w-0"><div className="mb-1 flex flex-wrap gap-2 text-[10px] font-black"><span className={option.tier === 3 ? "text-red-600" : option.tier === 2 ? "text-orange-600" : "text-zinc-600"}>{option.tier_name}</span><span className="text-zinc-400">[{option.hazard_level}]</span></div><p className="text-sm font-bold text-zinc-800">{option.action_text}</p></div><span className={`flex shrink-0 items-center gap-1 rounded px-3 py-2 text-xs font-black text-white ${option.tier === 3 ? "bg-red-600 shadow-[0_0_14px_rgba(220,38,38,0.45)]" : option.tier === 2 ? "bg-orange-500" : "bg-zinc-800"}`}>{option.aura_penalty.toLocaleString()} AURA {option.tier === 3 && "[CATACLYSMIC] ⚡"}<ChevronRight className="h-4 w-4" /></span></button>)}</div>
          {selectedOption && <div className="border-l-4 border-red-600 bg-red-50 p-4"><div className="flex items-center gap-2 text-xs font-black text-red-700"><FileWarning className="h-4 w-4" />{selectedOption.result_title}</div><p className="mt-2 text-sm leading-relaxed text-red-950">{selectedOption.result_description}</p></div>}
        </section>

        <section className="rounded border border-zinc-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3"><h2 className="text-xs font-black text-zinc-700">COMMAND LINE SCENARIO GENERATOR</h2><span className="text-[10px] font-bold text-green-600">READY FOR INPUT</span></div>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); generateScenario(); }}><div className="flex flex-1 items-center rounded border border-zinc-300 bg-zinc-50 px-3"><span className="mr-2 shrink-0 text-xs font-bold text-red-600">SIM PROMPT://</span><input value={prompt} onChange={(event) => setPrompt(event.target.value)} className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" placeholder="Type a custom scenario (e.g. First date at a fancy restaurant)" /></div><button type="submit" disabled={isGenerating} className="flex items-center justify-center gap-2 rounded bg-red-600 px-5 py-3 text-xs font-black text-white hover:bg-red-700 disabled:opacity-60"><Power className="h-4 w-4" />{isGenerating ? "CALCULATING..." : "GENERATE CHAOS"}</button></form>
          <div className="mt-4 flex flex-wrap gap-2">{presets.map((preset) => <button key={preset} type="button" onClick={() => { setPrompt(preset); generateScenario(preset); }} className="rounded-full border border-zinc-300 px-3 py-1.5 text-[10px] font-bold text-zinc-600 hover:border-red-400 hover:text-red-600"># {preset}</button>)}</div>
          <div className="mt-5 flex items-center justify-between text-[10px] text-zinc-400"><span className="flex items-center gap-1"><Radio className="h-3 w-3" />GEMINI SOCIAL SIMULATION CORE</span><span className="flex items-center gap-1">LIVE VECTOR FEED <Sparkles className="h-3 w-3 text-yellow-500" /></span></div>
        </section>
      </div>
    </main>
  );
}
