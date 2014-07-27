
module.exports = function (grunt) {
  grunt.initConfig({
    injector: {
      options: {},
      local_dependencies: {
        files: {
          'index.html': ['bower_components/**/*.js', 'src/**/*.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-injector');
  grunt.registerTask('default', ['injector']);
};
