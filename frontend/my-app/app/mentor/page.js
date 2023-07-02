'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Map = () => {
    const [assignments, setAssignments] = useState([]);
    const [mentee, setMentee] = useState(null); // Track the mentee data
    let mentors;
    // const [mentors, setMentors] = useState();
    //   useEffect(() => {
    //     // Fetch the mentor-mentee assignments from the server

    //     })


    const handleComparison = () => {
        // Fetch the mentee by its user ID
        // const res =  axios.get('/getmentors');
        //     const mentorsAll = res.data;
        //     setMentors(mentorsAll);
        axios.get('http://localhost:3000/assignment').then(response => {
            console.log(response.data);
            setAssignments(response.data);

            axios.get('http://localhost:3000/getmentors').then(async (response) => {
                console.log(response.data[0]);
                // setMentors(response.data[0]);
                mentors = response.data;

                const menteeId = '64a0a68580d141ef5ab6ec73'; // Replace with the actual user ID of the mentee
                axios
                    .get(`http://localhost:3000/getmentee/${menteeId}`)
                    .then((response) => {
                        const fetchedMentee = response.data;
                        console.log(response.data);
                        setMentee(fetchedMentee);
                    })
                    .catch((error) => {
                        console.error('Error fetching mentee:', error);
                    });
                //   setMentee(mentee);
                console.log(mentors)
                for (var i = 0; i < mentors.length; i++) {
                    let mentor = mentors[i];
                    // console.log(mentors[0]);
                    let lflag = 0;
                    let sflag = 0;
                    let tflag = 0;

                    for (const lang of mentor.languages) {
                        for (const lang2 of mentee.languages) {
                            if (lang === lang2) lflag = 1;
                        }
                    }

                    // for (const lang of mentor.skills) {
                    //     for (const lang2 of mentee.skills) {
                    //         if (lang === lang2) sflag = 1;
                    //     }
                    // }

                    // for (const lang of mentor.time_slot) {
                    //     for (const lang2 of mentee.time) {
                    //         if (lang === lang2) tflag = 1;
                    //     }
                    // }
                    if(mentor.time_slot === mentee.time_slot) tflag = 1;

                    const assignment = await axios.get('/assignment');
                    let allotFlag = 1;

                    for (const assign of assignment) {
                        if (assign.mentor === mentors[i]) allotFlag = 0;
                    }

                    if (allotFlag && lflag && tflag) {
                        await axios.post('/addassignment', {
                            mentee,
                            mentor
                        });
                        console.log("Done");
                    }
                    console.log(allotFlag);
                    console.log(lflag);
                    console.log(tflag);
                }
            }).catch(error => {
                console.log(error);
            })
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <h1>Mentor-Mentee Assignments</h1>
            <button onClick={handleComparison}>Compare and Assign</button>
            {/* <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            Mentee: {assignment.mentee.userId}, Mentor: {assignment.mentor.userId}
          </li>
        ))}
      </ul> */}
        </div>
    );
};

export default Map;