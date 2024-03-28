import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Table } from 'react-bootstrap';
import SveucilisteService from '../services/SveucilisteService';
import styled from 'styled-components';
import HeroText from '../components/navigation/HeroText';

const StyledTable = styled(Table)`
  margin-top: 20px;
  th {
    background-color: #f2f2f2;
  }
  td,
  th {
    padding: 10px;
    text-align: center;
    border: 1px solid black;
  }
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Prilagodite visinu prema potrebi */
`;

export default function SveucilistaScreen() {
  const [sveucilista, setSveucilista] = useState([]);

  async function dohvatiSveucilista() {
    try {
      const response = await SveucilisteService.get();
      setSveucilista(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dohvatiSveucilista();
  }, []);

  return (
    <>
      <HeroText
        beforeText='Svučilišta'
        text='Svučilišta'
      />
      <CenteredContainer>
        <StyledTable
          striped
          bordered
          hover
          responsive
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
                    <Button
                      onClick={() => console.log('Obriši')}
                      variant='danger'
                    >
                      Obriši
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </StyledTable>
      </CenteredContainer>
    </>
  );
}
