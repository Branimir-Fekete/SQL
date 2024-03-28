import { HttpService } from './HttpService';

const naziv = '/Sveucilista';

async function get() {
  return await HttpService.get(naziv)
    .then((odgovor) => {
      return odgovor.data;
    })
    .catch((e) => {
      return e;
    });
}

async function post(sveuciliste) {
  return await HttpService.post(naziv, sveuciliste)
    .then((odgovor) => {
      return { greska: false, poruka: odgovor.data };
    })
    .catch((e) => {
      return { greska: true, poruka: e };
    });
}

async function _delete(sifraSvucilista) {
  return await HttpService.delete(naziv + '/' + sifraSvucilista)
    .then((odgovor) => {
      return { greska: false, poruka: odgovor.data.poruka };
    })
    .catch((e) => {
      return { greska: true, poruka: e };
    });
}

export default {
  get,
  post,
  _delete,
};
