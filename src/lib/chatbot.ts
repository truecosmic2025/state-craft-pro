// Utility function to open the BotPenguin chatbot
export const openChatbot = () => {
  if (typeof window === 'undefined') return;

  const w = window as any;

  const tryAPIs = () => {
    const candidates = [
      w.BotPenguin,
      w.botpenguin,
      w.bp,
      w.BotPenguinWidget,
      w.botPenguin,
    ];
    for (const api of candidates) {
      if (!api) continue;
      try { api.open?.(); } catch {}
      try { api.show?.(); } catch {}
      try { api.toggle?.(); } catch {}
      try { api.openWidget?.(); } catch {}
      try { api.expand?.(); } catch {}
      try { api.launch?.(); } catch {}
      try { api.start?.(); } catch {}
    }
  };

  const tryPostMessage = () => {
    const iframes = Array.from(
      document.querySelectorAll('#BotPenguin-messenger, iframe[src*="botpenguin"], iframe[src*="window-"], iframe[id*="BotPenguin"]')
    ) as HTMLIFrameElement[];
    let sent = false;
    for (const iframe of iframes) {
      const win = iframe.contentWindow;
      if (win) {
        try {
          win.postMessage({ type: 'OPEN', source: 'parent' }, '*');
          win.postMessage({ type: 'open' }, '*');
          win.postMessage('OPEN', '*');
          win.postMessage({ action: 'OPEN_WIDGET' }, '*');
          win.postMessage({ event: 'open' }, '*');
          sent = true;
        } catch {}
      }
    }
    return sent;
  };

  const ensureMessengerVisible = () => {
    const messenger = document.getElementById('BotPenguin-messenger') as HTMLIFrameElement | null;
    if (!messenger) return false;
    // Remove any hidden/collapsed classes and ensure it's on screen
    messenger.classList.remove('scale-out-br', 'hidden', 'bp-hidden');
    messenger.classList.add('scale-in-br', 'bp-open');
    messenger.style.display = 'block';
    messenger.style.visibility = 'visible';
    messenger.style.opacity = '1';
    messenger.style.pointerEvents = 'auto';
    return true;
  };

  const tryClickLauncher = () => {
    const selectors = [
      '[id^="botpenguin-launcher-"] [class*="launcher-image"]',
      '[id^="botpenguin-launcher-"] [class*="launcherImage"]',
      '[class*="botpenguin-launcher-image"]',
      '[class*="botpenguin-launcherImage"]',
      '[id^="botpenguin-launcher-"]',
      '.botpenguin-left',
      '.botpenguin-right',
      '.BotPenguin-chat',
    ];
    for (const sel of selectors) {
      const els = Array.from(document.querySelectorAll(sel)) as HTMLElement[];
      for (const el of els) {
        if (el.offsetParent !== null || el.getBoundingClientRect().width > 0 || el.getBoundingClientRect().height > 0) {
          console.log('Opening chatbot via selector:', sel);
          el.click();
          el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
          el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
          return true;
        }
      }
    }
    return false;
  };

  const ensureScript = () => {
    if (!document.getElementById('messenger-widget-b')) {
      const script = document.createElement('script');
      script.id = 'messenger-widget-b';
      script.src = 'https://cdn.botpenguin.com/website-bot.js';
      script.defer = true;
      script.textContent = '6880c7ac63793209fdd9fbf7,6862add8833c9f93263e210e';
      document.body.appendChild(script);
    }
  };

  ensureScript();

  // Try immediately in case widget is already loaded
  tryAPIs();
  ensureMessengerVisible();
  const immediateClick = tryClickLauncher();
  if (immediateClick) return;

  // Retry for a few seconds to allow widget to initialize
  const start = Date.now();
  const maxMs = 6000;
  const interval = 250;

  const timer = setInterval(() => {
    tryAPIs();
    ensureMessengerVisible();
    const clicked = tryClickLauncher();
    const posted = tryPostMessage();
    if (clicked || posted) {
      clearInterval(timer);
    } else if (Date.now() - start > maxMs) {
      clearInterval(timer);
      console.log('Chat widget not found, scrolling to booking section');
      const bookingSection = document.getElementById('book');
      bookingSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, interval);
};
