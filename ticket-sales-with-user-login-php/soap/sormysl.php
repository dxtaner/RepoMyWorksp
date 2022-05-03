<?php

require_once('/lib/nusoap.php');
// Server(sunucu) örneği yaratılır
$server = new nusoap_server;
// Kullanılacak method register(kayıt) edilir
$server->register('kontrol');
// Bir PHP fonksiyonu gibi method tanımlanır
function kontrol($kullaniciadi,$sefernumarasi,$tarih,$saat) {

// database baglantisi 
try{
	$db=new PDO("mysql:host=localhost;dbname=uyeler;charset=utf8",'root','Tano1905');
}

catch(PDOException $hata){
	echo $hata->getMessage();
}
// sorgu islemleri
$kadi=$db->query("SELECT * FROM uye WHERE kadi='$kullaniciadi'")->fetch();

if ($kadi)
{
	return '$kullaniciadi';
}
else
{
	return 'Boyle bir kullanici yoktur..';
}

// Bilgi alışverişini sağlamak için bu kod kullanılır
$HTTP_RAW_POST_DATA = isset($HTTP_RAW_POST_DATA) ? $HTTP_RAW_POST_DATA : '';
$server->service($HTTP_RAW_POST_DATA);
?>
