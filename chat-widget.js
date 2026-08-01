(() => {
  const quickPrompts = [
    "What is DiGA?",
    "Welche DiGA gibt es bei Angst?",
    "Explain the hospital discharge dashboard.",
    "Welche Grenzen hat die Analyse?",
  ];

  const initialMessage =
    "Hi, I am the Health Tech Scout bot. Happy to help with DiGA, care areas, company profiles, and the Hospital Discharge Analytics project. You can write in English or German.";

  const messages = [];
  let isOpen = false;
  let isSending = false;

  const launcher = document.createElement("button");
  launcher.className = "chat-launcher";
  launcher.type = "button";
  launcher.setAttribute("aria-expanded", "false");
  launcher.setAttribute("aria-controls", "siteAssistantPanel");
  launcher.innerHTML = `
    <img src="assets/hts-scout-logo.svg" alt="" aria-hidden="true" />
    <span>
      <small>Scout bot</small>
      <strong>Ask me about DiGA</strong>
    </span>
  `;

  const panel = document.createElement("section");
  panel.className = "chat-panel";
  panel.id = "siteAssistantPanel";
  panel.setAttribute("aria-label", "Health Tech Scout AI assistant");
  panel.hidden = true;
  panel.innerHTML = `
    <div class="chat-header">
      <img class="chat-avatar" src="assets/hts-scout-logo.svg" alt="" aria-hidden="true" />
      <div class="chat-heading">
        <span>Health Tech Scout bot</span>
        <strong>I answer DiGA and analytics questions</strong>
        <em>Online · English / Deutsch</em>
      </div>
      <button class="chat-close" type="button" aria-label="Close assistant">x</button>
    </div>
    <div class="chat-disclaimer">
      Answers are based on this site. No medical advice. Bitte keine sensiblen Gesundheitsdaten eingeben.
    </div>
    <div class="chat-messages" aria-live="polite"></div>
    <div class="chat-prompts" aria-label="Suggested questions"></div>
    <form class="chat-form">
      <label class="sr-only" for="siteAssistantInput">Message the Scout bot</label>
      <textarea id="siteAssistantInput" rows="2" placeholder="Type your question... / Frage eingeben..."></textarea>
      <button type="submit">Send</button>
    </form>
  `;

  document.body.append(panel, launcher);

  const closeButton = panel.querySelector(".chat-close");
  const messageList = panel.querySelector(".chat-messages");
  const promptList = panel.querySelector(".chat-prompts");
  const form = panel.querySelector(".chat-form");
  const input = panel.querySelector("textarea");
  const submitButton = form.querySelector("button");

  quickPrompts.forEach((prompt) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = prompt;
    button.addEventListener("click", () => {
      openPanel();
      sendMessage(prompt);
    });
    promptList.append(button);
  });

  appendMessage("assistant", initialMessage);

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
    sendMessage(input.value);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  function openPanel() {
    isOpen = true;
    panel.hidden = false;
    launcher.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => input.focus());
  }

  function closePanel() {
    isOpen = false;
    panel.hidden = true;
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();
  }

  async function sendMessage(rawMessage) {
    const content = rawMessage.trim();

    if (!content || isSending) {
      return;
    }

    isSending = true;
    input.value = "";
    setFormState();
    appendMessage("user", content);
    const loading = appendMessage("assistant", "Thinking...", false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          history: messages.slice(-8),
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.answer || data.error || "The assistant is not available yet.");
      }

      loading.textContent = data.answer;
      messages.push({ role: "assistant", content: data.answer });
    } catch (error) {
      loading.textContent =
        error.message ||
        "The assistant could not answer right now. Please try again after the server is configured.";
      messages.push({ role: "assistant", content: loading.textContent });
    } finally {
      isSending = false;
      setFormState();
      scrollToBottom();
    }
  }

  function appendMessage(role, content, track = true) {
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
    bubble.textContent = content;
    turn.append(bubble);
    messageList.append(turn);

    if (track) {
      messages.push({ role, content });
    }
    scrollToBottom();
    return bubble;
  }

  function setFormState() {
    submitButton.disabled = isSending;
    input.disabled = isSending;
  }

  function scrollToBottom() {
    messageList.scrollTop = messageList.scrollHeight;
  }
})();
