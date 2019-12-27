function CheckIP(InputIP) {
	let ErrorString = "";
	let CheckStart = "IP: ";
	let ClearIP = InputIP.trim();
	let IpArray = ClearIP.split(".");
	let NumOctet = 0;
	for (let i = 0; i < 5; i++) {
	if (IpArray[i] != null) {
			NumOctet += 1;
		}
	}
	if (ClearIP.includes(" ") == true){
		ErrorString = ErrorString + CheckStart + ClearIP +" некорректно введен, удалите лишние пробелы";
		event.preventDefault();	
	}
	if (InputIP == "0.0.0.0") {
		ErrorString = ErrorString + CheckStart + ClearIP +" специальный IP адрес и не может быть использован";
		event.preventDefault();	
	}
	if (InputIP == "255.255.255.255") {
		ErrorString = ErrorString + CheckStart + ClearIP +" специальный IP адрес и не может быть использован"
		event.preventDefault();	
	}
	for (let i = 0; i < 4; i++) {
		if (IpArray[i] > 255 || IpArray[i] < 0 || !Number.isInteger(Number(IpArray[i]))){
			ErrorString = ErrorString + CheckStart + ClearIP +" некорректен";
			i = 4;
			event.preventDefault();
		}
	}
	if (ErrorString == "") {
		alert(CheckStart + ClearIP + " корректен");
	} else {
	alert(ErrorString);
	}
}
