# 724 Tesisatçı

İstanbul geneli 7/24 tesisatçı hizmetleri web sitesi. Next.js App Router, mock data katmanı, SEO altyapısı ve blog admin CMS.

## Kurulum

```bash
npm install
cp .env.example .env.local
npm run dev
```

Site: [http://localhost:3000](http://localhost:3000)

### Windows (PowerShell) notu

PowerShell'de `npm install` şu hatayı veriyorsa:

`running scripts is disabled on this system`

**Hızlı çözüm (tek seferlik, önerilen):**

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Ardından terminali kapatıp yeniden açın; `npm install` normal çalışır.

**Alternatif (policy değiştirmeden):**

```powershell
npm.cmd install
npm.cmd run dev
```

veya proje kökünden:

```cmd
scripts\install.bat
scripts\dev.bat
```

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Production sunucu |
| `npm run lint` | ESLint |

## Mock Data

Mock veriler `data/mock/` klasöründe:

- `services.ts` — 10 hizmet
- `locations.ts` — İstanbul, Kağıthane
- `neighborhoods.ts` — 5 mahalle
- `blogPosts.ts` — Blog seed verileri
- `faqs.ts` — SSS
- `siteSettings.ts` — Telefon, WhatsApp, adres
- `navigation.ts` — Header/footer linkleri
- `seo.ts` — Statik sayfa SEO şablonları

Admin blog CRUD değişiklikleri `data/runtime/blog.json` dosyasına yazılır.

## Admin Panel

- URL: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Varsayılan kullanıcı: `admin` / `admin123` (`.env.local` ile değiştirilebilir)

Admin panel yalnızca blog yönetimi içindir. Hizmet ve lokasyon içerikleri mock data olarak kalır.

### Admin Route'ları

- `/admin/login` — Giriş
- `/admin/blog` — Blog listesi
- `/admin/blog/new` — Yeni yazı
- `/admin/blog/edit/[id]` — Düzenleme

## API Endpoint'leri

### Public

- `GET /api/services` — Tüm hizmetler
- `GET /api/services/[slug]` — Hizmet detay
- `GET /api/locations` — Lokasyonlar
- `GET /api/locations/[slug]` — Lokasyon detay
- `GET /api/neighborhoods` — Mahalleler
- `GET /api/neighborhoods/[slug]` — Mahalle detay
- `GET /api/blog` — Yayınlanmış blog yazıları
- `GET /api/blog/[slug]` — Blog detay
- `GET /api/faqs` — SSS
- `GET /api/site-settings` — Site ayarları
- `POST /api/contact` — İletişim formu

### Admin (session cookie gerekli)

- `GET /api/admin/blog`
- `POST /api/admin/blog`
- `GET /api/admin/blog/[id]`
- `PUT /api/admin/blog/[id]`
- `DELETE /api/admin/blog/[id]`
- `POST /api/admin/login`

## SEO Yapısı

- Her sayfada `generateMetadata` ile dinamik title, description, canonical, Open Graph, Twitter Card
- JSON-LD: Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, Article, WebSite
- Sitemap: `/sitemap.xml` (draft blog hariç)
- Robots: `/robots.txt` (`/admin` disallow)

## Mimari

```
data/mock/          → Mock veri kaynakları
data/runtime/       → Admin blog JSON store
lib/repositories/   → Veri erişim soyutlaması (mock → postgres)
lib/services/       → Business logic
lib/cache/          → Memory cache (Redis placeholder)
lib/db/             → PostgreSQL hazırlık (Prisma schema)
types/              → Entity tipleri
```

## PostgreSQL Geçiş Planı

1. `.env` içinde `DATA_SOURCE=postgres` ve `DATABASE_URL` ayarlayın
2. `npx prisma migrate dev` ile migration çalıştırın
3. Repository katmanında postgres adapter implement edin (`lib/repositories/`)
4. Blog içerikleri DB'ye taşınır
5. Hizmet/lokasyon içerikleri isteğe bağlı DB'ye taşınabilir veya statik kalabilir

## Redis Geçiş Planı

1. `.env` içinde `REDIS_URL` ayarlayın
2. `lib/cache/redisCache.ts` içindeki TODO'ları implement edin
3. Cache'lenecek alanlar: service list, location list, blog list, sitemap, site settings

## Production Deploy (Ubuntu)

### Docker (mock data — önerilen)

```bash
cp .env.docker.example .env.docker
# .env.docker içinde NEXT_PUBLIC_SITE_URL ve ADMIN_PASSWORD güncelleyin

docker compose --env-file .env.docker up -d --build
```

Site: `http://localhost:3000` (veya `APP_PORT` ile belirlediğiniz port)

- `DATA_SOURCE=mock` — Postgres gerekmez
- Admin blog yazıları `blog_runtime` volume'unda kalıcıdır
- Domain değişirse image'ı yeniden build edin (`NEXT_PUBLIC_SITE_URL` build arg)

```bash
docker compose --env-file .env.docker down
docker compose --env-file .env.docker logs -f web
```

### Manuel (Node)

```bash
npm install
npm run build
DATA_SOURCE=mock npm run start
# veya PM2/systemd ile:
# DATA_SOURCE=postgres NEXT_PUBLIC_SITE_URL=https://724tesisatci.com npm run start
```
