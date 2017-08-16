# **Конфигурация для ESLint**

0.5.0

**ВНИМАНИЕ! конфигурация в стадии разработки, при смене версии обратная совместимость не гарантируется.**

Поддерживаемая версия ESLint >= 4.1.1

## **Установка**

```bash
npm i --save-dev eslint eslint-config-revva eslint-plugin-react
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
