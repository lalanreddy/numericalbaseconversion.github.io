// decimal to binary
function decToBin(decId, binId) {
	let dec = document.getElementById(decId).value;
	let bin = parseInt(dec, 10).toString(2);
	document.getElementById(binId).value = bin;
}

//decimal to octal
function decToOct(decId, octId) {
	let dec = document.getElementById(decId).value;
	let oct = parseInt(dec, 10).toString(8);
	document.getElementById(octId).value = oct;
}

//decimal to hexadecimal
function decToHex(decId, hexId) {
	let dec = document.getElementById(decId).value;
	let hex = parseInt(dec, 10).toString(16);
	document.getElementById(hexId).value = hex;
}


// binary to decimal
function binToDec(binId, decId) {
	let bin = document.getElementById(binId).value;
	let dec = parseInt(bin, 2).toString(10);
	document.getElementById(decId).value = dec;
}

// binary to octal
function binToOct(binId, octId) {
	let bin = document.getElementById(binId).value;
	let oct = parseInt(bin, 2).toString(8);
	document.getElementById(octId).value = oct;
}

// binary to hexadecimal
function binToHex(binId, hexId) {
	let bin = document.getElementById(binId).value;
	let hex = parseInt(bin, 2).toString(16).toUpperCase();
	document.getElementById(hexId).value = hex;
}


// octal to decimal
function octToDec(octId, decId) {
	let oct = document.getElementById(octId).value;
	let dec = parseInt(oct, 8).toString(10);
	document.getElementById(decId).value = dec;
}

// octal to binary
function octToBin(octId, binId) {
	let oct = document.getElementById(octId).value;
	let bin = parseInt(oct, 8).toString(2);
	document.getElementById(binId).value = bin;
}

// octal to hexadecimal
function octToHex(octId, hexId) {
	let oct = document.getElementById(octId).value;
	let hex = parseInt(oct, 8).toString(16).toUpperCase();
	document.getElementById(hexId).value = hex;
}

// hexadecimal to decimal
function hexToDec(hexId, decId) {
    let hex = document.getElementById(hexId).value;
    let dec = parseInt(hex, 16).toString(10);
    document.getElementById(decId).value = dec;
    }
    
    // hexadecimal to binary
    function hexToBin(hexId, binId) {
    let hex = document.getElementById(hexId).value;
    let bin = parseInt(hex, 16).toString(2);
    document.getElementById(binId).value = bin;
    }
    
    // hexadecimal to octal
    function hexToOct(hexId, octId) {
    let hex = document.getElementById(hexId).value;
    let oct = parseInt(hex, 16).toString(8);
    document.getElementById(octId).value = oct;
    }

	