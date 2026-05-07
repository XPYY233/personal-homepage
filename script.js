const profile = {
  name: "范君然",
  tagline: "一个持续探索技术、学习沉淀与清晰表达的人",
  summary: "这里会逐步放入我的真实经历、项目与兴趣。现在先用清晰的结构，把我作为一个可被快速认识的人呈现出来。",
  quickLabel: "技术探索、学习沉淀、开放交流",
  tags: ["技术探索", "学习沉淀", "表达整理", "开放交流"],
  stats: [
    {
      value: "3+",
      label: "待填充方向",
      description: "后续可以替换为真实项目、课程、研究、竞赛或实习经历。"
    },
    {
      value: "∞",
      label: "长期成长",
      description: "用稳定学习、记录和复盘，把阶段性积累沉淀成可展示内容。"
    },
    {
      value: "1",
      label: "公开入口",
      description: "让新朋友、同学或潜在合作者快速理解我、记住我、联系我。"
    }
  ],
  bio: [
    "我是范君然，目前正在把自己的学习经历、项目实践和兴趣标签整理成一个可以公开分享的个人主页。",
    "这个页面会逐步替换为真实资料：包括我做过的项目、参与过的课程或活动、阶段性成果，以及适合展开交流的话题。",
    "在正式内容完善前，我先用这版占位内容保持页面完整，方便发布、分享和后续持续更新。"
  ],
  achievements: [
    {
      category: "Project",
      title: "课程/项目实践",
      period: "待替换",
      description: "这里适合放一个真实项目：写清楚项目目标、你负责的部分、最终产出，以及这个经历体现了什么能力。",
      highlights: ["项目目标", "个人贡献", "最终产出"]
    },
    {
      category: "Learning",
      title: "长期学习输出",
      period: "待替换",
      description: "这里适合放一个学习方向：例如课程学习、技术栈训练、阅读写作、研究兴趣或持续输出。",
      highlights: ["学习方向", "方法沉淀", "阶段成果"]
    },
    {
      category: "Collaboration",
      title: "协作与组织经历",
      period: "可替换",
      description: "这里适合放团队项目、社团活动、志愿服务、学生工作或其他协作经历，强调你如何推动事情完成。",
      highlights: ["沟通协作", "组织推进", "复盘总结"]
    }
  ],
  timeline: [
    {
      time: "现在",
      title: "建立个人展示入口",
      description: "当前版本先完成主页结构、分享面板、联系方式和可替换内容入口。"
    },
    {
      time: "近期",
      title: "补充真实经历资料",
      description: "把课程项目、学习方向、竞赛活动、社团经历或实习经历整理进成就卡片和时间线。"
    },
    {
      time: "下一步",
      title: "发布到 GitHub Pages",
      description: "获得公开链接后，将正式网址填入 profile.share.url，让分享面板复制稳定的公网地址。"
    }
  ],
  hobbies: [
    {
      icon: "01",
      title: "阅读与记录",
      description: "从书、文章和日常观察里收集新的表达方式。"
    },
    {
      icon: "02",
      title: "城市漫游",
      description: "在街区、咖啡店和展览里寻找一个城市真正的节奏。"
    },
    {
      icon: "03",
      title: "影像审美",
      description: "关注画面、构图、色彩，以及它们如何塑造情绪。"
    },
    {
      icon: "04",
      title: "深度聊天",
      description: "享受从一个小问题聊到价值观、选择和未来方向。"
    }
  ],
  contacts: [
    {
      type: "邮箱",
      value: "fjr200630@sjtu.edu.cn",
      href: "mailto:fjr200630@sjtu.edu.cn",
      action: "写信"
    },
    {
      type: "微信",
      value: "f2060218256",
      action: "复制"
    }
  ],
  contactNote: "如果你想聊合作、灵感或一次认真又轻松的交流，可以从这里找到我。",
  share: {
    title: "范君然 | 个人主页",
    description: "范君然的个人展示入口，记录技术探索、学习沉淀、经历成就与联系方式。",
    url: "",
    image: "./share-card.png",
    shortIntro: "你好，我是范君然。目前我正在整理自己的学习经历、项目实践和兴趣标签，欢迎通过我的个人主页快速了解我，也欢迎联系交流。"
  }
};

const fieldNodes = document.querySelectorAll("[data-field]");
const toast = document.querySelector("[data-toast]");
const sharePanel = document.querySelector("[data-share-panel]");
const shareCanvas = document.querySelector("[data-share-canvas]");
const downloadCardLink = document.querySelector("[data-download-card]");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`${label}已复制`);
  } catch (error) {
    showToast(`请手动复制：${text}`);
  }
}

function getShareUrl() {
  return profile.share.url || window.location.href;
}

function getContactText() {
  return profile.contacts.map((item) => `${item.type}：${item.value}`).join("\n");
}

function setMetaContent(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute("content", value);
}

function setMetaFields() {
  document.title = profile.share.title;
  setMetaContent('[data-meta="description"]', profile.share.description);
  setMetaContent('[data-meta="ogTitle"]', profile.share.title);
  setMetaContent('[data-meta="ogDescription"]', profile.share.description);
  setMetaContent('[data-meta="ogImage"]', profile.share.image);
  setMetaContent('[data-meta="twitterTitle"]', profile.share.title);
  setMetaContent('[data-meta="twitterDescription"]', profile.share.description);
}

function setTextFields() {
  fieldNodes.forEach((node) => {
    const key = node.dataset.field;
    if (key === "initial") {
      node.textContent = profile.name.trim().slice(0, 1) || "范";
      return;
    }

    if (profile[key]) {
      node.textContent = profile[key];
    }
  });
}

function renderTags() {
  const tagList = document.querySelector('[data-list="tags"]');
  const featuredTags = document.querySelector('[data-list="featuredTags"]');
  const markup = profile.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");

  tagList.innerHTML = markup;
  featuredTags.innerHTML = profile.tags.slice(0, 3).map((tag) => `<em>${escapeHtml(tag)}</em>`).join("");
}

function renderStats() {
  const list = document.querySelector('[data-list="stats"]');
  const miniList = document.querySelector('[data-list="miniStats"]');

  list.innerHTML = profile.stats
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");

  miniList.innerHTML = profile.stats
    .slice(0, 2)
    .map(
      (item) => `
        <div>
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </div>
      `
    )
    .join("");
}

function renderBio() {
  const list = document.querySelector('[data-list="bio"]');
  list.innerHTML = profile.bio
    .map((item, index) => `<p class="about-item"><span>0${index + 1}</span>${escapeHtml(item)}</p>`)
    .join("");
}

function renderAchievements() {
  const list = document.querySelector('[data-list="achievements"]');
  list.innerHTML = profile.achievements
    .map(
      (item) => `
        <article class="work-card">
          <div class="work-card-top">
            <span>${escapeHtml(item.category)}</span>
            <time>${escapeHtml(item.period)}</time>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="work-tags">
            ${item.highlights.map((highlight) => `<span>${escapeHtml(highlight)}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  const list = document.querySelector('[data-list="timeline"]');
  list.innerHTML = profile.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <time>${escapeHtml(item.time)}</time>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderHobbies() {
  const list = document.querySelector('[data-list="hobbies"]');
  list.innerHTML = profile.hobbies
    .map(
      (item) => `
        <article class="hobby-card">
          <span class="hobby-icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");
}

function renderContacts() {
  const list = document.querySelector('[data-list="contacts"]');
  list.innerHTML = profile.contacts
    .map((item) => {
      const action = item.href
        ? `<a href="${escapeHtml(item.href)}">${escapeHtml(item.action)}</a>`
        : `<button type="button" data-copy-value="${escapeHtml(item.value)}" data-copy-label="${escapeHtml(item.type)}">${escapeHtml(item.action)}</button>`;

      return `
        <div class="contact-row">
          <div>
            <span>${escapeHtml(item.type)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </div>
          ${action}
        </div>
      `;
    })
    .join("");

  document.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", () => {
      copyText(button.dataset.copyValue, button.dataset.copyLabel);
    });
  });
}

function bindSharePanel() {
  document.querySelectorAll("[data-open-share]").forEach((button) => {
    button.addEventListener("click", () => {
      sharePanel.hidden = false;
      document.body.classList.add("is-share-open");
      generateCard();
    });
  });

  document.querySelectorAll("[data-close-share]").forEach((button) => {
    button.addEventListener("click", () => {
      sharePanel.hidden = true;
      document.body.classList.remove("is-share-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !sharePanel.hidden) {
      sharePanel.hidden = true;
      document.body.classList.remove("is-share-open");
    }
  });
}

function bindCopyActions() {
  document.querySelector("[data-copy-intro]").addEventListener("click", () => {
    copyText(profile.share.shortIntro, "个人介绍");
  });

  document.querySelector("[data-copy-share-intro]").addEventListener("click", () => {
    copyText(profile.share.shortIntro, "短版介绍");
  });

  document.querySelector("[data-copy-link]").addEventListener("click", () => {
    copyText(getShareUrl(), "主页链接");
  });

  document.querySelector("[data-copy-contact]").addEventListener("click", () => {
    copyText(getContactText(), "联系方式");
  });

  document.querySelector("[data-generate-card]").addEventListener("click", () => {
    generateCard();
    showToast("名片图已生成");
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const chars = Array.from(text);
  let line = "";
  let lines = 0;

  chars.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      if (lines < maxLines) {
        ctx.fillText(line, x, y + lines * lineHeight);
      }
      lines += 1;
      line = char;
      return;
    }
    line = testLine;
  });

  if (line && lines < maxLines) {
    ctx.fillText(line, x, y + lines * lineHeight);
  }
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function generateCard() {
  const ctx = shareCanvas.getContext("2d");
  const width = shareCanvas.width;
  const height = shareCanvas.height;
  const email = profile.contacts.find((item) => item.type === "邮箱")?.value || "";
  const wechat = profile.contacts.find((item) => item.type === "微信")?.value || "";

  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#fbfcfa");
  background.addColorStop(0.55, "#eef3f0");
  background.addColorStop(1, "#e2ece8");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(190, 111, 78, 0.16)";
  ctx.beginPath();
  ctx.arc(875, 220, 260, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(47, 107, 85, 0.14)";
  ctx.beginPath();
  ctx.arc(160, 1170, 330, 0, Math.PI * 2);
  ctx.fill();

  drawRoundedRect(ctx, 88, 88, width - 176, height - 176, 42);
  ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
  ctx.fill();
  ctx.strokeStyle = "rgba(23, 33, 28, 0.12)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#2f6b55";
  ctx.font = "700 34px Inter, sans-serif";
  ctx.fillText("PERSONAL CARD", 138, 178);

  ctx.fillStyle = "#17211c";
  ctx.font = "800 112px 'Noto Sans SC', sans-serif";
  ctx.fillText(profile.name, 138, 345);

  ctx.fillStyle = "#1f4e3d";
  ctx.font = "700 46px 'Noto Sans SC', sans-serif";
  wrapText(ctx, profile.tagline, 138, 430, 790, 64, 2);

  ctx.fillStyle = "#63716b";
  ctx.font = "400 34px 'Noto Sans SC', sans-serif";
  wrapText(ctx, profile.summary, 138, 610, 780, 52, 3);

  let tagX = 138;
  const tagY = 805;
  ctx.font = "700 28px 'Noto Sans SC', sans-serif";
  profile.tags.slice(0, 4).forEach((tag) => {
    const tagWidth = ctx.measureText(tag).width + 46;
    drawRoundedRect(ctx, tagX, tagY, tagWidth, 56, 22);
    ctx.fillStyle = "#eef3f0";
    ctx.fill();
    ctx.fillStyle = "#1f4e3d";
    ctx.fillText(tag, tagX + 23, tagY + 37);
    tagX += tagWidth + 18;
  });

  drawRoundedRect(ctx, 138, 970, 804, 214, 28);
  ctx.fillStyle = "#17211c";
  ctx.fill();
  ctx.fillStyle = "#fbfcfa";
  ctx.font = "700 30px 'Noto Sans SC', sans-serif";
  ctx.fillText("联系我", 188, 1040);
  ctx.font = "500 30px Inter, 'Noto Sans SC', sans-serif";
  ctx.fillText(email, 188, 1110);
  ctx.fillText(`微信：${wechat}`, 188, 1170);

  ctx.fillStyle = "#63716b";
  ctx.font = "500 26px 'Noto Sans SC', sans-serif";
  ctx.fillText(profile.share.url || "部署后可在这里展示主页链接", 138, 1300);

  const dataUrl = shareCanvas.toDataURL("image/png");
  downloadCardLink.href = dataUrl;
  downloadCardLink.hidden = false;
}

function revealOnScroll() {
  const nodes = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  nodes.forEach((node) => observer.observe(node));
}

setMetaFields();
setTextFields();
renderTags();
renderStats();
renderBio();
renderAchievements();
renderTimeline();
renderHobbies();
renderContacts();
bindSharePanel();
bindCopyActions();
revealOnScroll();
