<?php

use App\Http\Controllers\API\Admin\DesignController;
use App\Http\Controllers\API\Admin\IllustrationController;
use App\Http\Controllers\API\Admin\ReviewController;
use App\Http\Controllers\API\Admin\SettingController;
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


Route::prefix('admin')->group(function () {

    Route::patch('/illustrations/sort', [IllustrationController::class,'sorted']);
    Route::patch('/designs/sort', [DesignController::class,'sorted']);

    Route::resource('illustrations' , IllustrationController::class)->except(['create','show']);
    Route::resource('designs' , DesignController::class)->except(['create','show']);
    Route::resource('reviews' , ReviewController::class)->except(['create','show']);

    Route::controller(SettingController::class)->group(function (){
        Route::get('/settings/all', 'getSettingsAll');
        Route::get('/settings', 'getSettings');
        Route::post('/settings','setSettings');
    });
});






//Route::middleware('auth:sanctum)->get('/user', function (Request $request) {
//    return $request->user();
//});
