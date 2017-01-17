# **Конфигурация для ESLint** #

0.1.0

***

## Установка ##

```
#!bash

npm install --save-dev git+ssh://git@bitbucket.org:revvateam/eslint-config-revva.git#0.1.0
```


## Использование ##

В файле .eslintrc прописать:

```
#!json
{
  "extends": "revva"
}
```

Для использования в БЭМ проектах:

```
#!json
{
  "extends": "revva/bem"
}
```
