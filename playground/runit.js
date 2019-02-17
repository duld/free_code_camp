function convertHTML(str) {
  // &colon;&rpar;
  let outStr = str
    .replace(/&/gm, '&amp;')
    .replace(/'/gm, '&apos;')
    .replace(/"/gm, '&quot;')
    .replace(/</gm, '&lt;')
    .replace(/>/gm, '&gt;');
  return outStr;
}

let a = convertHTML("Hamburgers < Pizza < Tacos");
console.log(a);