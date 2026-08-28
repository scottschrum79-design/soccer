window.TEAMSIGNUPS_CONFIG = {
  // Keep Google active until the Supabase test has passed.
  storageProvider: "google",

  // Paste your deployed Google Apps Script Web App URL here.
  // This remains available as a fallback during the migration.
  googleScriptUrl: "https://script.google.com/macros/s/AKfycbwicKv13R4Nxsx6G_-9eTNZSQqIuEXvNO7Zit3gI2sgUAlSYNVZ4Czd-2feDMRCw6bJ/exec",

  // Fill these in after creating the Supabase project. Never put the
  // service-role key in this public file.
  supabaseUrl: "",
  supabaseAnonKey: "",

  // The copied browser-visible password is intentionally disabled. The creator
  // page will use Supabase Authentication before this test becomes production.
  creatorPassword: ""
};
