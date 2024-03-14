<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{env('APP_NAME')}}</title>

    <link rel="icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180">


    @vite('resources/js/app.js')
</head>
<body>
<div id="app">
</div>
</body>
</html>
