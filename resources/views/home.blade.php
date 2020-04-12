@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Blogger</div>
                <div class="card-body">
                    <div id="react-js"></div>
                </div>
            </div>
        </div>
    </div>
</div>
    @push('react-css-include')
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet">
        <!-- Fonts -->

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('assets/front/css/open-iconic-bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/animate.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/owl.carousel.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/owl.theme.default.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/magnific-popup.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/aos.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/ionicons.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/bootstrap-datepicker.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/jquery.timepicker.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/flaticon.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/icomoon.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/front/css/style.css') }}">
        <!-- Styles -->
    @endpush

    @push('react-js-include')
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{ asset('assets/front/js/jquery.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/jquery-migrate-3.0.1.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/popper.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/jquery.easing.1.3.js') }}"></script>
        <script src="{{ asset('assets/front/js/jquery.waypoints.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/jquery.stellar.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/owl.carousel.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/jquery.magnific-popup.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/aos.js') }}"></script>
        <script src="{{ asset('assets/front/js/jquery.animateNumber.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/scrollax.min.js') }}"></script>
        <script src="{{ asset('assets/front/js/main.js') }}"></script>
        <!-- Scripts -->

    @endpush
@endsection
