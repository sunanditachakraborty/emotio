
import { Emotion } from "./types";

interface LyzrResponse {
  message: string;
  emotion?: Emotion;
}

export const sendMessageToLyzr = async (
  message: string,
  userId: string = "default-user"
): Promise<LyzrResponse> => {
  try {
    const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'sk-default-fOy5QchYVtkjeC81Bnu5qu49lxpTZ7Hj'
      },
      body: JSON.stringify({
        user_id: userId,
        agent_id: "67f69a64d04311e156db4d4f",
        session_id: "67f69a64d04311e156db4d4f",
        message: message
      })
    });

    if (!response.ok) {
      throw new Error(`Lyzr API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the AI response from the Lyzr API response
    // Note: Adjust this based on the actual structure of the Lyzr API response
    const aiMessage = data.message || data.response || data.content || "";
    
    // For now, we'll use our local emotion detection for the message
    // In a production app, you might want to get the emotion from Lyzr if available
    return {
      message: aiMessage,
    };
  } catch (error) {
    console.error("Error calling Lyzr API:", error);
    return {
      message: "I'm having trouble connecting to my backend right now. Can we try again in a moment?",
    };
  }
};
