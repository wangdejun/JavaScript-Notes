
//转义字符替换方法

function convertHTML(str) {
    // &colon;&rpar;
    var replacement = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      "\'":"&apos;",
      '\"':'&quot;'
    };

    str = str.split('').map(function(entity){
      return replacement[entity]||entity;
    }).join('');
    
    return str;
  }
  
  convertHTML("Dolce & Gabbana");