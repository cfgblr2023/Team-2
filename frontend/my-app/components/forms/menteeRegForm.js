import GLOBAL_CONTEXT from "@/context/store";
import { register_user, validateUserDetails } from "@/utils";
import React, { useContext } from "react";
import Loading from "../loading";
import TextBox, { SelectBox } from "../textbox";

const MentorRegForm = () => {
  const [languages, setLang] = React.useState([]);
  const [support, setSupport] = React.useState([]);
  const { user, setUser, authenticate_user } = useContext(GLOBAL_CONTEXT);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (e) => {
    setError({});
    setLoading(true);
    e.preventDefault();
    console.log(user);
    let validate = validateUserDetails(user);
    console.log(validate);
    if (validate.isError) {
      setError(validate);
    } else {
      authenticate_user(user);
    }
    setLoading(false);
    console.log(error);
  };

  return (
    <>
      <main className="flex flex-col gap-2 relative">
        <main className="text-2xl  flex flex-col gap-1 font-medium">
          <div className="text-gray-800">
            Unlock Your Potential and Inspire Others: Join Our Mentorship
            Program Today!
          </div>
          <div className="text-base text-gray-600 max-w-[95%]">
            Become a beacon of inspiration and knowledge by sharing your
            expertise, experiences, and insights. As a mentor, you'll have the
            opportunity to guide and support mentees, helping them navigate
            challenges, achieve their goals, and create a brighter future
          </div>
        </main>
        <main className="grid grid-cols-2 mt-6 px-4 gap-6">
          <TextBox
            lable={"Name"}
            action={(e) => setUser({ ...user, fullname: e.target.value })}
            placeholder="e.g. Rishi"
            error={error && error.fullname}
          />
          <TextBox
            lable={"Email"}
            placeholder="your@example.com"
            action={(e) => setUser({ ...user, email: e.target.value })}
            error={error && error.email}
          />
          <div className="grid grid-cols-2 mb-4 gap-4">
          <TextBox
            lable={"Password"}
            placeholder="xxxxx"
            type={"password"}
            action={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
          <TextBox
            lable={"Contact Number"}
            error={error && error.phone}
            placeholder="98XXXXXXX"
            action={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <TextBox
            lable={"Current Address"}
            placeholder="e.g.New Delhi"
            action={(e) => setUser({ ...user, curr_add: e.target.value })}
          />
          <TextBox
            lable={"Permanent Address"}
            error={error && error.address}
            placeholder="start here"
            action={(e) => setUser({ ...user, permanent_add: e.target.value })}
          />
          <TextBox
            lable={"Education Status"}
            error={error && error.address}
            placeholder="start here"
            action={(e) => setUser({ ...user, edu_status: e.target.value })}
          />
          <TextBox
            lable={"Date Of Birth"}
            error={error && error.address}
            placeholder="start here"
            action={(e) => setUser({ ...user, dob: e.target.value })}
          />

          <SelectBox
            list={["Male", "Female"]}
            placeholder={"Select"}
            lable={"Gender"}
            action={(e) => setUser({ ...user, gender: e })}
          />

          <SelectBox
            list={["18 - 24 years old", "25-34 years old","35-44 years old"]}
            placeholder={"Select"}
            lable={"Age"}
            action={(e) => setUser({ ...user, age: e })}
          />
          <div>
            <SelectBox
              list={["Hindi", "English", "Marathi", "Kannada","Tamil"]}
              placeholder="Select your spoken languages"
              lable={"Languages spoken"}
              multiSelect
              action={setLang}
            />
            <div className="flex gap-1">
              {languages &&
                languages.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-xs text-rose-950 font-bold border-2 rounded-full border-2 border-rose-900"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
          {/* <TextBox lable={"Have you "} placeholder="" /> */}
          
        </main>
        <div className="flex my-2 px-4 gap-2 w-full flex-col ">
          <span className="block text-sm font-bold text-gray-700">
            Name and address of the School/College/Institution currently studying?
          </span>
          <textarea
            rows={5}
            placeholder="(Example: Name - MES College of Arts, Commerce and Science, Address -  15th cross, prof, MPL Sastry
                Road, Malleshwaram, Bengaluru, Karnataka 560003)"
            className="w-full p-3 text-sm bg-gray-100 outline-none"
            action={(e) => setUser({ ...user, institution: e })}
          />
        </div>
        <div className="flex my-2 px-4 gap-2 w-full flex-col ">
          <span className="block text-sm font-bold text-gray-700">
            Mention your program name and the year in which you are studying
          </span>
          <textarea
            rows={2}
            placeholder="(Example 1: BCOM - 3rd Year, Example 2: 10th Grade - Mid term)"
            className="w-full p-3 text-sm bg-gray-100 outline-none"
            action={(e) => setUser({ ...user, program: e })}
          />
        </div>
        <div className="flex my-2 px-4 gap-2 w-full flex-col ">
          <span className="block text-sm font-bold text-gray-700">
            Where do you see yourself in the next five years? 
          </span>
          <textarea
            rows={8}
            placeholder="Example: In the next five years, I envision myself in a leadership role within a reputable technology
            company. With my passion for innovation and problem-solving skills, I aim to drive impactful projects
            and spearhead strategic initiatives that shape the future of technology. Through continuous learning
            and professional development, I plan to expand my expertise in emerging technologies like artificial
            intelligence and blockchain. Additionally, I aspire to build a strong network of industry professionals
            and mentor aspiring individuals to foster a culture of growth and collaboration. By balancing ambition
            with adaptability, I am confident in my ability to make a positive and lasting impact in the field of
            technology over the next five years"
            className="w-full p-3 text-sm bg-gray-100 outline-none"
            action={(e) => setUser({ ...user, question_fiveyears: e })}
          />
        </div>
        <div className="flex my-2 px-4 gap-2 w-full flex-col ">
          <span className="block text-sm font-bold text-gray-700">
            Why are you interested in participating in this program? 
          </span>
          <textarea
            rows={4}
            placeholder="(Please briefly describe your career goals and how you hope this program will help you achieve them -
                Minimum 100 Words)"
            className="w-full p-3 text-sm bg-gray-100 outline-none"
            action={(e) => setUser({ ...user, question_participation: e })}
          />
        </div>
        <div>
            <SelectBox
            list={["Exploring career with impact", "Identifying your value and goals","Finding worklife balance"]}
            placeholder={"(Select Multiple if applicable)"}
            lable={"What are some of the key areas you are seeking support or help from this program?"}
            multiSelect
            action={setSupport}
            />
            <div className="flex gap-1">
              {support &&
                support.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-xs text-rose-950 font-bold border-2 rounded-full border-2 border-rose-900"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={"Do you have 3 hours per week to commit for the Mentoring Program?"}
            action={(e) => setUser({ ...user, prev_experience: e })}
          />
        <SelectBox
            list={["09:00am - 12:00pm","12:00pm - 03:00pm","03:00pm - 06:00pm","06:00pm - 09:00pm"]}
            placeholder={"Select"}
            lable={"What are your available time slots for this Program"}
            action={(e) => setUser({ ...user, age: e })}
          />
        
        <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={"Do you agree to attend all scheduled Mentoring sessions?"}
            action={(e) => setUser({ ...user, prev_experience: e })}
          />
        <div className="flex my-2 px-4 gap-2 w-full flex-col ">
          <span className="block text-sm font-bold text-gray-700">
          Is there anything else you would like us to know about your availability or circumstances?
          </span>
          <textarea
            rows={5}
            placeholder="Answer"
            className="w-full p-3 text-sm bg-gray-100 outline-none"
            action={(e) => setUser({ ...user, extra_info: e })}
          />
        </div>

        <main className="px-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-700 font-bold uppercase rounded p-2 text-white "
          >
            register as a mentee
          </button>
        </main>

        {loading && (
          <main className="absolute top-0 w-full h-full bg-white/70 flex items-center justify-center">
            <Loading message="Hold on tight. Your details are being processed" />
          </main>
        )}
      </main>
    </>
  );
};

export default MentorRegForm;