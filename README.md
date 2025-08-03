# RetroHack-Salama-Edition
RetroHack: Salama Edition is a fast-paced, retro-style typing challenge where you play as Salama—a digital hero fighting to survive a wave of code snippets, glitchy pop-ups, and XP-era chaos. Master your typing, stay focused, and don’t let the system crash. Multilingual support included (EN/RU).

## 📌 Project Title: Coding Survival Challenge — Multilingual Typing Game with Retro Distraction Events

### 🕹️ Game Concept

Create a retro-themed, interactive coding game where the player types out Python code snippets correctly while facing random pop-up distractions. The goal is to test accuracy, speed, and focus.

---

### 🌍 Multilingual Support

* Full support for **English** and **Russian**
* Text strings (instructions, pop-ups, buttons, story, code comments) stored in `lang/en.json` and `lang/ru.json`
* Language toggle button available at the start or via in-game menu

---

### 💻 UI Design (based on reference image)

* **Main Screen**: CRT-style terminal window with pixelated borders and neon glow, centered on the screen.
* **Background**: Retro purple background with repeating pixel-art icons (e.g., flaming keyboards).
* **Code Area**:

  * Dark terminal-like box with:

    * Colored, monospace font
    * Syntax highlighting for keywords, variables, comments
    * Visible indentation
* **Pop-up Warnings**:

  * Appear over the terminal (e.g., Windows XP-style error boxes)
  * Block typing until dismissed (click to close, answer question, etc.)
  * Example: "Слишком устал? Перерыв?"
* **Progress Bar**: Top-right green progress bar (e.g., "72%")
* **Score/Timer**: Can be shown in corners or just in result screen

---

### 🎮 Gameplay Flow

1. **Story Intro (optional)**:

   * Skippable dramatic or funny story (e.g., “Only your code can save the system”)
2. **3-second Countdown**:

   * Visual + audio before game starts
3. **Typing Challenge**:

   * Display 5–10 lines of Python or JavaScript
   * Live validation of each character typed
   * Errors highlighted in red and block further progress
4. **Popup Distractions**:

   * Appear randomly every 20–30 seconds
   * Styled as fake retro system alerts
   * Require action to dismiss
5. **End Screen**:

   * Shows: Accuracy %, typing speed (WPM), lines completed
   * Bonus points for handling distractions quickly

---

### 📁 Suggested File Structure

```
/src
  /components
    TypingWindow.tsx
    PopupEvent.tsx
    Countdown.tsx
    ScoreScreen.tsx
  /styles
    retro.css
  /lang
    en.json
    ru.json
  App.tsx
```

---

### ✅ Tech Stack

* React + TypeScript
* TailwindCSS or custom retro CSS
* Pixel/monospace fonts (e.g., VT323, Press Start 2P)

---

### 🔊 Optional Enhancements

* Typing sound effects
* Alert sounds on popup
* Save best scores to `localStorage`
* Dark/light mode toggle
* Easter eggs or hidden cheat codes
