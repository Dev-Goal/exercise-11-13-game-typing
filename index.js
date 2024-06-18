var a = new Array(),
  n = "";
a[1] = "T";
a[2] = "Ô";
a[3] = "I";
a[4] = " ";
a[5] = "Y";
a[6] = "Ê";
a[7] = "U";
a[8] = " ";
a[9] = "E";
a[10] = "M";
a[11] = "!"
function typeTextarea() {
  t = document.f.txt.value;
  j = t.length;
  if (j > 0) {
    for (var i = 1; i <= j; i++) {
      n = n + a[i];
      if (i == 11) {
        document.f.txt.value = "";
        n = "";
      }
    }
  }
  document.f.txt.value = n;
  n = "";
  setTimeout("typeTextarea()", 1);
}
