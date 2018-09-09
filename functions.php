<?php

	function validate_user($username, $password) {
		$conn = new PDO('mysql:host=localhost;dbname=manager;', 'root', '123456');
		$psmt = $conn->prepare('select * from manager where username=? and password=?');
		$psmt->bindParam(1, $username);
		$psmt->bindParam(2, $password);
		$result = $psmt->execute();

		if ($psmt->fetch()) {
			return true;
		 } else {
		 	return false;
		 }
		

	}

