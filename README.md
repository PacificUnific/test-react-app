# React Counter App

Простое React-приложение на Vite со счетчиком.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub и отправьте проект:

```bash
git init
git add .
git commit -m "Create React counter app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

2. Опубликуйте приложение в ветку `gh-pages`:

```bash
npm run deploy
```

3. В настройках GitHub откройте `Settings -> Pages` и выберите:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

После сохранения GitHub покажет ссылку на опубликованное приложение.
