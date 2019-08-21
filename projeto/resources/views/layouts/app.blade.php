<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

	<meta name="google-site-verification" content="VhVgO57HhpzsH0ngke3pMfmRFtqjDPSQ7BjxiT7QXqw" />

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link rel="icon" type="image/png" href="images/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="images/favicon-16x16.png" sizes="16x16" />

	<!-- Scripts -->

	<!-- Styles -->
	{{--	<link href="{{ mix('/css/app.css') }}" rel="stylesheet">--}}
	<link href="{{ asset('/css/app.css?v=0.0.1') }}" rel="stylesheet">

	

	@yield('head')



</head>
<body>
	<div id="app">	

		@yield('content')
	
	</div>

	<script src="{{ asset('js/app.js?v=0.0.1') }}" defer></script> 
	{{-- 

	<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
	--}}

</body>
</html>
