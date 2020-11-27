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
        $p->body = "Hello there";
        $p->user_id = 3;
        $p->thread_id = 2;
        $p->save();

        $p = new Message;
        $p->body = "I would like your plant a lot!!!! is it still available?";
        $p->user_id = 1;
        $p->thread_id = 2;
        $p->save();

        $p = new Message;
        $p->body = "yes it is, where can we meet?";
        $p->user_id = 3;
        $p->thread_id = 2;
        $p->save();

        $p = new Message;
        $p->body = "hello!";
        $p->user_id = 1;
        $p->thread_id = 3;
        $p->save();

        $p = new Message;
        $p->body = "hi!";
        $p->user_id = 2;
        $p->thread_id = 3;
        $p->save();

        $p = new Message;
        $p->body = "what a pretty plant!";
        $p->user_id = 1;
        $p->thread_id =3;
        $p->save();

    }

}