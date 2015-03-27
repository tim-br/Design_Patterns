#ifndef CAR_H
#define CAR_H
#include <string>
class Car
{
private:
std::string m_model;
//Mixin mixin;
Car() { } // private default constructor
public:
Car(std::string model);
void SetModel(std::string model);
//void SetMixin(Mixin m);

std::string GetModel() { return m_model; }
void bar();
};
#endif
