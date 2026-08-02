(() => {
  const quickPrompts = [
    {
      label: "Define DiGA",
      text: "What is DiGA?",
    },
    {
      label: "Find diabetes apps",
      text: "Which DiGA applications are related to diabetes?",
    },
    {
      label: "Explain dashboard",
      text: "Explain the hospital discharge dashboard.",
    },
    {
      label: "Show limitations",
      text: "Welche Grenzen hat die Analyse?",
    },
  ];

  const nextPrompts = [
    {
      label: "Compare profiles",
      text: "Compare the diabetes-related DiGA profiles in simple terms.",
    },
    {
      label: "Reimbursement basics",
      text: "How can DiGA reimbursement work in Germany?",
    },
    {
      label: "Dashboard signals",
      text: "What are the main signals in the hospital analytics project?",
    },
  ];

  const languageOptions = {
    "en-US": "EN",
    "de-DE": "DE",
  };

  const initialMessage =
    "Hi, I am the HealthTech Scout AI guide. I can help with DiGA, care areas, company profiles, and the Hospital Discharge Analytics project.";

  const loadingSteps = [
    "Checking HealthTech Scout context",
    "Reading the DiGA directory",
    "Preparing a concise answer",
  ];

  const messages = [];
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let isOpen = false;
  let isSending = false;
  let isListening = false;
  let selectedLanguage = "en-US";
  let recognition = null;
  let voiceBaseText = "";
  let voiceFinalText = "";
  let shouldAutoSendVoice = false;

  const launcher = document.createElement("button");
  launcher.className = "chat-launcher";
  launcher.type = "button";
  launcher.setAttribute("aria-expanded", "false");
  launcher.setAttribute("aria-controls", "siteAssistantPanel");
  launcher.innerHTML = `
    <span class="chat-launcher-mark">
      <img src="assets/hts-scout-logo.svg" alt="" aria-hidden="true" />
      <span aria-hidden="true">AI</span>
    </span>
    <span class="chat-launcher-copy">
      <strong>HealthTech Scout AI</strong>
    </span>
  `;

  const panel = document.createElement("section");
  panel.className = "chat-panel";
  panel.id = "siteAssistantPanel";
  panel.setAttribute("aria-label", "HealthTech Scout AI assistant");
  panel.hidden = true;
  panel.innerHTML = `
    <div class="chat-header">
      <div class="chat-identity">
        <img class="chat-avatar" src="assets/hts-scout-logo.svg" alt="" aria-hidden="true" />
        <div class="chat-heading">
          <span>HealthTech Scout AI</span>
          <strong>DiGA and healthcare analytics guide</strong>
          <em>Grounded in this site · English / Deutsch</em>
        </div>
      </div>
      <button class="chat-close" type="button" aria-label="Close assistant">x</button>
    </div>
    <div class="chat-capabilities" aria-label="Assistant modes">
      <span>DiGA Scout</span>
      <span>Care areas</span>
      <span>Company profiles</span>
      <span>Analytics</span>
    </div>
    <div class="chat-disclaimer">
      Based on HealthTech Scout content. Please do not enter personal health data.
    </div>
    <div class="chat-messages" aria-live="polite"></div>
    <div class="chat-prompts-wrap">
      <span class="chat-prompts-label">Try asking</span>
      <div class="chat-prompts" aria-label="Suggested questions"></div>
    </div>
    <form class="chat-form">
      <div class="chat-input-toolbar">
        <div class="chat-language" aria-label="Voice language">
          <button type="button" data-chat-lang="en-US" aria-pressed="true">EN</button>
          <button type="button" data-chat-lang="de-DE" aria-pressed="false">DE</button>
        </div>
        <span class="chat-voice-status" aria-live="polite"></span>
      </div>
      <div class="chat-input-row">
        <label class="sr-only" for="siteAssistantInput">Message the HealthTech Scout AI guide</label>
        <textarea id="siteAssistantInput" rows="2" placeholder="Ask about DiGA or the analytics dashboard"></textarea>
        <button class="chat-mic" type="button" aria-label="Use microphone" title="Use microphone">
          <span class="chat-microphone" aria-hidden="true"><i></i><b></b></span>
        </button>
        <button class="chat-send" type="submit">Send</button>
      </div>
    </form>
  `;

  document.body.append(panel, launcher);

  const closeButton = panel.querySelector(".chat-close");
  const messageList = panel.querySelector(".chat-messages");
  const promptList = panel.querySelector(".chat-prompts");
  const promptLabel = panel.querySelector(".chat-prompts-label");
  const form = panel.querySelector(".chat-form");
  const input = panel.querySelector("textarea");
  const submitButton = panel.querySelector(".chat-send");
  const micButton = panel.querySelector(".chat-mic");
  const voiceStatus = panel.querySelector(".chat-voice-status");
  const languageButtons = Array.from(panel.querySelectorAll("[data-chat-lang]"));

  renderPrompts(quickPrompts, "Try asking");
  appendMessage("assistant", initialMessage, false);
  setupSpeechRecognition();

  launcher.addEventListener("click", () => {
    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  });

  closeButton.addEventListener("click", closePanel);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    stopListening();
    sendMessage(input.value);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  micButton.addEventListener("click", () => {
    openPanel();

    if (!recognition) {
      setVoiceStatus("Voice input is not supported in this browser.");
      return;
    }

    if (isListening) {
      stopListening();
      return;
    }

    startListening();
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedLanguage = button.dataset.chatLang || "en-US";
      languageButtons.forEach((option) => {
        option.setAttribute("aria-pressed", String(option === button));
      });
      setVoiceStatus(`Voice language: ${languageOptions[selectedLanguage] || "EN"}`);
    });
  });

  function openPanel() {
    isOpen = true;
    panel.hidden = false;
    launcher.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => input.focus());
  }

  function closePanel() {
    isOpen = false;
    stopListening();
    panel.hidden = true;
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();
  }

  async function sendMessage(rawMessage) {
    const content = String(rawMessage || "").trim();

    if (!content || isSending) {
      return;
    }

    isSending = true;
    input.value = "";
    setFormState();
    appendMessage("user", content);
    const loading = appendMessage("assistant", loadingSteps[0], false, { loading: true });
    const loadingTimer = cycleLoadingMessage(loading);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          history: messages.slice(-8),
          page: window.location.pathname,
          pageTitle: document.title,
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.answer || data.error || "The assistant is not available yet.");
      }

      clearInterval(loadingTimer);
      loading.classList.remove("chat-message-loading");
      setAssistantContent(loading, data.answer);
      messages.push({ role: "assistant", content: data.answer });
      renderPrompts(nextPrompts, "Ask next");
    } catch (error) {
      clearInterval(loadingTimer);
      loading.classList.remove("chat-message-loading");
      const errorMessage =
        error.message ||
        "The assistant could not answer right now. Please try again after the server is configured.";
      setAssistantContent(loading, errorMessage);
      messages.push({ role: "assistant", content: loading.textContent });
    } finally {
      isSending = false;
      setFormState();
      scrollToBottom();
    }
  }

  function appendMessage(role, content, track = true, options = {}) {
    const turn = document.createElement("div");
    turn.className = `chat-turn chat-turn-${role}`;

    if (role === "assistant") {
      const avatar = document.createElement("img");
      avatar.className = "chat-message-avatar";
      avatar.src = "assets/hts-scout-logo.svg";
      avatar.alt = "";
      avatar.setAttribute("aria-hidden", "true");
      turn.append(avatar);
    }

    const bubble = document.createElement("div");
    bubble.className = `chat-message chat-message-${role}`;

    if (options.loading) {
      bubble.classList.add("chat-message-loading");
    }

    if (role === "assistant") {
      setAssistantContent(bubble, content);
    } else {
      bubble.textContent = content;
    }

    turn.append(bubble);
    messageList.append(turn);

    if (track) {
      messages.push({ role, content });
    }

    scrollToBottom();
    return bubble;
  }

  function setAssistantContent(element, content) {
    const text = String(content || "").trim();
    const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
    let list = null;

    element.replaceChildren();

    if (!lines.length) {
      return;
    }

    lines.forEach((line) => {
      const bullet = line.match(/^[-*]\s+(.+)/);

      if (bullet) {
        if (!list) {
          list = document.createElement("ul");
          list.className = "chat-answer-list";
          element.append(list);
        }

        const item = document.createElement("li");
        appendInlineContent(item, bullet[1]);
        list.append(item);
        return;
      }

      list = null;
      const paragraph = document.createElement("p");
      appendInlineContent(paragraph, line);
      element.append(paragraph);
    });
  }

  function appendInlineContent(element, content) {
    const text = String(content || "");
    const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<>"']+)/g;
    let cursor = 0;

    for (const match of text.matchAll(linkPattern)) {
      const url = match[2] || match[3];
      const label = match[1] || url;
      const index = match.index || 0;
      element.append(document.createTextNode(text.slice(cursor, index)));

      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = label;
      element.append(link);
      cursor = index + match[0].length;
    }

    element.append(document.createTextNode(text.slice(cursor)));
  }

  function renderPrompts(prompts, label) {
    promptLabel.textContent = label;
    promptList.replaceChildren();

    prompts.forEach((prompt) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = prompt.label;
      button.addEventListener("click", () => {
        openPanel();
        sendMessage(prompt.text);
      });
      promptList.append(button);
    });
  }

  function setupSpeechRecognition() {
    if (!SpeechRecognition) {
      micButton.disabled = true;
      micButton.title = "Voice input is not supported in this browser";
      setVoiceStatus("Voice input is unavailable in this browser.");
      return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.addEventListener("start", () => {
      isListening = true;
      micButton.classList.add("is-listening");
      setVoiceStatus(`Listening in ${languageOptions[selectedLanguage] || "EN"}...`);
    });

    recognition.addEventListener("result", (event) => {
      let interimText = "";

      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const transcript = event.results[index][0]?.transcript || "";

        if (event.results[index].isFinal) {
          voiceFinalText += transcript;
        } else {
          interimText += transcript;
        }
      }

      input.value = [voiceBaseText, voiceFinalText, interimText].filter(Boolean).join(" ").trim();
    });

    recognition.addEventListener("end", () => {
      isListening = false;
      micButton.classList.remove("is-listening");
      setFormState();

      const spokenQuestion = input.value.trim();
      if (shouldAutoSendVoice && spokenQuestion) {
        setVoiceStatus("Voice captured. Sending question...");
        sendMessage(spokenQuestion);
        return;
      }

      setVoiceStatus("");
    });

    recognition.addEventListener("error", (event) => {
      isListening = false;
      micButton.classList.remove("is-listening");
      const errorLabel = event.error === "not-allowed" ? "Microphone permission was blocked." : "I could not catch that.";
      setVoiceStatus(errorLabel);
      setFormState();
    });

    setVoiceStatus("");
  }

  function startListening() {
    if (!recognition || isSending) {
      return;
    }

    voiceBaseText = input.value.trim();
    voiceFinalText = "";
    shouldAutoSendVoice = !voiceBaseText;
    recognition.lang = selectedLanguage;

    try {
      recognition.start();
      setFormState();
    } catch (error) {
      setVoiceStatus("Voice input is already active.");
    }
  }

  function stopListening() {
    if (!recognition || !isListening) {
      return;
    }

    shouldAutoSendVoice = false;
    recognition.stop();
  }

  function cycleLoadingMessage(element) {
    let index = 0;

    return window.setInterval(() => {
      index = (index + 1) % loadingSteps.length;
      setAssistantContent(element, loadingSteps[index]);
      scrollToBottom();
    }, 1300);
  }

  function setFormState() {
    submitButton.disabled = isSending;
    input.disabled = isSending;
    micButton.disabled = isSending || !recognition;
  }

  function setVoiceStatus(message) {
    voiceStatus.textContent = message;
  }

  function scrollToBottom() {
    messageList.scrollTop = messageList.scrollHeight;
  }
})();
