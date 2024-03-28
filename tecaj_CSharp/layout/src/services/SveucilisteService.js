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
    .then((response) => {
      return { error: false, message: response.data };
    })
    .catch((error) => {
      return { error: true, message: error };
    });
}

async function _delete(sveucilisteId) {
  return await HttpService.delete(naziv + '/' + sveucilisteId)
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error };
    });
}

export default {
  get,
  post,
  _delete,
};
