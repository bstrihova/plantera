<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;

class Thread extends Model
{
    use HasFactory;

        public function post()
        {
            return $this->belongsTo(Post::class);
        }
    
}
