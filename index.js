function button_clicked() {
     let pass = '';
     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
     for (let i = 1; i < 16; i++) {
         let char = Math.floor(Math.random() * str.length);
          
         pass += str.charAt(char)
    }
     actual__password.textContent = pass
}

function reset() {
     actual__password.textContent = " "
     hvala.textContent = "Hvala što ste testirali app 😊"
     setTimeout((function() {
        window.location.reload();
      }), 1000);
}

