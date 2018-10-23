var app = new Vue({
  el: '#app',
  data: {
    firstName: "Manuel",
    lastName: "Ausloos",
    description: "Je suis très bô. Pls hire.",
    photo: "/Users/veroniqueadmin/Desktop/Autres/Photos de moments de ma vie/Photos pro. L'actualité oct. 2016/MANUEL_05.jpg",
    twitter: "manuoos",
    github: "CodeCod",
    mail: "manuel.ausloos@gmail.com",
    experiences: [{
      dateBegin: "Sept. 2017",
      dateEnd: "Today",
      name: "Reuters TV",
      title: "JRI pigiste",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Août 2017",
      dateEnd: "Août 2017",
      name: "Le Monde",
      title: "Stagiaire",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Juin 2017",
      dateEnd: "Août 2017",
      name: "Reuters TV",
      title: "Stagiaire",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Mai 2017",
      dateEnd: "Octobre 2016",
      name: "Musée du Château Ramezay",
      title: "Stagiaire",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Octobre 2016",
      dateEnd: "Juin 2017",
      name: "Magazine L'actualité",
      title: "Pupitreur Web",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "...",
      name: "Double-master Journalisme et Affaires internationales",
      university: "EDJ de Sciences Po"
    }, {
      dateBegin: "2015",
      dateEnd: "2016",
      name: "Certificat en journalisme",
      university: "Université de Montréal"
    }],
    languages: ["Anglais, Espagnol"],
    skills: ["Suite Office"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})