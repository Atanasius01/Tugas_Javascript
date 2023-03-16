function tambah() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);
  var total = a1 + a2;
  frm.hasil.value = total;
  let peringatan =
    a1 && a2 != "" ? total : alert("Maaf anda harus memasukkan angka");
}
function kurang() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);
  var total = a1 - a2;
  frm.hasil.value = total;
  let peringatan =
    a1 && a2 != "" ? total : alert("Maaf anda harus memasukkan angka");
}
function kali() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);
  var total = a1 * a2;
  frm.hasil.value = total;
  let peringatan =
    a1 && a2 != "" ? total : alert("Maaf anda harus memasukkan angka");
}
function bagi() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);
  var total = a1 / a2;
  frm.hasil.value = total;
  let peringatan =
    a1 && a2 != "" ? total : alert("Maaf anda harus memasukkan angka");
}
function pangkat() {
  var frm = document.getElementById("kalkulator");
  var a1 = parseFloat(frm.angka.value);
  var a2 = parseFloat(frm.angka2.value);
  var total = Math.pow(a1, a2);
  frm.hasil.value = total;
  let peringatan =
    a1 && a2 != "" ? total : alert("Maaf anda harus memasukkan angka");
}
