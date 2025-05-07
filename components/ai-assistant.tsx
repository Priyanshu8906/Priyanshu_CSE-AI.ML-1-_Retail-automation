"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { Bot, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AIAssistant({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm your RetailTech AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("price") || input.toLowerCase().includes("cost")) {
        response =
          "Our products range from $149.99 for software solutions to $2499.99 for complete hardware systems. You can view detailed pricing on our products page. Would you like me to help you find a specific product?"
      } else if (input.toLowerCase().includes("store") || input.toLowerCase().includes("location")) {
        response =
          "We have stores in San Francisco, New York, and Chicago. You can find detailed information and directions in the Stores section. Would you like me to help you locate the nearest store?"
      } else if (input.toLowerCase().includes("return") || input.toLowerCase().includes("refund")) {
        response =
          "We offer a 30-day return policy on all hardware products and a 14-day money-back guarantee on software subscriptions. Would you like me to explain the return process?"
      } else if (input.toLowerCase().includes("shipping") || input.toLowerCase().includes("delivery")) {
        response =
          "We offer free shipping on orders over $500. Standard shipping takes 3-5 business days, and expedited shipping is available for an additional fee. Would you like to know more about our shipping options?"
      } else {
        response =
          "Thank you for your question. I'd be happy to help you with that. Our retail automation solutions are designed to streamline operations and enhance customer experience. Would you like more information about a specific product or service?"
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: response,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 md:w-96 shadow-2xl rounded-2xl">
      <Card className="flex flex-col h-[500px] max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 bg-primary/10">
              <Bot className="h-4 w-4 text-primary" />
            </Avatar>
            <span className="font-medium">RetailTech Assistant</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSendMessage} disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
