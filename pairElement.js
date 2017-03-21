function pairElement(str) {
  const A = ["A", "T"];
  const T = ["T", "A"];
  const C = ["C", "G"];
  const G = ["G", "C"];
  let newArr = str.split('').map(function (el){
      switch (el) {
          case 'A':
            return A;
          case 'T':
            return T;
          case 'C':
            return C;
          case 'G':
            return G;
      }
  });
  return newArr;
}

pairElement("GCG");
