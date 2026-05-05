const DEFAULT_WHATSAPP_NUMBER = "595981000000";
const GENERAL_MESSAGE = "Hola, quiero solicitar un presupuesto para Marmolería Pietra.";

export function createWhatsAppLink(message = GENERAL_MESSAGE, phone = DEFAULT_WHATSAPP_NUMBER) {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function createProductWhatsAppLink(productName: string, phone = DEFAULT_WHATSAPP_NUMBER) {
  return createWhatsAppLink(`Hola, quiero consultar por ${productName} para mi proyecto.`, phone);
}

export { DEFAULT_WHATSAPP_NUMBER, GENERAL_MESSAGE };
