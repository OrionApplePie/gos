// метод трапеций

function func(x) {
  return 1.0/x;
};

function trapeze(func, a, b, h) {
// расчетная формула метода трапеций
// сетка xi, i =0,..,N
// fi = f(xi)
// h*N = b - a
// I = h*(0.5*f0 + f1 + ... + fN-1 + 0.5*fN)
//

  // сумма первого и последнего слагаемых
  var sum = 0.5*func(a) + 0.5*func(b);
  // начать со второго узла сетки
  var current_x = a + h;
  // суммирование до последнего узла не включая его (уже посчитан - func(b))
  while (current_x <= b - h ) {
    sum += func(current_x);
    current_x += h;
  };

  return h*sum;
};

alert(trapeze(func, 1., 2., 0.025));
