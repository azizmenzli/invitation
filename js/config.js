/* =====================================================================
   INVITATION SETTINGS — edit this file only.
   Every text has a French (fr) and Arabic (ar) version.
   Dates use Tunisia time: "YYYY-MM-DDTHH:MM:00+01:00"
   ===================================================================== */
window.INVITATION = {
  defaultLang: "fr",            // "fr" or "ar"  (guests can also use ?lang=ar in the link)
  showBismillah: true,          // shows "بسم الله الرحمن الرحيم" on the invitation page

  // ---- The couple ------------------------------------------------------
  names: {
    fr: ["Firas", "Mariem"],
    ar: ["فراس", "مريم"],
  },
  initials: "F&M",              // pressed into the wax seal of the envelope

  // ---- Cover (page 1 of the printed card — kept in English like the card)
  cover: {
    script: "These Kids",
    line: "Are getting",
    bold: "Married",
  },

  // ---- Main celebration (used for the invitation text, countdown, map & calendar)
  celebration: {
    date: "2026-12-13T15:30:00+01:00",
    durationHours: 2,             // 16h00 → 18h00
    // How the time is written in the invitation text ("" = automatic, e.g. "à 16h00")
    timeText: { fr: "", ar: "على الساعة الثالثة و النصف" },
    venue:   { fr: "Dar Bouraoui Carthage, Espace Malaga", ar: "Dar Bouraoui Carthage, Espace Malaga" },
    address: { fr: "Dar Bouraoui, 2046 Carthage, Tunisie", ar: "دار بوراوي، 2046 قرطاج، تونس" },
    mapQuery: "Dar Bouraoui Carthage",                   // text searched on Google Maps for the embedded map
    mapUrl:   "https://maps.app.goo.gl/1fxz9YUo3n8Fj7je7", // link for the "Directions" button
  },

  // ---- The families who invite (as on the card; the name part is shown in bold)
  families: [
    { title: { fr: "Monsieur", ar: "السيد" },        name: { fr: "Mohamed Ben Ammar", ar: "محمد بن عمّار" } },
    { title: { fr: "feu Monsieur", ar: "المرحوم" },  name: { fr: "Tarek Zarrouk",    ar: "طارق زرّوق" } },
  ],

  // ---- Quote ---------------------------------------------------------
  quote: {
    fr: "Hier, deux enfants aux grands yeux curieux ; demain, une famille. Il ne manque plus que vous pour fêter ça.",
    ar: "بالأمس كانا طفلين، واليوم يبدآن معًا حكاية العمر… ولا تكتمل الفرحة إلّا بحضوركم.",
  },

  // ---- Programme  (icon: "henna" | "rings" | "lantern" | "star")  — [] to hide the section
  //      "end" is optional: when set, the time is shown as a range (16h00 – 16h30)
  events: [
    {
      icon: "star",
      date: "2026-12-13T15:30:00+01:00",
      title: { fr: "Réception des invités", ar: "استقبال الضيوف" },
    },
    {
      icon: "rings",
      date: "2026-12-13T16:00:00+01:00",
      title: { fr: "Contrat de mariage", ar: "عقد القران" },
    },
    {
      icon: "lantern",
      date: "2026-12-13T16:30:00+01:00",
      title: { fr: "Fête de mariage", ar: "حفل الزفاف" },
    },
    {
      icon: "star",
      date: "2026-12-13T18:00:00+01:00",
      title: { fr: "Clôture", ar: "اختتام الحفل" },
    },
  ],

  // ---- Practical info (set to null to hide) ---------------------------
  dressCode: { fr: "Tenue de soirée — la tenue traditionnelle est la bienvenue", ar: "لباس سهرة — اللباس التقليدي مرحّب به" },

  // WhatsApp number in international format, digits only (216XXXXXXXX). "" to hide.
  contactWhatsapp: "21656837943",

  // ---- RSVP (answers are sent to this WhatsApp number) -----------------
  rsvp: {
    enabled: true,
    whatsapp: "21656837943",
    deadline: "2026-12-01T00:00:00+01:00",   // "" to hide the deadline line
    maxGuests: 10,
  },

  // ---- Background music: starts when the envelope is opened, loops, with a play/pause button.
  //      Put the song in /assets and write its path here ("" = no music).
  music: "assets/music.mp3",
  musicStart: 0,                // second of the song to start from (skip a long intro)
};
