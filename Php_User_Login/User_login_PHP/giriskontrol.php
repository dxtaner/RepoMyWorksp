<?php 

ob_start();
session_start();

$kadi=$_POST['kullanici'];
$parola=$_POST['sifre'];
$kullanicilarlistesi=file('kullanicilar.txt');

if(empty($kadi) or empty($parola))
{
	echo "Boş Alan Bırakmayınız.";	
	header("Refresh:2; url=index.html");;
}
else 
{

  $giris=false;
  foreach ($kullanicilarlistesi as $ad) {
    $kullanicibilgisi=explode(',', $ad);

    if ($kullanicibilgisi[0]==$kadi)
    {	
     if($parola==$kullanicibilgisi[1]){
       $giris=true;
       break;
     }
   }
 }

 if ($giris) { 
  header("Location:anasayfa.html");
} else {
  header("Location:hataligiris.php");
}

}


?>