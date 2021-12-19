import React, { useState } from 'react'

const ContactUsForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form
            name="contact-us"
            action="https://getform.io/f/c704e1ac-f4cc-4439-a18b-4d78b0d92f72"
            method="POST"
            className="w-full max-w-3xl"
        >
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                    <label className="block tracking-wide text-secondary text-xs font-bold mb-2" htmlFor="name">
                        NAME
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formState.name}
                        placeholder="Jane Doe"
                        className="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary mb-3"
                    />

                    <label className="block tracking-wide text-secondary text-xs font-bold mb-2" htmlFor="email">
                        EMAIL
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formState.email}
                        placeholder="example@address.com"
                        className="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary mb-3"
                    />

                    <label className="block tracking-wide text-secondary text-xs font-bold mb-2" htmlFor="phoneNumber">
                        PHONE NUMBER
                    </label>
                    <input
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        onChange={handleChange}
                        value={formState.phoneNumber}
                        placeholder="123-456-7890"
                        className="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary mb-3"
                    />
                </div>
                <div className="w-full md:w-3/5 px-3">
                    <label className="block tracking-wide text-secondary text-xs font-bold mb-2" htmlFor="message">
                        MESSAGE
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={formState.message}
                        placeholder="Brief description of project"
                        className="appearance-none block w-full bg-white text-secondary border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary mb-3"
                        rows={9}
                    />
                </div>
            </div>
            <div className="g-recaptcha flex justify-center mb-8" data-sitekey="6Lctq7IdAAAAAMRSlFwuXIZPsTa0TGB3e09knGWe" />
            <div className="flex justify-center">
                <button type="submit" className="mx-auto px-4 py-2 text-lg font-bold bg-primary rounded-full hover:bg-primary-light transition duration-200">SUBMIT</button>
            </div>
        </form>
    )
}

export default ContactUsForm
