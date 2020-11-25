<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\User;
use Carbon\Carbon;
use Cmgmyr\Messenger\Models\Message;
use Cmgmyr\Messenger\Models\Participant;
use App\Models\Thread;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class MessagesController extends Controller
{
    /**
     * Show all of the message threads to the user.
     *
     * @return mixed
     */
    public function index()
    {
        // All threads, ignore deleted/archived participants
        $threads = Thread::with('buyer','seller', 'messages','messages.user','post')->orderBy("created_at", 'DESC')->get();

        // // All threads that user is participating in
        // $threads = Thread::forUser(Auth::id())->latest('updated_at')->get();

        // All threads that user is participating in, with new messages
        // $threads = Thread::forUserWithNewMessages(Auth::id())->latest('updated_at')->get();

        // $threads = Thread::get();
        return $threads;
    }

    /**
     * Shows a message thread.
     *
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        // try {
        //     $thread = Thread::findOrFail($id);
        // } catch (ModelNotFoundException $e) {
        //     Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');

        //     return redirect()->route('messages');
        // }

        // // show current user in list if not a current participant
        // // $users = User::whereNotIn('id', $thread->participantsUserIds())->get();

        // // don't show the current user in list
        // $userId = Auth::id();
        // $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();

        // $thread->markAsRead($userId);

        // return compact('thread', 'users');

        $thread = Thread::with('buyer','seller', 'messages','messages.user','post')->findOrFail($id);

        // Thread::with('buyer','seller', 'messages','messages.user','post')->orderBy("created_at", 'DESC')->get()


        // $messages = $thread->messages;
        // $post = $thread->post;



        // return [
        //     'movie' => $movie,
        //     'genres' => $genres,
        //     'people' => $people
        // ];

        // same as above:
        return compact('thread');

    
        // return $thread;

    }

    /**
     * Creates a new message thread.
     *
     * @return mixed
     */
    public function create($id)
    // public function create()
    {
        // $users = User::where('id', '!=', Auth::id())->get();
        $users = User::where('id', '!=', Auth::id())->where("id", "=", $id)->get();

        return compact('users');

       /*  return view('messenger.create', compact('users')); */
    }

    /**
     * Stores a new message.
     *
     * @return mixed
     */
    public function storeMessage($thread_id, Request $request)
    {           
        // Message
        Message::create([
            'thread_id' => $thread_id,
            'user_id' => Auth::id(),
            'body' => $request->input('body')
        ]);

        return [
            'status' => 'success'
        ];

    }

    /**
     * Stores a new message.
     *
     * @return mixed
     */
    public function storeThread($post_id, Request $request)
    {  
        Thread::create([
            'post_id' => $post_id, 
            'buyer_id' => Auth::id(),  
            'seller_id' => 2,
           

          ]);   
          
          
          Message::create([
            'user_id' => $user_id, 
            'thread_id' =>  $thread->id,
            'body' => 'Ahoj'
        ]);

        return [
            'status' => 'success'
        ];

    }

    /**
     * Adds a new message to a current thread.
     *
     * @param $id
     * @return mixed
     */
    // public function update($id)
    // {
    //     try {
    //         $thread = Thread::findOrFail($id);
    //     } catch (ModelNotFoundException $e) {
    //         Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');

    //         return redirect()->route('messages');
    //     }

    //     $thread->activateAllParticipants();

    //     // Message
    //     Message::create([
    //         'thread_id' => $thread->id,
    //         'user_id' => Auth::id(),
    //         'body' => Request::input('message'),
    //     ]);

    //     // Add replier as a participant
    //     $participant = Participant::firstOrCreate([
    //         'thread_id' => $thread->id,
    //         'user_id' => Auth::id(),
    //     ]);
    //     $participant->last_read = new Carbon;
    //     $participant->save();

    //     // Recipients
    //     if (Request::has('recipients')) {
    //         $thread->addParticipant(Request::input('recipients'));
    //     }

    //     return redirect()->route('messages.show', $id);
    // }
}
