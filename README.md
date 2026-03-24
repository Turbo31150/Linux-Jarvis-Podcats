<div align="center">
  <img width="1200" height="475" alt="Linux Jarvis Podcasts Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <br/><br/>

  [![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=flat-square)](LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](#)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](#)
  [![Gemini](https://img.shields.io/badge/Gemini_API-Google-4285F4?style=flat-square&logo=google&logoColor=white)](#)
  [![JARVIS](https://img.shields.io/badge/JARVIS-Ecosystem-8B5CF6?style=flat-square)](https://github.com/Turbo31150/jarvis-linux)

  <br/>
  <p><strong>AI-Generated Podcasts from JARVIS System Logs</strong></p>
  <p><em>Transform raw infrastructure telemetry into engaging, narrated audio episodes — powered by Gemini</em></p>
</div>

---

## Overview

**Linux-Jarvis-Podcasts** automatically converts JARVIS cluster logs, metrics, and events into listenable podcast episodes. It reads system activity (deployments, incidents, performance spikes, trading signals) and uses Gemini to script a natural-language narrative, then synthesizes it into audio.

Think of it as your **daily ops briefing** — but you can listen to it while making coffee.

---

## Features

| Feature | Description |
|---------|-------------|
| **Log Ingestion** | Reads JARVIS system logs, supervisor events, and cluster metrics |
| **AI Scripting** | Gemini API transforms raw data into conversational podcast scripts |
| **Audio Synthesis** | Text-to-speech generation for hands-free listening |
| **Episode Management** | Automatic episode numbering, metadata, and archival |
| **Multi-Source** | Supports logs from all JARVIS layers — boot, orchestration, trading, voice |
| **Scheduled Generation** | Can run on cron for daily/weekly automated episodes |

---

## Architecture

```
JARVIS Cluster Logs          Metrics / Events / Alerts
        │                              │
        └──────────┬───────────────────┘
                   ▼
          Log Parser & Aggregator
                   │
                   ▼
          Gemini API (Script Generation)
           "Here's what happened today..."
                   │
                   ▼
          TTS Engine (Audio Synthesis)
                   │
                   ▼
          Podcast Episode (.mp3 + metadata)
```

---

## Quick Start

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/Turbo31150/Linux-Jarvis-Podcats.git
cd Linux-Jarvis-Podcats
npm install
```

Set your API key in `.env.local`:

```env
GEMINI_API_KEY=your_key_here
```

Run the app:

```bash
npm run dev
```

You can also view the app in [AI Studio](https://ai.studio/apps/ee621fba-4ce2-493b-84b7-e682083b7ae3).

---

## JARVIS Ecosystem

This project is part of the **JARVIS** distributed AI cluster:

- [jarvis-linux](https://github.com/Turbo31150/jarvis-linux) — Distributed Autonomous AI Cluster
- [TradeOracle](https://github.com/Turbo31150/TradeOracle) — Autonomous Crypto Trading Agent
- [lumen](https://github.com/Turbo31150/lumen) — Multilingual Live AI Web App
- [gemini-live-trading-agent](https://github.com/Turbo31150/gemini-live-trading-agent) — Voice Trading Assistant
- **Linux-Jarvis-Podcasts** — AI Podcasts from System Logs *(this repo)*

---

## License

MIT © 2026 [Turbo31150](https://github.com/Turbo31150) — Franck Delmas
