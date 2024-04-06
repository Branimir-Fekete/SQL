import { HttpService } from './HttpService';

const naziv = '/Sveucilista';

async function get() {
  return await HttpService.get(naziv)
    .then((odgovor) => {
      //console.table(odgovor.data);
      return odgovor.data;
    })
    .catch((e) => {
      //console.log(e);
      return e;
    });
}

async function post(sveuciliste) {
  return await HttpService.post(naziv, sveuciliste)
    .then((odgovor) => {
      //console.table(odgovor.data);
      return { greska: false, poruka: odgovor.data };
    })
    .catch((e) => {
      //console.log(e);
      return { greska: true, poruka: e };
    });
}

async function put(sifra, sveuciliste) {
  return await HttpService.put(naziv + '/' + sifra, sveuciliste)
    .then((odgovor) => {
      //console.table(odgovor.data);
      return { greska: false, poruka: odgovor.data };
    })
    .catch((e) => {
      //console.log(e);
      return { greska: true, poruka: e };
    });
}

async function _delete(sifraSveucilista) {
  return await HttpService.delete(naziv + '/' + sifraSveucilista)
    .then((odgovor) => {
      //console.table(odgovor.data);
      return { greska: false, poruka: odgovor.data.poruka };
    })
    .catch((e) => {
      //console.log(e);
      return { greska: true, poruka: e };
    });
}

async function getBySifra(sifra) {
  return await HttpService.get(naziv + '/' + sifra)
    .then((o) => {
      return { greska: false, poruka: o.data };
    })
    .catch((e) => {
      return { greska: true, poruka: e };
    });
}

export default {
  get,
  post,
  _delete,
  getBySifra,
  put,
};
