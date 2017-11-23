var contactES3 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES3 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    var that = this;
    setTimeout(function() {
      console.log('ES3 Bonjour je m\'appelle ' + that.prenom);
    }, 100);
  },
};

contactES3.helloSync();
contactES3.helloAsync();

const contactES5 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES5 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('ES5 Bonjour je m\'appelle ' + this.prenom);
    }.bind(this), 100);
  },
  helloMethodAsync: function() {
    setTimeout(this.helloSync.bind(this), 100);
  }
};

/*
Function.prototype.bind = function(applyThis) {
  return function() {
    this.call(applyThis);
  };
};
*/

contactES5.helloSync();
contactES5.helloAsync();
contactES5.helloMethodAsync();

var contactES6 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES6 Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(() => {
      // pas arguments ni this dans les fonctions fléchées
      console.log('ES6 Bonjour je m\'appelle ' + this.prenom);
    }, 100);
  }
};

contactES6.helloSync();
contactES6.helloAsync();

/*
btn.addEventListener('click', (e) => {
 // e.target === btn;
});

$('.btn').click((e) => {
 // e.target === btn;
});
*/
