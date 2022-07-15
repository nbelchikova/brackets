module.exports = function check(str, bracketsConfig) {
  // your solution
  const firstBracket = ['(', '[', '(', '|',  '1',  '3',  '5',  '7', '8'];
  const brackets = {
    [')']: '(',
    [']']: '[',
    [')']: '(',
    ['|']: '|',  
    ['2']: '1',    
    ['4']: '3',  
    ['6']: '5', 
    ['7']: '7',
    ['8']: '8',
    
  };
  let stack=[];
  


  
    for (let i = 0; i < str.length; i++) {
      
    
      if (firstBracket.includes(str[i]) ) {
        
        stack.push(str[i]);
       }
      else {
        false
      }
        if (brackets[str[i]] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          false
        }
        }

     
      if (stack.length===0) {
        return true;
      }  else {
        return false;
      }
    }

    

