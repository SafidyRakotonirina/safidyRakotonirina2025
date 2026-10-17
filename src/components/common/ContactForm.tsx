import { useId, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { EMPTY_CONTACT, sendByEmailJS } from "../../lib/portfolio";
import type { ContactPayload } from "../../lib/portfolio";

const inputClass =
  "w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const id = useId();
  const [formData, setFormData] = useState<ContactPayload>(EMPTY_CONTACT);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await sendByEmailJS(formData);
      setStatus("success");
      setFormData(EMPTY_CONTACT);
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi du message.",
      );
    }
  };

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 sm:space-y-6 ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor={`${id}-name`} className="sr-only">
            Votre nom
          </label>
          <input
            id={`${id}-name`}
            type="text"
            name="name"
            required
            disabled={isSending}
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="sr-only">
            Votre email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            required
            disabled={isSending}
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className="sr-only">
          Votre numéro de téléphone
        </label>
        <input
          id={`${id}-phone`}
          type="tel"
          name="phone"
          disabled={isSending}
          value={formData.phone}
          onChange={handleChange}
          placeholder="Votre numéro de téléphone (facultatif)"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="sr-only">
          Votre message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          disabled={isSending}
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          rows={5}
          className={`${inputClass} resize-none`}
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={isSending}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2 mx-auto text-sm sm:text-base"
        >
          {isSending ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={18} />
              Envoyer
            </>
          )}
        </button>

        {status === "success" && (
          <p
            role="status"
            className="mt-3 flex items-center justify-center gap-2 text-sm text-emerald-400"
          >
            <CheckCircle2 size={16} />
            Merci ! Votre message a bien été envoyé.
          </p>
        )}

        {status === "error" && (
          <p
            role="alert"
            className="mt-3 flex items-center justify-center gap-2 text-sm text-red-400"
          >
            <AlertCircle size={16} />
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
