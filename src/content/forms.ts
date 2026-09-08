import { z } from 'zod';
export const contactSchema = z.object({
 name:z.string().trim().min(2,'Escribe tu nombre completo.').max(100),
 email:z.email('Revisa el formato de tu correo.').max(150),
 company:z.string().trim().min(2,'Escribe el nombre de tu empresa.').max(150),
 service:z.string().min(1,'Selecciona una solución.'),
 message:z.string().trim().min(10,'Cuéntanos un poco más (mínimo 10 caracteres).').max(2000,'El mensaje puede tener hasta 2,000 caracteres.'),
 privacy:z.literal(true,{error:'Confirma que leíste el aviso de privacidad.'}),
});
export type ContactValues = z.infer<typeof contactSchema>;
export const newsletterSchema = z.object({email:z.email('Revisa el formato de tu correo.'),privacy:z.literal(true,{error:'Acepta el aviso para continuar.'})});
export const formCopy = { heading:'Empecemos por entender tu operación.', intro:'Comparte el contexto y definiremos el siguiente paso.', demo:'Formulario de demostración: no envía correos ni guarda tus datos.', submit:'Solicitar diagnóstico', sending:'Validando y enviando…', success:'Prueba completada.', successDetail:'La información pasó la validación. En esta demostración no se ha enviado ni guardado.', error:'No pudimos completar la prueba. Revisa tu conexión e inténtalo de nuevo.' };
