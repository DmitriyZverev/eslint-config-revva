# **Список изменений**

***

## **1.0.0**

### **Добавлено**

* Выполнена миграция на `npm v5.0` и добавлен файл фисксации зависимостей,

### **Изменено**

* Для исходного кода применена текущая конфигурация линтера

### **Удалено**

* БЭМ конфигурация, как более не используемая.

## **0.5.0**

Вполнена миграция на `eslint@4.1.1` и `eslint-plugin-react@7.1.0`.
Полный список изменений:

### **Добавлено**

* Правило [for-direction](http://eslint.org/docs/rules/for-direction)
* Правило [no-buffer-constructor](http://eslint.org/docs/rules/no-buffer-constructor)
* Правило [array-bracket-newline](http://eslint.org/docs/rules/array-bracket-newline)
* Правило [array-element-newline](http://eslint.org/docs/rules/array-element-newline)
* Правило [padding-line-between-statements](http://eslint.org/docs/rules/padding-line-between-statements)
* Правило [semi-style](http://eslint.org/docs/rules/semi-style)
* Правило [switch-colon-spacing](http://eslint.org/docs/rules/switch-colon-spacing)
* Правило [react/boolean-prop-naming](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md)
* Правило [react/jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)
* Правило [react/no-redundant-should-component-update](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)
* Правило [react/no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)

### **Изменено**

* Конфигурация специфичная для `React` вынесена в отдельную под-конфигурацию и
  доступна через `extends: "revva/react"`.
* Изменена конфигурация правила [indent](http://eslint.org/docs/rules/indent)
* Отключено правило [no-underscore-dangle](http://eslint.org/docs/rules/no-underscore-dangle)
* Отключено правило [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style)
* Отключено правило [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)
* Отключено правило [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

### **Удалено**

* Правило [react/jsx-space-before-closing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md) как осуждаемое