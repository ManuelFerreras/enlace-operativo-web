import sharp from 'sharp';
import fs from 'node:fs/promises';
const files=['equipo-comercio.jpg','equipo-tienda.jpg','personal-industrial.jpg','unidad-supervision.png','uniforme-elite-mujer.png','uniforme-elite-hombre.png','uniforme-pie-tierra.png'];
const media={};
for(const file of files){const input=`public/assets/${file}`;const name=file.replace(/\.(jpg|png)$/,'');const path=`public/assets/${name}.webp`;const original=sharp(input);const info=await original.metadata();await original.resize({width:1400,withoutEnlargement:true}).webp({quality:85}).toFile(path);const thumb=await sharp(input).resize(12).webp({quality:25}).toBuffer();media[name]={src:`/assets/${name}.webp`,width:info.width,height:info.height,blurDataURL:`data:image/webp;base64,${thumb.toString('base64')}`};}
await fs.writeFile('src/content/media.ts',`export const media = ${JSON.stringify(media,null,2)} as const;\n`);
console.log(`Prepared ${files.length} source images for web delivery.`);
