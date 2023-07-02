// mentorshipUtils.js

// Assuming you have imported the Mentor and Mentee models
const Mentor = require('../backend/models/mentor.js');
const Mentee = require('../backend/models/mentee.js');

// Function to assign mentors to mentees
async function assignMentorsToMentees() {
  try {
    // Fetch all mentors and mentees from the database
    const mentors = await Mentor.find();
    const mentees = await Mentee.find();

    // Loop through each mentee and find a suitable mentor
    for (const mentee of mentees) {
      let selectedMentor = null;

      // Find a mentor who matches the mentee's language and aspiration
      for (const mentor of mentors) {
        if (
          mentor.languages.includes(mentee.languages) &&
          mentor.aspiration === mentee.aspiration
        ) {
          selectedMentor = mentor;
          break;
        }
      }

      // Assign the mentor to the mentee
      if (selectedMentor) {
        mentee.mentor = selectedMentor._id;
        await mentee.save();
      }
    }

    console.log('Mentors assigned to mentees successfully.');
  } catch (error) {
    console.error('Error assigning mentors to mentees:', error);
  }
}

module.exports = assignMentorsToMentees;
