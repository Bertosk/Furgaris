# Furgaris — Changelog

Every notable change, newest first. Entries say what changed and why, so the reasoning survives even when the code moves on.

This file is the only changelog. It is not part of the application file that is distributed.

Earlier releases were published as **BrowserSentinel** and **Cancerbero**. Older entries keep the names used at the time.

## v5.20.3 — Support links finalised

*4 October 2026*

- **Changed:** The Ko-fi button now uses the page's readable address, `ko-fi.com/albertslovakia`. It is the same Ko-fi page as before.
- **Changed:** The second support button now opens Albert's GitHub profile and is labelled "GitHub". It said "GitHub Sponsors", but Sponsors is not yet enabled on the account, so that label would have promised something the page doesn't offer.
- **Removed:** The "GitHub Sponsors is coming soon" note, and its translations. Both buttons now lead somewhere real.
- **Changed (desktop app):** The installer, the program and its Start menu entry are now named Furgaris (`"productName"` in package.json). The data folder is pinned to its existing location, `browsersentinel`, so stored cases are found as before.

## v5.20.2 — Ko-fi support link

*4 October 2026*

- **Changed:** The Ko-fi button in About & Legal now opens Albert's Ko-fi page, in English, Catalan and Spanish, using Ko-fi's colour and the label "Support me on Ko-fi".
- **Security:** It is a plain link, not Ko-fi's widget script. The widget would have needed the Content Security Policy opened to a third-party server, letting outside code run with access to case data and the stored API key. As a link, Furgaris makes no contact with Ko-fi unless someone clicks it.
- **Changed:** The note under the support buttons now says only that GitHub Sponsors is coming soon.

## v5.20.1 — Windows only; the version shown everywhere

*4 October 2026*

- **Changed:** The version in the window title and the header now comes from the app's single version number, so it can no longer go stale. It previously read "v.2" whatever the real version was.
- **Fixed:** The Investigation Log, the Investigation Report and the Verification Report still carried the old BrowserSentinel name and "v.2". They now say Furgaris and show the real version.
- **Changed:** Case backups are now named `furgaris-cases-<date>`.
- **Unchanged, deliberately:** The internal database name, `browsersentinel`. Renaming it would make every stored case disappear.
- **Changed (user guide):** Installation covers Windows only. The macOS and Linux installers it described were never built. The guide also now names the installer by what is certain (a file ending in `Setup.exe`), shows the Windows "Windows protected your PC" message, and gives the right Python command for Windows (`python`, not `python3`), which is not preinstalled.

**Why:** One platform done properly is simpler for everyone than three promised and one delivered.

## v5.20.0 — Renamed to Furgaris; changelog moved out of the app

*4 October 2026*

- **Changed:** The application is now called Furgaris, everywhere the name appears: the interface in all three languages, reports, exports, the user guide, the licence and the desktop packaging files.
- **Changed:** Case-data exports now identify themselves as Furgaris. Files exported by earlier versions, which say Cancerbero, still import.
- **Unchanged, deliberately:** Sealed and encrypted exports still identify themselves as Cancerbero. The standalone verifier may check that value, so it will change only together with the verifier.
- **Unchanged, deliberately:** The desktop app's internal name, `browsersentinel`. Windows uses it to find stored cases, so changing it would make existing cases appear to vanish.
- **Removed:** The changelog card in About & Legal. The history now lives in this file, so the distributed application contains only the application.
- **Changed:** Licence version 1.1. The product is renamed; the terms are unchanged.

**Why:** A new name for the public launch. The renaming was done so that nothing a user already has stops working: existing cases, saved backups and sealed exports.

## v5.19.0 — Evidence fingerprints that match standard tools

*September 2026*

- **Changed:** An evidence fingerprint is now the SHA-256 of the file's actual bytes, or of the description text exactly as stored when no file is attached. That is the value `sha256sum`, VirusTotal and forensic tools produce. Screen captures already worked this way; evidence added through the form did not.
- **Added:** For evidence recorded earlier, the correct byte-level SHA-256 is added alongside the original value, with a chain-of-custody entry and an audit-log note. Original values are never rewritten, because they appear in the audit log and in exports already issued.
- **Added:** If an item's stored fingerprint matches neither its file nor its original encoding, its evidence card shows a warning and the audit log records it.
- **Changed:** Reports, exports, the AI fact sheet, the expert-report annex and sealed exports all use the corrected fingerprint.
- **Fixed:** Saving evidence now stops with an error if the fingerprint cannot be computed, instead of recording one computed another way.

**Why:** Evidence added through the form was fingerprinted over the file's internal encoding, so no standard tool could reproduce the value. Anyone checking a fingerprint independently would have found a mismatch.

## v5.18.0 — Indicators found in evidence

*September 2026*

- **Added:** Indicators found inside evidence (IP addresses, domains, email addresses, URLs, hashes) can be added to the case's Entities. A confirmation dialog always shows what was found; nothing is added silently. A Scan evidence button re-checks existing items.
- **Added:** A file's SHA-256 can be offered as an indicator, linked to its evidence item. It is unticked by default for images.
- **Changed:** Every way of adding an indicator (by hand, from the canvas, from Agent Search, from evidence) now goes through one shared path.
- **Fixed:** Indicators saved by Agent Search were missing their normalised value, so they never appeared in cross-case correlation. Existing cases are repaired when they load.

## v5.17.0 — Task builder

*September 2026*

- **Added:** Add tasks from 103 preset tasks drawn from all eight workflows, or write your own, marked CUSTOM.
- **Added:** Delete tasks, with confirmation. Every addition and deletion is written to the audit log.
- **Unchanged:** New cases still start with their workflow's own task list.

## v5.16.0 — Code audit

*September 2026*

- **Changed:** Full code audit: no inline event handlers, no `eval`, no debug logging, and every one of about 170 places that insert HTML checked for escaping.
- **Removed:** 36 unused translation entries, and a duplicated unsupported-browser check.
- **Changed:** Firefox and Safari users now see a notice that names their browser.
- **Added:** The seal-decryption function is documented and available to the standalone verifier.

## v5.15.0 — Save As, and protection against losing cases

*12 September 2026*

- **Added:** Save As: keep the cases you have and start writing them to a different file. Use it to move your work, or to keep a dated copy.
- **Added:** A file-state indicator in the Investigation Task header, showing which file the cases are being written to. It turns amber and reads "browser storage only" when no file is chosen. Clicking it saves immediately, or asks where to save.
- **Added:** On the first case you create, Cancerbero offers once to choose a file, explaining plainly that browser storage is lost if you clear browsing data or change machine.
- **Added:** Persistent storage is requested from the browser at startup, so cases are not evicted when disk space runs low.
- **Changed:** Save with no file open now offers to choose one, instead of reporting that no file is open.
- **Fixed:** The file-state indicator rendered blank because it was looked up before the header was placed on the page.

**Why:** Cases were held in browser storage unless the user found the File Storage card on the Cases tab. Anyone who cleared browsing data lost their work. Saving to a file was already supported and automatic; it simply was not visible where the work happens.

**Browser support** Writing directly to a file needs the File System Access API. Chromium browsers and the desktop build support it; Firefox and Safari fall back to Export JSON.

## v5.14.0 — Screen capture, and privacy tooling links

*12 September 2026*

- **Added:** Screen capture straight into a case. Capture in the Evidence section, choose a screen or window, drag a region. The image is fingerprinted with SHA-256 at the moment of capture, given a chain-of-custody entry, and written to the audit log. Nothing is uploaded.
- **Added:** Links of Interest gained a Privacy & Tooling group: Tor, three VPN providers with jurisdiction and audit status, Cloudflare WARP with its limitations stated, and three translation services. No endorsements and no affiliate links.
- **Added:** A "Your connection" card at the top of OPSEC, stating plainly that Cancerbero does not route or hide traffic, and listing what to check before sensitive research.
- **Fixed:** An incorrect URL for one of the VPN providers, caught before release.

**Why:** A screenshot attached after the fact can only be fingerprinted from the moment it was attached. Capturing inside the tool means the fingerprint and custody record exist from the instant the image was made, which is a materially stronger position if it is ever questioned.

**In the desktop build** Electron needs a display-media handler configured in the main process, or the Capture button does nothing. See the Packaging SOP.

## v5.13.0 — User Guide tab removed from the application

*12 September 2026*

- **Removed:** The User Guide tab, its landing page and the code behind it. The guide ships as a separate file and is sent alongside the application.
- **Removed:** 15 further translation keys and two stale style rules left behind by the guide.
- **Changed:** The application dropped to 1,742 KB. The tab bar is now eight tabs.

**Why:** Shipping the guide as its own document made the in-app copy redundant. Removing it took roughly 2,400 lines out of the file being worked on every day.

## v5.12.0 — User Guide moved out of the application

*12 September 2026*

- **Changed:** The complete User Guide now ships as a separate file, User_Guide_ENG_CAT_ESP.html, placed next to the application. The application dropped from 1,970 KB to 1,751 KB.
- **Added:** A compact guide landing page inside the app: a quick-start summary and a link that opens the full guide.
- **Added:** The standalone guide has its own language switcher (EN / CA / ES), light and dark themes, working section navigation and a print-friendly layout.
- **Removed:** 42 guide translation keys that no longer had any markup to fill, and the now-unused in-app guide navigation handler.

**Why:** The guide was 20,600 words and 15% of the file. Every code change meant scrolling past it, and translating it in place would have tripled the file. As a separate document it is easier to maintain, can be published as public documentation, and no longer weighs on the application.

**Translation in progress** Catalan and Spanish translations of the guide are being done in stages. Until a section exists in those languages the guide shows the English text with a notice. The application interface itself remains fully translated.

## v5.11.0 — Tamper seal and licensing

*12 September 2026*

- **Added:** The file now carries a SHA-256 seal of its own code. Injected event handlers and injected script elements are refused by the browser. Verified in a real browser, not assumed.
- **Added:** An on-screen notice, in three languages, shown when the seal does not match, explaining that a fresh copy fixes it and that case data is unaffected.
- **Added:** csp-hash.py, the tool that re-seals the file after an edit. Idempotent, writes a backup, refuses to run on anything unexpected.
- **Added:** User Guide section 1.4 explaining the seal to users in plain language.
- **Changed:** All 32 inline event handlers removed from the markup and replaced by one delegated handler; hover styling moved to CSS. This was the prerequisite for the seal.
- **Fixed:** The application advertised "Dual licensing implemented (Commercial + GPL-3.0)" and promised commercial buyers "no copyleft obligations". GPL-3.0 permits redistributing modified versions, the opposite of the intended terms. Corrected in all three languages.
- **Changed:** Licence terms aligned across LICENSE.md, the file header and the About & Legal screen: source-available rather than open source, no distribution of modified versions, a wider definition of commercial use, warranty and liability disclaimers, and Spanish governing law.

**Why:** Without the seal, code hidden in a page the tool reads, or in text pasted into a case, could run inside the application. With it, only the published code runs, and an altered file announces itself instead of running quietly.

**Not verified** Electron packaging could not be tested. Chromium honours the seal and Electron uses the same engine, so it should behave identically — confirm on the first packaged build.

## v5.10.0 — One place to work a case, and canvas data loss fixed

*12 September 2026*

- **Fixed:** Entity Canvas boards were stored outside the case and were not included in exports, so exporting a case and opening it elsewhere lost the link chart silently. Boards now live inside the case record and travel with every export, import and backup. Existing boards migrate automatically on first load.
- **Fixed:** A board and its case briefly shared the same data, so dragging a node altered the stored case without saving it. Both directions now copy.
- **Changed:** The OSINT Tools case drawer was retired. A case is now worked on in one place, the Investigation Task tab, which gained Timeline, Notes, Threat Analysis, Report and Log alongside Tasks, Evidence, Entities, Damages and Closure.
- **Changed:** A single click on a case row opens it. The double-click behaviour and the timing workaround behind it are gone, along with the internal juggling that kept the two surfaces from colliding.
- **Added:** A "Close case" action that detaches the active case without deleting anything.
- **Fixed:** Restored a shared status-change function removed with the drawer, which had silently broken the status strip.
- **Changed:** User Guide sections 6.3 and 6.3b rewritten; every stale reference to the drawer corrected.
- **Removed:** Eight unused translation keys and the dead drawer code: tab bar, header, body dispatcher and resize handling.

**Why:** The same case data appearing in two surfaces was confusing for users and fragile in code: both used the same renderers, so only one could safely exist at a time. Removing the drawer deleted more code than the new sections added.

## v5.9.0 — Risk and threat intelligence reports

*12 September 2026*

- **Added:** Agent - Intel Search section 2: a sourced risk and threat report on a business or an individual, in either direction — due diligence (risk posed by the subject) or protective (threats facing the subject).
- **Added:** A mandatory declaration before any search runs: purpose, GDPR article 6 lawful basis, a necessity statement and an authorisation confirmation, all written to the case audit log before the first search.
- **Added:** Identity resolution on every finding (matched by identifier, strong circumstantial, or name only). Name-only findings are reported but never scored.
- **Added:** Source grading on the Admiralty scale, separating source reliability (A–F) from information credibility (1–6).
- **Added:** Risk levels computed by the application on a fixed 5×5 likelihood × impact matrix. The model supplies only the two ordinals and its reasons; a risk with no sourced, identity-matched finding behind it is reported as "not rated".
- **Added:** Exclusions by instruction: special categories of personal data, anyone under 18, and hacked or leaked sources. Exposed personal data is described by category and location, never reproduced.
- **Changed:** Agent - Intel Search reorganised into two clearly separated sections.

**Why:** The previous risk profile covered companies only, let the model invent a score with no rubric, and never checked cited links. The rebuilt version follows professional online-investigation practice and keeps scoring out of the model’s hands.

## v5.8.0 – 5.8.1 — AI Reports rebuilt around the case, and the Claude Opus 5 upgrade

*11 September 2026*

- **Changed:** AI Reports now works only on the active case, and reads everything in it automatically: case record, tasks, timeline, notes, evidence and custody, damages, actors and correlations, threat analysis, entity canvas and audit log.
- **Added:** A numbered fact sheet. The AI must cite fact numbers for every factual sentence, and every citation is checked; citations to facts that do not exist are flagged.
- **Added:** An executive summary drafted from the case record, which the analyst edits before generating.
- **Changed:** Format and AI settings merged into one card.
- **Changed:** Exports now contain the AI report, a provenance block and the exact fact sheet the AI was given. The generation is recorded in the case audit log with provider, model and a fingerprint of the report text.
- **Fixed:** The Exposure column and money indicators were always empty, because three financial fields were missing from the case index. Existing case files repair themselves on load.
- **Fixed:** Worklist filter buttons were also bound to the OSINT Tools sidebar; Attribute Intelligence sorted backwards; language changes did not redraw the case views.
- **Changed:** Model updated to Claude Opus 5, with a token ceiling that accounts for its thinking, and a shared web-research runner that continues paused searches and caps each run at 25 searches.
- **Added:** A source check on agent reports: every cited link is compared with the URLs the searches actually returned.

**Why:** The previous version assembled reports from workspace activity rather than the case, three include options did nothing, and AI text had no link back to the evidence. Citations plus an appended fact sheet make an AI report checkable.

## v5.7.2 – 5.8.0 — Investigation Task, Attribute Intelligence and the Cases dashboard

10–11 September 2026

- **Added:** The Investigation Task tab: a full-width workspace for the active case, with a status strip, section navigation, next actions, case state and linked cases.
- **Changed:** Attribute Intelligence moved from Cases to the Indicator Pivot tab, below the pivot and always visible. Clicking a value loads it into the pivot above. All of its text is now translated.
- **Added:** Cases dashboard: an "Awaiting review" tile, status filter chips, a "/" shortcut to focus search, a last-activity line under each case, and a weekly chart of loss recorded against loss prevented.
- **Removed:** The Checklist tab from the case drawer; the task list lives in Investigation Task.
- **Fixed:** Clicking a row in Attribute Intelligence never opened the Actors view; Attribute Intelligence was hard-coded in English; a stray closing tag in the Cases markup; an empty User Guide card that nested nine sections inside it; and an unclosed wrapper element.

**Why:** Cases could only be worked through a narrow drawer, and cross-case intelligence sat on the wrong tab. This cycle gave the case a proper workspace and put indicator analysis where indicators are analysed.

Process — after you edit the file

Files delivered to you are already sealed. Run this only when you change the file yourself, then open it once to confirm it starts before distributing it.

python3 csp-hash.py Cancerbero.html

CANCERBERO

**Registre de canvis**

12 September 2026 · Albert Planas · CA

Tots els canvis fets a Cancerbero en aquest cicle de desenvolupament, els més recents primer. Les entrades descriuen què ha canviat i per què, de manera que el raonament perdura encara que el codi evolucioni.

*Entries for versions between v3.0 and v5.7.1 were not recorded.*

## v3.0

*July 2026*

- CLI Toolbox — copy-to-run command builder for 14 open-source OSINT CLIs (Sherlock, Maigret, theHarvester, SpiderFoot, PhoneInfoga, ExifTool…)
- AI Reports: private on-device model support (Ollama / LM Studio); new EU, International and Spanish informe pericial modes; per-provider data-flow notice
- Website Analyzer: recalibrated AI-content scoring, Proxy-only OPSEC mode, favicon-hash clone pivot (Shodan/FOFA), optional Claude deep analysis
- Agent Search rebuilt with grounded search plans, citations and confidence tags
- Prompt Builder: subject-type-aware sources and trilingual output
- New "General Investigation" default case workflow with a short, universal checklist
- Reliability: instant note / evidence / timeline / actor rendering; debounced auto-save; Reverse Image Search clipboard fix
- Social Media refreshed — added WhatsMyName, IDCrawl, Instant Username, Epieos, LeakRadar and a multi-paste-site dork; removed dead services (Nitter, psbdmp…)
- Licensing: fixed pricing removed (commercial licensing on request), donation links added, "AS IS" warranty and "not legal advice" clauses; all features unlocked (no tiers)
- About & Legal fully translated (English / Català / Español); User Guide expanded (Local AI Models, CLI Toolbox)
- Sidebar reorganised (Tools group moved up); attribute-XSS hardening (escAttr / safeImgSrc)

## v2.1

*February 2026*

- Licensing implemented (commercial + source-available free use)
- In-app User Guide added (no server required)
- Verification Workflow collapse animation fix
- CIDR URL encoding hardened (encodeURIComponent)
- HTML comment structure corrected

## v2.0-SECURE

*February 2026*

- SRI integrity hashing on CDN resources
- Enhanced URL validation (XSS protection)
- Privacy notice modal on first visit
- Improved popup blocker detection
- PDF report export functionality
- About & Legal section added
- MIT License documentation
- Updated branding to Cancerbero
- Icon updates (forensics, search)

## v1.0

*Initial release*

- Core OSINT search across 14 categories
- 166+ tool integrations
- Encoding/decoding utilities
- Geo intelligence features
- Investigation logging
- Document forensics
- Halo HUD themed interface
