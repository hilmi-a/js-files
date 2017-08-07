	function fibbonaci () {
		// body... 
		var n = document.getElementById('n').value;

		if(n > 97){
			throw 'input too large, result inacurate';
		}
		var n1 = 0;
		var n2 = 1;
		var aux;

		while (n>0) {
			// statement
			aux = n1;
			n1 = n2;
			n1 += aux;
			n = n -1;
		}
		//return n1;
		var result = document.getElementById("result");
		result.innerHTML = n1;
	}