#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[]){

  // define our dummy message
  char message[] = "{\"text\": \"This is a native message\"}";

  // collect the length of the message
  unsigned int len = strlen(message);

  // send the 4 bytes of length information
  printf("%c%c%c%c", (char)(len& 0xFF),
                     (char)((len>>8)& 0xFF),
                     (char)((len>>16)& 0xFF),
                     (char)((len>>24)& 0xFF) );

  // output the message
  printf("%s", message);

  return 0;
}
