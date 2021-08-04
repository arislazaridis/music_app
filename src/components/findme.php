<?php

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
$sql = "SELECT * FROM me WHERE email='".$_POST['email']."';";
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

//Εμφάνιση αποτελεσμάτων σε μορφή πίνακα
 echo "<table style='border:1px solid black'>";
echo "<tr><th>Όνομα</th><th>Επίθετο</th><th>Πόλη</th><th>Χώρα</th><th>Φύλο</th><th>Τηλέφωνο</th><th>Διεύθυνση</th><th>ΤΚ</th><th>Μήνυμα</th></tr>";
// Εμφάνιση αποτελεσμάτων στις γραμμές του πίνακα
 while($row = pg_fetch_assoc($result)) {
	echo "<tr><td>".$row['firstname']."</td>".
"<td>".$row['lastname']."</td>".
"<td>".$row['city']."</td>".
"<td>".$row['country']."</td>".
"<td>".$row['sex']."</td>".
"<td>".$row['telephone_number']."</td>".
"<td>".$row['address']."</td>".
"<td>".$row['zip']."</td>".
"<td>".$row['message']."</td></tr>";
 }
echo "</table>" ;

//κλείσιμο σύνδεσης
pg_close($dbconn);
?>