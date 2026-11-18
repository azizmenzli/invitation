(() => {
  "use strict";

  const C = window.INVITATION;
  const TZ = "Africa/Tunis";

  /* ------------------------------------------------------------------ *
   * Interface texts
   * ------------------------------------------------------------------ */
  const I18N = {
    fr: {
      introFor: "Invitation spéciale pour",
      introKicker: "Vous avez reçu une invitation",
      introHint: "Touchez le cachet pour ouvrir",
      skip: "Passer l'animation",
      openEnvelope: "Ouvrir l'invitation",
      scroll: "Découvrir",
      blessing: "Qu'Allah les bénisse, répande Sa bénédiction sur eux et les unisse dans le bien.",
      hostsLead: "Les familles de",
      inviteText: "ont l'honneur de vous convier au mariage de leurs enfants",
      when: "qui sera célébré, si Dieu le veut, le",
      at: "à",
      atHall: "à la salle des fêtes",
      wish: "Que vos foyers demeurent toujours emplis de joie et de bonheur.",
      programEyebrow: "Les moments à partager",
      programTitle: "Programme",
      directions: "Itinéraire",
      countdownEyebrow: "Le compte à rebours",
      countdownTitle: "Avant le grand jour",
      days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes",
      today: "C'est aujourd'hui !",
      after: "Merci d'avoir partagé ce jour avec nous",
      venueEyebrow: "Rendez-vous",
      venueTitle: "Le lieu de la fête",
      addCal: "Ajouter à votre agenda",
      gcal: "Google",
      ics: "Apple / Outlook",
      dress: "Tenue",
      contact: "Une question ?",
      contactBtn: "Écrivez-nous",
      rsvpEyebrow: "Votre réponse",
      rsvpTitle: "Confirmez votre présence",
      rsvpDeadline: "Merci de nous répondre avant le",
      rsvpAttend: "Serez-vous des nôtres ?",
      yes: "Avec joie, je serai là",
      no: "Je ne pourrai pas venir",
      rsvpName: "Nom et prénom",
      rsvpNamePh: "Ex. Famille Ben Salah",
      rsvpGuests: "Nombre de personnes",
      rsvpSide: "Vous êtes invité(e) par",
      sideBride: "La famille de la mariée",
      sideGroom: "La famille du marié",
      rsvpMsg: "Un mot pour les mariés",
      rsvpMsgPh: "Facultatif",
      rsvpErr: "Merci de compléter les champs marqués d'une *.",
      send: "Envoyer ma réponse",
      rsvpNote: "Votre réponse sera envoyée par WhatsApp.",
      rsvpThanks: "Merci ! Votre réponse est prête dans WhatsApp — il ne vous reste qu'à l'envoyer.",
      rsvpAgain: "Modifier ma réponse",
      closingTitle: "Au plaisir de vous accueillir",
      replay: "Revoir l'ouverture",
      langBtn: "ع", langLabel: "عرض الدعوة بالعربية",
      docTitle: "Invitation Mariage",
      waHello: "Bonjour ! Voici ma réponse à l'invitation au mariage de",
      waName: "Nom", waAttend: "Présence", waYes: "Oui, avec joie", waNo: "Malheureusement non",
      waGuests: "Nombre de personnes", waSide: "Invité(e) par", waMsg: "Message",
      calTitle: "Mariage de",
      and: " et ",      // non-breaking: the joiner stays with the next name
    },
    ar: {
      introFor: "دعوة خاصّة إلى",
      introKicker: "وصلتكم دعوة",
      introHint: "المسوا الختم لفتح الدعوة",
      skip: "تخطّي",
      openEnvelope: "افتح الدعوة",
      scroll: "اكتشف",
      blessing: "بارك الله لهما وبارك عليهما وجمع بينهما بالخير والبركة",
      hostsLead: "تتشرف عائلتنا",
      inviteText: "بدعوتكم لحضور حفل زفاف ابنيهما",
      when: "وذلك بمشيئة الله تعالى يوم",
      at: "على الساعة",
      atHall: "بقاعة الأفراح",
      wish: "دامت دياركم عامرة بالأفراح والمسرات",
      programEyebrow: "لحظات نتقاسمها معكم",
      programTitle: "برنامج الحفل",
      directions: "الاتجاهات",
      countdownEyebrow: "العدّ التنازلي",
      countdownTitle: "على موعد مع اليوم الكبير",
      days: "أيام", hours: "ساعات", minutes: "دقائق", seconds: "ثوانٍ",
      today: "اليوم هو اليوم الكبير!",
      after: "شكرًا لمشاركتكم فرحتنا",
      venueEyebrow: "الموعد",
      venueTitle: "مكان الحفل",
      addCal: "أضيفوا الموعد إلى التقويم",
      gcal: "Google",
      ics: "Apple / Outlook",
      dress: "اللباس",
      contact: "لأيّ استفسار",
      contactBtn: "راسلونا",
      rsvpEyebrow: "ردّكم",
      rsvpTitle: "تأكيد الحضور",
      rsvpDeadline: "نرجو الردّ قبل",
      rsvpAttend: "هل ستشاركوننا الفرحة؟",
      yes: "بكلّ سرور، سأحضر",
      no: "أعتذر عن الحضور",
      rsvpName: "الاسم واللقب",
      rsvpNamePh: "مثال: عائلة بن صالح",
      rsvpGuests: "عدد الأشخاص",
      rsvpSide: "مدعوّ من طرف",
      sideBride: "عائلة العروس",
      sideGroom: "عائلة العريس",
      rsvpMsg: "كلمة للعروسين",
      rsvpMsgPh: "اختياري",
      rsvpErr: "يرجى إكمال الخانات المشار إليها بـ *.",
      send: "إرسال الردّ",
      rsvpNote: "سيتمّ إرسال ردّكم عبر واتساب.",
      rsvpThanks: "شكرًا! ردّكم جاهز في واتساب، ما عليكم سوى إرساله.",
      rsvpAgain: "تعديل الردّ",
      closingTitle: "دامت دياركم عامرة بالأفراح والمسرات",
      replay: "إعادة مشاهدة الافتتاح",
      langBtn: "FR", langLabel: "Voir l'invitation en français",
      docTitle: "دعوة لحضور حفل زفاف",
      waHello: "السلام عليكم! هذا ردّي على دعوة حفل زفاف",
      waName: "الاسم", waAttend: "الحضور", waYes: "نعم، بكلّ سرور", waNo: "للأسف لا",
      waGuests: "عدد الأشخاص", waSide: "مدعوّ من طرف", waMsg: "الرسالة",
      calTitle: "حفل زفاف",
      and: " و ",
    },
  };

  /* ------------------------------------------------------------------ *
   * Helpers
   * ------------------------------------------------------------------ */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const params = new URLSearchParams(location.search);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
  };

  let lang = ["fr", "ar"].includes(params.get("lang")) ? params.get("lang")
    : ["fr", "ar"].includes(store.get("inv-lang")) ? store.get("inv-lang")
    : C.defaultLang || "fr";

  const t = (k) => I18N[lang][k] ?? I18N.fr[k] ?? k;
  const L = (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] ?? v.fr ?? "");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cap = (s) => (lang === "fr" && s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  const pad = (n) => String(n).padStart(2, "0");
  const latinNames = () => C.names.fr || C.names[lang];
  const couple = () => {
    const [a, b] = C.names[lang] || C.names.fr;
    return lang === "ar" ? `${a} و ${b}` : `${a} & ${b}`;   // keeps "& Mariem" together when it wraps
  };

  /** Date parts in Tunisia time, in the current language. */
  function dateParts(iso) {
    const d = new Date(iso);
    const locale = lang === "ar" ? "ar-TN-u-nu-latn" : "fr-FR";
    const fmt = new Intl.DateTimeFormat(locale, {
      timeZone: TZ, weekday: "long", day: "numeric", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    });
    const p = {};
    fmt.formatToParts(d).forEach(({ type, value }) => { p[type] = value; });
    const time = lang === "fr" ? `${p.hour}h${p.minute}` : `${p.hour}:${p.minute}`;
    if (lang === "fr" && p.day === "1") p.day = "1er";
    return {
      wd: p.weekday, weekday: cap(p.weekday), day: p.day, month: p.month, year: p.year, time,
      dayMonthYear: `${p.day} ${p.month} ${p.year}`,
      long: `${cap(p.weekday)} ${p.day} ${p.month} ${p.year}`,
      short: `${cap(p.weekday)} ${p.day} ${p.month}`,
    };
  }

  /** "13 · 12 · 2026" */
  function numericDate(iso) {
    const p = {};
    new Intl.DateTimeFormat("en-GB", { timeZone: TZ, day: "2-digit", month: "2-digit", year: "numeric" })
      .formatToParts(new Date(iso)).forEach(({ type, value }) => { p[type] = value; });
    return `${p.day} · ${p.month} · ${p.year}`;
  }

  /* ------------------------------------------------------------------ *
   * Rendering
   * ------------------------------------------------------------------ */
  const guestName = (params.get("to") || params.get("invite") || "").trim().slice(0, 80);

  function render() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${t("docTitle")} ${couple()}`;

    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });

    const latin = latinNames();
    $$("[data-latin-name]").forEach((el) => { el.textContent = latin[+el.dataset.latinName]; });
    $$("[data-couple-latin]").forEach((el) => { el.textContent = `${latin[0]} & ${latin[1]}`; });
    $$("[data-couple]").forEach((el) => { el.textContent = couple(); });
    $$("[data-initials]").forEach((el) => { el.textContent = C.initials || ""; });
    const cover = C.cover || {};
    $$("[data-cover]").forEach((el) => { el.textContent = cover[el.dataset.cover] || ""; });

    const langBtn = $("#langToggle");
    langBtn.textContent = t("langBtn");
    langBtn.setAttribute("aria-label", t("langLabel"));
    langBtn.title = t("langLabel");

    // Personal greeting (?to=Famille%20Ben%20Salah)
    $("#introFor").hidden = !guestName;
    $("#guestName").textContent = guestName;

    // Cover
    const cel = C.celebration;
    const main = dateParts(cel.date);
    $("#coverDate").textContent = numericDate(cel.date);
    $("#envDate").textContent = numericDate(cel.date);
    $("#kidsImg").alt = `${latin[0]} & ${latin[1]}`;

    // The invitation text
    $("#bismillah").hidden = !C.showBismillah;
    $("#hosts").innerHTML = (C.families || [])
      .map((f) => `${esc(L(f.title))} <b>${esc(L(f.name))}</b>`)
      .join(esc(t("and")));
    $("#letterWhen").textContent = `${t("when")} ${main.wd}`;
    $("#letterDate").textContent = main.dayMonthYear;
    const timeText = L(cel.timeText) || `${t("at")} ${main.time}`;
    $("#letterTime").textContent = lang === "fr" ? `${timeText}, ${t("atHall")}` : `${timeText} ${t("atHall")}`;
    $("#letterVenue").textContent = L(cel.venue);
    $("#closingDate").textContent = main.long;

    // Quote
    $("#quote").hidden = !L(C.quote);
    $("#quoteText").textContent = L(C.quote);

    // Programme
    const events = C.events || [];
    $("#program").hidden = events.length === 0;
    $("#events").innerHTML = events.map((e) => {
      const d = dateParts(e.date);
      const time = e.end ? `${d.time} – ${dateParts(e.end).time}` : d.time;
      const icon = ["henna", "rings", "lantern", "star"].includes(e.icon) ? e.icon : "star";
      return `
      <li class="event reveal">
        <div class="event__icon"><svg aria-hidden="true"><use href="#i-${icon}"/></svg></div>
        <div class="event__card">
          <p class="event__when">${esc(d.short)} · ${esc(time)}</p>
          <h3 class="event__title">${esc(L(e.title))}</h3>
        </div>
      </li>`;
    }).join("");

    // Venue
    $("#venueName").textContent = L(cel.venue);
    $("#venueAddress").textContent = L(cel.address);
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(cel.mapQuery || L(cel.address))}&z=15&hl=${lang}&output=embed`;
    const frame = $("#mapFrame");
    if (frame.getAttribute("src") !== mapSrc) frame.setAttribute("src", mapSrc);
    $("#venueDirections").href = cel.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(cel.mapQuery || "")}`;
    $("#gcal").href = googleCalendarUrl();

    // RSVP
    $("#rsvp").hidden = !(C.rsvp && C.rsvp.enabled && C.rsvp.whatsapp);
    if (C.rsvp && C.rsvp.deadline) {
      const dl = dateParts(C.rsvp.deadline);
      $("#rsvpDeadline").textContent = `${t("rsvpDeadline")} ${dl.dayMonthYear}`;
    } else {
      $("#rsvpDeadline").hidden = true;
    }

    observeReveals();
    tick();
  }

  /* ------------------------------------------------------------------ *
   * Scroll reveal (fade-ups, swashes, and pen-drawn corner flourishes)
   * ------------------------------------------------------------------ */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" })
    : null;

  function observeReveals() {
    $$(".reveal:not(.in), .page .corner:not(.in)").forEach((el) => {
      if (el.closest(".cover")) return;
      io ? io.observe(el) : el.classList.add("in");
    });
  }

  /* ------------------------------------------------------------------ *
   * Intro envelope
   * ------------------------------------------------------------------ */
  const intro = $("#intro");
  const envelope = $("#envelope");
  let opened = false;
  const timers = [];

  function openInvitation(instant) {
    if (opened) return;
    opened = true;
    envelope.disabled = true;
    playMusic();

    if (instant || reducedMotion) {
      intro.classList.add("is-opening", "is-entering", "is-gone");
      reveal();
      return;
    }
    intro.classList.add("is-opening");
    timers.push(setTimeout(() => intro.classList.add("is-entering"), 2050));
    timers.push(setTimeout(() => { intro.classList.add("is-gone"); reveal(); }, 2650));
  }

  function reveal() {
    window.scrollTo(0, 0);
    document.body.classList.remove("is-locked");
    document.body.classList.add("is-open");
    if (C.music && !musicFailed) $("#musicToggle").hidden = false;
  }

  function replayIntro() {
    timers.splice(0).forEach(clearTimeout);
    document.body.classList.add("is-locked");
    document.body.classList.remove("is-open");
    window.scrollTo(0, 0);
    intro.classList.remove("is-gone", "is-entering", "is-opening");
    envelope.disabled = false;
    opened = false;
  }

  envelope.addEventListener("click", () => openInvitation(false));
  $("#skip").addEventListener("click", () => openInvitation(true));
  $("#replay").addEventListener("click", replayIntro);

  /* ------------------------------------------------------------------ *
   * Countdown
   * ------------------------------------------------------------------ */
  const target = new Date(C.celebration.date).getTime();
  const endOfParty = target + (C.celebration.durationHours || 6) * 3600e3;
  const cdEls = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };

  function tick() {
    const now = Date.now();
    const diff = target - now;
    const grid = $("#countdown");
    const done = $("#countdownDone");
    if (diff <= 0) {
      grid.hidden = true;
      done.hidden = false;
      done.textContent = now < endOfParty + 12 * 3600e3 ? t("today") : t("after");
      return;
    }
    const s = Math.floor(diff / 1000);
    cdEls.d.textContent = pad(Math.floor(s / 86400));
    cdEls.h.textContent = pad(Math.floor((s % 86400) / 3600));
    cdEls.m.textContent = pad(Math.floor((s % 3600) / 60));
    cdEls.s.textContent = pad(s % 60);
  }
  setInterval(tick, 1000);

  /* ------------------------------------------------------------------ *
   * Calendar
   * ------------------------------------------------------------------ */
  const utcStamp = (ms) => new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const calTitle = () => `${t("calTitle")} ${couple()}`;
  const calPlace = () => [L(C.celebration.venue), L(C.celebration.address)].filter(Boolean).join(", ");

  function googleCalendarUrl() {
    const q = new URLSearchParams({
      action: "TEMPLATE",
      text: calTitle(),
      dates: `${utcStamp(target)}/${utcStamp(endOfParty)}`,
      location: calPlace(),
      details: location.href.split("?")[0],
    });
    return `https://calendar.google.com/calendar/render?${q}`;
  }

  function downloadIcs() {
    const icsEsc = (s) => String(s).replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Invitation//Mariage//FR", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${target}-mariage@invitation`,
      `DTSTAMP:${utcStamp(Date.now())}`,
      `DTSTART:${utcStamp(target)}`,
      `DTEND:${utcStamp(endOfParty)}`,
      `SUMMARY:${icsEsc(calTitle())}`,
      `LOCATION:${icsEsc(calPlace())}`,
      `DESCRIPTION:${icsEsc(location.href.split("?")[0])}`,
      "BEGIN:VALARM", "TRIGGER:-P1D", "ACTION:DISPLAY", `DESCRIPTION:${icsEsc(calTitle())}`, "END:VALARM",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "mariage.ics" });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }
  $("#ics").addEventListener("click", downloadIcs);

  /* ------------------------------------------------------------------ *
   * RSVP → WhatsApp
   * ------------------------------------------------------------------ */
  const form = $("#rsvpForm");
  const maxGuests = (C.rsvp && C.rsvp.maxGuests) || 10;
  let guests = 1;

  if (guestName) form.elements.name.value = guestName;

  $$(".stepper__btn", form).forEach((b) => b.addEventListener("click", () => {
    guests = Math.min(maxGuests, Math.max(1, guests + Number(b.dataset.step)));
    $("#guestsVal").textContent = guests;
  }));

  const syncAttend = () => { $("#guestsField").hidden = form.elements.attend.value === "no"; };
  $$('input[name="attend"]', form).forEach((r) => r.addEventListener("change", syncAttend));

  form.addEventListener("input", (e) => {
    e.target.classList.remove("is-invalid");
    if (e.target.name === "side") e.target.closest(".choices").classList.remove("is-invalid");
    $("#rsvpError").hidden = true;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const side = form.elements.side.value;
    const attending = form.elements.attend.value === "yes";
    const message = form.elements.message.value.trim();

    form.elements.name.classList.toggle("is-invalid", !name);
    $('input[name="side"]', form).closest(".choices").classList.toggle("is-invalid", !side);
    if (!name || !side) {
      $("#rsvpError").hidden = false;
      (name ? $('input[name="side"]', form) : form.elements.name).focus();
      return;
    }

    const lines = [
      `${t("waHello")} ${couple()}`,
      "",
      `• ${t("waName")} : ${name}`,
      `• ${t("waAttend")} : ${attending ? t("waYes") : t("waNo")}`,
      attending ? `• ${t("waGuests")} : ${guests}` : null,
      `• ${t("waSide")} : ${side === "bride" ? t("sideBride") : t("sideGroom")}`,
      message ? `• ${t("waMsg")} : ${message}` : null,
    ].filter((l) => l !== null);

    const url = `https://wa.me/${C.rsvp.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    const win = window.open(url, "_blank", "noopener");
    if (!win) location.href = url;

    form.hidden = true;
    $("#rsvpThanks").hidden = false;
  });

  $("#rsvpAgain").addEventListener("click", () => {
    $("#rsvpThanks").hidden = true;
    form.hidden = false;
  });

  /* ------------------------------------------------------------------ *
   * Music
   * ------------------------------------------------------------------ */
  const musicBtn = $("#musicToggle");
  const MUSIC_VOLUME = 0.55;
  let audio = null;
  let musicFailed = false;
  let userPaused = false;

  // Load the song as soon as the page opens, so it starts instantly when the seal is tapped.
  if (C.music) {
    audio = new Audio();
    audio.src = C.music;
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audio.addEventListener("error", () => { musicFailed = true; musicBtn.hidden = true; });
    if (C.musicStart) {
      audio.addEventListener("loadedmetadata", () => { audio.currentTime = C.musicStart; }, { once: true });
    }
  }

  /** Gentle fade so the music doesn't start abruptly. */
  function fadeIn() {
    const start = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - start) / 2500);
      audio.volume = MUSIC_VOLUME * k;
      if (k < 1 && !audio.paused) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function playMusic() {
    if (!audio || musicFailed) return;
    userPaused = false;
    audio.volume = 0;
    audio.play()
      .then(() => { musicBtn.classList.add("is-playing"); fadeIn(); })
      .catch(() => {
        // Browser blocked autoplay (no tap yet, e.g. link opened with ?open):
        // start on the guest's first touch / click / key instead.
        musicBtn.classList.remove("is-playing");
        armFirstGesture();
      });
  }

  let armed = false;
  function armFirstGesture() {
    if (armed) return;
    armed = true;
    const kick = (e) => {
      if (e.target.closest && e.target.closest("#musicToggle")) return; // the button handles itself
      ["pointerdown", "keydown", "touchstart"].forEach((ev) => document.removeEventListener(ev, kick, true));
      armed = false;
      if (!userPaused && audio.paused) playMusic();
    };
    ["pointerdown", "keydown", "touchstart"].forEach((ev) => document.addEventListener(ev, kick, true));
  }

  musicBtn.addEventListener("click", () => {
    if (!audio) return;
    if (audio.paused) playMusic();
    else { userPaused = true; audio.pause(); musicBtn.classList.remove("is-playing"); }
  });
  document.addEventListener("visibilitychange", () => {
    if (!audio) return;
    if (document.hidden) audio.pause();
    else if (musicBtn.classList.contains("is-playing")) audio.play().catch(() => {});
  });

  /* ------------------------------------------------------------------ *
   * Language switch
   * ------------------------------------------------------------------ */
  $("#langToggle").addEventListener("click", () => {
    lang = lang === "fr" ? "ar" : "fr";
    store.set("inv-lang", lang);
    render();
  });

  render();
  if (params.has("open")) openInvitation(true);   // ?open → skip the envelope (handy when re-sharing)
})();
