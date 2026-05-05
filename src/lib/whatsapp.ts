const DEFAULT_WHATSAPP_NUMBER = "595984756158";
const GENERAL_MESSAGE = "Hola, quiero solicitar una cotización para un proyecto con Marmolería Pietra.";

export function createWhatsAppLink(message = GENERAL_MESSAGE, phone = DEFAULT_WHATSAPP_NUMBER) {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function createProductWhatsAppLink(productName: string, phone = DEFAULT_WHATSAPP_NUMBER) {
  return createWhatsAppLink(`Hola, quiero cotizar ${productName} para mi proyecto.`, phone);
}

export function createProjectWhatsAppLink(projectName: string, phone = DEFAULT_WHATSAPP_NUMBER) {
  return createWhatsAppLink(`Hola, quiero consultar por un trabajo similar a ${projectName}.`, phone);
}

export { DEFAULT_WHATSAPP_NUMBER, GENERAL_MESSAGE };
