let competence = {
  devWeb: {
    js: {
      logo: "js",
      nom: "JavaScript",
      niveau: "debutant",
    },
    html: {
      logo: "html",
      nom: "html",
      niveau: "intermediaire",
    },
    css: {
      logo: "css",
      nom: "css",
      niveau: "debutant",
    },
    swift: {
      logo: "swift",
      nom: "swift",
      niveau: "debutant",
    },
    komodoEdit: {
      logo: "komodo",
      nom: "komodo",
      niveau: "debutant",
    },
    swiftUI: {
      logo: "swiftUI",
      nom: "swiftUI",
      niveau: "debutant",
    },
  },

  WebDesign: {
    figma: {
      logo: "figma",
      nom: "figma",
      niveau: "debutant",
    },
    notification: {
      logo: "notification",
      nom: "notification",
      niveau: "intermediaire",
    },
    canva: {
      logo: "canva",
      nom: "canva",
      niveau: "debutant",
    },

    komodoEdit: {
      logo: "komodo",
      nom: "komodo",
      niveau: "debutant",
    },
  },

  wordPress: {
    word: {
      logo: "word",
      nom: "word",
      niveau: "intermediaire",
    },
    powerPoint: {
      logo: "powerPoint",
      nom: "powerPoint",
      niveau: "intermediaire",
    },
    excel: {
      logo: "excel",
      nom: "excel",
      niveau: "intermediaire",
    },
  },
};

fetch("test.json")
.then((response) => response.json())
.then(data)
console.log(data);
