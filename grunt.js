/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    replace: {
      dist: {
        src: ['src/index.html'],
        dest: '',
        variables: {
          bookmarklet: '<%= grunt.file.read(\'dist/prettyprinter.min.js\') %>'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-replace');

  // Default task.
  grunt.registerTask('default', 'replace');
};
