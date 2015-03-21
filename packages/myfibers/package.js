Package.describe({
  name: 'myfibers',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Npm.depends({'control-flow': '0.2.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  
  api.addFiles('myfibers.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('myfibers');
});
