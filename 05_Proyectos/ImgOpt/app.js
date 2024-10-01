//fs-extra,imagemin
//npm i -D imagemin imagemin-jpegtran imagemin-pngquant imagemin-svgo imagemin-webp imagemin-gifsicle sharp
//npm i -g imagemin imagemin-jpegtran imagemin-pngquant imagemin-svgo imagemin-webp imagemin-gifsicle
import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminGifsicle from "imagemin-gifsicle";
import sharp from "sharp";

let inputFolder = "src";
let ouputFolder = "opt";
let targetWidth = 1920;

const processImg = async () => {
  try {
    const files = await fse.readdir(inputFolder);
    for (const file of files) {
      let inputPath = `${inputFolder}/${file}`;
      let outputPath = `${ouputFolder}/${file}`;

      await sharp(inputPath).resize(targetWidth).toFile(outputPath);

      await imagemin([outputPath], {
        destination: ouputFolder,
        plugins: [
          imageminJpegtran({ quality: 80 }), //comprimir imagen JPG con calidad del 80%;
          imageminPngquant({ quality: [0.8, 0.8] }), //comprimir imagen PNG
          imageminSvgo(), //comprimir imgane svg
          imageminWebp(), //comprimir imagen webp con calida del 80%
          imageminGifsicle(), //comprimir imagen gif
        ],
      });
      console.log(`Se han Optimizado la imagen: ${file}`);
    }
    console.log(`se ha termiando la optimizacion de todas tus imagenes`);
  } catch (error) {
    console.error(error);
  }
};
processImg();
