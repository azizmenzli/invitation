/* =====================================================================
   INVITATION SETTINGS — edit this file only.
   Every text has a French (fr) and Arabic (ar) version.
   Dates use Tunisia time: "YYYY-MM-DDTHH:MM:00+01:00"
   ===================================================================== */
window.INVITATION = {
  defaultLang: "fr",            // "fr" or "ar"  (guests can also use ?lang=ar in the link)
  showBismillah: true,          // shows "بسم الله الرحمن الرحيم" at the top of the hero

  // ---- The couple ------------------------------------------------------
  names: {
    fr: ["Firas", "Mariem"],
    ar: ["فراس","مريم"],
  },
  initials: "F·M",              // shown on the seal of the door

  // ---- Main celebration (used for countdown, map & calendar) ------------
  celebration: {
    date: "2026-12-13T16:00:00+01:00",
    durationHours: 2,
    venue:   { fr: "Dar Bouraoui Carthage",            ar: "قاعة الياسمين" },
    address: { fr: "DAR BOURAOUI, 2046 Carthage, Tunisia", ar: "طريق المرسى، قمرت، تونس" },
    mapQuery: "Cartahge, Tunis",                    // text searched on Google Maps for the embedded map
    mapUrl:   "https://maps.app.goo.gl/1fxz9YUo3n8Fj7je7", // link for the "Directions" button
  },

  // ---- Quote ---------------------------------------------------------
  quote: {
    fr: "Fil après fil, nos chemins se sont brodés l'un à l'autre. Il ne manque plus que vous pour compléter le motif.",
    ar: "خيطًا بعد خيط، تطرّزت دروبنا معًا… ولا يكتمل النقش إلّا بحضوركم.",
  },

  // ---- Families (hosts) ----------------------------------------------
  families: [
    {
      label: { fr: "Famille de la marié", ar:"عائلة العريس" },
      names: { fr: "Monsieur Mohamed Ben Amar", ar: "السيّد محمد بن علي\nوالسيّدة ليلى بن علي" },
    },
    {
      label: { fr: "Famille du mariée", ar: "عائلة العروس" },
      names: { fr: "Monsieur Tarek Zarrouk", ar: "السيّد هشام الطرابلسي\nوالسيّدة سنية الطرابلسي" },
    },
  ],

  // ---- Programme  (icon: "henna" | "rings" | "lantern" | "star") -------
  events: [
   
    {
      icon: "rings",
      date: "2027-06-18T17:00:00+01:00",
      title: { fr: "Contrat de mariage", ar: "عقد القران" },
    
      
    },
    {
      icon: "lantern",
      date: "2027-06-19T20:00:00+01:00",
      title: { fr: "Fête de mariage", ar: "حفل الزفاف" },
    },
  ],

  // ---- Practical info (set to null to hide) ---------------------------
  dressCode: { fr: "Tenue de soirée — la tenue traditionnelle est la bienvenue", ar: "لباس سهرة — اللباس التقليدي مرحّب به" },

  // WhatsApp number in international format, digits only (216XXXXXXXX). "" to hide.
  contactWhatsapp: "21620000000",

  // ---- RSVP (answers are sent to this WhatsApp number) -----------------
  rsvp: {
    enabled: true,
    whatsapp: "21620000000",
    deadline: "2027-06-01T00:00:00+01:00",   // "" to hide the deadline line
    maxGuests: 10,
  },

  // ---- Background music: put an mp3 in /assets and write its path, e.g. "assets/music.mp3" ("" = no music)
  music: "",
};
