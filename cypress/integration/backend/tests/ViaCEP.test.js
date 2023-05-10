import * as viaCEPRequest  from '../requests/viaCEP.request';
import * as CEPInformationsMock from '../mocks/CEPInformationsJSON-valid.mock.json';

describe('Desafio: Testes da API pública de consulta de CEP ViaCEP', () => {
    it('Deve retornar um objeto sobre o CEP em Via CEP API - Status Code 200', () => {
        const cep = '20745-230';

        viaCEPRequest.findCep(cep).should((response) => {
            expect(response.status).to.eq(200);
            expect(true).to.be.true
            cy.log('CEP Válido')
        });
    });

    it('Não Deve retornar um objeto sobre o CEP em Via CEP API - Status Code 400', () => {
        const cep = '207';

        viaCEPRequest.findCep(cep).should((response) => {
            expect(response.status).to.eq(400).to.not.eq(200);
            expect(response.body).to.not.be.deep.eq(CEPInformationsMock);
            expect(true).to.be.true;
            cy.contains('CEP Inválido')
              .should('not.exist')
            cy.log('CEP Inválido')  
        });
    });    

    it('Não Deve retornar um objeto sobre o CEP em Via CEP API - Status Code 400', () => {
        const cep = '2074';

        viaCEPRequest.findCep(cep).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.not.be.deep.eq(CEPInformationsMock);
            cy.log('400 Bad Request Error')
        });
    });
  });
