# FieldSalesTools.com — Analys & Framåtplan
*Senast uppdaterad: Mars 2026*

---

## ✅ Vad vi har byggt & bockat av

### Struktur
| Sektion | Antal | Status |
|---|---|---|
| Tool-sidor | 20 | ✅ Klara |
| Redaktionella recensioner | 10/20 | ⚠️ Delvis klar |
| Alternativ-sidor | 10 | ✅ Klara |
| Jämförelsesidor | 7 | ✅ Klara |
| Industri-landningssidor | 8 | ✅ Klara |
| Statiska sidor (about, submit, advertise) | 4 | ✅ Klara |

### Tekniskt fundament — bockat av
| Punkt | Status | Anteckning |
|---|---|---|
| Next.js SSG | ✅ | Blixtsnabb, SEO-vänlig |
| Sitemap.xml | ✅ | Inkl. 10 alternatives-sidor |
| robots.txt | ✅ | Korrekt konfigurerad |
| OpenGraph-taggar | ✅ | |
| Meta-titlar | ✅ | "Review 2026" format |
| Mobilanpassad | ✅ | |
| **JSON-LD schema markup** | ✅ **KLAR** | Se detaljer nedan |
| **Clearbit-logoer** | ✅ **KLAR** | Emoji-fallback om logo saknas |
| **Alternatives i sitemap** | ✅ **KLAR** | 10 sidor tillagda |
| **Hero-kopia fixad** | ✅ **KLAR** | "User Reviews" istf. missvisande |
| **Plausible Analytics** | ✅ **KLAR** | Script tillagt i layout.tsx — skapa konto på plausible.io |

### Schema markup — vad som implementerats
- **layout.tsx:** `Organization` + `WebSite` + `SearchAction` → Google Sitelinks sökruta
- **Tool-sidor:** `SoftwareApplication` + `AggregateRating` + `Review` + `BreadcrumbList`
- **Startsidan:** `ItemList` med alla featured tools + rating per verktyg
- **Alternatives-sidor:** `ItemList` av alternativ + `BreadcrumbList`
- **Compare-sidor:** `WebPage` med båda tools + `BreadcrumbList`

---

## ❌ Vad som återstår — prioriterad framåtplan

### ✅ SPRINT 1 — Teknisk SEO (KLAR)

**1. Plausible Analytics — ✅ Script tillagt i layout.tsx**
- Script är deployat i koden. **Nästa steg för Max:** Skapa konto på plausible.io (gratis 30 dagar, sedan ~$9/mån) och verifiera att data börjar komma in.
- Alternativ: Google Analytics 4 (gratis men GDPR-känslig)

---

### 🟡 SPRINT 2 — Innehåll (pågående)

**2. Recensioner — 10/20 klara**
5 nya recensioner tillagda denna sprint: Sunbase, Knockio, RepMove, Outfield, Salesforce Maps.
Återstår (10 st) i prioritetsordning:
1. Repsly
2. Skynamo
3. Maptive
4. LeadSquared Field Force
5. Canvass
6. D2D CRM
7. Leadbeam
8. Geopointe
9. InSitu Sales
10. MarketSharp

**3. Alternatives-sidor — 10/20 klara ✅**
Alternatives-sidor finns nu för: SPOTIO, SalesRabbit, Badger Maps, Map My Customers, Knockbase, Sunbase, Knockio, RepMove, Outfield, Salesforce Maps. Återstår 10 st (samma verktyg som ovan).

**4. 10+ fler jämförelsesidor**
Vi har 7 jämförelsesidor. Borde ha 20–30 st. Förslag på nästa batch:
- spotio-vs-knockio
- salesrabbit-vs-map-my-customers
- badger-maps-vs-outfield
- salesrabbit-vs-repmove
- spotio-vs-sunbase
- knockbase-vs-knockio
- map-my-customers-vs-badger-maps
- salesrabbit-vs-spotio (omvänd — populärt sökord)
- repmove-vs-map-my-customers
- sunbase-vs-spotio

---

### 🟠 SPRINT 3 — Monetisering (så snart sajten har lite trafik)

**5. Affiliate-program — åtgärdslista för Max**

| Verktyg | Program | Kommission | Länk |
|---|---|---|---|
| SalesRabbit | PartnerStack | **15% år 1, 7.5% år 2** | salesrabbit.com/partners/ |
| Knockio | Direkt | $50/konvertering | knockio.com/affiliate-program/ |
| InSitu Sales | Direkt | **20% recurring** | insitusales.com/en/partner/ |
| Badger Maps | Direkt | $50 gift card/referral | badgermapping.com/become-a-badger-maps-partner/ |
| Skynamo | Direkt | 8% per försäljning | Kontakta direkt |
| SPOTIO | Inget publikt | Kontakta | sales@spotio.com |
| Övriga 14 | Inget publikt | Kontakta direkt | — |

**Rekommendation:** Börja med SalesRabbit (enklast, bäst kommission) och InSitu Sales (20% recurring = passiv inkomst). Registrera dig på PartnerStack idag.

**6. Google AdSense**
- Ansök på adsense.google.com (kräver lite trafik, ~50–100 dagliga besök)
- Ersätt ad-placeholders i koden med riktiga AdSense-kodblock
- B2B SaaS-nisch ger $5–15 CPM = bra intäkt vid rätt trafik

**7. E-postlista i footer**
Lägg till ett enkelt e-postfält i footern: *"Get weekly field sales tool updates"*. Använd Beehiiv (gratis upp till 2 500 prenumeranter) eller Mailchimp. En e-postlista är guld när vi pitchar vendors om sponsring.

---

### 🟢 SPRINT 4 — Tillväxt (1–2 månader framåt)

**8. Sökfunktion på startsidan**
Användare ska kunna skriva "solar CRM" och få relevanta verktyg. Implementera fuse.js (klient-side, ingen backend behövs).

**9. "Best X for Y"-sidor**
Dessa rankar för long-tail keywords med hög köpintention:
- `/best/solar-canvassing-software`
- `/best/roofing-sales-software`
- `/best/small-team-field-sales`
- `/best/free-field-sales-software`
- `/best/door-to-door-sales-app`

**10. Pitcha vendors om featured listing**
Kontakta SPOTIO, SalesRabbit, Badger Maps direkt via LinkedIn/email. Erbjud featured listing ($299/mån). Mall:
> *"Vi driver FieldSalesTools.com, den ledande directory-sajten för field sales-mjukvara. Er produkt är redan listad men vi erbjuder nu featured placement med prioriterad synlighet för [X] potentiella köpare/månad. Intresserade av att höra mer?"*

**11. Publicera på relevanta communities**
- Product Hunt (kräver lite mer polish men stor synlighet)
- r/sales, r/salesforce, r/fieldservice på Reddit
- LinkedIn-inlägg om field sales tools
- Indie Hackers (bygg-i-det-offentliga-thread)

---

## 💰 Intäktspotential — realistisk prognos

| Källa | Månadsintäkt (år 1) | Potential (år 2) |
|---|---|---|
| SalesRabbit affiliate (10 konv/mån) | $300–600 | $600–1 200 |
| InSitu Sales affiliate (5 konv/mån) | $200–400 | $400–800 |
| Google AdSense (5 000 besök/mån) | $100–300 | $300–600 |
| Featured listings (2–3 vendors) | $600–900 | $900–1 800 |
| **Totalt realistiskt mål** | **$1 000–2 000/mån** | **$2 000–4 000/mån** |

OpenAlternative.co: 0 → $6 000/mån på 12 månader med liknande modell men bredare nisch. Vi har smalare nisch men HÖGRE köpintention (B2B = dyrare köp = högre affiliate-kommission).

---

## 📋 Snabbkoll: Vad ska göras härnäst?

1. **Skapa Plausible-konto** på plausible.io — scriptet är redan i koden, du behöver bara aktivera kontot (15 min, gratis 30 dagar)
2. **Registrera SalesRabbit affiliate** på salesrabbit.com/partners/ — 10 minuter, 15% kommission
3. **Registrera InSitu Sales affiliate** på insitusales.com/en/partner/ — 20% recurring = bästa kommissionen
4. **Skriv recensioner** för de 10 resterande verktygen — Repsly, Skynamo, Maptive, etc.
5. **Pusha till GitHub Desktop** — nästa koduppdatering väntar på push

*Analys: FieldSalesTools Editorial Team, Mars 2026*
