module.exports = function getZerosCount(number, base) {
  // Массив в котором число разделено на делители
   let divided=dividing(base);
   // Массив хранящий возможное кол-во нулей
   let zerosArr = [];
   for(let i=0; i<divided.length;i++)
   {
     // Рассчитываем кол-во нулей на конце по формуле
     zerosArr [i]=trailing(number,divided[i]);
   }
   let div=1;
   for(let i=0; i<zerosArr .length;i++)
   {
    
    let repeatedItem=zerosArr [i];
     if(zerosArr [i+1]==repeatedItem)
     {
        div++;
        zerosArr [i]=zerosArr [i]/div^0;
     }
     else if(zerosArr [i+1]!=zerosArr [i])
       div=1;
     
   }
   // По формуле минимальное возможное кол-во нулей и есть ответ
   let min=zerosArr [0];
   for(let i=0; i<zerosArr .length;i++)
   {
     if(min>zerosArr [i]){
       min=zerosArr [i];
     }
   }
    return min;
  }
  // Разбор числа на делители
  function dividing(base){
  let primeArr = [];
      for (let i = 2; base != 1; i++) {
          if (base % i == 0) {
              primeArr.push(i);
              base /= i;
              i--;
          }
      }
      return primeArr;
  }
  // Формула расчёта нулей на конце
  function trailing(number,divided)
  {
    let zeros=0;
    while(number>0)
    {
      number=number/divided^0;
      zeros +=number;
    }
    return zeros;
  }