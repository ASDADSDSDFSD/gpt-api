export interface ChatMessage {
    role: Role
    content: string
    type?: "default" | "locked" | "temporary"
    conversationSignature?: string,
    conversationId?: string,
    clientId?: string,
    invocationId?: string,
    model?: Model
}

export type Role = "system" | "user" | "assistant" | "error"
export type Model = "gpt-3.5-turbo-16k" | "gpt-4" | "gpt-4-32k" | "gpt-4-all"