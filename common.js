(function () {
  const NAV = [
    { href: "index.html", key: "navHome", en: "Home" },
    { href: "series-trends.html", key: "navTrends", en: "Trends" },
    { href: "daily-missions.html", key: "navMissions", en: "Missions" },
    { href: "youtube-streaming.html", key: "navYoutube", en: "YouTube" },
    { href: "ig-engagement.html", key: "navIg", en: "Instagram" }
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
      card4Btn: "Open Engagement →"
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
      card4Btn: "Open Engagement →"
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
      card4Btn: "Open Engagement →"
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
      card4Btn: "Open Engagement →"
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
    document.documentElement.lang = lang === "vi" ? "vi" : lang === "th" ? "th" : lang === "my" ? "my" : "en";
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

  const bar = document.createElement("header");
  bar.className = "sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur";
  bar.innerHTML =
    '<div class="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex flex-wrap items-center gap-3">' +
      '<a href="index.html" class="font-bold tracking-tight text-white mr-auto">PerthSanta <span class="text-red-500">Hub</span></a>' +
      '<nav class="flex flex-wrap gap-1">' + links + "</nav>" +
      '<select id="language" onchange="psChangeLanguage()" class="bg-zinc-950 border border-zinc-700 text-white text-sm rounded-lg px-2 py-1.5">' +
        '<option value="en">EN</option><option value="vi">VI</option><option value="th">TH</option><option value="my">MY</option>' +
      "</select>" +
    "</div>";

    document.body.insertBefore(bar, document.body.firstChild);
  document.getElementById("language").value = lang;
  window.psApplyLang(lang);

  if (here !== "index.html" && here !== "") {
    const back = document.createElement("div");
    back.className = "max-w-6xl mx-auto px-4 pt-4";
    back.innerHTML = '<a href="index.html" class="inline-flex items-center text-red-500 hover:text-red-400 text-sm font-medium">← Back to Home</a>';
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
})();
