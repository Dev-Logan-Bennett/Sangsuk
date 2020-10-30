for(let i = myTestData.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = myTestData[i]
  myTestData[i] = myTestData[j]
  myTestData[j] = temp
}

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

function groupByThree([a,b,c,...rest]){
  if (rest.length === 0) return [[a,b,c].filter(x => x!==undefined)]
  return [[a,b,c]].concat(groupByThree(rest))
}


function getImages(i, temp){
  var images = [];
  images.push(temp[i][getRandomInt(3)]);
  images.push(temp[i][getRandomInt(3)]);
 
  while(images[0] == images[1]){
    images[1] = temp[i][getRandomInt(3)];
  }
  if(temp[i][0] != images[0] && temp[i][0] != images[1] ){
    images.push(temp[i][0]);
  }
  else if(temp[i][1] != images[0] && temp[i][1] != images[1] ){
    images.push(temp[i][1]);
  }
  else if(temp[i][2] != images[0] && temp[i][2] != images[1] ){
    images.push(temp[i][2]);
  }
  return images;
}

function chunkify(a, n, balanced) {
  
  if (n < 2)
      return [a];

  var len = a.length,
          out = [],
          i = 0,
          size;

  if (len % n === 0) {
      size = Math.floor(len / n);
      while (i < len) {
          out.push(a.slice(i, i += size));
      }
  }

  else if (balanced) {
      while (i < len) {
          size = Math.ceil((len - i) / n--);
          out.push(a.slice(i, i += size));
      }
  }

  else {

      n--;
      size = Math.floor(len / n);
      if (len % size === 0)
          size--;
      while (i < size * n) {
          out.push(a.slice(i, i += size));
      }
      out.push(a.slice(size * n));

  }

  return out;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function groupArrayOfObjects(list, key) {
  return list.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


var getAndSortImages = function(data){
  var images = [];
    for(i = 0; i < jsPsych.data.get().filter({trial_type: "image-slider-response"}).values().length; i++ ){
      var obj = {};
      obj['response'] = jsPsych.data.get().filter({trial_type: "image-slider-response"}).values()[i].response;
      obj['stimulus'] = jsPsych.data.get().filter({trial_type: "image-slider-response"}).values()[i].stimulus;
      images.push(obj);
    }
    images.sort((a, b) => a.response > b.response ? 1 : (a.response === b.response) ? ((a.response > b.response) ? 1 : -1) : -1);
    var imageSet = groupByThree(images);
    collect['array'] = imageSet;
    collect['identity'] = 'collect';
    return imageSet;
}

var collect = {
  type: 'call-function',
  func: getAndSortImages,
}

var getArray = function(collectTrial){
  var array = collectTrial.array;
  return array;
}


// // function setSets(data, timeline){
// // }

// var image1 = {
//   type: 'html-keyboard-response',
//   stimulus: function(data){
//   obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
//   stim1 = obj[0][1][0].stimulus;
//   stim2 = obj[0][1][1].stimulus;
//   img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
//   img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
//   return img1 + img2;
//   }, 
//   choices: ['q', 'p'],
//   data: {whichWindow: 'fixation'}
// }

  // var getData = function(data, timeline, image1){
  //   console.log(data.get().values()[9].value);
  //   console.log(timeline);
  //   console.log(image1);
  //   if(data.get().values()[9].value[1] != null){
  //     return image() ... 
  //   }
  // }

  // var callback1 = {
  //   type: 'call-function',
  //   async: true,
  //   func: function(){getData(data, timeline, image1)}
  // }
  // timeline.push(callback1)