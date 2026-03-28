<div align="center">
  <img width="1200" height="475" alt="Linux Jarvis Podcasts Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <br/><br/>

  [![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=flat-square)](LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](#)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](#)
  [![Vite](https://img.shields.io/badge/Vite-build-646CFF?style=flat-square&logo=vite&logoColor=white)](#)
  <br/>
  [![Podcast](https://img.shields.io/badge/Podcast-AI_Generated-F97316?style=flat-square&logo=applepodcasts&logoColor=white)](#features)
  [![Gemini](https://img.shields.io/badge/Gemini_API-scripting-4285F4?style=flat-square&logo=google&logoColor=white)](#architecture)
  [![JARVIS](https://img.shields.io/badge/JARVIS-Ecosystem-8B5CF6?style=flat-square)](https://github.com/Turbo31150/jarvis-linux)
  [![Linux](https://img.shields.io/badge/Linux-native-FCC624?style=flat-square&logo=linux&logoColor=black)](#)
  [![AI Generated](https://img.shields.io/badge/Content-AI_Generated-10B981?style=flat-square&logo=openai&logoColor=white)](#)

  <br/>
  <p><strong>AI-Generated Podcasts from JARVIS System Logs</strong></p>
  <p><em>Transform raw infrastructure telemetry into engaging, narrated audio episodes — powered by Gemini</em></p>

  [**Features**](#-features) · [**Architecture**](#-architecture) · [**Quick Start**](#-quick-start) · [**AI Studio**](https://ai.studio/apps/ee621fba-4ce2-493b-84b7-e682083b7ae3)
</div>

---



## Pipeline

```mermaid
graph LR
    Topic[Topic Selection] --> Script[AI Script Gen]
    Script --> TTS[Text-to-Speech]
    TTS --> Edit[Auto Edit]
    Edit --> Publish[Publish]
```


## Overview

**Linux-Jarvis-Podcasts** automatically converts JARVIS cluster logs, metrics, and events into listenable podcast episodes. It reads system activity (deployments, incidents, performance spikes, trading signals) and uses **Gemini API** to script a natural-language narrative, then synthesizes it into audio.

Think of it as your **daily ops briefing** — but you can listen to it while making coffee.

### Why?

- **Hands-free monitoring** — listen to your cluster status during commute or workout
- **Context-rich summaries** — AI turns thousands of log lines into a 5-minute episode
- **Automated pipeline** — cron-driven generation, zero manual work
- **Full JARVIS integration** — reads from all 9 system layers

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
| **Web Player** | Built-in React player with episode history and search |

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
                   │
                   ▼
          Web Player (React + Vite)
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

## Project Structure

```
Linux-Jarvis-Podcats/
├── index.html           ← Entry point
├── package.json         ← Dependencies
├── vite.config.ts       ← Vite configuration
├── tsconfig.json        ← TypeScript config
├── metadata.json        ← Episode metadata
└── src/                 ← Source code
    ├── components/      ← React UI components
    ├── services/        ← Gemini API, TTS, log parsing
    └── utils/           ← Helpers
```

---

## JARVIS Ecosystem

This project is part of the **JARVIS** distributed AI cluster:

- [jarvis-linux](https://github.com/Turbo31150/jarvis-linux) — Distributed Autonomous AI Cluster
- [TradeOracle](https://github.com/Turbo31150/TradeOracle) — Autonomous Crypto Trading Agent
- [lumen-transcription-multilangue](https://github.com/Turbo31150/lumen-transcription-multilangue) — Multilingual Live Transcription
- [gemini-live-trading-agent](https://github.com/Turbo31150/gemini-live-trading-agent) — Voice Trading Assistant
- **Linux-Jarvis-Podcasts** — AI Podcasts from System Logs *(this repo)*



## What is JARVIS Podcast?

An AI-powered podcast production pipeline. Give it a topic — it researches, writes a script, generates audio with neural TTS, and produces a ready-to-publish podcast episode. All running locally on your GPU.

## How It Works

```
1. Topic Input → "AI agents in production: challenges and solutions"
2. Research → Perplexity/web search for latest info
3. Script → AI writes a structured 10-minute script
4. TTS → Neural text-to-speech generates natural audio
5. Edit → Auto-add intro, transitions, outro
6. Output → MP3 ready for Spotify/Apple Podcasts
```

## Example Output

```
Episode: "Au-delà des agents IA : l'orchestration autonome"
Duration: 8:32
Format: MP3 44.1kHz stereo
Script: 1,200 words
Sources: 5 web references
Generated in: 4 minutes on RTX 3080
```

## Use Cases

- **Tech blog to podcast** — Convert your articles to audio
- **Daily briefing** — AI-generated morning news summary
- **Educational content** — Auto-generate lessons on any topic
- **Marketing** — Product demos and explainers as audio

---

## License

MIT © 2026 [Turbo31150](https://github.com/Turbo31150) — Franck Delmas
