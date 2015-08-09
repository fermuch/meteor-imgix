Package.describe({
  name: 'fermuch:imgix',
  version: '0.0.3_2',
  // Brief, one-line summary of the package.
  summary: 'imgix server/client wrapped for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fermuch/meteor-imgix.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "imgix-core-js": "0.2.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.addFiles([
    'imgix.js/dist/imgix.js',
    'imgix.js/dist/imgix.jquery.js',
    'loader.js'
  ], 'client');

  api.addFiles(['loader.js'], 'server')

  api.export('imgix', 'client');
  api.export('imgix', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fermuch:imgix');
  api.use('coffeescript');
  api.addFiles('imgix-tests.coffee');
});
