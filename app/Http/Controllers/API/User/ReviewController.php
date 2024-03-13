<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function all()
    {
        $reviews = Review::query()->orderByDesc('id')->get();

        return ReviewResource::collection($reviews)->resolve();

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

        return ReviewResource::collection($reviews)->resolve();
    }
}
