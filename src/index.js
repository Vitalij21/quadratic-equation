module.exports = function solveEquation(equation) {
  var e, p, m;
  h = equation.indexOf(" * x");
  var a = equation.substring(0, h);
  k = equation.indexOf(" * x", h+1);
  var b = equation.substring(h+7, k);
  b=b.replace(/\s/g, '');
  var c = equation.substring(k+5);
  c=c.replace(/\s/g, '');
  //console.log(a);
  //console.log(b);
  //console.log(c);
  //console.log(h);
  //console.log(k);

  e = Math.sqrt((b*b - 4*a*c));
  //f = Math.sqrt(e);
  p = ( -b + e)/(2 * a);
  m = ( -b - e)/(2 * a);
  p = Math.round(p);
  m = Math.round(m);
//console.log(e);
//console.log(p);
//console.log(m);
  if (p > m) {
  return [m, p];
  }
  else {
    return [p, m];   
  //return console.log([p, m]);
  };
};
