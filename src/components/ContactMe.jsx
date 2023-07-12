import React, { useState } from "react";
import { url } from "../server";

const ContactMe = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    body: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // Inside your React component
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    // if (!form) {
    //   return;
    // }

    console.log("first");

    fetch(`${url}api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        // Handle response from the server
        if (response.ok) {
          console.log(response);
          console.log("Email sent successfully!");
        } else {
          setError("Failed to send email.");
          console.error("Failed to send email.");
        }

        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Failed to send email.", error);
        setLoading(false);
      });
  };

  return (
    <div
      className={`${
        open ? "bottom-[20px]" : "bottom-[-150%]"
      } flex flex-col absolute shadow-2xl bg-white rounded-lg w-[80%] lg:w-96 transition-all ease-in-out duration-500`}
    >
      <div className="w-full border-b border-solid px-6 py-2 flex items-center justify-between">
        <h3 className="text-center font-semibold ">Contact me!</h3>
        <span
          onClick={() => {
            setOpen(false);
          }}
          className="font-semibold cursor-pointer border border-solid border-red-600 text-red-600 rounded-md px-2 hover:bg-red-600 hover:text-white"
        >
          x
        </span>
      </div>
      <form className="p-6" onSubmit={sendEmail}>
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
            id="exampleInput90"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
            id="exampleInput91"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div class="relative mb-6" data-te-input-wrapper-init>
          <textarea
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
            id="exampleFormControlTextarea1"
            rows="3"
            name="body"
            required
            value={form.body}
            placeholder="Your message"
            onChange={handleChange}
          ></textarea>
        </div>
        {/* <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
          <input
            class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="exampleCheck96"
            checked
          />
          <label
            class="inline-block pl-[0.15rem] hover:cursor-pointer"
            for="exampleCheck96"
          >
            Send me a copy of this message
          </label>
        </div> */}
        <button
          type="submit"
          class="mb-6 inline-block bg-blue-600 w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs text-center font-medium Capitalize leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {loading === true ? (
            <svg
              className="h-6 fill-white text-center animate-spin inline-flex justify-center"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#00ff00"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>spinner</title>{" "}
                <path d="M16 0.75c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM16 4.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0.001 0.414-0.336 0.749-0.75 0.75h-0zM7.25 16c0-1.795-1.455-3.25-3.25-3.25s-3.25 1.455-3.25 3.25c0 1.795 1.455 3.25 3.25 3.25v0c1.794-0.002 3.248-1.456 3.25-3.25v-0zM4 16.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0.001 0.414-0.336 0.749-0.75 0.75h-0zM16 24.75c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM16 28.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0 0.414-0.336 0.75-0.75 0.75h-0zM28 12.75c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28 16.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0 0.414-0.336 0.75-0.75 0.75h-0zM24.486 21.236c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.001-1.794-1.456-3.249-3.25-3.25h-0zM24.486 25.236c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0 0.414-0.336 0.75-0.75 0.75v0zM7.508 21.242c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM7.508 25.242c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0 0.414-0.336 0.75-0.75 0.75h-0zM7.533 4.283c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM7.533 8.283c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75c0.414 0 0.75 0.336 0.75 0.75v0c-0.001 0.414-0.336 0.749-0.75 0.75h-0z"></path>{" "}
              </g>
            </svg>
          ) : (
            "Send"
          )}
        </button>
        {loading == true ? (
          ""
        ) : error !== "" ? (
          <p className="py-3 text-lg text-center font-bold text-red-600 inline-flex space-x-4 items-center justify-center w-full">
            <span> Email sending failed</span>
            <svg
              viewBox="0 0 24 24"
              className="fill-red-600 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM11.25 13.5V8.25H12.75V13.5H11.25ZM11.25 15.75V14.25H12.75V15.75H11.25Z"
                  fill="#080341"
                ></path>{" "}
              </g>
            </svg>
          </p>
        ) : success === true ? (
          <p className="py-3 text-lg text-center font-bold text-green-600 inline-flex space-x-4 items-center justify-center w-full">
            <span> Email sent</span>
            <svg
              className="fill-green-600 h-6 rounded-full border-2 border-solid p-1"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 31.963 31.963"
              xml:space="preserve"
              stroke="#00ff00"
              stroke-width="0.00031963000000000006"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M31.453,9.17c0.372-0.439,0.554-1.011,0.501-1.585c-0.055-0.574-0.338-1.102-0.785-1.466l-3.811-3.084 c-0.92-0.744-2.27-0.602-3.014,0.317L12.675,17.773l-5.536-4.667c-1.054-0.889-2.61-0.822-3.585,0.151l-2.927,2.926 c-0.421,0.421-0.647,0.999-0.626,1.594c0.022,0.596,0.291,1.152,0.742,1.542l11.108,9.565c0.432,0.373,0.994,0.558,1.562,0.513 c0.568-0.044,1.096-0.312,1.465-0.747L31.453,9.17z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default ContactMe;
