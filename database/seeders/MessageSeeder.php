<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Cmgmyr\Messenger\Models\Message;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $p = new Message;
        $p->body = "I want your flower";
        $p->user_id = 2;
        $p->thread_id = 1;
        $p->save();

        $p = new Message;
        $p->body = "Fine, I would like to donate, when do you have time to meet me?";
        $p->user_id = 1;
        $p->thread_id = 1;
        $p->save();

        $p = new Message;
        $p->body = "Today at 5 o'clock";
        $p->user_id = 2;
        $p->thread_id = 1;
        $p->save();

        $p = new Message;
        $p->body = "Thread 2 Message 1 User 1";
        $p->user_id = 2;
        $p->thread_id = 2;
        $p->save();

        $p = new Message;
        $p->body = "Thread 2 Message 2 User 2";
        $p->user_id = 1;
        $p->thread_id = 2;
        $p->save();

        $p = new Message;
        $p->body = "Thread 2 Message 3 User 1";
        $p->user_id = 2;
        $p->thread_id = 2;
        $p->save();

        $p = new Message;
        $p->body = "Thread 3 Message 1 User 2";
        $p->user_id = 1;
        $p->thread_id = 3;
        $p->save();

        $p = new Message;
        $p->body = "Thread 3 Message 2 User 1";
        $p->user_id = 2;
        $p->thread_id = 3;
        $p->save();

        $p = new Message;
        $p->body = "Thread 3 Message 3 User 2";
        $p->user_id = 1;
        $p->thread_id =3;
        $p->save();

    }

}