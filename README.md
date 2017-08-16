# **Конфигурация для ESLint**

1.0.0

Поддерживаемая версия ESLint >= 4.1.1

## **Установка**

```bash
npm i --save-dev eslint eslint-config-revva
```

При использовании React так же необходимо установить плагин `eslint-plugin-react`:

```bash
npm i --save-dev eslint-plugin-react
```

## **Использование**

В файле .eslintrc прописать:

```json
{
  "extends": "revva"
}
```

Для использования в React проектах:

```json
{
  "extends": "revva/react"
}
```
