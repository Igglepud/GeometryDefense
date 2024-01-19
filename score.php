<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = "kal-db.cjc0tsqhx78v.us-west-2.rds.amazonaws.com";
$username = "root";
$password = "!1bebuMuJu";
$db = "slash";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$name = null;
$score = null;
$validPost = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $obj = json_decode(base64_decode($_POST["data"]));
  $score = $conn->real_escape_string($obj->score);
  $name = $conn->real_escape_string($obj->name);
  $name = substr($name, 0, 11);
  if ($score && $name && strlen($name) <= 12) {
    $validPost = true;
    $check = "SELECT * FROM score WHERE name = '" . $name . "' AND score = " . $score;
    $result = $conn->query($check);
    if (!$result->fetch_array(MYSQLI_NUM)) {
      $query = "INSERT INTO score (name, score) values ('" . $name . "', " . $score . ")";
      $conn->query($query);
    }
  }
}

if ($result = $conn->query("SELECT name, score from score order by score desc limit 10")) {
  echo '{"scores": [';
  $stuff = [];
  $search_score = ($_SERVER["REQUEST_METHOD"] == "POST");
  while ($row = $result->fetch_array(MYSQLI_NUM)) {
    if ( $row[0] === $name && $row[1] === $score) {
      $search_score = false;
    }
    $stuff[] = sprintf("{\"name\": \"%s\", \"score\":%s}\n", $row[0], $row[1]);   
  }
  echo implode(',', $stuff);
  echo '], "query": "' . $query . '" ';
  if ($search_score && $validPost) {
    if ($result = $conn->query("SELECT count(*) from score where score >= " . $score)) {
      echo ', "position": ' . $result->fetch_array(MYSQLI_NUM)[0] . ', "name": "' . $name . '", "score": "' . $score . '"';
    }
  }
  echo '}';
}
?>