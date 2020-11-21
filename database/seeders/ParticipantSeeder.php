<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Cmgmyr\Messenger\Models\Participant;

class ParticipantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {       
        $p = new Participant;       
        $p->user_id = 1;
        $p->thread_id = 1;
        $p->save();

        $p = new Participant;       
        $p->user_id = 2;
        $p->thread_id = 1;
        $p->save();

        $p = new Participant;       
        $p->user_id = 1;
        $p->thread_id = 2;
        $p->save();

        $p = new Participant;       
        $p->user_id = 2;
        $p->thread_id = 2;
        $p->save();

        $p = new Participant;       
        $p->user_id = 1;
        $p->thread_id = 3;
        $p->save();

        $p = new Participant;       
        $p->user_id = 2;
        $p->thread_id = 3;
        $p->save();
    }

}

