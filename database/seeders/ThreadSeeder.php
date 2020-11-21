<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Thread;

class ThreadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {       
        $p = new Thread;
               
        $p->subject= "Thread 1 o Post 1";
        $p->post_id = 1;
        $p->save();

        $p = new Thread;
               
        $p->subject= "Thread 2 o Post 2";
        $p->post_id = 2;
        $p->save();

        $p = new Thread;
               
        $p->subject= "Thread 3 o Post 3";
        $p->post_id = 3;
        $p->save();

    }

}
