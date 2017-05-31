function f(x, a)
{
	return x*x - a;
}

function df(x)
{
	return 2.0*x;

}

function sqrt(a)
{
	//a = 0.00098;
	var eps = 0.0001;
	var xp = 1;
	var xn = 0;
	var r = 1;

	while ( r >= eps)
	{
		xn = 0.5*(xp + a/xp);
		r = Math.abs(xn - xp); 
		xp = xn;
		//console.log(xn);
	}
	return xn;
//console.log(xn);
}

function calc()
{
	var a = document.getElementById('num').value;
	var res = sqrt(a);
	var html = 'result: <b>' + res + '</b> ';
    document.getElementById('result').innerHTML = html;
}