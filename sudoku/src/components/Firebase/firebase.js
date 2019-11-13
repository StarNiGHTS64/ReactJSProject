import app from 'firebase/app';
const config = {
    apiKey: "AIzaSyBw3Dd9_rE-E5rlUEUdktI66L2qzPra-l8",
    authDomain: "sudoku-156dc.firebaseapp.com",
    databaseURL: "https://sudoku-156dc.firebaseio.com",
    projectId: "sudoku-156dc",
    storageBucket: "sudoku-156dc.appspot.com",
    messagingSenderId: "85370719749",
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
export default Firebase;