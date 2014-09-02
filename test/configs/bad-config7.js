exports.config = {
  emberTest:{
    apps: [{
      testLocation: "foo",
      testAppFactory: "foo",
      stylesheetPaths: [1, 2],
      requireConfig: {}
    }]
  },
  modules: [
    'ember-test'
  ],
  logger: {
    growl: {
      enabled: false
    }
  }
};