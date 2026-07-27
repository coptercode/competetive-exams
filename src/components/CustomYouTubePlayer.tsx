import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface CustomYouTubePlayerProps {
  url: string;
  title?: string;
  onTimeUpdate?: (time: number) => void;
  onEnded?: () => void;
}

export function CustomYouTubePlayer({ url, title, onTimeUpdate, onEnded }: CustomYouTubePlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [ccEnabled, setCcEnabled] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => setPlaying(!playing);
  const handleToggleMute = () => setMuted(!muted);

  const handleProgress = (state: { played: number, playedSeconds: number }) => {
    setPlayed(state.played);
    if (onTimeUpdate) {
      onTimeUpdate(state.playedSeconds);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    playerRef.current?.seekTo(parseFloat(target.value));
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlayPause}
    >
      {/* The actual YouTube Player, unclickable to hide branding interaction */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <ReactPlayer
          ref={playerRef}
          url={url}
          width="100%"
          height="100%"
          playing={playing}
          muted={muted}
          onProgress={handleProgress}
          onDuration={setDuration}
          onEnded={() => {
            if (onEnded) onEnded();
            setPlaying(false);
          }}
          config={{
            playerVars: {
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              disablekb: 1,
              vq: 'hd1080'
            }
          }}
        />
      </div>

      {/* Central Play Button (Only shows when paused) */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity">
          <div className="w-16 h-16 bg-brand-royal rounded-full flex items-center justify-center shadow-lg shadow-brand-royal/50 hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      )}

      {/* Custom Control Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2 transition-opacity duration-300 ${isHovered || !playing ? 'opacity-100' : 'opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <button onClick={handlePlayPause} className="text-white hover:text-brand-royal transition-colors">
            {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <span className="text-white text-xs font-mono">
            {formatTime(played * duration)} / {formatTime(duration)}
          </span>

          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className="flex-1 h-1 bg-white/30 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-brand-royal [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              const internalPlayer = playerRef.current?.getInternalPlayer();
              if (internalPlayer && typeof internalPlayer.setOption === 'function') {
                if (ccEnabled) {
                  internalPlayer.unloadModule('captions');
                } else {
                  internalPlayer.loadModule('captions');
                  internalPlayer.setOption('captions', 'track', { languageCode: 'en' });
                }
                setCcEnabled(!ccEnabled);
              }
            }}
            className={`px-1.5 py-0.5 rounded text-xs font-bold border transition-colors ${ccEnabled ? 'border-brand-royal text-brand-royal bg-brand-royal/10' : 'border-white/50 text-white hover:text-brand-royal hover:border-brand-royal'
              }`}
          >
            CC
          </button>

          <button onClick={handleToggleMute} className="text-white hover:text-brand-royal transition-colors">
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          <button onClick={toggleFullScreen} className="text-white hover:text-brand-royal transition-colors">
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
