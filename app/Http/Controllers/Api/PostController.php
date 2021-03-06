<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::query()
            ->with("user")
            ->orderBy("created_at")
            ->get();

        return $posts;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::with("user")->findOrFail($id);

        return $post;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // if ($request->hasFile('image')) {
        //     //  Let's do everything here
        //     if ($request->file('image')->isValid()) {
        //         //
        //         $validated = $request->validate([
        //             'name' => 'string|max:100',
        //             'image' => 'mimes:jpeg,png',
        //         ]);
        //         $extension = $request->image->extension();
        //         $request->image->storeAs('/public', $validated['name'] . "." . $extension);
        //         $url = Storage::url($validated['name'] . "." . $extension);

        //         //in what to change it?
        //         $file = File::create([
        //             'name' => $validated['name'],
        //             'url' => $url,
        //         ]);

        //         // what is the redirect?
        //         Session::flash('success', "Success!");
        //         return $file;
        //     }
        // }
        // abort(500, 'Could not upload image :(');


        $post = new Post;
        $post->user_id = Auth::id();
        $post->transaction = $request->input('transaction');
        $post->description = $request->input('description');
        $post->price = $request->input('price');
        $post->name = $request->input('name');
        $post->currency = "Kč";
        $post->available = true;
        $post->photo = "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

        $post->save();

        // return [
        //     'status' => 'success',
        //     "post_id" => $post->id
        // ];
        return $post->id;
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        $input = $request->all();
        $post->fill($input)->save();

        return [
            'status' => 'success'
        ];
    }

    /**
     * Archive the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->available = false;
        $post->save();
        return [
            'status' => 'post archived'
        ];
    }
}
