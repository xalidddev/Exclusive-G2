# Exclusive E-Commerce (Team G2)

React + Vite + **Tailwind CSS v4**. Sayt: **Home, About, Contact, Sign Up, Log In**.
Kim hansı hissəni işləyir: `docs/` qovluğundakı şəkillər (Home.png, Catalog.png, ...).

## İşə salmaq

Node.js **20.19** və ya daha yeni lazımdır (`node -v` ilə yoxla).

```bash
npm install
npm run dev
```

Səhifələr və kimin bölməsi harada görünür:

| Ünvan | Bölmələr |
|---|---|
| `/` | Home, Catalog, Shop, Showcase (hamısı alt-alta) |
| `/about` | About (OurStory, Stats, Team, Services) |
| `/contact` | Shop: Contact |
| `/product/:id` | Shop: ProductDetail (məhsula basanda açılır) |
| `/cart` | Shop: Cart (Add To Cart və Buy Now bura düşür) |
| `/signup` | Auth: SignUp |
| `/login` | Auth: Login |

Header menyusunda yalnız bu səhifələrə link ver: `/`, `/about`, `/contact`, `/cart`, `/signup`, `/login`. `React Router`-in `NavLink` və ya `Link` komponentini işlət, `<a href>` yox.

## Struktur

```
src/
  App.jsx                  marşrutlar və səhifələrin bölmə ardıcıllığı (Home, About, Sign Up, Log In)
  main.jsx                 BrowserRouter burada
  index.css                Tailwind + rənglər (bg-brand və s.)
  assets/<Ad>/             hər kəsin öz şəkilləri
  components/
    Home/   Header, Hero, FlashSales
    Catalog/  Categories, BestSelling
    Shop/   MusicBanner, ExploreProducts, Contact, ProductDetail, Cart (+ ProductCard, LikeButton, AddToCart, Stars, CartContext, products.js)
    Showcase/  NewArrival, Services, Footer
    About/  OurStory, Stats, Team, Services   (About səhifəsi)
    Auth/   SignUp, Login                     (Sign Up və Log In səhifələri)
```

Hər kəs yalnız öz qovluğundakı bölmə fayllarında işləyir. Bölmələrin səhifədəki sırası `App.jsx`-dədir.

## Yolları necə yazmaq (import)

Bölmə faylı `src/components/<Ad>/` içindədir, ona görə:

```jsx
import chair from '../../assets/Home/chair.png'     // öz şəkli:  ../../assets/<Ad>/fayl
```

Şəkil adında boşluq varsa olduğu kimi yaz: `'../../assets/About/image 46.png'`.

## Qaydalar

1. **Yalnız Tailwind.** Ayrıca `.css` faylı, `style={{}}`, Bootstrap, MUI yoxdur.
2. **Margin və padding yoxdur** (`m-`, `p-`, `mt-`, `px-`, `space-` və s.). Məsafələr `flex`, `gap`, `justify-*`, `items-*`, `w-`/`h-` ilə verilir.
3. Hər kəs yalnız öz qovluğuna (`components/<Ad>/`) və öz `assets/<Ad>/` qovluğuna toxunur.
4. Hazır rənglər: `bg-brand` (#DB4444), `bg-brand-dark`, `bg-accent` (yaşıl), `bg-soft`.
5. Bölmənin başında `ui` obyektində təkrar olunan sinifləri saxla, JSX oxunaqlı qalsın.

## Mövcud repo-nu yeniləmək (Shop üçün)

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
