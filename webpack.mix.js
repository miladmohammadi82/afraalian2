let mix = require('laravel-mix')

mix.js('src/main.js', 'public/js/app.js');

mix.styles(
    [
        '',
        'src/css/all.min.css',
    ],'public/css/app.css')