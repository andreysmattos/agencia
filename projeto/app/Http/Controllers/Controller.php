<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	public function getMenu()
	{

		$data = new \stdClass;
/*
        $data->pages = \App\Models\Panel\Page::where([
            ['show_footer', true],
            ['is_element', false]
        ])->get();

        $data->departaments = \App\Models\Department::where('show_footer', true)->get();

        $data->services = \App\Models\ServiceCategory::where('is_footer', true)->with('services')->get();

        $data->cabinets = \App\Models\Cabinet::where('is_footer', true)->get();
        */


        $data = ['Home', 'Sobre nós', 'Portifolio', 'Blog', 'Contato'];

        return json_encode($data);

    }
}
