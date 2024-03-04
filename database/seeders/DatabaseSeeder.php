<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\AuthorInfo;
use App\Models\Design;
use App\Models\Illustration;
use App\Models\Review;
use Database\Factories\ReviewFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'name' => 'Test User',
             'email' => 'test@example.com',
         ]);

//        AuthorInfo::factory(10)->create();
        Illustration::factory(10)->create();
        Design::factory(10)->create();
        Review::factory(20)->create();
    }
}
