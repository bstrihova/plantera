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
            'name' => 'test',
            'email' => 'test@plantera.cz',
            'password' => Hash::make('plantera'),
        ]);

        User::create([
            'name' => 'test2',
            'email' => 'test2@plantera.cz',
            'password' => Hash::make('plantera'),
        ]);
    }
}
