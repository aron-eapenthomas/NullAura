export const AURA_RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    step: { type: "NUMBER" },
    incident_vector: { type: "STRING" },
    situation_title: { type: "STRING" },
    situation_description: { type: "STRING" },
    options: {
      type: "ARRAY",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "OBJECT",
        properties: {
          id: { type: "STRING" },
          tier: { type: "NUMBER" },
          tier_name: { type: "STRING" },
          hazard_level: {
            type: "STRING",
            enum: ["LOW RECOIL", "ELEVATED HAZARD", "BIOHAZARD"],
          },
          action_text: { type: "STRING" },
          aura_penalty: { type: "NUMBER" },
          result_title: { type: "STRING" },
          result_description: { type: "STRING" },
        },
        required: [
          "id", "tier", "tier_name", "hazard_level", "action_text",
          "aura_penalty", "result_title", "result_description",
        ],
      },
    },
  },
  required: [
    "step", "incident_vector", "situation_title",
    "situation_description", "options",
  ],
};
