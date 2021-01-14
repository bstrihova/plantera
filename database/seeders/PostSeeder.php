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
        $p->description = "Very beautiful monstera ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus ";
        $p->price = 250;
        $p->currency = "Kč";
        $p->transaction = "sell";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
       $p->user_id = 1;
        $p->save();

        $p = new Post;
        $p->name = "Pothos lime";
        $p->description = "Very beautiful lime green pothos for your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus ";
        $p->price = 250;
        $p->currency = "Kč";
        $p->transaction = "sell";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?ixlib=rb-1.2.1&
        ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80";
        $p->user_id = 1;
        $p->save();

        $p = new Post;
        $p->name = "Fikus";
        $p->description = "Available for handover in Prague 4. I do not send flowers by post. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus er";
        $p->transaction = "swap";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";
        $p->user_id = 3;
        $p->save();

        $p = new Post;
        $p->name = "Pilea Little Baby";
        $p->description = "I would like to donate this pilea to nice people. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem";
        $p->price = null;
        $p->currency = "Kč";
        $p->transaction = "donate";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1594312077486-6e382a54f422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=610&q=80";
        $p->user_id = 3;
        $p->save();

        $p = new Post;
        $p->name = "Succulent Magic";
        $p->description = "Create your own succulent garden with this magic plant. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit ";
        $p->transaction = "sell";
        $p->price = 250;
        $p->currency = "Kč";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1553290322-4cdbb1da4fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
        $p->user_id = 2;
        $p->save();

        $p = new Post;
        $p->name = "Cactus company";
        $p->description = "I would like to donate my cactus collection because I am leaving abroad. Feel free to contact me. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit ";
        $p->transaction = "donate";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1447012256906-c2ed7aa5632e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80";
        $p->user_id = 1;
        $p->save();

        $p = new Post;
        $p->name = "Bonsai";
        $p->description = "Create your own beautiful zen garden with this awesome plant. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ";
        $p->price = 2500;
        $p->currency = "Kč";
        $p->transaction = "sell";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80";
        $p->user_id = 3;
        $p->save();

        $p = new Post;
        $p->name = "Syngonium baby";
        $p->description = "Let this baby flower grow. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ";
        $p->transaction = "donate";
        $p->available = true;
        $p->photo = "https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/10/S_Freckles_detail.jpg";
        $p->user_id = 2;
        $p->save();

        $p = new Post;
        $p->name = "Baby Basil";
        $p->description = "Small but well mantained basil, never had issues or being sick. I have to give it away because I want to propagate basil in the world. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis ";
        $p->transaction = "donate";
        $p->available = true;
        $p->photo = "https://images.unsplash.com/photo-1515471033351-f7a31fc10abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
        $p->user_id = 2;
        $p->save();

        $p = new Post;
        $p->name = "Ficus lyrata";
        $p->description = "Very beautiful ficus ready to make your living room warm <3<3<3. Available for handover in Prague 4. I do not send flowers by post. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis "; 
        $p->transaction = "swap";
        $p->available = true;
        $p->photo = "
        https://images.unsplash.com/photo-1551655850-f5de6b96b2ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
        $p->user_id = 3;
        $p->save();

        $p = new Post;
        $p->name = "Calathea makoyana";
        $p->description = "Difficult to take care of, but beaufitul to look at. Only for experienced houseplant lovers. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis "; 
        $p->price = 350;
        $p->currency = "Kč";
        $p->transaction = "sell";
        $p->available = true;
        $p->photo = "
        https://images.unsplash.com/photo-1602879946327-8b4a148c367d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        $p->user_id = 3;
        $p->save();
    }
}
