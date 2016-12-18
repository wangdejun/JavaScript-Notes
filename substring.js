// FreeCodeCamp
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:
// Array.prototype.splice()
// String.prototype.replace()
// Array.prototype.join()

function myReplace(str, before, after) {
  var a = Date.now()
  var arr = [];
  arr = str.split(" ");
  for(var i=0;i<str.length;i++){
    if(arr[i]==before){
      if(arr[i].split("")[0].toUpperCase()==arr[i].split("")[0]){
        //判断如果是首字符大写，那么替换上去的文字首字符也必须是大写
        arr[i]=after.substring(0,1).toUpperCase()+after.substring(1,after.length);
      }else{
        //若果不是大写，那么就按照原来的样子进行替换就可以了
        arr[i]=after;
      }
    }
  }
  str = arr.join(" ");
  return str;
  var b=Date.now()
  console.log("Time:",b-a)
}


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))