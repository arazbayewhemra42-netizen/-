СТОМАТ ТУРКМЕНИСТАН — ПЕРВАЯ ВЕБ-ВЕРСИЯ

Файлы:
- index.html — интерфейс приложения
- config.js — подключение к Supabase
- manifest.webmanifest и sw.js — установка как PWA
- icon.svg — значок

ВАЖНО:
1. Откройте config.js и замените:
   YOUR_SUPABASE_PROJECT_URL — на Project URL из Supabase.
   YOUR_SUPABASE_PUBLISHABLE_KEY — на Publishable key.
2. Не добавляйте Secret key или service_role key в браузерный код.
3. После загрузки файлов в GitHub включите Pages:
   Settings → Pages → Deploy from a branch → main → /(root) → Save.
4. Дождитесь публикации и откройте выданный GitHub Pages URL.

Функции этой первой версии:
- регистрация и вход по email;
- объявления;
- расписание;
- групповой чат;
- базовая панель администратора.

Ограничения:
- пока нет видеозвонков, личных сообщений, отметки посещаемости и push-уведомлений;
- для корректной работы нужны настроенные Supabase RLS policies;
- для тестирования регистрации может потребоваться подтверждение email;
- интерфейс является первой рабочей заготовкой, а не завершённой системой.
