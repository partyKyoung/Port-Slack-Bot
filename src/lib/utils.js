class Utils {
  GetRandomNumber (optionNum) {
   const randomNum = Math.floor((Math.random() * optionNum));

   return randomNum;
  }
}

export default (new Utils);
