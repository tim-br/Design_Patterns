#include "Car.h"
#include <iostream>
#include "stdio.h"
#include <string>
#include "Mixin.cpp"

using namespace std;
// Date constructor
Car::Car(string model)
{
SetModel(model);
//SetMixin(Mixin("srt"));
}
// Date member function
void Car::SetModel(string model)
{
m_model = model;
}

void Car::bar(){
  cout << "hello world" << endl;
}

/*void SetMixin(Mixin m){
  mixin = m;
}*/
