<?php 
//web servisim
require_once('/lib/nusoap.php');
// client örneği yaratılır
$client = new nusoap_client('http://localhost/finalodev/soap/sormysql.php', false); // false : WSDL gereksiz
// SOAP methodu çağrılır 
$result = $client->call('kontrol', array('kullaniciadi' => 'taner123','sefernumarasi' => 47,'tarih' => '2020-06-30','saat' => '2020-06-30 12:00:00'));
// sonuç gösterilir
print_r($result);
?>