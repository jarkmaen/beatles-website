import * as messagesService from "../services/messages";
import Alert from "./Alert";
import FormField from "./FormField";
import { useState } from "react";

const About = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setError(false);
        setIsSubmitting(true);
        setSuccess(false);

        try {
            await messagesService.send({
                email,
                first_name: firstName || undefined,
                last_name: lastName || undefined,
                message
            });

            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
            setSuccess(true);
        } catch (error) {
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="dark:text-primary-dark font-bold font-lora mb-8 sm:text-6xl text-5xl text-center text-primary-light">
                About Us
            </h1>
            <div className="dark:prose-invert hyphens-auto max-w-none prose sm:prose-lg">
                <p>
                    Fab Two is a collaboration between two Beatles enthusiasts,
                    Jarkko and Jonas. Out of love for the music of The Beatles,
                    and with a zest for spreadsheets and talking endlessly about
                    music, we undertook the project of rating and ranking all
                    their original songs. This site is our platform to share the
                    results and any other future endeavors linked to The
                    Beatles.
                </p>
                <p>
                    Besides the main attraction (the rating and ranking of all
                    original Beatles songs), you might find future blog posts on
                    the covers they did, on albums or songs they recorded in
                    their solo careers... Anything related to The Beatles,
                    except the gossip!
                </p>
                <p>
                    Also feel free to send us a message through the contact form
                    below! Whether you strongly disagree with one of our takes
                    or just want to send some appreciation, anything is welcome.
                    We'll try to get back to you as soon as we can!
                </p>
            </div>
            <hr className="border-divider-light dark:border-divider-dark my-12" />
            <h2 className="dark:text-primary-dark font-bold font-lora mb-8 sm:text-5xl text-3xl text-center text-primary-light">
                Get in Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="gap-x-6 gap-y-6 grid grid-cols-2">
                    <FormField
                        label="First Name"
                        maxLength={100}
                        setValue={setFirstName}
                        type="text"
                        value={firstName}
                    />
                    <FormField
                        label="Last Name"
                        maxLength={100}
                        type="text"
                        value={lastName}
                        setValue={setLastName}
                    />
                </div>
                <FormField
                    label="Email Address"
                    maxLength={255}
                    required
                    setValue={setEmail}
                    type="email"
                    value={email}
                />
                <FormField
                    label="Message"
                    maxLength={3500}
                    required
                    rows={4}
                    setValue={setMessage}
                    textarea
                    value={message}
                />
                {error && (
                    <Alert
                        message="Something went wrong. Please try again later."
                        onClose={() => setError(false)}
                        variant="error"
                    />
                )}
                {success && (
                    <Alert
                        message="Thank you! Your message has been sent."
                        onClose={() => setSuccess(false)}
                        variant="success"
                    />
                )}
                <button
                    className="bg-primary-light cursor-pointer dark:bg-primary-dark dark:hover:bg-primary-dark/90 dark:text-black disabled:cursor-not-allowed disabled:opacity-50 flex font-bold hover:bg-primary-light/90 justify-center px-6 py-3 rounded-md shadow-sm text-sm text-white transition-colors"
                    disabled={isSubmitting}
                    type="submit"
                >
                    {isSubmitting && (
                        <svg
                            className="animate-spin h-5 mr-3 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                strokeWidth="4"
                                stroke="currentColor"
                            ></circle>
                            <path
                                className="opacity-75"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    )}
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default About;
