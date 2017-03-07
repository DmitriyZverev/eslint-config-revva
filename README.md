#**Конфигурация для ESLint**

0.2.0

Поддерживаемая версия ESLint >= 3.17

***

##**Установка**

```bash
npm i --save-dev git+ssh://git@bitbucket.org:revvateam/eslint-config-revva.git#0.2.0
```

##**Использование**

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
