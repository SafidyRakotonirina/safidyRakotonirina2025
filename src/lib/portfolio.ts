import { SITE } from "../config";

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
