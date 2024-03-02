<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDesignRequest;
use App\Http\Requests\UpdateDesignRequest;
use App\Models\Design;
use Illuminate\Support\Facades\Storage;
use Spatie\LaravelIgnition\Solutions\SolutionProviders\DefaultDbNameSolutionProvider;

class DesignController extends Controller
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
        $designs = Design::ordered()->paginate($pageSize);
        return $designs;
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
    public function store(StoreDesignRequest $request)
    {

        $data = $request->validated();

        $previewImageName = $data['previewImage']->hashName();
        $imageName = $data['image']->hashName();

        Storage::putFile('images/design/preview', $data['previewImage']);
        Storage::putFile('images/design', $data['image']);

        Design::create([
            'name' => $request['name'],
            'preview_url' => $previewImageName,
            'url' => $imageName
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Design $design)
    {
        return $design;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Design $design)
    {
        return $design;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDesignRequest $request, Design $design)
    {
        $data = $request->validated();

        if ($data['previewImage']) {
            $file = $data['previewImage'];

            unset($data['previewImage']);
            $data['preview_url'] = $file->hashName();

            Storage::delete('images/design/preview' . $design->preview_url);
            Storage::putFile('images/design/preview', $file);
        }

        if ($data['image']) {
            $file = $data['image'];
            unset($data['image']);
            $data['url'] = $file->hashName();

            Storage::delete('images/design' . $design->url);
            Storage::putFile('images/design', $file);
        }

        $design->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Design $design)
    {
        $design->delete();

    }

    public function sorted()
    {
        $validated = request()->validate([
            'ids' => 'required|array',
            'ids.*' => 'int'
        ]);
        Design::setNewOrder(...$validated);

    }
}
