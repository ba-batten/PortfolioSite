var viewModel = {
  technologies: [
    {
      name: "JavaScript",
      pic: "images/javascript.svg"
    },
    {
      name: "jQuery",
      pic: "images/jquery.svg"
    },
    {
      name: "Knockout",
      pic: "images/knockout.svg"
    },
    {
      name: "Bootstrap",
      pic: "images/bootstrap.svg"
    },
    {
      name: "HTML",
      pic: "images/HTML5_Badge.svg"
    },
    {
      name: "CSS",
      pic: "images/CSS3_Logo.svg"
    },
    {
      name: "Jasmine",
      pic: "images/jasmine-1.svg"
    }
  ],
  prevWork: [
    {
      name: "Neighborhood Map",
      url: "https://github.com/ba-batten/NeighborhoodMap",
      smallPic: "images/neighborhood-map-370.jpeg",
      medPic: "images/neighborhood-map-640.jpeg",
      largePic: "images/neighborhood-map.jpeg",
      description: "A single-page web application, built using the Knockout framework," +
        " that displays a Google Map of an area and various points of interest. Users can" +
        " search all included landmarks and, when selected, additional information about" +
        " a landmark is presented from the FourSquare API.",
      id: "#neighborhoodMapModal"
    },
    {
      name: "Arcade Clone",
      url: "https://github.com/ba-batten/ClassicArcadeGameClone",
      smallPic: "images/frogger-clone_370.jpeg",
      medPic: "images/frogger-clone_640.jpeg",
      largePic: "images/frogger-clone.jpeg",
      description: "An HTML5 Canvas powered video game, developed using the best practices" +
        " in Object Oriented JavaScript.",
      id: "#arcadeCloneModal"
    },
    {
      name: "Website Optimization",
      url: "https://github.com/ba-batten/WebsiteOptimization",
      smallPic: "images/pizzeria-370.jpeg",
      medPic: "images/pizzeria-640.jpeg",
      largePic: "images/pizzeria.jpeg",
      description: "Optimized an inefficient web application's JavaScript, CSS and" +
        " assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score" +
        " of at least 90.",
      id: "#websiteOptimizationModal"
    },
    {
      name: "Feed Reader Testing",
      url: "https://github.com/ba-batten/FeedReaderTesting",
      smallPic: "images/feed-reader-370.jpeg",
      medPic: "images/feed-reader-640.jpeg",
      largePic: "images/feed-reader.jpeg",
      description: "Wrote comprehensive unit tests, using the Jasmine testing" +
        " framework, for an RSS Feed Reader application that uses Google's RSS API.",
      id: "#feedReaderModal"
    }
  ]
};

ko.applyBindings(viewModel);
