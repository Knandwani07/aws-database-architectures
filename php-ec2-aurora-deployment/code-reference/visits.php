sudo tee /var/www/html/index.php > /dev/null << EOL
<?php
\$servername = "${SERVERNAME}";
\$username = "${USERNAME}";
\$password = "${PASSWORD}";
\$dbname = "${DATABASE}";

// Create connection
\$conn = new mysqli(\$servername, \$username, \$password, \$dbname);

// Check connection
if (\$conn->connect_error) {
    die("Connection failed: " . \$conn->connect_error);
}

// Create table if not exists
\$sql = "CREATE TABLE IF NOT EXISTS visits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
\$conn->query(\$sql);

// Insert new visit
\$sql = "INSERT INTO visits (visit_time) VALUES (NOW())";
\$conn->query(\$sql);

// Get visit count
\$sql = "SELECT COUNT(*) as count FROM visits";
\$result = \$conn->query(\$sql);
\$row = \$result->fetch_assoc();
\$count = \$row['count'];

echo "Connected successfully to Aurora database!<br>";
echo "This page has been visited {\$count} times.";

\$conn->close();
?>
EOL
