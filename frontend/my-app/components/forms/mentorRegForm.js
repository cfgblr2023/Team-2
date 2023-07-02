import GLOBAL_CONTEXT from "@/context/store";
import { register_user, validateUserDetails } from "@/utils";
import React, { useContext } from "react";
import Loading from "../loading";
import TextBox, { SelectBox } from "../textbox";

const MentorRegForm = () => {
  const [lang, setLang] = React.useState([]);
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
            action={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="e.g. Rishi"
            error={error && error.name}
          />
          <TextBox
            lable={"Email"}
            placeholder="your@example.com"
            action={(e) => setUser({ ...user, email: e.target.value })}
            error={error && error.email}
          />
          <TextBox
            lable={"Contact Number"}
            error={error && error.phone}
            placeholder="98XXXXXXX"
            action={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <TextBox
            lable={"Current City"}
            error={error && error.city}
            placeholder="e.g.New Delhi"
            action={(e) => setUser({ ...user, city: e.target.value })}
          />
          <TextBox
            lable={"Address"}
            error={error && error.address}
            placeholder="start here"
            action={(e) => setUser({ ...user, address: e.target.value })}
          />
          <TextBox
            lable={"Occupation"}
            error={error && error.occupation}
            placeholder="e.g Software Engineer"
            action={(e) => setUser({ ...user, occupation: e.target.value })}
          />

          <SelectBox
            list={["Male", "Female"]}
            placeholder={"Select"}
            lable={"Gender"}
            action={(e) => setUser({ ...user, gender: e })}
          />

          <SelectBox
            list={["18 - 24 years old", "25-34 years old"]}
            placeholder={"Select"}
            lable={"Age"}
            action={(e) => setUser({ ...user, age: e })}
          />
          <SelectBox
            list={["B Tech", "BSc"]}
            placeholder={"Select"}
            lable={"Qualification"}
            action={(e) => setUser({ ...user, qualification: e })}
          />
          <div>
            <SelectBox
              list={["Hindi", "English", "Marathi"]}
              placeholder="Select your spoken languages"
              lable={"Languages spoken"}
              multiSelect
              action={setLang}
            />
            <div className="flex gap-1">
              {lang &&
                lang.map((item, index) => (
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
          <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={"Have you volunteered before?"}
            action={(e) => setUser({ ...user, prev_experience: e })}
          />
          <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={
              "Are you comfortable with teaching/training/mentoring adults?"
            }
            action={(e) => setUser({ ...user, comfortable_with_teching: e })}
          />
          <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={
              "Do you require a basic discussion call before session with the mentee?"
            }
            action={(e) => setUser({ ...user, discussion_req: e })}
          />
        </main>
        <div className="flex my-2 px-4 gap-2 w-full flex-col ">
          <span className="block text-sm font-bold text-gray-700">
            Is there anything else you would like us to know about your
            availability?
          </span>
          <textarea
            rows={5}
            placeholder="Your answer"
            className="w-full p-3 text-sm bg-gray-100 outline-none"
            action={(e) => setUser({ ...user, extra_info: e })}
          />
        </div>
        <div className="grid px-4 grid-cols-2 mb-4 gap-4">
          <TextBox
            lable={"Password"}
            placeholder="xxxxx"
            type={"password"}
            action={(e) => setUser({ ...user, password: e.target.value })}
          />
          <TextBox
            lable={"Confirm Password"}
            placeholder="xxxxx"
            type={"password"}
            action={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <main className="px-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-700 font-bold uppercase rounded p-2 text-white "
          >
            register as a mentor
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