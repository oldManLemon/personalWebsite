<?php

//Error Reporting
header('Refresh: 30 ; URL=http://bwwiki/resume/');
error_reporting(2);
//Collect Data and Clean it up
$firstName = strip_tags(trim($_POST["firstName"]));
$lastName = strip_tags(trim($_POST["lastName"]));
$firstName = str_replace(array("\r","\n"),array(" "," "),$firstName);
$lastName = str_replace(array("\r","\n"),array(" "," "),$lastName);
$email = filter_var($_POST['emailForm'], FILTER_SANITIZE_EMAIL);
//$email = $_POST['emailForm'];
$number = trim($_POST["telno"]);
$number = filter_var($number, FILTER_SANITIZE_NUMBER_INT);
$message = $_POST['message'];
/* $firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];

//$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$email = $_POST['emailForm'];
$number = $_POST["telno"];
//$number = filter_var($number, FILTER_SANITIZE_NUMBER_INT);
$message = $_POST['message'];

echo $firstName . $lastName . $email . $number . $message;
 */

// Lets check this out
//Check to see if we got the values we wanted
if(!isset($firstName) || !isset($lastName) || !isset($email) ){
    echo "You havnt entered enough information please try again" ;
    return 1;
}

if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo("Email seht gut aus!");
}else{
    $email;
    echo("I'm sorry I don't like the look of this email!" .$email);
}
/* if(validate_phone($number)) {
    $number = preg_replace('/[^\d]/', '', $number);
    return preg_match('/^(0(2|3|4|7|8))?\d{8}$/', $number)
      || preg_match('/^1(3|8)00\d{6}$/', $number)
      || preg_match('/^13\d{4}$/', $number);
  }else{
      echo("Phonenum");
  } */

  $me = 'oldm8reggie@gmail.com';

$msg = '<html><body>';
$msg .= '<p>Name: ' . $firstName . ' ' . $lastName .'</p>';
$msg .= '<p>Email: ' . $email . '</p>';
$msg .= '<p>Phone: ' . $number . '</p>';
$msg .= '<p>Message: ' .$message . '</p>';
$msg .= '</body></html>';

$headers = "From: newComps@bornhorstward.com.au \r\n ";
//$headers .="CC: Mail1 <h.tomkins@bornhorstward.com.au>";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
//The mail function

mail('a.hase@bornhorstward.com.au',  'has just contact you via your resume', $msg, $headers); 
if($success === FALSE){
    echo "Sorry that failed, please try again later, or go annoy IT";
}else{

echo "Yay great success";
}

?>
