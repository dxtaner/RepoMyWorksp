<?php 
session_start();

try{
	$db = new PDO("mysql:host=localhost;dbname=uyeler;charset=utf8", "root","Tano1905");
}

catch(PDOException $hata){
	echo $hata->getMessage();
}

$k_adi=$_POST["k_adi"];
$sifrem=$_POST["sifreniz"];

if (!$k_adi or !$sifrem) {
	echo "bos alan birakmayin";
	header("Refresh:2; url=index.html");
}

 // girilen bilgileri kontrol edecek sorgu
 $kullanici=$db->query("SELECT * FROM uye WHERE kadi='$k_adi' AND sifre='$sifrem'")->fetch();
 
if ($kullanici) {
	// bilgiler dogru ise anasayfaya yonlendiriliyor
    $_SESSION['kullanici']=$k_adi; // girilen kullaniciyi sessiona atiyorum
    header("location:anasayfa.html");
}else {
    echo "bilgiler hatali";
    header("Refresh:2; url=index.html");
}






 ?>