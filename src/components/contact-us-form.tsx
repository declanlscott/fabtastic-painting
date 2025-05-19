import { createSignal, onMount } from "solid-js";
import { isServer } from "solid-js/web";

interface FormState {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

// Only declare the global type on the client
if (!isServer) {
  // This code only runs on the client
  window.recaptchaCallback = function () {
    const event = new CustomEvent("recaptchaSuccess");
    document.dispatchEvent(event);
  };
}

const ContactUsForm = () => {
  const [formState, setFormState] = createSignal<FormState>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [canSubmit, setCanSubmit] = createSignal<boolean>(true);
  let recaptchaRef: HTMLDivElement | undefined;

  onMount(() => {
    // This code only runs on the client after component is mounted

    // Load the reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Add event listener for recaptcha success
    const handleRecaptchaSuccess = () => {
      setCanSubmit(false);
    };

    document.addEventListener("recaptchaSuccess", handleRecaptchaSuccess);

    // Clean up on component unmount
    return () => {
      document.removeEventListener("recaptchaSuccess", handleRecaptchaSuccess);
    };
  });

  const handleChange = (
    e: InputEvent & {
      currentTarget: HTMLInputElement | HTMLTextAreaElement;
      target: Element;
    }
  ) => {
    const target = e.currentTarget;
    const { name, value } = target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      name="contact-us"
      action="https://getform.io/f/c704e1ac-f4cc-4439-a18b-4d78b0d92f72"
      method="post"
      class="w-full max-w-3xl"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
          <label
            class="block tracking-wide text-secondary text-xs font-bold mb-2 uppercase"
            for="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            onInput={handleChange}
            value={formState().name}
            placeholder="Jane Doe"
            class="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tertiary mb-3"
          />

          <label
            class="block tracking-wide text-secondary text-xs font-bold mb-2 uppercase"
            for="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onInput={handleChange}
            value={formState().email}
            placeholder="email@example.com"
            class="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tertiary mb-3"
          />

          <label
            class="block tracking-wide text-secondary text-xs font-bold mb-2 uppercase"
            for="phoneNumber"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            onInput={handleChange}
            value={formState().phoneNumber}
            placeholder="123-456-7890"
            class="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tertiary mb-3"
          />
        </div>
        <div class="w-full md:w-3/5 px-3">
          <label
            class="block tracking-wide text-secondary text-xs font-bold mb-2 uppercase"
            for="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onInput={handleChange}
            value={formState().message}
            placeholder="Brief description of project"
            class="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-tertiary mb-3"
            rows={9}
          />
        </div>
      </div>
      <div class="flex justify-center mb-8">
        <div
          ref={recaptchaRef}
          class="g-recaptcha"
          data-sitekey="6Lctq7IdAAAAAMRSlFwuXIZPsTa0TGB3e09knGWe"
          data-callback="recaptchaCallback"
        ></div>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          disabled={canSubmit()}
          class="mx-auto px-4 py-2 text-lg font-bold bg-primary border border-tertiary rounded-full hover:bg-secondary hover:text-primary transition duration-200 disabled:opacity-30 disabled:pointer-events-none uppercase"
        >
          Submit
        </button>
      </div>

      {/* Add a hidden input to store the recaptcha response */}
      <input type="hidden" name="g-recaptcha-response" />
    </form>
  );
};

// Add the global callback function type declaration
declare global {
  interface Window {
    recaptchaCallback: () => void;
  }
}

export default ContactUsForm;
