(function () {
  const NAV = [
    { href: "index.html", key: "navHome" },
    { href: "series-trends.html", key: "navTrends" },
    { href: "daily-missions.html", key: "navMissions" },
    { href: "youtube-streaming.html", key: "navYoutube" },
    { href: "ig-engagement.html", key: "navIg" }
  ];

  window.PS_I18N = {
    en: {
      navHome: "Home", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram",
      title: "PerthSanta Engagement Hub",
      subtitle: "PerthSantaDomiia Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "Track trending episodes and open generators",
      card1Btn: "Open Trends →",
      card2Title: "Daily Missions",
      card2Desc: "Countdown, watch links and rating missions",
      card2Btn: "View Missions →",
      card3Title: "YouTube Streaming",
      card3Desc: "Music and trailer streaming targets",
      card3Btn: "Open Streaming →",
      card4Title: "Instagram Engagement",
      card4Desc: "Posts to engage with like, comment and share targets",
      card4Btn: "Open Engagement →",
      alertText: "You have important missions not completed yet — tap to view",
      alertEmpty: "All important missions are done.",
      alertClose: "Close"
    },
    vi: {
      navHome: "Trang chủ", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram",
      title: "PerthSanta Engagement Hub",
      subtitle: "PerthSantaDomiia Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "Theo dõi tập và mở generator",
      card1Btn: "Open Trends →",
      card2Title: "Daily Missions",
      card2Desc: "Countdown, link xem phim và nhiệm vụ đánh giá",
      card2Btn: "View Missions →",
      card3Title: "YouTube Streaming",
      card3Desc: "Mục tiêu streaming trailer và nhạc",
      card3Btn: "Open Streaming →",
      card4Title: "Instagram Engagement",
      card4Desc: "Bài cần tương tác với target like, comment, share",
      card4Btn: "Open Engagement →",
      alertText: "Có nhiệm vụ quan trọng bạn chưa hoàn thành — nhấn để xem",
      alertEmpty: "Đã hoàn thành tất cả nhiệm vụ quan trọng.",
      alertClose: "Đóng"
    },
    th: {
      navHome: "หน้าแรก", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram",
      title: "PerthSanta Engagement Hub",
      subtitle: "PerthSantaDomiia Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "ติดตามตอนและเปิด generator",
      card1Btn: "Open Trends →",
      card2Title: "Daily Missions",
      card2Desc: "นับถอยหลัง ลิงก์ดูซีรีส์ และภารกิจให้คะแนน",
      card2Btn: "View Missions →",
      card3Title: "YouTube Streaming",
      card3Desc: "เป้าหมายสตรีมตัวอย่างและเพลง",
      card3Btn: "Open Streaming →",
      card4Title: "Instagram Engagement",
      card4Desc: "โพสต์ที่ต้องมีส่วนร่วม พร้อมเป้า like comment share",
      card4Btn: "Open Engagement →",
      alertText: "มีภารกิจสำคัญที่ยังไม่เสร็จ — แตะเพื่อดู",
      alertEmpty: "ภารกิจสำคัญครบแล้ว",
      alertClose: "ปิด"
    },
    my: {
      navHome: "ပင်မ", navTrends: "Trends", navMissions: "Missions",
      navYoutube: "YouTube", navIg: "Instagram",
      title: "PerthSanta Engagement Hub",
      subtitle: "PerthSantaDomiia Together Forever",
      card1Title: "Heartbound Series Trends",
      card1Desc: "အပိုင်းများနှင့် generator",
      card1Btn: "Open Trends →",
      card2Title: "Daily Missions",
      card2Desc: "Countdown, ကြည့်ရန်လင့်နှင့် အဆင့်သတ်မှတ်ခြင်း",
      card2Btn: "View Missions →",
      card3Title: "YouTube Streaming",
      card3Desc: "Trailer နှင့် သီချင်း streaming ပစ်မှတ်",
      card3Btn: "Open Streaming →",
      card4Title: "Instagram Engagement",
      card4Desc: "Like, comment, share ပစ်မှတ်များ",
      card4Btn: "Open Engagement →",
      alertText: "အရေးကြီး mission မပြီးသေးပါ — နှိပ်ပြီးကြည့်ပါ",
      alertEmpty: "အရေးကြီး mission အားလုံး ပြီးပါပြီ",
      alertClose: "ပိတ်"
    }
  };

  function pageName() {
    const p = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return p || "index.html";
  }

  function currentLang() {
    const saved = localStorage.getItem("ps_hub_lang");
    return saved && window.PS_I18N[saved] ? saved : "en";
  }

  window.psApplyLang = function (lang) {
    const t = window.PS_I18N[lang] || window.PS_I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const k = el.getAttribute("data-i18n");
      if (t[k]) el.innerText = t[k];
    });
    const alertLabel = document.getElementById("ps-alert-label");
    if (alertLabel) alertLabel.innerText = t.alertText || window.PS_I18N.en.alertText;
    const closeBtn = document.getElementById("ps-alert-close");
    if (closeBtn) closeBtn.innerText = t.alertClose || "Close";
  };

  window.psChangeLanguage = function () {
    const lang = document.getElementById("language").value;
    localStorage.setItem("ps_hub_lang", lang);
    window.psApplyLang(lang);
  };

  const here = pageName();
  const lang = currentLang();
  const t = window.PS_I18N[lang];

  const links = NAV.map(function (n) {
    const active = here === n.href || (here === "" && n.href === "index.html");
    const cls = active
      ? "px-3 py-1.5 rounded-full text-sm bg-red-600 text-white"
      : "px-3 py-1.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-zinc-800";
    return '<a href="' + n.href + '" class="' + cls + '" data-i18n="' + n.key + '">' + t[n.key] + "</a>";
  }).join("");

  const style = document.createElement("style");
  style.textContent =
    "@keyframes ps-blink { 0%,100%{ opacity:1; } 50%{ opacity:0.45; } }" +
    ".ps-alert-blink { animation: ps-blink 1.2s ease-in-out infinite; }" +
    "#ps-alert-panel { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }" +
    "#ps-alert-panel.open { max-height: 420px; overflow-y: auto; }";
  document.head.appendChild(style);

  const bar = document.createElement("header");
  bar.className = "sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur";
  bar.innerHTML =
    '<div class="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex flex-wrap items-center gap-3">' +
      '<a href="index.html" class="font-bold tracking-tight text-white mr-auto">PerthSanta <span class="text-red-500">Hub</span></a>' +
      '<nav class="flex flex-wrap gap-1">' + links + "</nav>" +
      '<select id="language" onchange="psChangeLanguage()" class="bg-zinc-950 border border-zinc-700 text-white text-sm rounded-lg px-2 py-1.5">' +
        '<option value="en">EN</option><option value="vi">VI</option><option value="th">TH</option><option value="my">MY</option>' +
      "</select>" +
    "</div>" +
    '<div id="ps-alert-wrap" class="hidden border-t border-red-900/50 bg-red-950/90">' +
      '<button type="button" id="ps-alert-btn" class="w-full max-w-6xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-center gap-2 text-sm sm:text-base text-red-100 ps-alert-blink cursor-pointer hover:bg-red-900/40 transition">' +
        '<span class="inline-block w-2 h-2 rounded-full bg-red-400 shrink-0"></span>' +
        '<span id="ps-alert-label">' + (t.alertText || "You have important missions not completed yet — tap to view") + "</span>" +
        '<span id="ps-alert-count" class="ml-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold">0</span>' +
      "</button>" +
      '<div id="ps-alert-panel" class="border-t border-red-900/40 bg-zinc-950">' +
        '<div class="max-w-6xl mx-auto px-3 sm:px-4 py-3">' +
          '<div class="flex items-center justify-between mb-2">' +
            '<p class="text-sm text-gray-400">Unfinished missions</p>' +
            '<button type="button" id="ps-alert-close" class="text-sm text-red-400 hover:text-red-300">' + (t.alertClose || "Close") + "</button>" +
          "</div>" +
          '<ul id="ps-alert-list" class="space-y-2"></ul>' +
        "</div>" +
      "</div>" +
    "</div>";

  document.body.insertBefore(bar, document.body.firstChild);
  document.getElementById("language").value = lang;
  window.psApplyLang(lang);

  if (here !== "index.html" && here !== "") {
    const back = document.createElement("div");
    back.className = "max-w-6xl mx-auto px-4 pt-4 text-left";
    back.innerHTML = '<a href="index.html" class="inline-flex text-red-500 hover:text-red-400 text-sm font-medium">← Back to Home</a>';
    bar.insertAdjacentElement("afterend", back);
  }

  var foot = document.createElement("footer");
  foot.className = "text-center text-sm text-gray-500 py-10 px-4";
  foot.innerHTML =
    '© 2026 PerthSanta Engagement Hub · Made with love by ' +
    '<a href="https://x.com/itsmaeta" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Eira</a>. ' +
    '<a href="https://x.com/comeforlove_ps" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Lubiichan</a>. ' +
    '<a href="https://x.com/NganVt2386624" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Ngân</a>. ' +
    '<a href="https://x.com/kimm221020" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Kiim</a>. ' +
    '<a href="https://x.com/Babedoria" target="_blank" rel="noopener" class="text-gray-300 hover:text-red-400">Doria</a>';
  document.body.appendChild(foot);

  function parseTarget(v) {
    if (v == null) return 0;
    return parseInt(String(v).replace(/,/g, ""), 10) || 0;
  }

  function loadYtConfig() {
    return new Promise(function (resolve) {
      if (window.YOUTUBE_API_KEY) {
        resolve(window.YOUTUBE_API_KEY);
        return;
      }
      var s = document.createElement("script");
      s.src = "yt-config.js";
      s.onload = function () { resolve(window.YOUTUBE_API_KEY || ""); };
      s.onerror = function () { resolve(""); };
      document.head.appendChild(s);
    });
  }

  async function fetchYtViews(videoIds, apiKey) {
    var map = {};
    if (!apiKey || !videoIds.length) return map;
    try {
      var ids = videoIds.slice(0, 50).join(",");
      var res = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + ids + "&key=" + apiKey
      );
      var json = await res.json();
      (json.items || []).forEach(function (item) {
        map[item.id] = parseInt((item.statistics && item.statistics.viewCount) || "0", 10) || 0;
      });
    } catch (e) {}
    return map;
  }

  async function getUnfinishedMissions(data) {
    var list = Array.isArray(data.missions) ? data.missions.slice() : [];
    var unfinished = list.filter(function (m) {
      return m && m.done !== true && m.done !== "true";
    });

    var ytOnes = unfinished.filter(function (m) {
      return m.type === "youtube" && m.videoId && parseTarget(m.target) > 0;
    });

    if (ytOnes.length) {
      var key = await loadYtConfig();
      var viewsMap = await fetchYtViews(
        ytOnes.map(function (m) { return m.videoId; }),
        key
      );
      unfinished = unfinished.filter(function (m) {
        if (m.type !== "youtube" || !m.videoId) return true;
        var target = parseTarget(m.target);
        if (!target) return true;
        var views = viewsMap[m.videoId];
        if (views == null) return true;
        return views < target;
      });
    }

    return unfinished;
  }

  function renderAlert(missions) {
    var wrap = document.getElementById("ps-alert-wrap");
    var countEl = document.getElementById("ps-alert-count");
    var listEl = document.getElementById("ps-alert-list");
    var panel = document.getElementById("ps-alert-panel");
    if (!wrap || !listEl) return;

    if (!missions.length) {
      wrap.classList.add("hidden");
      panel.classList.remove("open");
      return;
    }

    wrap.classList.remove("hidden");
    countEl.innerText = String(missions.length);
    listEl.innerHTML = "";

    missions.forEach(function (m) {
      var li = document.createElement("li");
      var href = m.page || "index.html";
      var title = m.title || m.id || "Mission";
      var tag = m.type ? '<span class="text-xs text-gray-500 uppercase">' + m.type + "</span>" : "";
      li.innerHTML =
        '<a href="' + href + '" class="flex items-center justify-between gap-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:border-red-600 hover:bg-zinc-800 px-4 py-3 transition">' +
          '<span class="min-w-0">' +
            '<span class="block font-medium text-white text-sm sm:text-base truncate">' + title + "</span>" +
            tag +
          "</span>" +
          '<span class="text-red-400 text-sm shrink-0">Go →</span>' +
        "</a>";
      listEl.appendChild(li);
    });
  }

  function setupAlertToggle() {
    var btn = document.getElementById("ps-alert-btn");
    var panel = document.getElementById("ps-alert-panel");
    var closeBtn = document.getElementById("ps-alert-close");
    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      panel.classList.toggle("open");
    });
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        panel.classList.remove("open");
      });
    }
  }

  setupAlertToggle();

  fetch("data.json?t=" + Date.now())
    .then(function (r) { return r.json(); })
    .then(function (data) {
      return getUnfinishedMissions(data || {});
    })
    .then(function (missions) {
      renderAlert(missions);
    })
    .catch(function () {});
})();
