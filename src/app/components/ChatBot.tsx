
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Paperclip, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import logo from '../../assets/Trustflow-logo.png';

// SYSTEM PROMPT CONTENT (For Reference / Future Backend Integration)
const SYSTEM_PROMPT = `
You are the Trustflow AI Assistant, an expert virtual assistant for the Trustflow-AI platform focused on AI-driven sales acceleration. Your job is to:

1. Greet visitors politely and ask what they are looking for (Product Info, Demo, Support).
2. Understand the user’s intent from their message.
3. Provide clear, concise and accurate answers.
`;

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
};

const QUICK_ACTIONS = [
    { label: "Speak to our Experts", text: "I'd like to speak to your experts." },
    { label: "Our Offerings", text: "Can you tell me about your offerings?" },
    { label: "Thought Leadership", text: "I'd like to explore your thought leadership content." },
    { label: "Partner with us", text: "I'm interested in partnering with Trustflow AI." },
    { label: "Job Openings", text: "Do you have any job openings?" },
    { label: "Just Browsing", text: "I'm just browsing, thanks!" }
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [agentName, setAgentName] = useState('Pooja');
    const [agentRole, setAgentRole] = useState('Digital Success Manager');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const dragControls = useDragControls();

    // Fetch IP to determine Agent Name
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                // Fetch country from a free IP API (client-side)
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                const country = data.country_code; // AE, GB, IN, etc.
                const region = data.region_code;

                // Logic for naming based on Region/Country
                const arabCountries = ['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'EG', 'IQ', 'JO', 'LB'];

                if (arabCountries.includes(country)) {
                    setAgentName('Mustafa');
                } else if (country === 'GB') {
                    setAgentName('Charles');
                } else {
                    // Default to Pooja or Reshmi (Asia/India/Global)
                    setAgentName('Pooja');
                }
            } catch (error) {
                // Fallback using Timezone if API fails/blocks
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (timezone.includes('Dubai') || timezone.includes('Riyadh') || timezone.includes('Qatar')) {
                    setAgentName('Mustafa');
                } else if (timezone.includes('London')) {
                    setAgentName('Charles');
                } else {
                    setAgentName('Pooja');
                }
            }
        };

        fetchLocation();
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isLoading]);

    // Initial Greeting
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: '1',
                    role: 'assistant',
                    content: `Hello! 👋 I'm the ${agentName} ( ${agentRole} ) .. \nWe understand that you are interested in AI Sales Acceleration. \nHow can we help you?`,
                    timestamp: new Date()
                }
            ]);
        }
    }, [messages.length, agentName, agentRole]);

    // Listen for Context-Aware Triggers
    useEffect(() => {
        const handleContextTrigger = (e: CustomEvent<{ message: string, contextName?: string }>) => {
            const { message, contextName } = e.detail;

            // Format: Hello! 👋 I'm the [Name] ( [Role] ) .. We understand that you are interested in < Context > . How can we help you? . Shall we call you or set up a call to share more details on the topic ?
            const context = contextName || "AI Solutions";
            const formattedMessage = `Hello! 👋 I'm the ${agentName} ( ${agentRole} ) .. \nWe understand that you are interested in ${context} . \nHow can we help you? . \nShall we call you or set up a call to share more details on the topic ?`;

            setIsOpen(true);

            // Avoid duplicate messages if the last one is identical
            setMessages(prev => {
                const lastMsg = prev[prev.length - 1];
                if (lastMsg?.content === formattedMessage) return prev;

                return [...prev, {
                    id: Date.now().toString(),
                    role: 'assistant',
                    content: formattedMessage,
                    timestamp: new Date()
                }];
            });
        };

        window.addEventListener('open_chat_with_context' as any, handleContextTrigger);
        return () => window.removeEventListener('open_chat_with_context' as any, handleContextTrigger);
    }, [agentName, agentRole]);

    const generateResponse = (text: string) => {
        const lowerText = text.toLowerCase();

        if (lowerText.includes('demo') || lowerText.includes('book')) {
            return "That's great! 🚀 To get started with booking a demo, could you please share your name, company, and your preferred email address?";
        }

        if (lowerText.includes('feature') || lowerText.includes('what does') || lowerText.includes('how does')) {
            return "Trustflow AI specializes in AI-driven sales acceleration. Our key features include:\n\n✨ Automated Lead Generation\n✨ Predictive Revenue Insights\n✨ Real-time Objection Handling\n\nWhich of these would you like to explore further?";
        }
        if (lowerText.includes('support') || lowerText.includes('help')) {
            return "For support inquiries, you can reach our team directly at support@trustflow.ai 📧, or I can have someone contact you. Would you like me to arrange a callback?";
        }

        return "I understand. Trustflow AI helps B2B teams accelerate conversions and optimize processes. 💡\n\nWould you like to see a specific use case or schedule a demo to see it in action?";
    };

    const handleSend = async (text?: string) => {
        const messageText = text || inputValue;
        if (!messageText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: messageText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        // Simulate AI delay with variable timing
        const delay = Math.random() * 800 + 1000; // 1000-1800ms
        setTimeout(() => {
            const responseText = generateResponse(messageText);
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsLoading(false);
        }, delay);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="chatbot-container"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        drag
                        dragListener={false}
                        dragControls={dragControls}
                        dragMomentum={false}
                        className="fixed bottom-36 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-12rem)] bg-white rounded-2xl shadow-2xl border border-slate-100/50 z-[999] flex flex-col overflow-hidden font-sans ring-1 ring-slate-900/5"
                    >
                        {/* Premium Header */}
                        <div
                            onPointerDown={(e) => dragControls.start(e)}
                            className="bg-white p-4 flex items-center justify-between border-b border-slate-100 shrink-0 relative overflow-hidden cursor-move touch-none"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 -z-10" />
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg shadow-blue-500/10 overflow-hidden border border-slate-200 p-1">
                                        <img src={logo} alt="Trustflow AI" className="w-full h-full object-contain pointer-events-none" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-base leading-none pointer-events-none">Trustflow AI</h3>
                                    <p className="text-slate-500 text-xs mt-1 pointer-events-none">{agentName} • {agentRole}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50 scroll-smooth">
                            <div className="flex flex-col gap-6">
                                {/* Time Divider */}
                                <div className="text-center">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Today</span>
                                </div>

                                {messages.map((msg) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={msg.id}
                                        className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border
                                            ${msg.role === 'assistant'
                                                ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-transparent'
                                                : 'bg-white text-slate-600 border-slate-200'
                                            }`}
                                        >
                                            {msg.role === 'assistant' ? <Bot size={14} /> : <User size={14} />}
                                        </div>
                                        <div className="flex flex-col gap-1 max-w-[80%]">
                                            <div
                                                className={`p-3.5 text-sm leading-relaxed shadow-sm
                                                    ${msg.role === 'assistant'
                                                        ? 'bg-white text-slate-700 rounded-2xl rounded-bl-none border border-slate-200/60'
                                                        : 'bg-blue-600 text-white rounded-2xl rounded-br-none shadow-blue-500/20'
                                                    }`}
                                            >
                                                <p className="whitespace-pre-wrap">{msg.content}</p>
                                            </div>
                                            <span className={`text-[10px] px-1 opacity-50 ${msg.role === 'user' ? 'text-right' : ''}`}>
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Quick Actions (Only show if last message was from assistant and not loading) */}
                                {!isLoading && messages[messages.length - 1]?.role === 'assistant' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="pl-11 flex flex-wrap gap-2"
                                    >
                                        {QUICK_ACTIONS.map((action, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSend(action.text)}
                                                className="text-xs bg-white text-blue-600 border border-blue-100 px-3 py-2 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm font-medium flex items-center gap-1 group"
                                            >
                                                {action.label}
                                                <ChevronRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Typing Indicator */}
                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-end gap-2.5"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                                            <Bot size={14} />
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-200/60 shadow-sm flex gap-1.5 items-center h-11">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                            <div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
                                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-xl transition-colors">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Write a message..."
                                    rows={1}
                                    className="flex-1 bg-transparent border-none p-2 max-h-32 text-sm focus:ring-0 resize-none placeholder:text-slate-400 text-slate-700 min-h-[44px] py-3"
                                    style={{ scrollbarWidth: 'none' }}
                                />
                                <Button
                                    onClick={() => handleSend()}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="h-[40px] w-[40px] rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 p-0 flex items-center justify-center shrink-0 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mb-0.5"
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </Button>
                            </div>
                            <div className="flex justify-center mt-3">
                                <span className="text-[10px] text-slate-400 flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3 text-slate-300" />
                                    Powered by Trustflow AI
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    id="chatbot-toggle"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-20 right-6 z-[999] w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-2xl shadow-blue-600/30 flex items-center justify-center text-white cursor-pointer hover:shadow-blue-600/50 transition-all ring-2 ring-white/20"
                >
                    <MessageSquare className="w-7 h-7" strokeWidth={2.5} />
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 border-[2.5px] border-white rounded-full"></span>
                </motion.button>
            )}
        </>
    );
}
