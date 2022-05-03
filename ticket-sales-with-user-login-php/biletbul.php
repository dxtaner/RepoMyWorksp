<?php 
session_start();

try{
	$db = new PDO("mysql:host=localhost;dbname=biletler;charset=utf8", "root","Tano1905");
}

catch(PDOException $hata){
	echo $hata->getMessage();
}

$kalkisyeri=$_POST["kalkisyeri"];
$varisyeri=$_POST["varisyeri"];
$tarih=$_POST["tarih"];

if (!$kalkisyeri or !$varisyeri or !$tarih) {
	echo "bos alan birakmayin";
	header("Refresh:2; url=anasayfa.html");;
}
else{

	//sorgumu olusturdum
	$sorgu=$db->prepare("SELECT * FROM bilet WHERE kalkisyeri='$kalkisyeri' AND varisyeri='$varisyeri' AND gun='$tarih'");
	$sorgu->execute();?>
	<a href="anasayfa.html">bilet arama ekranina geri donmek için tiklayin</a><br>
	<?php
	foreach ($sorgu as $cikti) {
		
		// sorgudan gelen değerleri degişkenlere atadim
		$id=$cikti['id'];
		$kalkisyerim=$cikti['kalkisyeri'];
		$varisyerim=$cikti['varisyeri'];
		$sefernumaram=$cikti['seferno'];
		$tarihim=$cikti['gun'];
		$saatim=$cikti['saat'];
		
		// geln bilgileri ekrana bastirdim
		echo "sefer_no:".$sefernumaram."<br>";
		echo "kalkisyeri:".$kalkisyerim."<br>";
		echo "varisyeri:".$varisyerim."<br>";
		echo "tarih:".$tarihim."<br>";
		echo "saat:".$saatim."<br>";
		?>
		<b><a href="biletsatis.php?j=<?php echo $id ?>">bileti almak için tiklayin</a></b><br>
		<?php  echo "<hr>"; // satin alma işlemi için link oluşturdum ve biletsatis.php dosyasina yonlendirdim
	}
}

       ?>