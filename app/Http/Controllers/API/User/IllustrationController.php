<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\IllustrationResource;
use App\Models\Illustration;

class IllustrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke()
    {
        $illustrations = Illustration::all();

        return IllustrationResource::collection($illustrations)->resolve();
    }
}
