# Exclusive E-Commerce (Team G2)

React + Vite + **Tailwind CSS v4**. Sayt: **Home, About, Contact, Sign Up**.
Kim hansı hissəni işləyir: `docs/` qovluğundakı şəkillər (Cefer.png, Minaye.png, ...).

## İşə salmaq

```bash
npm install
npm run dev
```

Səhifələr: `/` (Home), `/about`, `/contact`, `/signup`.

## Struktur

```
src/
  App.jsx                  marşrutlar və səhifələrin bölmə ardıcıllığı (Home, About, Contact, Sign Up)
  main.jsx                 BrowserRouter burada
  index.css                Tailwind + rənglər (bg-brand və s.)
  assets/<Ad>/             hər kəsin öz şəkilləri
  components/
    Cefer/   Header, Hero, FlashSales
    Minaye/  Categories, BestSelling
    Xalid/   MusicBanner, ExploreProducts
    Nusret/  NewArrival, Services, Footer
    Seccad/  OurStory, Stats, Team, Services   (About səhifəsi)
    Elvin/   SignUp, Contact                   (Sign Up və Contact səhifələri)
```

Hər kəs yalnız öz qovluğundakı bölmə fayllarında işləyir. Bölmələrin səhifədəki sırası `App.jsx`-dədir.

## Yolları necə yazmaq (import)

Bölmə faylı `src/components/<Ad>/` içindədir, ona görə:

```jsx
import chair from '../../assets/Cefer/chair.png'     // öz şəkli:  ../../assets/<Ad>/fayl
```

Şəkil adında boşluq varsa olduğu kimi yaz: `'../../assets/Seccad/image 46.png'`.

## Qaydalar

1. **Yalnız Tailwind.** Ayrıca `.css` faylı, `style={{}}`, Bootstrap, MUI yoxdur.
2. **Margin və padding yoxdur** (`m-`, `p-`, `mt-`, `px-`, `space-` və s.). Məsafələr `flex`, `gap`, `justify-*`, `items-*`, `w-`/`h-` ilə verilir.
3. Hər kəs yalnız öz qovluğuna (`components/<Ad>/`) və öz `assets/<Ad>/` qovluğuna toxunur.
4. Hazır rənglər: `bg-brand` (#DB4444), `bg-brand-dark`, `bg-accent` (yaşıl), `bg-soft`.
5. Bölmənin başında `ui` obyektində təkrar olunan sinifləri saxla, JSX oxunaqlı qalsın.

## Mövcud repo-nu yeniləmək (Xalid üçün)

```bash
git status                                   # nə dəyişib baxırsan
git add .
git commit -m "Butun bolmeler ve marsrutlar elave olundu"
git pull origin main --rebase                # başqası push edibsə əvvəl onu götür
git push origin main
```

## Komanda yeniləməni necə alır

```bash
git checkout main
git pull origin main                         # yeni fayllar gəlir
git checkout cefer                           # öz branch-ına qayıt (minaye, nusret, ...)
git merge main                               # yenilikləri öz branch-ına qat
```

Öz yarımçıq işin varsa əvvəl `git add . && git commit -m "yarimciq"` et ya da `git stash` yaz.
`git push --force` heç vaxt işlətmə.
