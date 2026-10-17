import { useId, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";
import { EMPTY_CONTACT, sendByMailto } from "../../lib/portfolio";
import type { ContactPayload } from "../../lib/portfolio";

const inputClass =
  "w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const id = useId();
  const [formData, setFormData] = useState<ContactPayload>(EMPTY_CONTACT);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendByMailto(formData);
    setSent(true);
    setFormData(EMPTY_CONTACT);
  };

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
          value={formData.phone}
          onChange={handleChange}
          placeholder="Votre numéro de téléphone"
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
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto text-sm sm:text-base"
        >
          <Send size={18} />
          Envoyer
        </button>
        {sent && (
          <p role="status" className="mt-3 text-sm text-emerald-400">
            Merci ! Votre message va s'ouvrir dans votre logiciel de messagerie.
          </p>
        )}
      </div>
    </form>
  );
}
