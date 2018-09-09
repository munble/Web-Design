<?php

	
	require 'functions.php';

	session_start();
	

	if (isset($_REQUEST['submit'])) {
		$username = $_REQUEST['username'];
		$password = $_REQUEST['password'];
		if (validate_user($username, $password)) {
			$_SESSION['username'] = $username;
			header('location: indexDB.html');
		} else {
			$status = 'wrong username or password';
		}

	}

	require_once 'login.php';

?>
	