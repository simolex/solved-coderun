#include <iostream>
#include <string>

int getDistance(std::string password)
{
    int currentDistance;
     
    std::cout << password << std::endl;
    std::cout.flush();

    std::cin >> currentDistance;
    
    return currentDistance;
}

int main()
{
  std::string password;
  std::string newPassword;
  int length, distance,newDistance, currentLetter;
  int rest;  
  std::cin>>length;
  
  password = "";
  currentLetter = 0;
  
  for(int i=0; i<length;i++){
      password.append("a");
  }
  
  distance = getDistance(password);
  
  while (distance>0 && currentLetter<length) {
    newPassword = password;
    newPassword[currentLetter] = 'z';
    
    newDistance = getDistance(newPassword);
    rest = (newDistance + distance - 25) / 2;
    
    password[currentLetter] = 'a' + distance - rest;
    distance = rest;
		currentLetter++;
	}
  
  std::cout << password << std::endl;
  std::cout.flush();
  
  return 0;
}