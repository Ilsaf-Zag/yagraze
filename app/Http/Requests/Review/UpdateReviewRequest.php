<?php

namespace App\Http\Requests\Review;

use App\Enums\CategoryReview;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
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
