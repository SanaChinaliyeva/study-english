var convertFormToObj = function (form) {
  var data = $(form).serializeArray();
  var result = {};
  for (var row of data) {
    result[row.name] = row.value;
  }
  return result;
};

var clearForm = function (form) {
  var formId = form.id;
  var formInputs = "#" + formId + " input";
  $(formInputs).val("");
};

var config = {
    apiKey: "AIzaSyD0OSzU0FIR3OcvHTpUsaEJBF8cTR5ydgg",
    authDomain: "aigerim-website.firebaseapp.com",
    databaseURL: "https://aigerim-website.firebaseio.com",
    projectId: "aigerim-website",
    storageBucket: "aigerim-website.appspot.com",
    messagingSenderId: "43687987499"
  };
  firebase.initializeApp(config);

$('#contact-form').on('submit', function(e) {
  e.preventDefault();
  var order = convertFormToObj(this);

  var rootRef = firebase.database().ref();
  var clientsRef = rootRef.child('clients');
  var newStoreRef = clientsRef.push();
  newStoreRef.set(order);

  clearForm(this);
});