<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'data'
    ];

    protected $casts = [
        'data' => 'array'
    ];

    public function getMetaAttribute($value)
    {
        return $this->attributes['data'];
    }

    public function setMetaAttribute($value)
    {
        $list = [];

        foreach ($value as $key => $array_item) {
            $list[$key] = $array_item;
        }
        $this->attributes['data'] = json_encode($list);
    }
}
