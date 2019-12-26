<?php
$Ip2Loc = mysqli_connect('localhost', 'root', '12345', 'ip2location');
$Query = "SELECT ip_from, ip_to, country_code, country_name FROM ip2location_db1";
$Result = $Ip2Loc->query($Query);
if (!$Ip2Loc) {
    die('Ошибка соединения: ' . mysql_error());	
}
$InputI = ip2long($_GET[InputIP]);
while ($InputI > $Row[1]) {
    $Row = $Result->fetch_row();    
}
