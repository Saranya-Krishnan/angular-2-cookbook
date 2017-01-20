/**
 * WEB ANGULAR VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 * 
 * Based on https://cdn.rawgit.com/angular/angular.io/74ef87f/public/docs/_examples/_boilerplate/systemjs.config.web.js
 */

System.config({
  // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
  transpiler: 'ts',
  typescriptOptions: {
    // Complete copy of compiler options in standard tsconfig.json
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
    "typeRoots": [
      "../../node_modules/@types/"
    ]
  },
  meta: {
    'typescript': {
      "exports": "ts"
    }
  },
  paths: {
    // paths serve as alias
    'npm:': 'https://unpkg.com/'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    app: 'app',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
    '@angular/platform-webworker': 'npm:@angular/platform-webworker/bundles/platform-webworker.umd.js',
    '@angular/platform-webworker-dynamic': 'npm:@angular/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',

    // other libraries
    'rxjs':                      'npm:rxjs',
    'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
    'ts':                        'npm:plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                'npm:typescript@2.0.3/lib/typescript.js'
  },
  // packages tells the System loader how to load when no filename and/or no extension
  packages: {
    main: './main.ts',
    app: {
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
