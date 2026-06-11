# Buddies Barbershop

Статическое React-приложение для сайта-визитки барбершопа. Проект сделан на React, TypeScript и Vite, не использует бэкенд, CMS, базу данных, авторизацию или оплату на сайте.

## Возможности

- одностраничный сайт с якорными секциями;
- тёмный премиальный дизайн с акцентным золотым цветом;
- блоки: Header, Hero, О нас, Услуги, Мастера, Галерея, Академия, Контакты, Footer;
- данные вынесены в `src/data`;
- адаптивная вёрстка для мобильных устройств;
- готовность к сборке в папку `dist`.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

После сборки готовые файлы будут находиться в папке `dist`.

## Предпросмотр сборки

```bash
npm run preview
```

## GitHub Pages

В `vite.config.ts` уже указан пример для репозитория `test-react-app`:

```ts
base: '/test-react-app/'
```

Если репозиторий называется иначе, замените `barbershop-site` на имя своего репозитория:

```ts
base: '/your-repository-name/'
```

Если используется свой домен, укажите:

```ts
base: '/'
```

## Деплой через gh-pages

1. Установите зависимости:

```bash
npm install
```

2. Соберите и опубликуйте проект:

```bash
npm run deploy
```

3. В настройках GitHub откройте `Settings -> Pages` и выберите:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

## Структура данных

- `src/data/services.ts` - услуги и цены;
- `src/data/masters.ts` - мастера;
- `src/data/courses.ts` - курсы академии;
- `src/data/gallery.ts` - элементы галереи.

Кнопки записи ведут на внешний URL `https://example.com/booking`. Его можно заменить в `src/App.tsx`.
