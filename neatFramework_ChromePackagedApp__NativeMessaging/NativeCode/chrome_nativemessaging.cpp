#include <iostream>
#include <string>

int main(int argc, char* argv[]){

  // define our dummy message
  std::string message = "{\"text\": \"This is a native message\"}";

  // collect the length of the message
  unsigned int len = message.length();

  // send the 4 bytes of length information
  std::cout << (char)((len>>0)& 0xFF)
            << (char)((len>>8)& 0xFF)
            << (char)((len>>16)& 0xFF)
            << (char)((len>>24)& 0xFF);

  // output the message
  std::cout << message;

  return 0;
}
