<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use function Laravel\Prompts\error;

class UserController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('web')->attempt($credentials)) {
            $request->session()->regenerate();

            $success = true;
            $message = 'User login successfully';
        } else {
            $success = false;
            $message = 'Неверный логин или пароль';
        }

        $response = [
            'success' => $success,
            'message' => $message,
        ];

        return response()->json($response);

    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }

    public function checkAdmin(Request $request){
        if (Auth::check()){
            return $request->user()->isAdmin();
        }

        return false;
    }
}
