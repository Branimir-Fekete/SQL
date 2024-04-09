import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesNames } from '../../constants';
import SveucilisteService from '../../services/SveucilisteService';
import HeroText from '../../components/navigation/HeroText';
import '../../components/buttons/DeleteButton.css';
import '../../components/buttons/AddButton.css';
import '../../components/buttons/UpdateButton.css';

export default function Sveucilista() {
  const [sveucilista, setSveucilista] = useState();
  const navigate = useNavigate();

  async function dohvatiSveucilista() {
    await SveucilisteService.get()
      .then((odg) => {
        setSveucilista(odg);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    dohvatiSveucilista();
  }, []);

  async function obrisiAsync(sifra) {
    const odgovor = await SveucilisteService._delete(sifra);
    if (odgovor.greska) {
      console.log(odgovor.poruka);
      alert('Pogledaj konzolu');
      return;
    }
    dohvatiSveucilista();
  }

  function obrisi(sifra) {
    obrisiAsync(sifra);
  }

  return (
    <>
      <HeroText
        beforeText='Sveučilišta'
        text='Sveučilišta'
      />
      <Container>
        <Link
          to={RoutesNames.SVEUCILISTE_NOVI}
          className='addBtn'
        >
          Dodaj
        </Link>

        <Table
          striped
          bordered
          hover
          responsive
          className='mt-5'
        >
          <thead>
            <tr>
              <th>Naziv</th>
              <th>Adresa</th>
              <th>Akcija</th>
            </tr>
          </thead>
          <tbody>
            {sveucilista &&
              sveucilista.map((sveuciliste, index) => (
                <tr key={index}>
                  <td>{sveuciliste.naziv}</td>
                  <td>{sveuciliste.adresa}</td>

                  <td>
                    <button
                      className='deleteBtn'
                      onClick={() => obrisi(sveuciliste.sifra)}
                    >
                      Obriši
                    </button>
                    <button
                      className='updateBtn'
                      onClick={() => {
                        navigate(`/sveucilista/${sveuciliste.sifra}`);
                      }}
                    >
                      Promijeni
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
