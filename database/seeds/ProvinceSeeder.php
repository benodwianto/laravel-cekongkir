<?php

use App\Province;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fileProvinsi = file_get_contents(base_path('database/provinsi.json'));
        $fileProvinsi = json_decode($fileProvinsi, true);

        Province::insert($fileProvinsi);
    }
}
