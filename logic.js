var box=document.getElementById('display');
	function addtoscreen(x)
	{
		box.value+=x;
		if(x=='c')
		{
			box.value='';
		}
	}
	function backspace()
	{
		var number=box.value;
		var len=number.length-1;
		var newnumber=number.substring(0,len);
		box.value=newnumber;
	}