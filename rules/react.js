module.exports = {
  "parserOptions": {

    "ecmaFeatures": {

      // Поддержка JSX
      "jsx": true

    }

  },

  "plugins": [

    // Плагин с правилами для React
    // https://github.com/yannickcr/eslint-plugin-react
    "react"

  ],

  "rules": {

    // Обеспечить последовательное именование свойств булева типа
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    "react/boolean-prop-naming": "off",

    // Обеспечить для каждого свойства указанного в defaultProps соответствующее
    // необязательное свойство в propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    "react/default-props-match-prop-types": "error",

    // Предотвратить отсутствие отображаемого имени при определении компонента
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    "react/display-name": "off",

    // Запретить передачу некоторых свойств в компонент
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    "react/forbid-component-props": "off",

    // Запретить определенные элементы
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    "react/forbid-elements": "off",

    // Запретить определенные типы свойств компонента
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    "react/forbid-prop-types": "off",

    // Запретить импорт внешних типов свойств компонента
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    "react/forbid-foreign-prop-types": "off",

    // Обеспечить соглашение о булевых свойствах в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-boolean-value": [
      "error",
      "never"
    ],

    // Проверять расположение закрывающей скобки тега в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-closing-bracket-location": [
      "error",
      "line-aligned" // Должен быть выровнен с открывающий скобкой тега.
    ],

    // Проверять местоположение закрывающего тега в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    "react/jsx-closing-tag-location": "error",

    // Требовать или запретить пробелы внутри фигурных скобок в аттрибутах JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-curly-spacing": [
      "error",
      "never", // Запретить пробелы внутри фигурных скобок
      {
        "allowMultiline": true // разрешить переносы строк
      }
    ],

    // Требовать или запретить пробелы вокруг знака равенства в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    "react/jsx-equals-spacing": [
      "error",
      "never" // Запретить пробелы вокруг знака равенства
    ],

    // Ограничить расширения файлов, которые могут содержать JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": "off",

    // Настроить позицию первого аттрибута тега при многострочном расположении
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline" // Первое свойство должно располагаться на новой строке, если тег JSX занимает несколько строк.
    ],

    // Обеспечить использование соглашения об именах обработчиков событий
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    "react/jsx-handler-names": "off",

    // Проверять отступы вложенных тегов в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    "react/jsx-indent": [
      "error",
      2
    ],

    // Проверять отступы аттрибутов при многострочном расположении
    // свойств тега JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent-props": [
      "error",
      2
    ],

    // Проверять отсутствующее свойство key
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    "react/jsx-key": "off",

    // Ограничить максимальное количество аттрибутов на одной строке в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    "react/jsx-max-props-per-line": "off",

    // Запретить использование .bind () в свойствах JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": true, // игнорировать аттрибут ref
        "allowArrowFunctions": true, // разрешить стрелочные функции
        "allowBind": false // разрешить bind()
      }
    ],

    // Запретить вставлять комментарии как текстовые узлы
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    "react/jsx-no-comment-textnodes": "error",

    // Предотвратить дублирования свойств в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-duplicate-props": [
      "error",
      {
        "ignoreCase": true
      }
    ],

    // Запретить использование не обернутых строк в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    "react/jsx-no-literals": "off",

    // Запретить использование небезопасных target='_ blank'
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    "react/jsx-no-target-blank": "error",

    // Запретить необъявленные переменные в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "react/jsx-no-undef": "error",

    // Требовать использование верблюжей нотации в иенновании компонентов
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],

    // Требовать сорировку свойств по имени в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-sort-props": "off",

    // Проверять пробелы в открывающих и закрывающих скобках JSX и вокруг них
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "never",
        "afterOpening": "never"
      }
    ],

    // Не допускать, чтобы React был помечен как неиспользуемый
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-react": "error",

    // Запретить неправильную пометку неиспользуемых переменных в JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/jsx-uses-vars": "error",

    // Предотвращение отсутствия скобок вокруг многострочных JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": true,
        "assignment": true,
        "return": true
      }
    ],

    // Запретить использовать индекс массива в ключах компонентов
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    "react/no-array-index-key": "off",

    // Запретить передавать childen как свойство
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    "react/no-children-prop": "error",

    // Запретить использование опасных JSX свойств
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    "react/no-danger": "off",

    // Запретить передачу children вместе с dangerouslySetInnerHTML()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    "react/no-danger-with-children": "error",

    // Запретить использование устаревших методов
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/.md
    "react/no-deprecated": "error",

    // Запретить использование setState в componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    "react/no-did-mount-set-state": "error",

    // Запретить использование setState в componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-did-update-set-state": "error",

    // Запретить напрямую изменять this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    "react/no-direct-mutation-state": "error",

    // Запретить использование findDOMNode
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    "react/no-find-dom-node": "error",

    // Запретить использование isMounted
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    "react/no-is-mounted": "error",

    // Запретить объявление нескольких компонентов в одном файле
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    "react/no-multi-comp": [
      "error",
      {
        "ignoreStateless": true // Игнорировать компоненты без состояний
      }
    ],

    // Запретить использование shouldComponentUpdate при наследовании
    // от React.PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    "react/no-redundant-should-component-update": "error",

    // Запретить использование возвращаемых значений
    // от React.render()/ReactDOM.render()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    "react/no-render-return-value": "error",

    // Запретить использование setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    "react/no-set-state": "off",

    // Запретить использование строк в ref свойстве
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    "react/no-string-refs": "error",

    // Запретить использование недопустимых смоволов в JSX разметке
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    "react/no-unescaped-entities": "error",

    // Запретить использование неизвестных свойств DOM
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/no-unknown-property": "error",

    // Запретить объявление неиспользуемых типов свойств
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    "react/no-unused-prop-types": "error",

    // Запретить использование setState() в методе componentWillUpdate()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    "react/no-will-update-set-state": "error",

    // Требовать объявление класса компонента в ES6 стиле
    // заместо React.createClass()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prefer-es6-class": [
      "error",
      "always"
    ],

    // Требовать объявлять компонент без состояний как чистую функцию
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": [
      "error",
      {
        "ignorePureComponents": true // игнорировать компоненты наследуемые от React.PureComponent
      }
    ],

    // Запретить пропуск проверки типов свойств компонента
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": "error",

    // Запретить отсутствие React в области видимости при использовании JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/react-in-jsx-scope": "error",

    // Требовать объявления defaultProps для каждого необязательного свойства
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    "react/require-default-props": "error",

    // Требовать что бы все компоненты имели метод shouldComponentUpdate()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    "react/require-optimization": "off",

    // Требовать возврат значения в методе render()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    "react/require-render-return": "error",

    // Требовать самозакрывающийся тег для компонентов без детей
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": "error",

    // Обеспечить определенный порядок свойств и методов внутри
    // класса компонента
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/sort-comp": "off",

    // Обеспечить алфавитную сортировку свойств в propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    "react/sort-prop-types": "off",

    // Требовать что бы свойство style всегда определялось объектом
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    "react/style-prop-object": "error",

    // Запретить объявление детей для самозакрывающихся
    // элементов (<hr/>, <br/>, и т. д. )
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    "react/void-dom-elements-no-children": "off"

  }
};
