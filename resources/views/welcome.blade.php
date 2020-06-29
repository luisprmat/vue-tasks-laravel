<!doctype html>
<html lang="es">
    <head>
        <title>Nuevo proyecto</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Favicon -->
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

        <!-- CSS styles compiled -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body>
        <div id="app">
            <app-component></app-component>
        </div>

        <!-- Scripts compiled-->
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
