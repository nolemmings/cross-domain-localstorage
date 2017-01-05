function printLocalStorage() {
  var tbody = $('#localstorage-table > tbody');
  tbody.html('');
  for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    tbody.append('<tr><td>' + key + '</td><td>' + localStorage.getItem(key) + '</td></tr>');
  }
}

function clearLocalStorage() {
  localStorage.clear();
  printLocalStorage();
}

window.onload = function() {
  printLocalStorage();
};

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  printLocalStorage();
}
