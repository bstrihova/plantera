<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $p = new Post;
        $p->name = "Monstera deliciosa";
        $p->description = "HORIZONTAL Very beautiful monstera ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post.";
        $p->price = 250;
        $p->currency = "Kč";
        $p->transaction = "sell";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        // $p->user_id = 1;
        $p->save();

        $p = new Post;
        $p->name = "Pothos lime princessina";
        $p->description = "SQUARE Very beautiful monstera ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post.";
        $p->price = 250;
        $p->currency = "€";
        $p->transaction = "sell";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80";
        $p->save();

        $p = new Post;
        $p->name = "Monstera orbifolia";
        $p->description = "VERTICAL Very beautiful monstera ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post.";
        $p->transaction = "swap";
        $p->available = false;
        $p->photo = "https://images.unsplash.com/photo-1602491674275-316d95560fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
        $p->save();

        $p = new Post;
        $p->name = "Monstera";
        $p->description = "HORIZONTALVery beautiful monstera ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post.";
        $p->price = 250;
        $p->currency = "Kč";
        $p->transaction = "sell";
        $p->available = false;
        $p->photo = "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        $p->save();

        $p = new Post;
        $p->name = "Pothos lime princessina big big flower";
        $p->description = "SQUARE Very beautiful monstera ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post.";
        $p->transaction = "donate";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80";
        $p->save();

        $p = new Post;
        $p->name = "Monstera orbifolia pretty small";
        $p->description = "VERTICAL Very beautiful monstera ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post.";
        $p->price = 250;
        $p->currency = "Kč";
        $p->transaction = "sell";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1602491674275-316d95560fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
        $p->save();
    }
}
