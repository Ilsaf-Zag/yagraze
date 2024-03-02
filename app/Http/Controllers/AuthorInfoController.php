<?php

namespace App\Http\Controllers;

use App\Models\AuthorInfo;
use Illuminate\Http\Request;

class AuthorInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authorInfo = AuthorInfo::all()->random();
        return $authorInfo;
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(AuthorInfo $authorInfo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AuthorInfo $authorInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AuthorInfo $authorInfo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AuthorInfo $authorInfo)
    {
        //
    }
}
