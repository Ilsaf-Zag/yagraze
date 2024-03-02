<?php

namespace Database\Factories;

use App\Models\Illustration;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Illustration>
 */
class DesignFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'name' => $this->faker->word,
            'preview_url' => $this->faker->image('public/images/design/preview', 400, 400, null, false),
            'url' => $this->faker->image('public/images/design', random_int(800, 1000), random_int(600, 2000), null, false),
        ];
    }
}
