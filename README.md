# **Конфигурация для ESLint**

0.4.1

Поддерживаемая версия ESLint >= 3.17

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

Для использования в БЭМ проектах:

```json
{
  "extends": "revva/bem"
}
```

Для использования в React проектах:

```json
{
  "extends": "revva/react"
}
```
