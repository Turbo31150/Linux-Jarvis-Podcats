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


---

## Pipeline Configuration

### TTS Models

The podcast pipeline supports multiple TTS engines, selected based on quality requirements and available hardware:

| Engine | Quality | Speed | GPU Required | Best For |
|--------|---------|-------|:------------:|----------|
| **Coqui XTTS v2** | Excellent | ~0.8x real-time on RTX 3080 | Yes | Final production episodes |
| **Piper TTS** | Good | ~15x real-time on CPU | No | Quick drafts and previews |
| **Google Cloud TTS** | Excellent | API-dependent | No | Multilingual episodes |
| **Edge TTS** | Good | Fast (streaming) | No | Free tier, fast iteration |

Configuration in `config/tts.yaml`:
```yaml
tts:
  engine: coqui-xtts-v2       # default engine
  fallback: piper              # used when GPU unavailable
  voice: fr-female-1           # speaker voice profile
  sample_rate: 44100           # audio sample rate (Hz)
  channels: 2                  # stereo output
  bitrate: 192k                # MP3 encoding bitrate
  speed: 1.0                   # playback speed multiplier
  pitch: 0                     # pitch adjustment (-10 to +10)
  silence_between_sections: 1.5  # seconds of silence between sections
```

### Audio Quality Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `sample_rate` | 44100 Hz | CD-quality audio. Use 22050 for smaller files |
| `channels` | 2 (stereo) | Use 1 (mono) for speech-only podcasts |
| `bitrate` | 192 kbps | MP3 encoding quality. 128k for drafts, 320k for premium |
| `format` | MP3 | Output format. Also supports WAV, OGG, FLAC |
| `normalize` | true | Apply loudness normalization (LUFS -16) |
| `noise_gate` | true | Remove background noise below threshold |
| `compressor` | true | Dynamic range compression for consistent volume |

### Intro/Outro Templates

Templates are stored in `templates/` and support variable interpolation:

**Intro template** (`templates/intro.md`):
```
Welcome to {podcast_name}, episode {episode_number}.
Today is {date}, and here is what happened in the JARVIS cluster.
{summary_teaser}
Let us dive in.
```

**Outro template** (`templates/outro.md`):
```
That wraps up episode {episode_number} of {podcast_name}.
If you found this useful, consider starring the repo on GitHub.
This episode was generated automatically by the JARVIS podcast pipeline.
Until next time — keep your GPUs cool and your models loaded.
```

**Transition template** (`templates/transition.md`):
```
Moving on to {next_section}...
```

---

## Example Scripts

### Tech News Podcast

Generate a weekly tech news roundup by feeding RSS feeds and web search results:

```python
from podcast_pipeline import PodcastPipeline

pipeline = PodcastPipeline(config="config/tech_news.yaml")

# Define sources
sources = [
    {"type": "rss", "url": "https://news.ycombinator.com/rss"},
    {"type": "rss", "url": "https://feeds.arstechnica.com/arstechnica/technology-lab"},
    {"type": "search", "query": "AI news this week", "engine": "perplexity"},
]

# Generate episode
episode = await pipeline.generate(
    topic="Weekly AI & Tech News Roundup",
    sources=sources,
    style="conversational",
    duration_target=600,     # 10 minutes target
    language="fr",
    date=datetime.now()
)

print(f"Episode saved: {episode.output_path}")
print(f"Duration: {episode.duration_seconds}s")
print(f"Script words: {episode.word_count}")
```

### Tutorial Podcast

Generate a step-by-step tutorial episode from documentation:

```python
from podcast_pipeline import PodcastPipeline

pipeline = PodcastPipeline(config="config/tutorial.yaml")

episode = await pipeline.generate(
    topic="How to Set Up a Multi-GPU AI Cluster on Linux",
    sources=[
        {"type": "file", "path": "docs/cluster-setup-guide.md"},
        {"type": "file", "path": "docs/gpu-configuration.md"},
    ],
    style="educational",
    duration_target=900,     # 15 minutes
    language="fr",
    sections=[
        "Introduction and prerequisites",
        "Hardware selection and assembly",
        "Linux installation and driver setup",
        "Network configuration between nodes",
        "Model deployment and testing",
        "Monitoring and maintenance",
    ]
)
```

### Interview-Style Podcast

Generate a simulated two-speaker interview on a technical topic:

```python
from podcast_pipeline import PodcastPipeline

pipeline = PodcastPipeline(config="config/interview.yaml")

episode = await pipeline.generate(
    topic="The Future of Local AI vs Cloud AI",
    style="interview",
    speakers=[
        {"name": "Host", "voice": "fr-male-1", "role": "interviewer"},
        {"name": "Expert", "voice": "fr-female-1", "role": "interviewee"},
    ],
    duration_target=1200,    # 20 minutes
    language="fr",
    talking_points=[
        "Cost comparison: local GPU cluster vs cloud API credits",
        "Privacy and data sovereignty considerations",
        "Performance benchmarks: latency, throughput, availability",
        "When cloud makes sense vs when local wins",
        "The future of edge AI and hybrid architectures",
    ]
)
```

---

## Distribution Guide

### RSS Feed Generation

The pipeline auto-generates a valid RSS 2.0 feed compatible with all podcast directories:

```bash
# Generate/update the RSS feed after creating new episodes
npm run feed:generate

# Output: public/feed.xml
```

The generated feed includes:
- Episode title, description, and publication date
- Audio enclosure with file size and MIME type
- iTunes-specific tags (category, author, image, explicit flag)
- Podcast namespace tags for modern players

### Publishing to Spotify

1. Create a [Spotify for Podcasters](https://podcasters.spotify.com/) account
2. Submit your RSS feed URL: `https://yourdomain.com/feed.xml`
3. Spotify reviews and approves within 24-48 hours
4. New episodes appear automatically when the feed updates

### Publishing to Apple Podcasts

1. Create an [Apple Podcasts Connect](https://podcastsconnect.apple.com/) account
2. Add your RSS feed URL
3. Apple validates the feed format and content
4. Approval typically takes 1-5 business days
5. Once approved, new episodes sync automatically

### Publishing to Google Podcasts

Google Podcasts indexes RSS feeds automatically. Ensure your feed is:
- Publicly accessible via HTTPS
- Contains valid RSS 2.0 with `<enclosure>` tags
- Linked from your website with a `<link rel="alternate" type="application/rss+xml">` tag

### Self-Hosting

For full control, serve the podcast from your own infrastructure:

```bash
# Build the static web player
npm run build

# Deploy to any static host (GitHub Pages, Netlify, Vercel)
# Or serve with nginx:
server {
    listen 80;
    server_name podcast.yourdomain.com;
    root /var/www/podcast/dist;
    location /episodes/ {
        add_header Accept-Ranges bytes;
    }
}
```

---

## Analytics Integration

### Built-in Analytics

The web player includes basic analytics tracking:

| Metric | Description |
|--------|-------------|
| **Play count** | Number of times each episode is played |
| **Completion rate** | Percentage of listeners who finish the episode |
| **Average listen duration** | How long listeners stay engaged |
| **Drop-off points** | Timestamps where listeners stop |
| **Popular episodes** | Ranked by total plays and completion |

### External Analytics

Integrate with podcast analytics platforms by adding tracking prefixes to your audio URLs:

```yaml
# config/analytics.yaml
analytics:
  provider: chartable           # or podtrac, podsights
  prefix: "https://chrt.fm/track/XXXXXX"
  # Audio URL becomes: https://chrt.fm/track/XXXXXX/yourdomain.com/episodes/ep001.mp3
```

### Prometheus Metrics

Export pipeline metrics for Grafana dashboards:

```yaml
# config/metrics.yaml
metrics:
  enabled: true
  port: 9090
  endpoint: /metrics

# Available metrics:
# podcast_episodes_generated_total
# podcast_generation_duration_seconds
# podcast_tts_duration_seconds
# podcast_script_word_count
# podcast_audio_duration_seconds
# podcast_feed_subscribers_total
```

