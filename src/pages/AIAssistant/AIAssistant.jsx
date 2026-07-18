import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Clock, MessageSquare, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './AIAssistant.css';

const suggestions = [
  'Summarize today\'s patient visits',
  'What are the top revenue sources this month?',
  'Show employee attendance trends',
  'Generate a marketing ROI report',
  'List staff with low performance ratings',
  'Compare this quarter\'s expenses to last quarter',
];

const mockResponses = [
  "Based on today's data, you had **47 patient visits** across all departments:\n\n- **Nursing**: 18 visits\n- **Physical Therapy**: 12 visits\n- **Occupational Therapy**: 9 visits\n- **Speech Therapy**: 5 visits\n- **Home Health Aide**: 3 visits\n\nThis is a **12% increase** compared to the same day last week. The highest demand continues to be in Nursing and Physical Therapy departments.",
  "Here's your **revenue analysis** for this month:\n\n| Source | Amount | % of Total |\n|--------|--------|------------|\n| Medicare | $145,600 | 51.2% |\n| Medicaid | $59,600 | 20.9% |\n| Private Insurance | $33,500 | 11.8% |\n| Private Pay | $17,950 | 6.3% |\n| Grants | $25,000 | 8.8% |\n| Other | $2,850 | 1.0% |\n\n**Total Revenue: $284,500** — This represents a **12.5% increase** from last month.",
  "Looking at employee attendance trends over the past 3 months:\n\n📊 **Key Findings:**\n\n1. **Overall attendance rate**: 94.2% (target: 95%)\n2. **Highest department**: IT — 100%\n3. **Lowest department**: Home Health Aide — 86.5%\n4. **Most improved**: Speech Therapy (+4.2% from last month)\n\n⚠️ **Action Items:**\n- Schedule a review meeting with Home Health Aide department lead\n- Consider implementing flexible scheduling for departments below 90%\n- Recognize IT department for perfect attendance",
  "Here's the **Marketing ROI Report** for Q3 2026:\n\n### Campaign Performance Summary\n\n| Campaign | Investment | Returns | ROI |\n|----------|-----------|---------|-----|\n| Summer Wellness | $3,200 | $15,360 | 380% |\n| Senior Care Awareness | $2,400 | $14,880 | 520% |\n| Home Health Solutions | $9,600 | $29,760 | 210% |\n| Physician Referral | $1,800 | $17,820 | 890% |\n\n🏆 **Best Performer**: Physician Referral Program (890% ROI)\n\n💡 **Recommendation**: Increase investment in the Referral Program and Senior Care campaigns. Consider pausing the Health Blog Content Series until content strategy is revised.",
];

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I'm your **Home Health AI Assistant**. I can help you with:\n\n- 📊 Data analysis & reports\n- 👥 Employee management insights\n- 💰 Financial summaries\n- 📣 Marketing performance\n- 📋 Patient care metrics\n\nHow can I assist you today?",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg = { id: Date.now(), role: 'user', content: msg, timestamp: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responseIndex = Math.floor(Math.random() * mockResponses.length);
      const aiMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        content: mockResponses[responseIndex],
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([messages[0]]);
  };

  const formatTime = (ts) => {
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="ai-page" id="ai-assistant-page">
      {/* Sidebar */}
      <div className="ai-sidebar">
        <div className="ai-sidebar__header">
          <Sparkles size={18} />
          <span>AI Assistant</span>
        </div>
        <button className="ai-sidebar__new-chat" onClick={clearChat}>
          <MessageSquare size={16} />
          <span>New Chat</span>
        </button>
        <div className="ai-sidebar__history">
          <span className="ai-sidebar__history-label">
            <Clock size={14} /> Recent
          </span>
          <div className="ai-sidebar__history-item ai-sidebar__history-item--active">
            Current Conversation
          </div>
          <div className="ai-sidebar__history-item">Revenue Analysis — Jul 16</div>
          <div className="ai-sidebar__history-item">Staff Schedule Review</div>
          <div className="ai-sidebar__history-item">Q2 Marketing Report</div>
        </div>
      </div>

      {/* Main Chat */}
      <div className="ai-main">
        <div className="ai-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`ai-message ai-message--${msg.role}`}>
              <div className="ai-message__avatar">
                {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
              </div>
              <div className="ai-message__content">
                <div className="ai-message__header">
                  <span className="ai-message__name">{msg.role === 'assistant' ? 'HealthAI' : 'You'}</span>
                  <span className="ai-message__time">{formatTime(msg.timestamp)}</span>
                </div>
                <div className="ai-message__body">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="ai-message ai-message--assistant">
              <div className="ai-message__avatar">
                <Bot size={18} />
              </div>
              <div className="ai-message__content">
                <div className="ai-typing">
                  <span className="ai-typing__dot" />
                  <span className="ai-typing__dot" />
                  <span className="ai-typing__dot" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="ai-suggestions">
            {suggestions.map((s, i) => (
              <button key={i} className="ai-suggestion-chip" onClick={() => sendMessage(s)}>
                <Sparkles size={14} />
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="ai-input-area">
          <div className="ai-input-wrap">
            <textarea
              ref={inputRef}
              className="ai-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about your healthcare business..."
              rows={1}
              id="ai-chat-input"
            />
            <button
              className="ai-send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="ai-disclaimer">AI responses are simulated. Connect to a real AI backend for production use.</p>
        </div>
      </div>
    </div>
  );
}
