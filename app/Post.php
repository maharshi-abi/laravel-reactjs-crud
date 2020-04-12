<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'image',
        'title',
        'description',
    ];

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format('d M Y h:i A');
    }


}
