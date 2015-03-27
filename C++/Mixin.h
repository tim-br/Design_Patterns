#ifndef MIXIN_H
#define MIXIN_H
#include <string>
class Mixin
{
private:
std::string m_model;
Mixin() { } // private default constructor
public:
Mixin(std::string model);
void SetModel(std::string model);
std::string GetModel() { return m_model; }
void bar();
void driveForward();
void driveBackward();


};
#endif
