import { NextRequest, NextResponse } from "next/server";
import { ChatRequest, ChatResponse } from "@/types";

/**
 * POST /api/chat
 * AI integration will be added in Week 2.
 * Right now this returns a stub response.
 */
export async function POST(req: NextRequest) {
  try {
    const body: ChatRequest = await req.json();

    if (!body.messages || body.messages.length === 0) {
      return NextResponse.json<ChatResponse>(
        { message: "", error: "No messages provided." },
        { status: 400 }
      );
    }

    // TODO (Week 2): Replace this stub with a real AI provider call.
    // e.g. OpenAI, Anthropic Claude, Google Gemini, etc.
    const lastUserMessage = body.messages.at(-1)?.content ?? "";

    const stubReply: ChatResponse = {
      message: `[Week 2 placeholder] You said: "${lastUserMessage}"`,
    };

    return NextResponse.json<ChatResponse>(stubReply, { status: 200 });
  } catch {
    return NextResponse.json<ChatResponse>(
      { message: "", error: "Internal server error." },
      { status: 500 }
    );
  }
}
