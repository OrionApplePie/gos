var f = function(x) {
	return 4/(1 + x*x);
};

// метод для частичного отрезка
// частичный отрезок - от xi до  xi+1
// level - уровень рекурсии
function rect(x_i, h_i, eps, level, a, b) {
	level++;
	var s; //  интеграл с h
	var s1;  // интеграл с h/2
	s = f(x_i - h_i/2.0)*h_i;
	s1 = ( f(x_i - (3.0/4.0)*h_i) + f(x_i - (h_i/4.0)) )*(h_i/4.0);

	// правило Рунге
	if ( Math.abs(s - s1)/3.0 > (eps*h_i)/(b-a) && level < 10) {
    // мельчим дальше, если погрешность большая
		s = rect(x_i - h_i/2.0, h_i/2.0, eps, level, a, b) + rect(x_i, h_i/2.0, eps, level, a, b);
	};
	return s;
};

function integral(a, b, eps, n) {
  var h = (b - a)/n;
	var S = 0;
	for(var i = 1; i <= n; i++) {
		S = S + rect(a + i*h, h, eps, 0, a, b);
	};

	return S;
};

alert(integral(0, 1, 0.e-7, 10));
