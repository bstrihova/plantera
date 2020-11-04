<html>
<head>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
 
    @livewireStyles
 
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.0/dist/alpine.js" defer></script>
    @yield("meta")
    <title>{{ config('app.name') }}</title>
</head>
<body>
    @if(Auth::check()) 
        @livewire('navigation-dropdown')
    @endif
    
   
 
    @yield("content")


@livewireScripts
</body>
</html>