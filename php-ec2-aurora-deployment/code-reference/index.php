<?php
$servername = getenv('SERVERNAME');
$username   = getenv('USERNAME');
$password   = getenv('PASSWORD');
$database   = getenv('DATABASE');

// Create MySQL connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

echo "Connected successfully to Aurora MySQL database!";

// Close connection
$conn->close();
?>
