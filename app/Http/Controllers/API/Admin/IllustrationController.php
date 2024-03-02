<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Illustration;
use App\Http\Requests\StoreIllustrationRequest;
use App\Http\Requests\UpdateIllustrationRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class IllustrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $validated = request()->validate([
            'page' => 'nullable|integer',
            'pageSize' => 'nullable|integer',
        ]);

        $pageSize = request()->input('pageSize', 8);
        $illustrations = Illustration::ordered()->paginate($pageSize);
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
        $file = $request['image'];

        $name = $file->hashName();
        Storage::putFile('images/illustration', $file);

        Illustration::create([
            'name' => $request['name'],
            'url' => $name,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Illustration $illustration)
    {
        return $illustration;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Illustration $illustration)
    {
        return $illustration;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIllustrationRequest $request, Illustration $illustration)
    {
        $data = $request->validated();

        if ($data['image']) {
            $file = $data['image'];
            unset($data['image']);
            $data['url'] = $file->hashName();

            Storage::delete('images/illustration' . $illustration->url);
            Storage::putFile('images/illustration', $file);
        }

        $illustration->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Illustration $illustration)
    {
        $illustration->delete();

    }

    public function sorted()
    {
        $validated = request()->validate([
            'ids' => 'required|array',
            'ids.*' => 'int'
        ]);
        Illustration::setNewOrder(...$validated);

    }
}
