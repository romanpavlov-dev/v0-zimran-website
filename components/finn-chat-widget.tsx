"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  sender: "finn" | "user";
  timestamp: Date;
}

export function FinnChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize messages on client only to avoid hydration mismatch with timestamps
  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Finn. How can I help you today?",
        sender: "finn",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (mounted) {
      scrollToBottom();
    }
  }, [messages, mounted]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate Finn's response
    setTimeout(() => {
      const finnResponse: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! I'm looking into that for you. In the meantime, you can browse our knowledge base or check our popular articles for quick answers.",
        sender: "finn",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, finnResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-[#1E6FFF] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">Finn – Finelo Assistant</h3>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-[#F4F6FA]">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-2xl",
                    message.sender === "user"
                      ? "bg-[#1E6FFF] text-white rounded-br-md"
                      : "bg-white text-foreground shadow-sm rounded-bl-md"
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  {mounted && (
                    <p
                      className={cn(
                        "text-xs mt-1",
                        message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-4 bg-card border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-full bg-[#F4F6FA] text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-[#1E6FFF]/30 text-sm"
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="w-12 h-12 rounded-full bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white p-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        data-finn-chat-button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1E6FFF] text-white shadow-lg hover:bg-[#1E6FFF]/90 flex items-center justify-center transition-all duration-300",
          isOpen && "rotate-90"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}

// Export a button that can be used to trigger the chat
export function AskFinnButton({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <Button
      onClick={onOpenChat}
      className="rounded-full px-6 py-6 text-base font-semibold bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white"
    >
      <Bot className="mr-2 h-5 w-5" />
      Ask Finn
    </Button>
  );
}
