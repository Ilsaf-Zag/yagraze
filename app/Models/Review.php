<?php

namespace App\Models;

use App\Enums\CategoryReview;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'text',
        'category',
        'customer_name',
        'customer_link'
    ];

    protected $casts = [
        'category_review' => CategoryReview::class
    ];
}
