import { contactSchema } from '@/content/forms';
export async function POST(request:Request) {
 try { if(Number(request.headers.get('content-length')??0)>12000)return Response.json({ok:false,error:'Solicitud demasiado grande.'},{status:413});
 const raw=await request.text(); if(raw.length>12000)return Response.json({ok:false,error:'Solicitud demasiado grande.'},{status:413});
 const parsed=contactSchema.safeParse(JSON.parse(raw)); if(!parsed.success)return Response.json({ok:false,error:'Revisa los campos del formulario.'},{status:400});
 console.info('[contact:demo]',{validated:true,delivery:'disabled'});
 return Response.json({ok:true,mode:'demo',message:'Validación completada; no se enviaron ni guardaron datos.'});
 }catch{return Response.json({ok:false,error:'Solicitud no válida.'},{status:400});}
}
