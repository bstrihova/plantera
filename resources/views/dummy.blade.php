@extends("layout")

@section("meta")
    <meta type="keywords" value="dummy, bootcamp, project, laravel">

@endsection

@section("content")

{{-- {{-- Here comes your content! --} --}}
 <h1>My first content on Laravel Jetstream</h1>

{{-- Auth::check() returns true if user logged in --}}
 @if(Auth::check()) 
 <p>Hello {{$user->name}}</p>
 @else
 <p>Hello stranger</p>
 @endif

@endsection
