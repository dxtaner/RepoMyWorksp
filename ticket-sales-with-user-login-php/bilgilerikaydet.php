<?php 

try{
	$db=new PDO("mysql:host=localhost;dbname=uyeler;charset=utf8",'root','Tano1905');
}

catch(PDOException $hata){
	echo $hata->getMessage();
}

$kadi=$_POST["kadi"];
$ad=$_POST["isim"];
$soyisim=$_POST["soyad"];
$mail=$_POST["email"];
$parola=$_POST["sifre"];

if (!$kadi or !$ad or !$soyisim or !$mail or !$parola) {
	echo "bos alan birakmayin";
	header("Refresh:3; url=index.html");
}
else{
// gelen bilgileri veritabanina ekleme 
$ekleme=$db->prepare("INSERT INTO uye SET kadi = ?, ad = ?, soyad = ? email = ?, sifre = ?");
$ekleme->execute(array($kadi,$ad,$soyad,$eposta,$sifre));

if ($ekleme) {
	echo "basarili kayit";
	header("Refresh:3; url=index.html");
	}

else{
	echo "basarisiz kayit";
	header("Refresh:3; url=index.html");;
	}
}



?>