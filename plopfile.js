module.exports = plop => {
  plop.setHelper('component', (txt) => txt.toUpperCase());
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent',
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/__test__/{{name}}.test.js'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/dist/{{name}}.js'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.vue',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        data: (name) => {
          console.log('{{name}}' + 'ddddd')
          return {componentName: '{{name}}dsad'}
        },
        path: 'packages/{{name}}/stories/{{name}}.stories.js',
        templateFile: 'plop-templates/component.stories.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-templates/component.index.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.scss',
        templateFile: 'plop-templates/component.scss.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/LICENCE',
        templateFile: 'plop-templates/component.LICENSE.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop-templates/component.README.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-templates/component.package.hbs',
      }
    ]
  });
}