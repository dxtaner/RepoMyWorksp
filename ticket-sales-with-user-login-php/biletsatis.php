<?php 

session_start();
$kadi=$_SESSION['kullanici']; // sessiondan gelen değeri atadim

try{
	$db = new PDO("mysql:host=localhost;dbname=biletler;charset=utf8", "root","Tano1905");
}

catch(PDOException $hata){
	echo $hata->getMessage();
}

// linkten gelen degeri değişkene atiyorum
$gelenid=$_GET["j"];
	//gelenid'ye göre  bilet bilgilerini veritabanindan cekiyorum
$sorgu=$db->prepare("SELECT * FROM bilet WHERE id='$gelenid'");
$sorgu->execute();
foreach ($sorgu as $cikti) {
		// sorgudan gelen değerleri degişkenlere atadim
	$id=$cikti['id'];
	$kalkisyerim=$cikti['kalkisyeri'];
	$varisyerim=$cikti['varisyeri'];
	$sefernumaram=$cikti['seferno'];
	$tarihim=$cikti['gun'];
	$saatim=$cikti['saat'];
}
//bilet satin alindigi için veritabanindan siliyorum
$sil=$db->prepare("DELETE FROM bilet WHERE id=?");

$satinalma =$sil->execute(array($gelenid));

if ($satinalma) {
	// satin alma gerceklesmis ise 
	echo "bilet satin alındi";

	$dosyaadi = $kadi."_bilet.txt"; 
	$file = fopen( $dosyaadi, "a" );

	if( $file == false ) {
		echo ( "Dosya bulunaamadı.");
		exit();
	}
	// bilet bilgileribi dosyaya yazdirma
	fwrite( $file,"id=$id,seferno=$sefernumaram,kalkisyeri=$kalkisyerim,varisyeri=$varisyerim,tarih=$tarihim,saat=$saatim,\n" );
	fclose( $file );
	// anasayfaya yonlendirme islemi
	header("Refresh:5; url=anasayfa.html");;

}
else {
	echo "hatali işlem";
}



?>