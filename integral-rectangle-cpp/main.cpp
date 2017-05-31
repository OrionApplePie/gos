#include <iostream>
#include <cmath>

using namespace std;
/* run this program using the console pauser or add your own getch, system("pause") or input loop */
double f(double x);
double rect(double x_i, double h_i, double eps, int, double, double);

int main(int argc, char** argv) {
	
	double a,b;
	int n;
	double h;
	double eps = 0.e-5;
	a = -1;
	b = 1;
	n = 10;
	h = (b-a)/n;
	double S =0;
	for(int i=1;i<=n;i++){
		S=S+rect(a+i*h, h, eps, 0,a,b);
		
	}
	cout << S <<endl;
	return 0;
}

double f( double x){
	return sin(x*x);
	
}
double rect(double x_i, double h_i, double eps,int level, double a, double b){
	level++;
	double s, s1;
	s = f(x_i - h_i/2.0)*h_i;

	s1 = ( f(x_i - (3.0/4.0)*h_i) + f(x_i - (h_i/4.0)) )*(h_i/4.0);
	if(fabs(s - s1)/3.0 > (eps*h_i)/(b-a) && level < 10){
		s = rect(x_i - h_i/2.0, h_i/2.0, eps, level,a,b) + rect(x_i, h_i/2.0, eps,level,a,b);
	}
	
	return s;
	
}
