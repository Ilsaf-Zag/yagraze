<?php

use App\Http\Controllers\API\Admin\DesignController;
use App\Http\Controllers\API\Admin\IllustrationController;
use App\Http\Controllers\API\Admin\ReviewController;
use App\Http\Controllers\API\Admin\SettingController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/illustrations', [\App\Http\Controllers\API\User\IllustrationController::class, 'index']);
Route::get('/designs', [\App\Http\Controllers\API\User\DesignController::class, 'index']);
Route::post('/send-mail', \App\Http\Controllers\API\User\SendMailController::class);

Route::get('/reviews/all', [\App\Http\Controllers\API\User\ReviewController::class, 'all']);
Route::get('/reviews/randomValues', [\App\Http\Controllers\API\User\ReviewController::class, 'randomValues']);

Route::get('/settings', [\App\Http\Controllers\API\User\SettingController::class, 'getSettings']);
Route::post('/settings', [\App\Http\Controllers\API\User\SettingController::class, 'setSettings']);


//Route::controller(AuthController::class)->group(function(){
//    Route::post('register', 'register');
//    Route::post('login', 'login');
//});

Route::post('/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::controller(UserController::class)
        ->group(function () {
            Route::delete('/logout', 'logout');
            Route::get('/check-admin', 'checkAdmin');

        });


    Route::prefix('admin')->group(function () {
        Route::patch('/illustrations/sort', [IllustrationController::class, 'sorted']);
        Route::patch('/designs/sort', [DesignController::class, 'sorted']);

        Route::resource('illustrations', IllustrationController::class)->except(['create', 'show']);
        Route::resource('designs', DesignController::class)->except(['create', 'show']);
        Route::resource('reviews', ReviewController::class)->except(['create', 'show']);

        Route::controller(SettingController::class)->group(function () {
            Route::get('/settings', 'getSettings');
            Route::post('/settings', 'setSettings');
        });
    });
});
