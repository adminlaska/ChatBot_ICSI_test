# Vertriebspartner Portal Chatbot

Ein moderner, interaktiver Chatbot für das Vertriebspartner Portal, entwickelt mit React, TypeScript und Tailwind CSS.

## 🚀 Features

- 💬 Floating Chat-Widget
- 🎯 Quick Actions für häufige Anfragen
- ⌨️ Echtzeit-Tippindikator
- 🎨 Modernes, responsives Design
- ⚡ Schnelle Antwortzeiten
- 🔄 Verlaufsmanagement
- 🎯 Vordefinierte Antworten für:
  - Auftragsstatus-Abfragen
  - Provisionsauszahlungen
  - Tarifrechner-Hilfe

## 🛠️ Technologien

- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Vite

## 🚀 Installation

```bash
# Repository klonen
git clone [repository-url]

# In das Projektverzeichnis wechseln
cd vertriebspartner-chatbot

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

## 🏗️ Projektstruktur

```
src/
├── components/          # React Komponenten
│   ├── FloatingChat.tsx    # Hauptchat-Komponente
│   ├── Message.tsx         # Nachrichtenkomponente
│   ├── QuickActions.tsx    # Schnellzugriff-Buttons
│   ├── ChatInput.tsx       # Eingabefeld
│   └── InfoCard.tsx        # Informationskarte
├── types/              # TypeScript Definitionen
│   └── index.ts
├── utils/             # Hilfsfunktionen
│   └── chatUtils.ts
└── App.tsx            # Hauptanwendung
```

## 💡 Verwendung

Der Chatbot erscheint als floating Button in der unteren rechten Ecke. Benutzer können:

1. Den Chat durch Klicken auf den Button öffnen
2. Quick Actions für häufige Anfragen nutzen
3. Eigene Fragen eingeben
4. Den Chat minimieren oder schließen

## ⚙️ Konfiguration

Der Chatbot ist aktuell mit Mock-Antworten konfiguriert. Für die Produktionsumgebung:

1. Passen Sie die `mockBotResponse` Funktion in `chatUtils.ts` an
2. Verbinden Sie den Chatbot mit Ihrem .NET Backend
3. Implementieren Sie die gewünschte Authentifizierung

## 🔄 Integration

Für die Integration in das bestehende .NET-Backend:

1. Erstellen Sie entsprechende API-Endpoints im Backend
2. Aktualisieren Sie die `chatUtils.ts`
3. Implementieren Sie Error-Handling
4. Fügen Sie Authentifizierung hinzu

## 📝 Anpassung

Der Chatbot kann leicht angepasst werden:

- Farben: Tailwind-Klassen in den Komponenten
- Texte: Strings in den Komponenten
- Quick Actions: Array in `QuickActions.tsx`
- Antwortlogik: `mockBotResponse` in `chatUtils.ts`

## 🤝 Beitrag

Verbesserungsvorschläge sind willkommen! Bitte erstellen Sie:

1. Fork des Repositories
2. Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit Changes (`git commit -m 'Add AmazingFeature'`)
4. Push Branch (`git push origin feature/AmazingFeature`)
5. Pull Request

## 📄 Lizenz

[MIT](https://choosealicense.com/licenses/mit/)
