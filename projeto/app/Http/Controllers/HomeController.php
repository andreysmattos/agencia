<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
	public function index()
	{


		$jobs = [
			[
				'link' => 'https://via.placeholder.com/1000',
				'desc' => 'img1'
			],
			[
				'link' => 'https://via.placeholder.com/1000',
				'desc' => 'img2'
			],
			[
				'link' => 'https://via.placeholder.com/1000',
				'desc' => 'img3'
			],
			[
				'link' => 'https://via.placeholder.com/1000',
				'desc' => 'img4'
			],
			[
				'link' => 'https://via.placeholder.com/1000',
				'desc' => 'img5'
			],
		];

		// dd($jobs);

		return view('home',
			[
				'gallery' => $jobs,
				'menus' => $this->getMenu()
			]
		);
	}
}
