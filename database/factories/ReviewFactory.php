<?php

namespace Database\Factories;

use App\Models\Illustration;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Illustration>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'text' => $this->faker->text,
            'category'=>$this->faker->randomElement(['illustration' ,'design']),
            'customer_name'=>$this->faker->word,
            'customer_link'=>$this->faker->url,
        ];
    }
}
