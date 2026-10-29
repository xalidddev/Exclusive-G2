# Exclusive E-Commerce (Team G2)

React + Vite + **Tailwind CSS v4**. Hazır, işlək sayt: **Home, About, Contact, Sign Up** səhifələri dizayna uyğun yazılıb.
İş bölgüsü şəkli və PDF: `docs/` qovluğunda.

## İşə salmaq

```bash
npm install
npm run dev
```

Brauzerdə `http://localhost:5173` açılır. Səhifələr: `/`, `/about`, `/contact`, `/signup`.

## Kim hansı faylda işləyir

Hər kəsin **bir** faylı və o faylda **bir** komponenti var. Bölmələr komponentin içində ardıcıl yazılıb.

| Ad | Fayl | Nə var |
|---|---|---|
| Cəfər | `src/components/Cefer.jsx` | Home: Hero + Flash Sales |
| Minayə | `src/components/Minaye.jsx` | Home: Browse By Category + Best Selling + Music banner |
| Xalid (Team leader) | `src/components/Xalid.jsx` | Top bar + Header + Footer (bütün səhifələrdə) |
| Nüsrət | `src/components/Nusret.jsx` | Home: Explore Our Products + New Arrival + Services |
| Səccad | `src/components/Seccad.jsx` | About: Our Story + Stats + Team |
| Elvin | `src/components/Elvin.jsx` | Contact və Sign Up (`page` prop-u ilə) |

Şəkillər `src/assets/<Ad>/` qovluqlarındadır (hər kəsin öz qovluğu). Şəkillər dizayn faylından kəsilib, aşağı keyfiyyətlidir. Figma-dan orijinallarını ixrac edib eyni adla əvəz edə bilərsiniz.

`App.jsx` səhifələri və marşrutları birləşdirir, `index.css` Tailwind-i və rəngləri saxlayır. Bunlara toxunma, dəyişiklik lazımdırsa Xalid-ə yaz.

## Qaydalar

1. **Yalnız Tailwind**: stil `className` daxilində yazılır. Ayrıca `.css` faylı, `style={{}}`, Bootstrap, MUI yoxdur.
2. Yalnız öz faylına və öz `assets` qovluğuna toxun.
3. Hazır rənglər: `bg-brand` (#DB4444), `bg-brand-dark`, `bg-accent` (yaşıl), `bg-soft` (#F5F5F5). Font Poppins/Inter qoşulub.
4. Şəkil import edəndə öz qovluğundan götür: `import x from '../assets/Cefer/x.jpg'`.

## GitHub-a necə yükləyək ki, heç nə itməsin

**Xalid (bir dəfə, ilk yükləmə):**

```bash
git init
git add .
git commit -m "Layihenin esasi"
git branch -M main
git remote add origin <REPO-LINKI>
git push -u origin main
```

**Qalan hər kəs:**

```bash
git clone <REPO-LINKI>
cd Exclusive-G2
npm install
git checkout -b cefer          # öz adınla branch (minaye, xalid, nusret, seccad, elvin)
```

İşləyəndən sonra:

```bash
git add src/components/Cefer.jsx src/assets/Cefer     # yalnız öz faylın və şəkillərin
git commit -m "Cefer: Flash Sales duzeldildi"
git pull origin main                                  # push-dan əvvəl həmişə
git push origin cefer
```

Sonra GitHub-da **Pull Request** aç, Xalid yoxlayıb `main`-ə birləşdirir.

**Niyə itmir:**
- Hər kəsin faylı ayrıdır, bir-birinin kodunu əzmir (conflict yaranmır).
- `node_modules` və `dist` `.gitignore`-dadır, onları yükləmə. `npm install` hər kəs özündə edir.
- `.gitattributes` sətir sonlarını (Windows CRLF / Mac LF) eyniləşdirir və şəkilləri binary kimi saxlayır.
- **`git push --force` heç vaxt işlətmə.** Bu, başqalarının işini silər.
- Tez-tez commit et, gündə ən azı bir dəfə push et.
