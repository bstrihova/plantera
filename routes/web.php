<?php

use Illuminate\Support\Facades\Route;
use App\Actions\Fortify\UpdateUserPassword;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Route::get('/dummy', "DummyController@index")->middleware("auth");
// Route::get('/dummy', "DummyController@index");


// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return view('dashboard');
// })->name('dashboard');


/*  Route::group(['prefix' => 'messages', "middleware" => "auth"], function () {
    Route::get('/', ['as' => 'messages', 'uses' => 'MessagesController@index']);
    Route::get('/create', ['as' => 'messages.create', 'uses' => 'MessagesController@create']);
    Route::post('/', ['as' => 'messages.store', 'uses' => 'MessagesController@store']);
    Route::get('/{id}', ['as' => 'messages.show', 'uses' => 'MessagesController@show']);
    Route::put('/{id}', ['as' => 'messages.update', 'uses' => 'MessagesController@update']);
});;  */

Route::get("/api/threads", "Api\MessagesController@index")->middleware('auth');
Route::get("/api/threads/{id}", "Api\MessagesController@show")->middleware('auth');
Route::post("/api/threads/{thread_id}", "Api\MessagesController@storeMessage")->middleware('auth');
Route::post("/api/newthread/{post_id}/{seller_id}", "Api\MessagesController@storeThread")->middleware('auth');

Route::get("/api/users/{id}", "Api\UserController@show");
Route::get("/api/authuser", "Api\UserController@authUser")->middleware('auth');
Route::post('/user/settings/{id}', "Api\UserController@update")->middleware("auth");
Route::post('/change-password', 'ChangePasswordController@store')->name('change.password');

Route::get("/api/posts", "Api\PostController@index");
Route::get("/api/posts/{id}", "Api\PostController@show");
Route::post("/api/posts", "Api\PostController@store");

Route::get('/login', 'IndexController@index')->name("login");
Route::get('/register', 'IndexController@index');
Route::get('/user/profile', 'IndexController@index');
Route::get('/user/settings', 'IndexController@index');


Route::get('/{path?}', "IndexController@index")->where('path', '.*');
