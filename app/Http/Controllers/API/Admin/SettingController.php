<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Hamcrest\Core\Set;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function getSettings()
    {
        $setting = Setting::query()->first();
        if (is_null($setting)) return;
        $data = $setting->data;
        $list = [];

        foreach (\request()->all() as $key) {
            if (array_key_exists($key, $data)) {
                $list[$key] = $data[$key];
            }
        }
        return $list;
    }

    public function getSettingsAll()
    {

        $setting = Setting::query()->first();
        if (is_null($setting)) return;

        $setting->meta;
        return $setting;
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
        $data = $request->all();

        $setting = Setting::query()->findOrNew(1);
        $setting->meta = $data;

        $setting->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
