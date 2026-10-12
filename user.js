// Firefox: always restore the previous session's windows and tabs on startup.
// Copy this file into your Firefox profile folder (about:profiles -> Root Directory)
// and restart Firefox. Prefs here are re-applied on every launch.

// 3 = restore previous session (same as Settings > General > "Open previous windows and tabs")
user_pref("browser.startup.page", 3);

// Restore after a crash too
user_pref("browser.sessionstore.resume_from_crash", true);

// Session restore is silently disabled if history is wiped on exit or in permanent private mode
user_pref("browser.privatebrowsing.autostart", false);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

// Remember more closed tabs/windows for Ctrl+Shift+T / Ctrl+Shift+N (defaults: 25 / 3)
user_pref("browser.sessionstore.max_tabs_undo", 50);
user_pref("browser.sessionstore.max_windows_undo", 10);
