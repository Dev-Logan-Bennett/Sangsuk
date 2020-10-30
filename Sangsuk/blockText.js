//** set up block text presented in 'index.html' **//

// consent form
var consentForm = {
  type: "html-button-response",
  choices: ['Continue'],
  post_trial_gap: 500,
  timeline: [
    {stimulus: "<p>Welcome to the experiment! Please click continue to begin.</p>"},
    {stimulus: "<p>Before starting the experimental task, we ask that you review the following consent form.</p>"},
    {stimulus: "<p><b><u>ONLINE CONSENT FORM (PAGE 1 OF 3)</u></b><p>"+
      "<p><b>Why you are being invited to take part in a research study?</b></p>"+
        "<p>We invite you to partake in this research study to understand how attitudes shape decisions related to attractiveness.</p>"+
      "<p><b>Who can I talk to?</b></p>"+
        "<p>If you have questions, concerns, or complaints, or think the research has hurt you, contact the research team at vinod.venkatraman@temple.edu or call 215-204-8177. Our physical address is Alter Hall A562, 1801 Liacouras Walk, Philadelphia, PA 19122.</p>"+
        "<p>This research has been reviewed and approved by an Institutional Review Board. You may talk to them at (215) 707-3390 or e-mail them at: irb@temple.edu for any of the following:</p>"+
          "<p><ul style='list-style-type:none'>"+
            "<li>Your questions, concerns, or complaints are not being answered by the research team.</li>"+
            "<li>You cannot reach the research team.</li>"+
            "<li>You want to talk to someone besides the research team.</li>"+
            "<li>You have questions about your rights as a research subject.</li>"+
            "<li>You want to get information or provide input about this research.</li>"+
          "</ul><p>"},
    {stimulus: "<p><b><u>ONLINE CONSENT FORM (PAGE 2 OF 3)</u></b><p>"+
      "<p><b>Why are we doing this research?</b></p>"+
        "<p>The purpose of the research is to better understand how different attitudes shape people's behavior and decision preferences.</p>"+
      "<p><b>How long will the research last?</b></p>"+
        "<p>Your participation in this study will last for one session with the duration of no longer than 1 hour.</p>"+
      "<p><b>What happens if I say yes, I want to be in this research?</b></p>"+
        "<p>After your consent to participate, you will be asked to indicate your preferences in a series of trials. The specific details and instructions for the task will be communicated by the experimenter prior to the start of the study. Please follow these instructions to the best of your ability. There will be attention checks throughout the study to ensure that you are paying attention and the data collected is valid.</p>"+
        "<p>We will also collect basic demographics from you such as income, education, purchasing behavior, political and altruistic attitudes, and decision-making behavior (such as sensitivity to risk). Remember that all the decisions and choices that you make during this study are your own opinions and preferences. There are no right or wrong answers. Please answer honestly and to the best of your abilities. Participating in this study is no more risky than using an everyday computer.</p>"},
    {stimulus: "<p><b><u>ONLINE CONSENT FORM (PAGE 3 OF 3)</u></b><p>"+
      "<p><b>What happens if I say no, I do not want to be in this research?</b></p>"+
        "<p>You may decide not to take part in the research and it will not be held against you. It will in no way affect your relationship with the study investigators.</p>"+
      "<p><b>What happens if I say yes, but I change my mind later?</b></p>"+
        "<p>If you agree to take part in the research, you can stop at any time, and it will not be held against you. Withdrawal from study or failure to participate will not have any academic consequences to you if you are a student. Furthermore, if you are a student, there are no risks to your student career.</p>"+
      "<p><b>What happens to the information we collect?</b></p>"+
        "<p>Efforts will be made to limit the disclosure of your personal information, including research study records, to people who have a need to review this information. However, the study team cannot promise complete secrecy. For example, although the study team has put in safeguards to protect your information, there is always a potential risk of loss of confidentiality. Temple University IRB may inspect and copy your information to make sure that the study team is following the rules and regulations regarding research and the protection of human subjects.</p>"+
      "<p><b>Stipend/Reimbursement</b></p>"+
        "<p>If you agree to take part in this research, you will be compensated through the survey panel (e.g., mTurk, Qualtrics, SONA) through which you registered, after you complete the survey. However, you should have been informed about the estimated duration and exact compensation prior to registering for the study on the corresponding online forum. If not, you may discontinue at this point.</p>"},
    {stimulus: "<p>By clicking <b>'Continue'</b> below, you <b>consent</b> to participating in this research.</p>"}
  ]
};

// emotion rating task instructions
var welcome = {
  type: "html-button-response",
  choices: ['Continue'],
  post_trial_gap: 500,
  timeline: [
    {stimulus: "<p>Thank you for participating in this study.</p>" + "<p style='width: 1000px'> This study consists of three parts, and you will be asked to answer different types of preference related questions in each session. There is no right or wrong answer, so please base your answer on your own true preference.</p><p> If you are ready, press continue.</p>"},
  ]
};

var partOneInstruct = {
  type: "html-button-response",
  choices: ['Continue'],
  post_trial_gap: 500,
  timeline: [
    {stimulus: "<p>In part " +  " one " + " you will see several items and will be asked to rate their attractiveness.</p>" + "<p>Each item ranges from an attractiveness of \"1\" for \”Very Unattractive\" to \"8\" for \”Very Attractive\” using the number keys on the keyboard.</p><p> Press continue to start the experiment.</p>"}
  ]
}

// person rating task instructions
var partTwoInstruct = {
  type: "html-button-response",
  choices: ['Continue'],
  post_trial_gap: 500,
  timeline: [
    {stimulus: "<p>In parts 2 and 3, you will make a series of shopping decisions.</p>" + "<p>You will be shown two items on the screen and we want you to indicate your preference for the items presented.</p>" + "<p>Though the decisions are hypothetical, we would like you to assume that you were making each of the decisions for real, and provide your true and honest preference for each trial.</p><p> Press continue when ready.</p>"},
    {stimulus: "<p>In part 2, you will be shown two items on the screen.</p>" + "<p>Please indicate which of the items you would want to <b> INCLUDE </b> in a consideration set. Items in the consideration set may be presented for purchase in later trials.</p><p> Press continue when ready </p>"},
    {stimulus: "<p>In part 2, you will be shown a pair of items on the screen for each trial.</p>" + "<p>Please indicate which of the items you would want to <b> EXCLUDE </b> from your consideration set for the future. Items in the consideration set may be presented for purchase in later trials.</p><p> Press continue when ready </p>"},
    {stimulus: "<p>Please position your fingers on keys \"1\" and \"2\". The experiment will begin shortly. </p> <p> Press \"1\" to <b> INCLUDE </b> the item on the left side in a consideration set.</p><p> Press \"2\" to <b> INCLUDE </b> the item on the right side in a consideration set.</p>"},
    {stimulus: "<p>Please position your fingers on keys \"1\" and \"2\". The experiment will begin shortly.</p><p>Press \"1\" to <b> EXCLUDE </b> the item on the left side from a consideration set.</p><p>Press \"2\" to <b> EXCLUDE </b> the item on the right side from a consideration set.</p>"}
  ]
};

var partThreeInstruct = {
  type: "html-button-response",
  choices: ['Continue'],
  post_trial_gap: 500,
  timeline: [
    {stimulus: "<p>In part 3, you will be shown two items on the screen.</p>" + "<p>Some of these items may be the ones you had in your consideration set from the part 2." + "<p>Please indicate which of the two items you would prefer to <b> PURCHASE</b>.</p>" +  "<p>There are no right or wrong answers. We are only interested in your honest and true preferences.</p>" + "<p>Press continue when ready.</p> "},
    {stimulus: "<p>In part 3, you will be shown two items on the screen.</p>" + "<p>Some of these items may be the ones you had in your consideration set from the part 2." + "<p>This time, please indicate which of the two items you would prefer to <b> PURCHASE</b>." + "<p>Again, <b> HERE </b>, you need to <b> CHOOSE </b> an item you <b> PREFER </b>. There are no right or wrong answers. We are only interested in your honest and true preferences.</p>" + "<p>Press continue when ready</p>"},
    {stimulus: "<p>In part 3, you will be shown two items on the screen.</p>" +  "<p>Some of these items may be the ones you had in your consideration set from the part 2." + "<p>This time, please indicate which of the two items you would prefer to <b> GIVE UP </b> or <b> REJECT </b>." + "<p>Again, <b> HERE </b>, you need to <b> REJECT </b> an item you <b> DO NOT PREFER </b>. There are no right or wrong answers. We are only interested in your honest and true preferences.</p>" + "<p>Press continue when ready</p>"},
    {stimulus: "<p>In part 3, you will be shown two items on the screen.</p>" +  "<p>Some of these items may be the ones you had in your consideration set from the part 2." + "<p>Please indicate which of the two items you would prefer to <b> GIVE UP </b> or <b> REJECT </b>. There are no right or wrong answers. We are only interested in your honest and true preferences.</p>" + "<p>Press continue when ready</p>"},
    {stimulus: "<p>Please position your fingers on keys \"1\" and \"2\". The experiment will begin shortly. </p> <p> Press \"1\" to <b> CHOOSE </b> the item on the left side.</p><p> Press \"2\" to <b> CHOOSE </b> the item on the right side.</p>"},
    {stimulus: "<p>Please position your fingers on keys \"1\" and \"2\". The experiment will begin shortly. </p> <p> Press \"1\" to <b> GIVE UP </b> the item on the left side.</p><p> Press \"2\" to <b> GIVE UP </b> the item on the right side.</p>"},
  ]
}

// debrief
var debrief = {
  type: "html-button-response",
  choices: ['Continue'],
  post_trial_gap: 500,
  timeline: [
    {stimulus: "<p>Thank you for participating in our experiment!</p>"+"<p> The purpose of this experiment is to study how people perceive partially visible facial expressions of emotion.</p>"+"<p>Your participation could help provide insight into how wearing face coverings influences the communication of distinct emotions.</p>"},
    {stimulus: "<p>In the first part of the experiment, you rated whether or not a series of faces showed various emotions.</p>"+"<p>Your ratings may help us understand how quickly and accurately individuals perceive facial expressions of different emotions when they are only partially visible.</p>"},
    {stimulus: "<p>In the second part of the experiment, you answered a set of questionnaires that assessed certain personality traits or dispositions.</p>"+"<p>These questionnaires are meant to measure differences between individuals, which may be related to how they rated faces in the first part of the study.</p>"},
    // {stimulus: "<p>Click continue to finish the experiment and receive your secret completion code.</p>"+"<p>Please enter this code in the HIT window and submit the HIT <b>before</b> you close this window.</p>"}
    {stimulus: "<p>Click continue to finish the experiment.</p>"+"<p>Please click continue <b>before</b> you close this window.</p>"}
  ]
};
