import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
    const number = '919876543210'; // Replace with real WhatsApp number
    const message = "Hi MicroVectors, I'd like to discuss my revenue growth goals.";
    const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with MicroVectors on WhatsApp"
            className="fixed bottom-24 right-5 z-40 group flex items-center gap-2.5 transition-all duration-300"
        >
            {/* Tooltip label */}
            <span className="hidden sm:flex bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg border border-slate-200 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
                Chat with us
            </span>

            {/* Button */}
            <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-xl shadow-[#25D366]/40 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
                <MessageCircle className="w-7 h-7 text-white relative z-10 fill-white" />
            </div>
        </a>
    );
}
