window.TEAMSIGNUPS_CONFIG = {
  // Keep Google active until the Supabase test has passed.
  storageProvider: "google",

  // Paste your deployed Google Apps Script Web App URL here.
  // This remains available as a fallback during the migration.
  googleScriptUrl: "https://script.google.com/macros/s/AKfycby6dRRN71zCkZD3hum51RkhgfqZn6cgOgCFom-DPE4OAC6iMzd6hFOF5Gb8ut5DzlyS/exec",

  // Fill these in after creating the Supabase project. Never put the
  // service-role key in this public file.
  supabaseUrl: "",
  supabaseAnonKey: "",

  // The copied browser-visible password is intentionally disabled. The creator
  // page will use Supabase Authentication before this test becomes production.
  creatorPassword: ""
};
