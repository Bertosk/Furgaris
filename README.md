# Furgaris

**Case management for online investigations that runs on your own computer: no account, no server, nothing in the cloud.**

This is case management + OSINT tool I built for investigators, analysts and researchers. Every online investigation starts the same way. A tab for WHOIS. Another for VirusTotal. Then social media, then a reverse image search. Twenty minutes later you have forty tabs, three windows, and notes in a text file you'll never find again.

The tools themselves are fine. What I kept missing was structure, and a way to answer the question that always comes at the end of a case:  *how do you know that?*

Furgaris is the tool I built to fix that.

---

## What it does

**Case management.** Open a case from one of eight investigation workflows, each with its own task list. Add your own tasks, set owners and due dates, keep notes and a timeline, and close cases with a recorded conclusion.

**A dashboard you can read in seconds.** How many cases are open, what's past due, what nobody owns yet, what's waiting for review, and what's gone quiet. Below that, a 12-week view: cases opened against closed, median time to close, the age of open cases, money lost against money prevented, and the caseload of each person on the team.

**Evidence you can defend.** Every file gets a SHA-256 fingerprint of its actual bytes, the same value `sha256sum` or any forensic tool produces. Each item keeps its own chain of custody, and every action goes into a hash-chained audit log, so any later change shows. You can also capture part of your screen straight into a case.

**Connecting cases.** When the same IP address, domain, email or file appears in more than one case, Furgaris shows you. The Indicator Pivot and the Entity Canvas help you see how cases relate.

**OSINT tools in one place.** A launcher for more than 160 open-source intelligence tools, plus an OPSEC checklist for investigating safely.

**Reports.** Case reports, a sealed export that can be checked independently with a standalone verifier (to be published here), and a structured expert report.

**Optional AI.** AI features use your own Anthropic API key. AI Reports can also run on a local model (Ollama or LM Studio), so nothing leaves your machine. AI Reports cite the case facts they rely on. Anything AI writes is a draft for you to check, never a finding.

## What it isn't

It won’t investigate for you, and it doesn’t replace your judgement. It keeps your work organised and helps you show how you got to a conclusion.

---

## Download and install

**Windows:** download the installer from [Releases](../../releases).

Each release lists the installer's SHA-256 checksum in its notes. To check that the file you downloaded hasn't been tampered with, open PowerShell in your Downloads folder and run this, using the name of the file you downloaded:

```powershell
Get-FileHash ".\<installer file name>" -Algorithm SHA256
```

The result must match the checksum in the release notes exactly. If it doesn't, don't run the file.

**About the Windows warning.** The installer isn't code-signed yet, so Windows may show *"Windows protected your PC"*. That's expected for unsigned software from an individual developer. Click **More info**, then **Run anyway**. If you'd rather not, that's a reasonable choice, and the option below doesn't need an installer.

**No installer?** You can also download `Furgaris.html` and open it in Chrome or Edge. Firefox and Safari aren't supported.

**User guide:** `Furgaris_User_Guide.html`, in English, Catalan and Spanish. Download it and open it in your browser.

<!-- Demo cases: add back once the demo data is regenerated with real fingerprints.
### Try it with demo cases

Download `Furgaris_Demo_20_cases.bsdata`, then in Furgaris go to **Cases → Import JSON** and choose the file. Twenty fictional cases load, so you can explore everything without real data.
-->

---

## Your data

- Cases are stored **only on your computer**. There is no Furgaris server, and I never see your data.
- Back up with **Save As** or **Export JSON** on the Cases dashboard. If you lose your computer without a backup, your cases are gone.
- Data only leaves your machine when **you** choose: when you use the AI features with a cloud provider (the app shows what is sent), or when you open an external OSINT tool. Those websites see your searches and your IP address, like any website does. Episode 6 of the video series covers how to work safely.


---

## Tell me what works, and what doesn't

This is why the project is public. I want to know where Furgaris helps you, where it gets in your way, and what's missing.

- **On GitHub:** open an issue using the **Bug report** or **Usability feedback** template.
- **Not a GitHub user?** Email albertplanas@albertplanas.eu.
<!-- Replace the line above with the feedback form link once the form exists. -->

> **Never post real case data.** Issues on GitHub are public. Don't include names, personal data, real indicators from live investigations, API keys, or screenshots of real cases. Use the demo cases to show a problem.

Found a security vulnerability? Please don't open a public issue. See [SECURITY.md](SECURITY.md).

---

## Licence

Furgaris is **source-available, not open source**. You can read, audit and study all of the code.

It is **free** for personal use, self-learning, academic research and teaching, portfolio use, non-profit journalism in the public interest, and published security research.

**Commercial use needs a licence.** That includes use by a company, a public authority or law-enforcement body, or any organisation with paid staff.

Distributing modified versions isn't permitted. Full terms: [LICENSE.md](LICENSE.md). Licensing questions: albertplanas@albertplanas.eu

---

## Support

Furgaris is free for personal and non-commercial use. It’s completely optional, but it helps me keep working on it, you can support its development on [Ko-fi](https://ko-fi.com/albertslovakia). Entirely optional, and hugely appreciated.

---

## Author

Built by **Albert Planas**, an investigations and threat-intelligence practitioner.
[albertplanas.eu](https://www.albertplanas.eu) · [LinkedIn](https://www.linkedin.com/in/albert-p-90449816/)

Provided as is, without warranty. See the licence for details.
