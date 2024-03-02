<?php

namespace App\Http\Controllers;

use App\Models\Illustration;
use App\Http\Requests\StoreIllustrationRequest;
use App\Http\Requests\UpdateIllustrationRequest;

class IllustrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $illustrations = Illustration::all();

        return $illustrations;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIllustrationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Illustration $illustration)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Illustration $illustration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIllustrationRequest $request, Illustration $illustration)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Illustration $illustration)
    {
        //
    }
}
