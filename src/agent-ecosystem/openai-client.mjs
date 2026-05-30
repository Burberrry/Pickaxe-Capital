/**
 * OpenAI Client - interacts with OpenAI API if credentials exist
 */

import { OPENAI_API_KEY } from "./config.mjs";

/**
 * Run chat completion query or return null fallback
 * @param {string} systemPrompt - Agent context
 * @param {string} userPrompt - Mission instructions
 * @returns {Promise<string|null>} Response or fallback null
 */
export async function queryOpenAI(systemPrompt, userPrompt) {
  if (!OPENAI_API_KEY) {
    return null; // Fallback to rules-based simulation
  }

  try {
    const response = await fetch("https://api.openai.com/1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.1
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.warn("OpenAI API returned error:", err);
      return null;
    }

    const payload = await response.json();
    return payload.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.warn("Failed to contact OpenAI API:", error.message);
    return null;
  }
}
