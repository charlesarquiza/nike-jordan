import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, ShieldCheck, Github } from 'lucide-react';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: 'Step 1: Push Code to your GitHub Repository',
      code: `git init\ngit add .\ngit commit -m "feat: Air Jordan 1 Love Letter site"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git\ngit push -u origin main`
    },
    {
      title: 'Step 2: Enable GitHub Pages in Repository Settings',
      description: 'Navigate to your repo on GitHub: Settings → Pages → Under "Build and deployment", set Source to "GitHub Actions".'
    },
    {
      title: 'Step 3: Automatic Deployment',
      description: 'The included `.github/workflows/deploy.yml` workflow will automatically compile the site and deploy your static build to: https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#0d0d12] border border-[#c91c28]/40 rounded-sm p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-sm bg-[#c91c28]/20 border border-[#c91c28] flex items-center justify-center text-[#c91c28]">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#c91c28] uppercase">
              DEPLOYMENT PREPARATION
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase">
              GitHub Pages Deployment
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
          Your project has been fully configured for GitHub Pages with <code className="text-[#e2c275] bg-white/5 px-1 py-0.5 rounded font-mono">base: './'</code> in <code className="text-white">vite.config.ts</code> and an automated workflow in <code className="text-white">.github/workflows/deploy.yml</code>.
        </p>

        <div className="space-y-5">
          {/* Step 1 */}
          <div className="bg-[#121218] border border-white/10 rounded-xs p-4">
            <h4 className="text-xs font-semibold text-white mb-2 flex items-center justify-between">
              <span>{steps[0].title}</span>
              <button
                onClick={() => copyCode(steps[0].code || '', 0)}
                className="text-[11px] text-[#c91c28] hover:text-white flex items-center gap-1 font-mono"
              >
                {copiedIndex === 0 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedIndex === 0 ? 'Copied' : 'Copy Commands'}
              </button>
            </h4>
            <pre className="bg-black/60 p-3 rounded font-mono text-[11px] text-neutral-300 overflow-x-auto">
              {steps[0].code}
            </pre>
          </div>

          {/* Step 2 */}
          <div className="bg-[#121218] border border-white/10 rounded-xs p-4">
            <h4 className="text-xs font-semibold text-white mb-1">
              {steps[1].title}
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              {steps[1].description}
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#121218] border border-white/10 rounded-xs p-4">
            <h4 className="text-xs font-semibold text-white mb-1">
              {steps[2].title}
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              {steps[2].description}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-neutral-400 font-mono">
            Static Single-Page Application • 0 Backend Dependencies
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#c91c28] hover:bg-[#b01822] text-white text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
