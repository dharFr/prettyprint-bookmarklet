/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PrettyPrinter Bookmarklet - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://github.com/dharFr/prettyprint-bookmarklet\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Olivier Audard; Licensed MIT */',
      bookmarkletPrefix: 'javascript:'
    },
    lint: {
      files: ['grunt.js', 'src/*.js']
    },
    //qunit: {
    //  files: ['test/**/*.html']
    //},
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<banner:meta.bookmarkletPrefix>', '<file_strip_banner:src/prettyprinter.js>'],
        dest: 'dist/prettyprinter.js'
      }
    },
    min: {
      dist: {
        src: ['<config:concat.dist.dest>'],
        dest: 'dist/prettyprinter.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        scripturl: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        onevar: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint concat min');

};
