#include "Mixin.h"
#include <iostream>
#include "stdio.h"
#include <string>
using namespace std;
// Date constructor
Mixin::Mixin(string model)
{
SetModel(model);
}
// Date member function
void Mixin::SetModel(string model)
{
m_model = model;
}

void Mixin::bar(){
  cout << "hello world" << endl;
}
void Mixin::driveForward(){
  cout << "driving forward" << endl;
}
void Mixin::driveBackward(){
  cout << "driving backward" << endl;
}
