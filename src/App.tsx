import { useState, FormEvent } from 'react';
import './App.css';

interface ChatMessage {
  text: string;
  isBot: boolean;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Willkommen! Wie kann ich Ihnen helfen? Sie können nach Ihrem Auftragsstatus fragen oder Informationen zu Ihrer Provision erhalten.",
      isBot: true
    }
  ]);
  const [auftragsnummer, setAuftragsnummer] = useState('');
  const [activeQuery, setActiveQuery] = useState<'status' | 'provision' | null>(null);

  const checkStatus = (status: string) => {
    const statusCodes: { [key: string]: string } = {
      '200': 'Auftrag wurde dem Lieferanten übermittelt',
      '4000': 'Auftrag wurde vom Lieferanten angenommen',
      // Weitere Status-Codes hier hinzufügen
    };
    return statusCodes[status] || 'Status nicht gefunden';
  };

  const getProvisionInfo = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const nextMonth = new Date(currentDate.setMonth(currentMonth + 1));
    return `Die nächste Provisionsauszahlung (für ${getMonthName(currentMonth)}) erfolgt im ${getMonthName(nextMonth.getMonth())}.`;
  };

  const getMonthName = (monthIndex: number) => {
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 
                   'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    return months[monthIndex];
  };

  const handleQuery = (type: 'status' | 'provision') => {
    setActiveQuery(type);
    if (type === 'status') {
      addMessage('Bitte geben Sie Ihre 6-stellige Auftragsnummer ein:', true);
    } else {
      addMessage(getProvisionInfo(), true);
    }
  };

  const handleAuftragsnummer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (auftragsnummer.length === 6) {
      // Hier würde normalerweise die API-Abfrage erfolgen
      const mockStatus = '200'; // Beispiel-Status
      addMessage(`Status für Auftrag ${auftragsnummer}: ${checkStatus(mockStatus)}`, true);
      setAuftragsnummer('');
      setActiveQuery(null);
    } else {
      addMessage('Bitte geben Sie eine gültige 6-stellige Auftragsnummer ein.', true);
    }
  };

  const addMessage = (text: string, isBot: boolean) => {
    setMessages(prev => [...prev, { text, isBot }]);
  };

  return (
    <div className="chat-container">
      {!isOpen ? (
        <button 
          className="chat-button" 
          onClick={() => setIsOpen(true)}
          aria-label="Chat öffnen"
        />
      ) : (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-content">
              <h3>ICSI</h3>
              <span className="bot-status">Online</span>
            </div>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            {activeQuery === 'status' ? (
              <form onSubmit={handleAuftragsnummer}>
                <input
                  type="text"
                  value={auftragsnummer}
                  onChange={(e) => setAuftragsnummer(e.target.value)}
                  placeholder="6-stellige Auftragsnummer"
                  maxLength={6}
                />
                <button type="submit">Senden</button>
              </form>
            ) : (
              <div className="query-buttons">
                <button onClick={() => handleQuery('status')}>Auftragsstatus</button>
                <button onClick={() => handleQuery('provision')}>Provision</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
