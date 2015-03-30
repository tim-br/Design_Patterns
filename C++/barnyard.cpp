#include <iostream>
#include <cstring>
using namespace std;

class Animal {
  //char author[80];
public:
  //void put_author(const char *s) { strcpy(author, s); }
  //void show_author() { cout << author << "\n"; }
  virtual int getSpecies() = 0; //= 0??
  //virtual string getSound();

} ;

class Cat : public Animal{
  public:
  int getSpecies(){return 67;}
};



int main(){
  Cat cat;
  int a;
  a  = cat.getSpecies();

  cout << a << endl;


  return 0;
}
