module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    'src/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'src/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        },
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
}