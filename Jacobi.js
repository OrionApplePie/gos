// для вычисления условия остановки
function norm(v, w) {
   if (v.length != w.length){
		 return false;
	 };
	 var max = 0.0;
	 for(var i = 0;i < v.length; i++) {
		 r = Math.abs(v[i] - w[i]);
		 if (r > max) {
			 max = r;
		 };
	 };
	 return max;
};

// матрица
var matrix = [
  [14.0, 3.0, -3.0, 1.0],
	[1.0, 21.0, -5.0, 2.0],
	[5.0, -3.0, 17.0, 2.0],
	[1.0, 14.0, 1.2, 22.2]

];
// вектор правых частей
var f = [3.0, 2.0, 1.0, 7.7];

var m = f.length;
var eps = 10e-6;
// x на n-й итерации
var xp = [0.0, 0.0, 0.0, 0.0];
// x на n+1 итерации
var xn = [0.0, 0.0, 0.0, 0.0];
// для хранения сумм
var sum1  = 0.0;
var sum2 = 0.0;
// норма
var r = 100.0;

do {
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < i; j++)
      {
        sum1 += matrix[i][j]*xp[j];
      }
		for (var j = i+1; j < m; j++)
		  {
		    sum2 += matrix[i][j]*xp[j];
		  }

    xn[i] = -sum1/matrix[i][i] - sum2/matrix[i][i] + f[i]/matrix[i][i];

    sum1 = 0.0;
    sum2 = 0.0;
  };

  r = norm(xn, xp);
  // console.log('cool-->'+r);
  for( var i=0; i < xp.length; i++ ) {
	  xp[i] = xn[i];
  };
} while (r > eps);

console.log(xp);
