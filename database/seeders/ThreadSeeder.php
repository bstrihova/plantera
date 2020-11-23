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
               
        $p->seller_id = 1;
        $p->buyer_id = 2 ;
        $p->post_id = 1;
        $p->save();

        $p = new Thread;
               
        $p->seller_id = 1;
        $p->buyer_id = 2;
        $p->post_id = 2;
        $p->save();

        $p = new Thread;
               
        $p->seller_id = 2;
        $p->buyer_id = 1 ;
        $p->post_id = 3;
        $p->save();

    }

}
