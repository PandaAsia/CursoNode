import { get } from "https";

const urlSite = {
  hostname: "jonmircha.com",
  port: 443,
  path: "/cursos",
};
get(urlSite, (res) => {
  console.log(
    `el sitio ${urlSite.hostname} ha respondido. Codigo: ${res.statusCode}. mensaje ${res.statusMessage}`
  );
}).on("error", (err) => {
  console.error(
    `El sitio ${urlSite.hostname} no ha respondido. Código: ${err.code}. Messaje: ${err.message}`
  );
});
