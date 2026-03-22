import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '@google/genai';
import { 
  Mic, 
  Sparkles, 
  Headphones, 
  Play, 
  Pause, 
  Download, 
  Share2, 
  Settings2,
  User,
  FileText,
  Wand2,
  Loader2
} from 'lucide-react';

interface PodcastData {
  title: string;
  description: string;
  host1: string;
  host2: string;
  tone: string;
}

interface GeneratedPodcast {
  title: string;
  script: Array<{ speaker: string; text: string }>;
  duration: string;
}

const initialPodcast: GeneratedPodcast = {
  title: "Au-delà des Agents IA : L'Orchestration Autonome avec Jarvis Linux",
  duration: "14:20",
  script: [
    { speaker: "System", text: "[Générique d'introduction - Musique électronique moderne et dynamique]" },
    { speaker: "Alex", text: "Bonjour à tous et bienvenue dans un nouvel épisode de Tech Architecture, le podcast où nous décortiquons les systèmes de demain. Aujourd'hui, nous avons un invité exceptionnel. Si vous suivez l'évolution des agents IA, vous savez que le plus grand défi actuel n'est pas l'intelligence du modèle, mais sa mémoire et son orchestration. Pour en parler, nous recevons Franck, l'architecte derrière le projet Jarvis Linux. Franck, bonjour !" },
    { speaker: "Franck", text: "Bonjour Alex, merci de me recevoir. Très heureux d'être ici pour parler d'orchestration système." },
    { speaker: "Alex", text: "Franck, j'ai parcouru ton profil LinkedIn, et on sent tout de suite une vraie séniorité dans la conception de systèmes complexes. Mais ce qui a vraiment attiré notre attention aujourd'hui, c'est ton repository GitHub : github.com/Turbo31150/jarvis-linux. Ce n'est pas juste un wrapper d'API de plus. Tu as mis le doigt sur le vrai verrou des IA actuelles. Peux-tu nous expliquer le problème que tu résous ?" },
    { speaker: "Franck", text: "Bien sûr. Le constat de départ est simple : les IA actuelles, que ce soit Claude, Gemini ou d'autres, sont 'stateless'. Elles n'ont pas de mémoire persistante. À chaque session, elles oublient tout : quels outils utiliser, où router l'information, quoi faire. Beaucoup de développeurs essaient de contourner ça en empilant des scripts, ce qui crée un chaos total. Avec Jarvis Linux, j'ai transformé ce problème en un protocole d'initialisation strict." },
    { speaker: "Alex", text: "C'est ce que tu appelles dans ta documentation le 'Agent Bootstrap Prompt' ?" },
    { speaker: "Franck", text: "Exactement. Ce n'est pas un prompt classique, c'est une commande système. Au lieu de demander à l'IA de réfléchir à chaque étape, on lui injecte un contexte opérationnel minimal au démarrage. On lui dit : 'Tu es un agent d'exécution. Voici tes outils, voici tes routes, n'attends jamais un chargement classique, agis directement sur le DOM.'" },
    { speaker: "Alex", text: "Et c'est là que ton architecture devient fascinante. Sur ton GitHub, tu prouves que tu as réussi à séparer le 'cerveau' de 'l'exécution'. Tu utilises un système multi-MCP (Model Context Protocol). Comment ça fonctionne concrètement ?" },
    { speaker: "Franck", text: "Dans une architecture classique, l'IA fait tout. Dans Jarvis, j'ai créé un OS distribué. J'utilise OpenClaw comme cerveau logique : il planifie, découpe les tâches et vote pour le meilleur résultat, mais il n'exécute rien. Ensuite, BrowserOS agit comme un bus de routage central. Et enfin, DevTools est le moteur d'exécution pur. Il interagit directement avec le DOM, en 'zero-reload'. Pas de temps de chargement, pas de navigation classique. C'est instantané." },
    { speaker: "Alex", text: "C'est brillant. On passe d'une IA conversationnelle à un véritable système d'exploitation d'automatisation. Mais Franck, quand on crée un système émergent et auto-orchestré comme le tien... comment on évite que ça ne devienne incontrôlable ?" },
    { speaker: "Franck", text: "C'est la question critique, et c'est la dernière évolution majeure de Jarvis. J'ai réalisé que le système s'auto-construisait, mais qu'il manquait une garantie de cohérence globale. Un MCP peut très bien répondre 'UP' sur un port, sans pour autant être attaché à une session valide. J'ai donc implémenté un Root Control Plane, une gouvernance racine." },
    { speaker: "Alex", text: "Un seul chef d'orchestre pour les gouverner tous ?" },
    { speaker: "Franck", text: "Exactement. Avant toute exécution critique, ce Control Plane vérifie l'état global : est-ce que le MCP est attaché ? Les navigateurs sont-ils 'ready' ? Y a-t-il un conflit de tâches ? Si le système n'est pas cohérent, il bloque l'exécution. On privilégie la stabilité absolue sur la vitesse." },
    { speaker: "Alex", text: "C'est un niveau d'ingénierie qu'on voit rarement en open source. Pour nos auditeurs qui sont développeurs, architectes ou CTO, je vous invite vraiment à aller auditer le code et l'architecture de Franck sur github.com/Turbo31150/jarvis-linux." },
    { speaker: "Franck", text: "Merci Alex. Le code est là pour ça, pour montrer qu'on peut dépasser le stade expérimental de l'IA et entrer dans une ère de production industrielle et déterministe." },
    { speaker: "Alex", text: "Et pour ceux qui cherchent un profil capable de concevoir et de stabiliser des architectures de ce calibre, n'hésitez pas à contacter Franck directement sur son LinkedIn. Franck, un grand merci d'avoir partagé ta vision avec nous aujourd'hui." },
    { speaker: "Franck", text: "Merci à toi de m'avoir reçu." },
    { speaker: "System", text: "[Générique de fin - Musique qui s'estompe]" }
  ]
};

export default function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<PodcastData>({
    title: "L'Orchestration Autonome avec Jarvis Linux",
    description: "Discussion sur l'architecture multi-MCP, le Root Control Plane, et la création d'un OS distribué pour agents IA. Basé sur le projet GitHub Turbo31150/jarvis-linux de Franck.",
    host1: 'Alex',
    host2: 'Franck',
    tone: 'Professional & Technical',
  });
  
  const [generatedPodcast, setGeneratedPodcast] = useState<GeneratedPodcast | null>(initialPodcast);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    setIsGenerating(true);
    setGeneratedPodcast(null);
    setAudioUrl(null);
    setIsPlaying(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-preview',
        contents: `Create a podcast script. 
Title: ${formData.title}
Topic: ${formData.description}
Host 1: ${formData.host1}
Host 2: ${formData.host2}
Tone: ${formData.tone}

Make it engaging, detailed, and natural. Include intro/outro system sounds. If the topic is in French, write the script in French.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              duration: { type: Type.STRING, description: "Estimated duration like '15:30'" },
              script: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    speaker: { type: Type.STRING, description: "Name of the speaker, or 'System' for sound effects" },
                    text: { type: Type.STRING, description: "The dialogue or sound effect description" }
                  }
                }
              }
            }
          }
        }
      });

      if (response.text) {
        const parsed = JSON.parse(response.text);
        setGeneratedPodcast(parsed);
      }
    } catch (error) {
      console.error("Failed to generate podcast:", error);
      alert("Failed to generate podcast. Check console for details.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePlayAudio = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    
    if (audioUrl) {
      setIsPlaying(true);
      return;
    }

    if (!generatedPodcast) return;

    setIsGeneratingAudio(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // We take a snippet of the script to avoid TTS limits for this demo
      const scriptSnippet = generatedPodcast.script
        .filter(s => s.speaker !== 'System')
        .slice(0, 6)
        .map(s => `${s.speaker}: ${s.text}`)
        .join('\n\n');
        
      const prompt = `Read the following conversation between ${formData.host1} and ${formData.host2}:\n\n${scriptSnippet}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
              multiSpeakerVoiceConfig: {
                speakerVoiceConfigs: [
                      {
                          speaker: formData.host1,
                          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
                      },
                      {
                          speaker: formData.host2,
                          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } }
                      }
                ]
              }
          }
        }
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const url = `data:audio/wav;base64,${base64Audio}`;
        setAudioUrl(url);
        setIsPlaying(true);
        
        // Play the audio
        const audio = new Audio(url);
        audio.onended = () => setIsPlaying(false);
        audio.play();
      }
    } catch (error) {
      console.error("Failed to generate audio:", error);
      alert("Failed to generate audio. The script might be too long or the API key is missing.");
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Panel: Configuration Form */}
        <div className="w-full lg:w-5/12 xl:w-1/3 border-r border-zinc-800/60 bg-zinc-900/30 p-6 lg:p-10 overflow-y-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
              <Mic size={20} />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">PodGen Studio</h1>
              <p className="text-xs text-zinc-400">AI-Powered Audio Creation</p>
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2 uppercase tracking-wider">
                <FileText size={14} />
                Episode Details
              </h2>
              
              <div className="space-y-1.5">
                <label htmlFor="title" className="text-xs text-zinc-400 ml-1">Episode Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., The Future of Autonomous Agents"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="description" className="text-xs text-zinc-400 ml-1">Topic / Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="What should the hosts discuss?"
                  rows={6}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-zinc-600 resize-none"
                />
              </div>
            </div>

            <div className="h-px w-full bg-zinc-800/60" />

            <div className="space-y-4">
              <h2 className="text-sm font-medium text-zinc-300 flex items-center gap-2 uppercase tracking-wider">
                <User size={14} />
                Voices & Style
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="host1" className="text-xs text-zinc-400 ml-1">Host 1 Name</label>
                  <input
                    type="text"
                    id="host1"
                    name="host1"
                    value={formData.host1}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="host2" className="text-xs text-zinc-400 ml-1">Host 2 Name</label>
                  <input
                    type="text"
                    id="host2"
                    name="host2"
                    value={formData.host2}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="tone" className="text-xs text-zinc-400 ml-1">Conversational Tone</label>
                <div className="relative">
                  <select
                    id="tone"
                    name="tone"
                    value={formData.tone}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all appearance-none"
                  >
                    <option value="Professional & Technical">Professional & Technical</option>
                    <option value="Casual & Friendly">Casual & Friendly</option>
                    <option value="Humorous & Energetic">Humorous & Energetic</option>
                    <option value="Investigative Journalism">Investigative Journalism</option>
                  </select>
                  <Settings2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating || !formData.title || !formData.description}
              className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-4 py-3.5 text-sm font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
            >
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Wand2 size={18} />
                  </motion.div>
                  Generating Script...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Generate New Podcast
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Panel: Display Area */}
        <div className="flex-1 bg-zinc-950 relative overflow-hidden flex flex-col">
          {/* Background ambient gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="flex-1 p-6 lg:p-12 overflow-y-auto z-10">
            <AnimatePresence mode="wait">
              {!generatedPodcast && !isGenerating ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto"
                >
                  <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-600">
                    <Headphones size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-200 mb-2">Ready to Record</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Fill out the episode details on the left and hit generate. Our AI will craft a natural, engaging conversation between your hosts.
                  </p>
                </motion.div>
              ) : isGenerating ? (
                <motion.div
                  key="generating"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center"
                >
                  <div className="flex gap-2 mb-6">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-12 bg-indigo-500 rounded-full"
                        animate={{ height: ["48px", "24px", "64px", "48px"] }}
                        transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                  <p className="text-zinc-400 text-sm animate-pulse">Synthesizing dialogue via Gemini...</p>
                </motion.div>
              ) : generatedPodcast ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-3xl mx-auto w-full"
                >
                  {/* Player Header */}
                  <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 mb-8 shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-400 text-xs font-medium border border-indigo-500/20">
                            Generated
                          </span>
                          <span className="text-xs text-zinc-500 flex items-center gap-1">
                            <Headphones size={12} /> {generatedPodcast.duration}
                          </span>
                        </div>
                        <h2 className="text-2xl font-semibold text-white mb-1">{generatedPodcast.title}</h2>
                        <p className="text-sm text-zinc-400">Hosted by {formData.host1} & {formData.host2}</p>
                      </div>
                      
                      <div className="flex items-center gap-3 w-full md:w-auto">
                        <button 
                          onClick={handlePlayAudio}
                          disabled={isGeneratingAudio}
                          className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center text-white transition-colors shadow-lg shadow-indigo-900/20 shrink-0 disabled:opacity-50"
                        >
                          {isGeneratingAudio ? (
                            <Loader2 size={20} className="animate-spin" />
                          ) : isPlaying ? (
                            <Pause size={20} className="fill-current" />
                          ) : (
                            <Play size={20} className="fill-current ml-1" />
                          )}
                        </button>
                        <div className="flex gap-2">
                          <button className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 transition-colors">
                            <Download size={18} />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 transition-colors">
                            <Share2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock Audio Waveform */}
                    <div className="mt-6 h-12 flex items-end gap-1 w-full opacity-60">
                      {Array.from({ length: 60 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-indigo-400 rounded-t-sm"
                          initial={{ height: "10%" }}
                          animate={{ 
                            height: isPlaying 
                              ? `${Math.max(10, Math.random() * 100)}%` 
                              : `${10 + Math.sin(i * 0.5) * 20}%` 
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Script Content */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6 border-b border-zinc-800 pb-2">
                      Episode Transcript
                    </h3>
                    
                    {generatedPodcast.script.map((line, index) => {
                      const isHost1 = line.speaker === formData.host1;
                      const isSystem = line.speaker === "System";
                      
                      if (isSystem) {
                        return (
                          <div key={index} className="flex justify-center my-8">
                            <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                              {line.text}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex flex-col ${isHost1 ? 'items-start' : 'items-start'}`}
                        >
                          <span className={`text-xs font-semibold mb-1.5 ${isHost1 ? 'text-indigo-400' : 'text-emerald-400'}`}>
                            {line.speaker}
                          </span>
                          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-4 text-zinc-300 text-sm leading-relaxed max-w-[90%]">
                            {line.text}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
