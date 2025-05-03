const hex = size => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }
  
  console.log("#",hex(5));
  console.log("#",hex(6));
  console.log("#",hex(4));
  console.log("#",hex(2));  
  console.log("#",hex(7));  
  console.log("#",hex(9));
  console.log("#",hex(10));
  console.log("#",hex(8));
  console.log("#",hex(1));
  console.log("#",hex(5));
  console.log("6",hex(9));
  console.log("#",hex(3));
  console.log,("#",hex(9));
  console.log("#",hex(3));
  console.log("#",hex(4));
  console.log("#",hex(2));
  console.log("#",hex(9));
  console.log("#",hex(4));
  console.log("#",hex(7));
  console.log("#",hex(3));
  