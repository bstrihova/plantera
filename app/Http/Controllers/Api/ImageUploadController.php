<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Str;

class ImageUploadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function imageUpload()
    // {
    //     return view('imageUpload');
    // }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function imageUploadPost(Request $request, $id)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $post = Post::findOrFail($id);
        $original_name = $request->image->getClientOriginalName();
        $sluggized_name = Str::slug(pathinfo($original_name, PATHINFO_FILENAME)) . '.' . pathinfo($original_name, PATHINFO_EXTENSION);

        $imageName = $post->id . "." . time() . '.' . $sluggized_name;

        $request->image->move(public_path('post/images'), $imageName);
        $post->photo = "/post/images/" . $imageName;
        $post->save();

        return [
            'status' => 'success',
            'image' => $imageName
        ];
    }
}
