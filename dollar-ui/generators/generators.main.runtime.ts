import { MainRuntime } from '@teambit/cli';
import { GeneratorMain, GeneratorAspect, ComponentContext } from '@teambit/generator';
import { GeneratorsAspect } from './generators.aspect';
import { upperCase } from "lodash";

const testText = "Hello World";

export class GeneratorsMain {
  static slots = [];
  static dependencies = [GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {

  generator.registerComponentTemplate([
      {
        name: 'dollar-react',
        description: 'scaffolds a React component without TS',
        generateFiles: (context: ComponentContext) => {
          return [

            // index file
            {
              relativePath: 'index.js',
              isMain: true,
              content: `export { ${context.namePascalCase} } from './${context.name}';
`,
            },

            // component file
            {
              relativePath: `${context.name}.jsx`,
              content: `import React from "react";
import PropTypes from "prop-types";

export const ${context.namePascalCase} = ({ children }) => {
  return (
    <div data-testid="${context.name}-container">
      {children}
    </div>
  );
}`,
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: '${context.namePascalCase}'
labels: ['']
---

import { ${context.namePascalCase} } from './${context.name}';

### Usage

\`\`\`js
<${context.namePascalCase}>
  Hello World
</${context.namePascalCase}>
\`\`\`

### Live Demo

\`\`\`js live
<${context.namePascalCase}>
  Hello World
</${context.namePascalCase}>
\`\`\`
`
            },

            // composition file
            {
              relativePath: `${context.name}.composition.jsx`,
              content: `import React from 'react';
import { ${context.namePascalCase} } from './${context.name}';

export const Basic${context.namePascalCase} = () => (
  <${context.namePascalCase}>
    ${testText}
  </${context.namePascalCase}>
);
`
            },

            // test file
            {
              relativePath: `${context.name}.spec.js`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from './${context.name}.composition';

it('should render', () => {
  const { getByTestId } = render(<Basic${context.namePascalCase} />);
  const rendered = getByTestId("${context.name}-container");
  expect(rendered).toBeTruthy();
});
`
            },
            // add more files here such as css/sass
          ];
        },
      },

    // constants
    {
      name: 'constants',
      description: 'create constants file',
      generateFiles: (context: ComponentContext) => {
        return [

          // index file
          {
            relativePath: 'index.ts',
            isMain: true,
            content: `export { ${context.nameCamelCase} } from './${context.name}';`,
          },

          // component file
          {
            relativePath: `${context.name}.js`,
            content: `export const ${context.nameCamelCase} = {};`,
          },

          // docs file
          {
            relativePath: `${context.name}.docs.mdx`,
            content: `---
description: '${context.nameCamelCase} constants'
labels: ['constants']
---

import { ${context.nameCamelCase} } from './${context.name}';

\`\`\`js

\`\`\`
`
          },
          // add more files here such as css/sass
        ];
      },
    },

    // helper functions
    {
      name: 'helper-function',
      description: 'generate helper function',
      generateFiles: (context: ComponentContext) => {
        return [

          // index file
          {
            relativePath: 'index.js',
            isMain: true,
            content: `export { ${context.nameCamelCase} } from "./${context.name}";`,
          },

          // component file
          {
            relativePath: `${context.name}.js`,
            content: `export const ${context.nameCamelCase} = () => {};`,
          },

          // docs file
          {
            relativePath: `${context.name}.docs.mdx`,
            content: `---
description: '${context.namePascalCase} function.'
labels: ['helper-function']
---
### Parameters

| Param       | Description                               |
| ----------- | ----------------------------------------- |
| param1      | short description                         |

\`\`\`js
import { ${context.nameCamelCase} } from "@gritbit/${context.name}";

${context.nameCamelCase}(param1);
\`\`\`
`
          },

          // test file
          {
            relativePath: `${context.name}.spec.js`,
            content: `
import { ${context.nameCamelCase} } from "./${context.name}";

it("should return the appropriate values/data/etc", () => {
const returnedValue = ${context.nameCamelCase}();

expect(true).toBeTruthy;
});
`
          },
          // add more files here such as css/sass
        ];
      },
    },

    // crypto logo
    {
        name: 'crypto-logo',
        description: 'generates a React component for crypto logos',
        generateFiles: (context: ComponentContext) => {
          return [

            // index file
            {
              relativePath: 'index.js',
              isMain: true,
              content: `export { ${context.namePascalCase} } from './${context.name}';
`,
            },

            // component file
            {
              relativePath: `${context.name}.jsx`,
              content: `import React from "react";
import logo from "./${context.name}.png";

export const ${context.namePascalCase} = () => {
  return (
    <div data-testid="${context.name}-container">
      <img src={logo} alt="${upperCase(context.namePascalCase)} logo" />
    </div>
  );
};`,
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: '${upperCase(context.namePascalCase)} logo'
labels: ['crypto logo', '${context.name}']
---

import { ${context.namePascalCase} } from './${context.name}';
`
            },

            // composition file
            {
              relativePath: `${context.name}.composition.jsx`,
              content: `import React from 'react';
import { ${context.namePascalCase} } from './${context.name}';

export const Basic${context.namePascalCase} = () => (
  <${context.namePascalCase} />
);
`
            },

            // test file
            {
              relativePath: `${context.name}.spec.js`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from './${context.name}.composition';

it('should render', () => {
  const { getByTestId } = render(<Basic${context.namePascalCase} />);
  const rendered = getByTestId("${context.name}-container");
  expect(rendered).toBeTruthy();
});
`
            },
          ]
        }
      }
    ]);

    return new GeneratorsMain();
  }
}

GeneratorsAspect.addRuntime(GeneratorsMain);
