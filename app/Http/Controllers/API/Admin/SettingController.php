<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function getSettings()
    {
        $setting = Setting::query()->first();

        if (!is_null($setting)) {
            $data = $setting->data;
            $list = [];

            foreach (\request()->all() as $key) {
                if (array_key_exists($key, $data)) {
                    $list[$key] = $data[$key];
                }
            }

            return $list;
        }
    }

    public function getSettingsAll()
    {
        $setting = Setting::query()->first();

        if (!is_null($setting)) {
            $setting->meta;
            return $setting;
        };
    }

    /**
     * Store a newly created resource in storage.
     */

    public function setSettings(Request $request)
    {
        $data = $request->all();

        $setting = Setting::query()->findOrNew(1);
        $setting->meta = $data;

        $setting->save();
    }

}
