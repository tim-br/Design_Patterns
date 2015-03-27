#include <iostream>
#include "stdio.h"
#include "Car.cpp"
#include "Mixin.cpp"

using namespace std;
int main()
{
Car car("mercedes");
Mixin mixin("my_name");

std::string a = car.GetModel();
//mixin.foo();
cout << a << endl;
//car.bar();
mixin.bar();
mixin.driveBackward();
return 0;
}
