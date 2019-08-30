let app_fireBase = {};

(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDO13NBLsj3w0f6lhPOYK1m_zQ6ZJPIamA",
        authDomain: "treasure-d3b58.firebaseapp.com",
        databaseURL: "https://treasure-d3b58.firebaseio.com",
        projectId: "treasure-d3b58",
        storageBucket: "treasure-d3b58.appspot.com",
        messagingSenderId: "85142244019"
    };
    // firebase init
    firebase.initializeApp(config);
    app_fireBase = firebase;
})();