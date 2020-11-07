<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $u = new User;
        $u->name = "Testuser";
        $u->email = "test@plantera.cz";
        $u->password = Hash::make("test");
        $u->location = "Praha test";
        $u->rememberToken = Str::random(10);
        $u->email_verified_at = now();

    }
}
