<?php

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

Route::get('/authorInfo',[\App\Http\Controllers\AuthorInfoController::class,'index']);
Route::get('/illustrations',[\App\Http\Controllers\IllustrationController::class,'index']);
Route::get('/designs',[\App\Http\Controllers\DesignController::class,'index']);

Route::patch('/admin/illustrations/sort',[\App\Http\Controllers\API\Admin\IllustrationController::class,'sorted']);

Route::get('/admin/illustrations',[\App\Http\Controllers\API\Admin\IllustrationController::class,'index']);
Route::get('/admin/illustrations/{illustration}',[\App\Http\Controllers\API\Admin\IllustrationController::class,'edit']);
Route::patch('/admin/illustrations/{illustration}',[\App\Http\Controllers\API\Admin\IllustrationController::class,'update']);
Route::post('/admin/illustrations',[\App\Http\Controllers\API\Admin\IllustrationController::class,'store']);
Route::delete('/admin/illustrations/{illustration}',[\App\Http\Controllers\API\Admin\IllustrationController::class,'destroy']);


Route::patch('/admin/designs/sort',[\App\Http\Controllers\API\Admin\DesignController::class,'sorted']);

Route::get('/admin/designs',[\App\Http\Controllers\API\Admin\DesignController::class,'index']);
Route::get('/admin/designs/{design}',[\App\Http\Controllers\API\Admin\DesignController::class,'edit']);
Route::patch('/admin/designs/{design}',[\App\Http\Controllers\API\Admin\DesignController::class,'update']);
Route::post('/admin/designs',[\App\Http\Controllers\API\Admin\DesignController::class,'store']);
Route::delete('/admin/designs/{design}',[\App\Http\Controllers\API\Admin\DesignController::class,'destroy']);

Route::get('/admin/settings/all',[\App\Http\Controllers\API\Admin\SettingController::class,'getSettingsAll']);
Route::get('/admin/settings/get',[\App\Http\Controllers\API\Admin\SettingController::class,'getSettings']);
Route::patch('/admin/settings/',[\App\Http\Controllers\API\Admin\SettingController::class,'update']);
Route::post('/admin/settings',[\App\Http\Controllers\API\Admin\SettingController::class,'store']);
Route::delete('/admin/settings/{setting}',[\App\Http\Controllers\API\Admin\SettingController::class,'destroy']);


//Route::middleware('auth:sanctum)->get('/user', function (Request $request) {
//    return $request->user();
//});
