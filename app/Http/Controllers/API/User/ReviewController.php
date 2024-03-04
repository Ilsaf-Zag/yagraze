<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function all()
    {
        $reviews = Review::all();

        return $reviews;
    }

    public function randomValues(Request $request)
    {
        $data = $request->validate([
            'quantity' => 'required|integer',
        ]);

        $reviews = Review::query()
            ->inRandomOrder()
            ->limit($data['quantity'])
            ->get();

        return $reviews;
    }
}
