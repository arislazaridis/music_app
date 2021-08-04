

<?php
header("Access-Control-Allow-Origin: *");
/*διάβασε τα στοιχεία σύνδεσης απο το αρχείο credent.php*/
require_once 'credent.php';

// Δημιουργία σύνδεσης
$connectionstr="host=".DB_SERVER." port=5432 dbname=".DB_BASE."
user=".DB_USER." password=".DB_PASS." options='--client_encoding=UTF8'";
$dbconn = pg_connect($connectionstr);
// Έλεγχος 


if (!$dbconn) {
 die("Connection failed: " . pg_connect_error());
}
//Δημιουργία ερωτήματος
$sql = "INSERT INTO me(username, password, email) VALUES
('".$_POST['username']."','".$_POST['password']."','".$_POST['email']."' ) ";
/*εκτυπώνω στο φυλλομετρητή το ερώτημα ώστε να ελέγξω μην έχει πάει κάτι λάθος*/
echo $sql;
//εκτέλεση ερωτήματος στη βάση
$result = pg_query($dbconn, $sql) ;
//έλεγχος αποτελεσμάτων
if ($result) {
//Εμφάνιση αποτελεσμάτων σε μορφή πίνακα
echo "αποθηκευση οκ";
} else {
echo "αποθηκευση NOT οκ <br>";
die('Query failed: ' . pg_last_error());
}
//κλείσιμο σύνδεσης
pg_close($dbconn);
?>