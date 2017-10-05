var image = '%image%',
    alt = '%alt%',
    dt = '%dt%',
    url = '%url%',
    h3 = '%h3%';

var prevWork = {
  'prevWorkArray': [
    {
      'image': 'images/sunflower_640.jpg',
      'alt': 'Close up of a sunflower',
      'dt': 'sunflowerModal',
      'url': 'https://www.github.com/udacity/Sunflower',
      'h3': 'Sunflower'
    }
  ]
};

prevWork.showWork = function(){
  var workArray = prevWork.prevWorkArray;

  for (var x = 0; x < workArray.length; x++){
    var setImage = HTMLlineItem.replace(image, workArray[x].image),
        setAlt = setImage.replace(alt, workArray[x].alt),
        setDt = setAlt.replace(dt, workArray[x].dt),
        setURL = setDt.replace(url, workArray[x].url),
        setH3 = setURL.replace(h3, workArray[x].h3),
        workEntry = setH3.replace(url, workArray[x].url);

    // $("ul").append("<li>TEST</li>");
    console.log(workEntry);
  };
};

prevWork.showWork();
