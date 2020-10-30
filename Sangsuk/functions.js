for(let i = myTestData.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = myTestData[i]
  myTestData[i] = myTestData[j]
  myTestData[j] = temp
}

var collect = {
  type: 'call-function',
  func: function(){ 
    var images = [];
    for(i = 0; i < jsPsych.data.get().filter({trial_type: "image-slider-response"}).values().length; i++ ){
      var obj = {};
      obj['response'] = jsPsych.data.get().filter({trial_type: "image-slider-response"}).values()[i].response;
      obj['stimulus'] = jsPsych.data.get().filter({trial_type: "image-slider-response"}).values()[i].stimulus;
      images.push(obj);
    }
    console.log(images);
    // images.sort(function(a, b) {
    //   return parseFloat(a.response) - parseFloat(b.response);
    //  });
    // console.log(images)
    var imagesSorted = groupArrayOfObjects(images, "response");
    console.log(imagesSorted);
    // for (var key in imagesSorted) {
    //   if (imagesSorted.hasOwnProperty(key)) {
    //       if(key == 1){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array1.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //       if(key == 2){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array2.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //       if(key == 3){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array3.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //       if(key == 4){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array4.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //       if(key == 5){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array5.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //       if(key == 6){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array6.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //       if(key == 7){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array7.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //       if(key == 8){
    //         for(i = 0; i < imagesSorted[key].length; i++){
    //           array8.push(imagesSorted[key][i].stimulus)
    //         }
    //       }
    //   }
    // }
    console.log(imagesSorted)
    return imagesSorted;
  }
}

var trial = {
  type: 'call-function',
  func: function(data){
    data = jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0].value;
    console.log(data);
  }
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

// function setSets(data, timeline){
// }

var image1 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][1][0].stimulus;
  stim2 = obj[0][1][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}

 //Image ratings for 1
 var image1 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][1][0].stimulus;
  stim2 = obj[0][1][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}

//Image ratings for 2
var image2 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][2][0].stimulus;
  stim2 = obj[0][2][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}
//Image ratings for 3
var image3 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][3][0].stimulus;
  stim2 = obj[0][3][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}

//Image ratings for 4
  var image4 = {
    type: 'html-keyboard-response',
    stimulus: function(data){
    obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
    stim1 = obj[0][4][0].stimulus;
    stim2 = obj[0][4][1].stimulus;
    img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
    img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
    return img1 + img2;
    }, 
    choices: ['q', 'p'],
    data: {whichWindow: 'fixation'}
  }



//Image ratings for 5
var image5 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][5][0].stimulus;
  stim2 = obj[0][5][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}

//Image ratings for 6
var image6 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][6][0].stimulus;
  stim2 = obj[0][6][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}

//Image ratings for 7
var image7 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][7][0].stimulus;
  stim2 = obj[0][7][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}

//Image ratings for 8
var image8 = {
  type: 'html-keyboard-response',
  stimulus: function(data){
  obj = Object.values(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0]);
  stim1 = obj[0][8][0].stimulus;
  stim2 = obj[0][8][1].stimulus;
  img1 = '<img src="' + stim1 + '" style="float: left; height: 400px; width: 400px; margin-right: 200px" />'
  img2 = '<img src="' + stim2 + '" style="float: left; height: 400px; width: 400px; margin-left: 200px" />'
  return img1 + img2;
  }, 
  choices: ['q', 'p'],
  data: {whichWindow: 'fixation'}
}

function setTruths(){
  for(i = 1; i <= 8; i++){
    if(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0].value[i] == null){
     var setImage = eval("image" + i);
     console.log(setImage)
     setImage.data = {isThere: false, whichWindow: 'fixation'};
    }else if(jsPsych.data.get().filter({trial_type: 'call-function'}).values()[0].value[i] != null){
     var setImage = eval("image" + i);
     console.log(setImage)
     setImage.data = {isThere: true, whichWindow: 'fixation'};
    }
  }
}

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