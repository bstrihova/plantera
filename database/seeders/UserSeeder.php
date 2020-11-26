<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'barbora',
            'email' => 'test@plantera.cz',
            'password' => Hash::make('plantera'),
            "location" => "Prague, Czech Republic"
        ]);

        User::create([
            'name' => 'stefano',
            'email' => 'test2@plantera.cz',
            'password' => Hash::make('plantera'),
            "location" => "Trinec, Czech Republic"
        ]);

        User::create([
            'name' => 'eva',
            'email' => 'test3@plantera.cz',
            'password' => Hash::make('plantera'),
            "location" => "Prague, Czech Republic"
        ]);
    }
}
