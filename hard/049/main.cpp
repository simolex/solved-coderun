// #include <iostream>
// #include <string>
// #include <vector>

// int main() 
// {
// 	/*
// 	Для чтения входных данных необходимо получить их
// 	из стандартного потока ввода (stdin).
// 	Данные во входном потоке соответствуют описанному
// 	в условии формату. Обычно входные данные состоят
// 	из нескольких строк.

// 	Можно использовать несколько методов:
// 	* std::cin -- читает токены из потока;
// 	* std::getline() -- читает одну строку из потока;
// 	* scanf()/gets() -- C-функции для чтения из stdin.

// 	Чтобы прочитать из строки стандартного потока:
// 	* число -- int var; std::cin >> var;
// 	* строку -- std::string svar; std::cin >> svar;
// 	* массив чисел известной длины -- 
// 	std::vector<int> arr(len); 
// 	for (size_t i = 0; i < arr.size(); ++i)
// 		std::cin >> arr[i];
// 	* последовательность слов до конца файла --
// 	std::vector<std::string> sarr;
// 	std::string word;
// 	while (std::cin >> word) {
// 		sarr.push_back(word);
// 	}

// 	Чтобы вывести результат в стандартный поток вывода (stdout),
// 	можно использовать поток std::cout.

// 	Возможное решение задачи "Вычислите сумму A+B":
// 	int a, b;
// 	std::cin >> a >> b;
// 	std::cout << a + b << std::endl;
// 	*/


// 	return 0;
// }
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
        newPassword[currentLetter]='z';
        
        newDistance = getDistance(newPassword);
        rest = (newDistance+distance-25)/2;
        
        password[currentLetter] = 'a'+distance-rest;
        distance = rest;
		currentLetter++;
	}
  
  std::string name;
  std::cout << password << std::endl;
  std::cout.flush();
  
  return 0;
}