
//** SET UP EXPERIMENT **//
// get mTurk ID info
// var turkInfo = jsPsych.turk.turkInfo();

// generate a random subject ID with 15 characters
var thisSubject = jsPsych.randomization.randomID(15);

// randomly assign key pairing for this subject 
var thisKeyPair = jsPsych.randomization.sampleWithoutReplacement([0, 1], 1)[0];

if (thisKeyPair == 0) {
  var keyYes = 'P';
  var keyNo = 'Q';
} else if (thisKeyPair == 1) {
  var keyYes = 'Q';
  var keyNo = 'P';
}

 // log mTurk info, key pairing, and OS/browser for every trial in the jsPsych data
 jsPsych.data.addProperties({
    // workerID: turkInfo.workerId,
    // hitID: turkInfo.hitId,
    // assignmentID: turkInfo.assignmentId,
    subject: thisSubject,
    subjectOS: subjectOS,
    keyPair: thisKeyPair,
    subjectBrowser: browserName
  });

// randomize emotion rating order
var allAttractiveRatings = [partOneInstruct, partTwoInstruct, partThreeInstruct];

var shuffleAttractiveRatings = jsPsych.randomization.shuffle(allAttractiveRatings);

// randomize emotion rating order

// var place1 = shuffleAttractiveRatings[0];
// var place2 = shuffleAttractiveRatings[1];
// var place3 = shuffleAttractiveRatings[2];

// for(i = 0; i < shuffleAttractiveRatings.length; i++){
//   if(place1 == partOneInstruct)
//       partOneInstruct.stimulus = "<p>In part " +  " one " + " you will see several items and will be asked to rate their attractiveness.</p>" + "<p>Each item ranges from an attractiveness of \"1\" for \”Very Unattractive\" to \"8\" for \”Very Attractive\” using the number keys on the keyboard.</p><p> Press continue to start the experiment.</p>" ;
//   if(place2 == partOneInstruct)
//       partOneInstruct.stimulus = "<p>In part " +  " one " + " you will see several items and will be asked to rate their attractiveness.</p>" + "<p>Each item ranges from an attractiveness of \"1\" for \”Very Unattractive\" to \"8\" for \”Very Attractive\” using the number keys on the keyboard.</p><p> Press continue to start the experiment.</p>" ;
//   if(place3 == partOneInstruct)
//       partOneInstruct.stimulus = "<p>In part " +  " one " + " you will see several items and will be asked to rate their attractiveness.</p>" + "<p>Each item ranges from an attractiveness of \"1\" for \”Very Unattractive\" to \"8\" for \”Very Attractive\” using the number keys on the keyboard.</p><p> Press continue to start the experiment.</p>" ;
// }


var timeline = [];

var threeSetData = [];

jsPsych.randomization.shuffle(myTestData)

// timeline.push(consentForm);
// timeline.push(welcome);
// timeline.push(partOneInstruct);

//Task goes here

var rateImages = {
    type: 'image-slider-response',
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    prompt: "<p>How attractive is this object?</p>",
    step: 1,
    min: 1,
    max: 8,
    stimulus_height: 400,
    stimulus_width: 400,
    post_trial_gap: 500,
    response_ends_trial: true,
    timeline: [],
  };


for(i = 0; i < myTestData.length; i++){
  var img = myTestData[i];
  threeSetData.push(myTestData[i]);
  rateImages.timeline.push({stimulus: img, data: {stimulus: img}});
}

var temp = chunkify(threeSetData, 3, true);

timeline.push(rateImages);
timeline.push(collect);
timeline.push(trial);


var seeIfThere = {
  type: 'call-function',
  func: function(){setTruths(jsPsych.data, timeline)}
}
timeline.push(seeIfThere);

var trialSet = {
  type: 'call-function',
  func: function(){setSets(jsPsych.data, timeline)}
}
timeline.push(trialSet);

 // fixation presentation window
 var fixationWindow = {
    type: 'html-keyboard-response',
    stimulus: '+',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    data: {whichWindow: 'fixation'}
};

 // loop through blocks
 var blockIndexAttractiveRating = Array.apply(null, {length: myTestData.length}).map(Number.call, Number);
 blockIndexAttractiveRating.forEach(function(i) {
    // face presentation window
    for(i = 0; i < 3; i++){

    var images = getImages(i, temp)

    var faceWindowAttractiveRating = {
      type: "html-keyboard-response",
      stimulus: "<img src=" + images[0] + " style='float: left; height: 400px; width: 400px; margin-right: 200px' /> <img src=" + images[1] +  " style='float: left; height: 400px; width: 400px; margin-left: 200px' /><p style='height: 500px'></p> <p style='font-size: 20px'>Please <b> CHOOSE </b> the item you <b> LIKE </b> </p>",
      choices: ['q', 'p'],
      on_finish: function(data){
          keyPressed = data.key_press;
          if(keyPressed == 80){
            var key = 80;
          }
          else if(keyPressed == 81){
            var key = 81;
          }
        }
      };
    }


    var nextTrial = {
      type: 'html-keyboard-response',
      choices: ['q', 'p'],
      stimulus: function(){
        var lastKey = jsPsych.data.get().last(2).values()[0].key_press;
        console.log(lastKey)
        if(lastKey == 80){
          return "<img src=" + images[2] + " style='float: left; height: 400px; width: 400px; margin-right: 200px' /> <img src=" + images[1] +  " style='float: left; height: 400px; width: 400px; margin-left: 200px' /><p style='height: 500px'></p> <p style='font-size: 20px'>Please <b> EXCLUDE </b> the item you <b> DISLIKE </b> </p>";
        } else if(lastKey == 81) {
          return "<img src=" + images[0] + " style='float: left; height: 400px; width: 400px; margin-right: 200px' /> <img src=" + images[2] +  " style='float: left; height: 400px; width: 400px; margin-left: 200px' /><p style='height: 500px'></p> <p style='font-size: 20px'>Please <b> EXCLUDE </b> the item you <b> DISLIKE </b></p>";
        }
      }
    }
  // instructions for this block depending on Attractive rating and key pairing
  var blockInstructsAttractiveRating = {
    type: "html-button-response",
    choices: ['Continue'],
    post_trial_gap: 500,
    stimulus: "<p>This round, you will rate whether each face looks <b>"+"</b> or not.</p>" + 
    "<p>If the face looks <b>"+"</b>, press the letter <b>"+keyYes+"</b>. " + 
    "If the face does <b>NOT</b> look "+", press the letter <b>"+keyNo+"</b>.</p>" + 
    "<p>Please respond as quickly and accurately as possible when you see each face appear.</p>" + 
    "<p>Click continue when you are ready to start this round.</p>"
  };
  timeline.push(blockInstructsAttractiveRating)

  var trials = {
    timeline: [shuffleAttractiveRatings[0],fixationWindow, faceWindowAttractiveRating, fixationWindow, nextTrial]
  }
  timeline.push(trials);

})
   
 timeline.push(debrief)

//** START EXPERIMENT **//
 jsPsych.init({
    timeline: timeline,
    preload_images: myTestData,
    // exclusions: {min_width: 800, min_height: 600}, // restrict screen resolution (enable in final code)
    show_progress_bar: true,
    on_finish: function() {
      jsPsych.getDisplayElement().innerHTML = "<p>Thank you again for participating and please feel free to contact us at card@temple.edu if you have any questions.</p>";
      jsPsych.data.displayData(); // save data (disable in final code)
      jsPsych.data.get().localSave('csv','myTestData.csv'); // display data (disable in final code)
    }
});

   //  stimulus: "<img id='image' src='https://www.eipny.com/wp-content/uploads/2018/12/White-blank-image.jpg' onload='this.onload=null; this.src=getImage();' style='float: left; height: 400px; width: 400px; margin-right: 200px' /> <img id='image' src='https://www.eipny.com/wp-content/uploads/2018/12/White-blank-image.jpg' onload='this.onload=null; this.src=getImage();' style='float: left; height: 400px; width: 400px; margin-left: 200px' />",
  // stimulus: jsPsych.timelineVariable('image'), 