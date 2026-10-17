import { SITE } from "../config";
import emailjs from "@emailjs/browser";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EMPTY_CONTACT: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function sendByMailto(data: ContactPayload): void {
  const subject = `Contact portfolio — ${data.name || "Nouveau message"}`;
  const body = [
    `Nom : ${data.name}`,
    `Email : ${data.email}`,
    data.phone ? `Téléphone : ${data.phone}` : "",
    "",
    data.message,
  ]
    .filter((line) => line !== "")
    .join("\n");

  const url = `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export async function sendByEmailJS(data: ContactPayload): Promise<void> {

  console.log({ serviceId, templateId, publicKey });
  
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS n'est pas configuré (VITE_EMAILJS_* manquants).",
    );
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Non renseigné",
        message: data.message,
        reply_to: data.email,
      },
      { publicKey },
    );
  } catch {
    throw new Error("L'envoi a échoué, veuillez réessayer plus tard.");
  }
}
