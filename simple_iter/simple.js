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

var matrix = [
	[2.0, -1.0, 0.0],
	[-1.0, 2.0, -1.0],
	[0.0, -1.0, 2.0]
];

var f = [5.0, 4.0, 6.0];
var m = f.length;

var tau = 2./(4.0 + Math.sqrt(2.0));

var xp = [0, 0, 0];
var xn = [0, 0, 0];

var sum  = 0.0;
var eps = 10e-6;
var r = 100;

do {
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++)
      {
        sum += matrix[i][j]*xp[j];
      };
    xn[i] = xp[i] - tau*(sum - f[i]);
    sum = 0.0;
  };
  // console.log(xn);
  r = norm(xp, xn);
  for(var i=0;i < xp.length; i++) {
	  xp[i] = xn[i]
	};
} while (r > eps);

console.log(xp);
