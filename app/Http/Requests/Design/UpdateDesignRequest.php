<?php

namespace App\Http\Requests\Design;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDesignRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>['required','string'],
            'description'=>['required','string'],
            'previewImage'=>['nullable','image','mimes:jpg,png,jpeg,gif,svg'],
            'image'=>['nullable','image','mimes:jpg,png,jpeg,gif,svg']
        ];
    }
}
