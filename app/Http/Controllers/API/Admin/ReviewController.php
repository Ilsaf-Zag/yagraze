<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Review\StoreReviewRequest;
use App\Http\Requests\Review\UpdateReviewRequest;
use App\Mail\FeedbackMail;
use App\Models\Review;
use Illuminate\Support\Facades\Mail;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        request()->validate([
            'page' => 'integer'
        ]);

        $reviews = Review::paginate(10);

        return $reviews;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReviewRequest $request)
    {
        $data = $request->validated();

        Review::create([
            'text'=>$data['text'],
            'category'=>$data['category'],
            'customer_name'=>$data['customerName'],
            'customer_link'=>$data['customerLink'],
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {
        return $review;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReviewRequest $request, Review $review)
    {
        $data = $request->validated();

        $review->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $review->delete();

    }
}
