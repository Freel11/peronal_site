<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Jade Freel</title>
	<link rel="stylesheet" href="./assets/css/style.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Courier+Prime&display=swap" rel="stylesheet"> 
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
	<script src="./assets/js/main.js" defer></script>
</head>
<body>
	<div id="preloader"></div>
	<header id="header" class="header">
		<div class="logo-container">
			<img src="./assets/img/logo.png" alt="Jade Freel Logo">
		</div>
		<ul class="nav-icons-container">
			<li class="theme-selector"><a href="#" id="theme-selection"><span class="icon"><?php include "./assets/img/svg/themeSelector.svg"; ?></span></a></li>
			<li class="linkedin"><a href="https://www.linkedin.com/in/jade-freel-a17990210/" target="_blank"><span class="icon"><?php include "./assets/img/svg/linkedin.svg"; ?></span></a></li>
			<li class="github"><a href="https://github.com/Freel11" target="_blank"><span class="icon"><?php include "./assets/img/svg/github.svg" ?></span></a></li>
			<li class="codepen"><a href="https://codepen.io/Jade11" target="_blank"><span class="icon"><?php include "./assets/img/svg/codepen.svg" ?></span></a></li>
		</ul>
	</header>
	<section class="hero-section" id="heroSection">
		<div class="left-side">
			<h5>Hi there, <span>&#x1F335;</span> Im</h5>
			<h1 class="name">Jade</h1>
			<h3>Frontend Developer | UX Designer<span class="cover"></span></h3>
		</div>
		<div class="right-side">
			<div class="scene-container">
				<?php include "./assets/img/svg/scene.svg" ?>
			</div>
		</div>
	</section>
</body>
</html>