"use client";

import { useState, useCallback } from "react";
import { Message, MessageRole } from "@/types";
import { generateId } from "@/utils";

/**
 * useChat — manages chat state and message sending.
 * AI integration will be wired up in Week 2 (API route).
 */
export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addMessage = useCallback((role: MessageRole, content: string) => {
    const message: Message = {
      id: generateId(),
      role,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
    return message;
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      setError(null);
      addMessage("user", content);
      setIsLoading(true);

      try {
        // TODO (Week 2): Call POST /api/chat with the full messages history.
        // For now, simulate a bot response after a short delay.
        await new Promise((resolve) => setTimeout(resolve, 800));
        addMessage(
          "assistant",
          "This is a placeholder response. AI integration coming in Week 2! 🚀"
        );
      } catch (err) {
        setError("Something went wrong. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [addMessage]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return { messages, isLoading, error, sendMessage, clearMessages };
}
