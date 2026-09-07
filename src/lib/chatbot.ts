// Utility function to open the BotPenguin chatbot
export const openChatbot = () => {
  if (typeof window === 'undefined') return;

  const tryAPIs = () => {
    const w = window as any;
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
    }
  };

  const tryPostMessage = () => {
    const iframes = Array.from(
      document.querySelectorAll('iframe[src*="botpenguin"], iframe[src*="window-"], iframe[src*="bp-"], iframe[id*="botpenguin"], iframe[id*="bp-"]')
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

  const tryClickLauncher = () => {
    const selectors = [
      '.bp-widget-btn',
      '.bp-launcher',
      '.bp-fab',
      '.bp-webchat-widget-launcher',
      '.bp-widget-launcher',
      '.bp-chat-widget-launcher',
      '.bp-messenger-widget',
      '[class*="bp-widget"][role="button"]',
      '[class*="bp-launcher"]',
      '[class*="bp-fab"]',
      'button[aria-label*="chat" i]',
      'button[title*="chat" i]',
      'div[role="button"][class*="launcher"]',
      'div[role="button"][class*="botpenguin"]',
      '[data-botpenguin]',
      '#bp-widget-btn',
      '#bp-launcher',
    ];
    for (const sel of selectors) {
      const els = Array.from(document.querySelectorAll(sel)) as HTMLElement[];
      for (const el of els) {
        if (el.offsetParent !== null) {
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

  // Retry for a few seconds to allow widget to initialize
  const start = Date.now();
  const maxMs = 6000;
  const interval = 250;

  tryAPIs();
  const timer = setInterval(() => {
    tryAPIs();
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
