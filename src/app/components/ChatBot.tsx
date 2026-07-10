
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Paperclip, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import logo from '../../assets/Trustgrid-logo.png';



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
    { label: "Partner with us", text: "I'm interested in partnering with Trustgrid AI." },
    { label: "Job Openings", text: "Do you have any job openings?" },
    { label: "Just Browsing", text: "I'm just browsing, thanks!" }
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [agentName, setAgentName] = useState('Pooja');
    const [agentRole] = useState('Digital Success Manager');
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
                console.log('User region:', region);

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
                    content: `Hello! 👋 I'm ${agentName} (${agentRole}).\nWe understand that you are interested in AI Sales Acceleration.\nHow can we help you?`,
                    timestamp: new Date()
                }
            ]);
        }
    }, [messages.length, agentName, agentRole]);

    // Listen for Context-Aware Triggers
    useEffect(() => {
        const handleContextTrigger = (e: CustomEvent<{ message: string, contextName?: string }>) => {
            // Check if user is actively filling a form to prevent disturbance
            const activeEl = document.activeElement;
            if (activeEl && (
                ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'].includes(activeEl.tagName?.toUpperCase()) ||
                activeEl.closest('form')
            )) {
                return;
            }

            const { contextName } = e.detail;

            // Format: Hello! 👋 I'm the [Name] ( [Role] ) .. We understand that you are interested in < Context > . How can we help you? . Shall we call you or set up a call to share more details on the topic ?
            const context = contextName || "AI Solutions";
            const formattedMessage = `Hello! 👋 I'm ${agentName} (${agentRole}).\nWe understand that you are interested in ${context}.\nHow can we help you? Shall we set up a quick call to share more details on the topic?`;

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
            return "That's great! 🚀 To get started with booking a consultation, could you please share your name, company, and your preferred email address?";
        }

        if (lowerText.includes('feature') || lowerText.includes('what does') || lowerText.includes('how does')) {
            return "Trustgrid AI specializes in AI-driven sales acceleration. Our key features include:\n✨ Automated Lead Generation\n✨ Predictive Revenue Insights\n✨ Real-time Objection Handling\nWhich of these would you like to explore further?";
        }
        if (lowerText.includes('support') || lowerText.includes('help')) {
            return "For support inquiries, you can reach our team directly at support@trustgrid.ai 📧, or I can have someone contact you. Would you like me to arrange a callback?";
        }

        return "I understand. Trustgrid AI helps B2B teams accelerate conversions and optimize processes. 💡\nWould you like to see a specific use case or schedule a consultation to see it in action?";
    };

    // ── Chatbot Lead Tracking ─────────────────────────────────────────
    const trackChatbotLead = (messageText: string, quickAction?: string) => {
        const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
        if (!GOOGLE_SCRIPT_URL) return;

        // Determine intent from message
        const lowerText = messageText.toLowerCase();
        let chatIntent = 'General Inquiry';
        if (lowerText.includes('demo') || lowerText.includes('book')) chatIntent = 'Consultation Request';
        else if (lowerText.includes('expert') || lowerText.includes('consult') || lowerText.includes('speak')) chatIntent = 'Expert Consultation';
        else if (lowerText.includes('partner')) chatIntent = 'Partnership Interest';
        else if (lowerText.includes('offering') || lowerText.includes('product') || lowerText.includes('feature')) chatIntent = 'Product Exploration';
        else if (lowerText.includes('job') || lowerText.includes('career') || lowerText.includes('opening')) chatIntent = 'Career Inquiry';
        else if (lowerText.includes('browsing') || lowerText.includes('just')) chatIntent = 'Browsing';
        else if (lowerText.includes('support') || lowerText.includes('help')) chatIntent = 'Support Request';
        else if (lowerText.includes('pricing') || lowerText.includes('cost')) chatIntent = 'Pricing Inquiry';

        // Build conversation summary
        const conversationSummary = messages
            .slice(-6)
            .map(m => `[${m.role}]: ${m.content.slice(0, 100)}`)
            .join(' → ');

        const chatStartTime = messages[0]?.timestamp || new Date();
        const chatDuration = Math.round((Date.now() - chatStartTime.getTime()) / 1000);

        const leadData = {
            table: 'Chatbot Leads',
            fields: {
                'Session ID': sessionStorage.getItem('tg_session_id') || '',
                'IP Address': localStorage.getItem('tg_ip') || 'detecting...',
                'Country': localStorage.getItem('tg_country') || '',
                'State': localStorage.getItem('tg_state') || '',
                'City': localStorage.getItem('tg_city') || '',
                'User Name': localStorage.getItem('user_name') || 'anonymous',
                'User Email': localStorage.getItem('user_email') || '',
                'User Phone': '',
                'Chat Intent': chatIntent,
                'Quick Action Used': quickAction || '',
                'Messages Count': messages.length + 1,
                'Chat Duration (s)': chatDuration,
                'Conversation Summary': conversationSummary,
                'Page Where Chat Started': window.location.pathname,
                'Referrer URL': document.referrer,
                'Device Type': /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
                'Agent Name': agentName
            }
        };

        try {
            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(leadData)
            });
            console.log('Chatbot lead tracked:', chatIntent);
        } catch (e) {
            console.warn('Chatbot lead tracking failed:', e);
        }
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

        // Track as chatbot lead
        const isQuickAction = QUICK_ACTIONS.some(a => a.text === messageText);
        trackChatbotLead(messageText, isQuickAction ? messageText : undefined);

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
                            className="bg-white px-5 py-4 flex items-center justify-between border-b border-slate-100/60 shrink-0 relative cursor-move touch-none"
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] overflow-hidden border border-slate-100 p-1">
                                        <img loading="lazy" decoding="async" width="800" height="600" src={logo} alt="Trustgrid AI" className="w-full h-full object-contain pointer-events-none" />
                                    </div>
                                    <span className="absolute bottom-0 right-0.5 w-3.5 h-3.5 bg-[#22c55e] border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[#0f172a] text-[15px] leading-none pointer-events-none" style={{ letterSpacing: '0.12em' }}>TRUSTGRID.AI</h3>
                                    <p className="text-[#64748b] text-[11px] -mt-0.5 pointer-events-none font-medium leading-none">{agentName} • {agentRole}</p>
                                </div>
                            </div>
                            <button
                                aria-label="Close"
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-6 h-6" strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50 scroll-smooth">
                            <div className="flex flex-col gap-6">
                                {/* Time Divider */}
                                <div className="text-center">
                                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Today</span>
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
                                                className={`p-3 text-[12px] leading-relaxed shadow-sm
                                                    ${msg.role === 'assistant'
                                                        ? 'bg-white text-slate-700 rounded-2xl rounded-bl-none border border-slate-200/60'
                                                        : 'bg-white text-slate-700 rounded-2xl rounded-br-none border border-slate-200/60 shadow-slate-200/50'
                                                    }`}
                                            >
                                                <p className="whitespace-pre-wrap font-bold !text-[12px]">{msg.content}</p>
                                            </div>
                                            <span className={`text-[9px] px-1 opacity-50 ${msg.role === 'user' ? 'text-right' : ''}`}>
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
                                                className="text-[11px] bg-white text-blue-600 border border-blue-100 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm font-medium flex items-center gap-1 group"
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
                                <button aria-label="Attach file" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-xl transition-colors">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Write a message..."
                                    rows={1}
                                    className="flex-1 bg-transparent border-none p-2 max-h-32 text-[12px] focus:ring-0 resize-none placeholder:text-slate-400 text-slate-700 min-h-[44px] py-3"
                                    style={{ scrollbarWidth: 'none' }}
                                />
                                <Button
                                    aria-label="Send message"
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
                                    Powered by TRUSTGRID.AI
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
                    aria-label="Open Chat"
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
