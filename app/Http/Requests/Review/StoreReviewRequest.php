<?php

namespace App\Http\Requests\Review;

use App\Enums\CategoryReview;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'text' => ['required', 'string'],
            'category' => ['required',new Enum(CategoryReview::class)],
            'customerName' => ['required','string'],
            'customerLink' => ['required','url'],
        ];
    }
}
