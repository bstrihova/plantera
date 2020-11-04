<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Thread;
use App\Models\User;

class Post extends Model
{
    use HasFactory;
    public function threads() {
        return $this->hasMany(Thread::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
