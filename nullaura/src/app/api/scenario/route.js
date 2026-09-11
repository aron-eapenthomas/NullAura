import { GoogleGenAI } from "@google/genai";
import { AURA_RESPONSE_SCHEMA } from "@/lib/auraSchema";

const fallbackScenario = (prompt = "an awkward social situation") => {
  const normalizedPrompt = prompt.trim() || "an awkward social situation";
  const vector = normalizedPrompt
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/^_+|_+$/g, "")
    .toUpperCase()
    .slice(0, 32) || "CUSTOM_SCENARIO";

//   return {
//   step: 2,
//   incident_vector: `${vector}.EXE`,
//   situation_title: `THE ${normalizedPrompt.toUpperCase()} INCIDENT`,
//   situation_description: `You are dealing with ${normalizedPrompt}, and one tiny social wobble has become impossible to ignore. Every nearby person now seems invested in how you recover.`,
//   options: [
//     {
//       id: " Cheriya Scene ", tier: 1, tier_name: "Minor Glitch",
//       hazard_level: "LOW RECOIL", action_text: "Give a safe answer and pretend the silence never happened.",
//       aura_penalty: -50, result_title: "MINOR VIBES DETECTED",
//       result_description: "You answer with the confidence of a loading screen. Everyone moves on, but your soul keeps replaying the three-second pause.",
//     },
//     {
//       id: "Pani Paali  ", tier: 2, tier_name: "Elevated Hazard",
//       hazard_level: "ELEVATED HAZARD", action_text: "Admit that you practiced this exact answer in the mirror.",
//       aura_penalty: -500, result_title: "AUTHENTICITY OVERFLOW",
//       result_description: "The room appreciates your honesty in the same way a smoke alarm appreciates toast. You are memorable now, although nobody can explain why.",
//     },
//     {
//       id: "Kattappoga", tier: 3, tier_name: "Terminal Error",
//       hazard_level: "BIOHAZARD", action_text: "Answer entirely in corporate buzzwords, then ask to interview the interviewer.",
//       aura_penalty: -8500, result_title: "SECURITY THREAT ELEVATED",
//       result_description: "The situation becomes a hostile takeover of the group chat and everyone suddenly has somewhere else to be. You escape with no dignity, but your legend is forwarded to three departments.",
//     },
//   ],
//   };
// };
return {
  step: 2,
  incident_vector: `${vector}.EXE`,
  situation_title: `THE ${normalizedPrompt.toUpperCase()} INCIDENT`,
  situation_description: `You are dealing with ${normalizedPrompt}, and one tiny social wobble has become impossible to ignore. Every nearby person now seems invested in how you recover.`,
  options: [
    {
      id: "Tier_1", 
      tier: 1, 
      tier_name: "Certified NPC Moment", // CRINGE HEADER
      hazard_level: "LOW RECOIL", 
      action_text: "Do a fake, high-pitched laugh and immediately pretend to check a text on your phone.",
      aura_penalty: -150, 
      result_title: "PITY DETECTED",
      result_description: "You stare intensely at your phone, but everyone clearly saw that you just opened your calculator app. The suffocating pity in their eyes makes you want to melt into the floor.", // SHAMEFUL RESULT
    },
    {
      id: "Tier_2", 
      tier: 2, 
      tier_name: "Weaponized Main Character Syndrome", // CRINGE HEADER
      hazard_level: "ELEVATED HAZARD", 
      action_text: "Over-explain why your behavior was actually totally normal, starting with 'Hear me out bro...'",
      aura_penalty: -500, 
      result_title: "VERUM SHOKAM (DEVASTATING SILENCE)",
      result_description: "You spoke for 4 straight minutes. The silence stretches so long you can hear the AC humming. Nobody is mad; they are just deeply, profoundly embarrassed to be standing near you.", // SHAMEFUL RESULT
    },
    {
      id: "Tier_3", 
      tier: 3, 
      tier_name: "Generational Moonjal", // CRINGE HEADER (Manglish + Internet)
      hazard_level: "BIOHAZARD", 
      action_text: "Panic, double-down on the awkwardness, and accidentally insult their entire family tree while trying to make a joke.",
      aura_penalty: -8500, 
      result_title: "EGO BANKRUPTCY",
      result_description: "Congratulations. You didn't just ruin the interaction; you nuked the entire zip code. This specific memory will forcefully wake you up at 3:14 AM in a cold sweat for the rest of your natural life.", // SHAMEFUL RESULT
    },
  ],
  };
};

export async function POST(request) {
  let prompt = "";
  try {
    const body = await request.json();
    prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
  } catch (error) {
    console.error("Invalid scenario request:", error);
    return Response.json(fallbackScenario(), { status: 400 });
  }

  if (!prompt) return Response.json(fallbackScenario(), { status: 400 });
  if (!process.env.GEMINI_API_KEY) return Response.json(fallbackScenario(prompt));

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Analyze this user's situation: "${prompt}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: AURA_RESPONSE_SCHEMA,
    //     systemInstruction:
    //       "You are the NEGATIVE AURA ENGINE, a reverse-psychology arcade game. Analyze the situation and return exactly three escalating social disaster options, tiers 1 through 3. Make the aftermath funny and awkward. aura_penalty must be negative integers and tier 3 must be substantially more negative. Return only JSON matching the schema.",
    //  
    systemInstruction:
          "You are the NEGATIVE AURA ENGINE (Pani Paali Edition). Analyze the situation and return three escalating social disaster options. CRUCIAL RULES: 1. Write the 'tier_name', 'action_text', and 'result_description' entirely in natural, humorous Kerala Manglish and casual Malayalam slang (e.g., 'Scene', 'Pani paali', 'Avastha', 'Verum shokam'). 2. Make it sound like local college/office banter that induces instant social shame and second-hand embarrassment. 3. 'aura_penalty' must be negative integers, with Tier 3 being massively catastrophic.",
     },
    });
    return Response.json(JSON.parse(response.text));
  } catch (error) {
    console.error("Gemini scenario generation failed:", error);
    return Response.json(fallbackScenario(prompt));
  }
}
