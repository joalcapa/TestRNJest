import React from 'react';

import Contacts from '../src/Contacts';

const expect = global.expect;

describe('contacts', () => {
    const variousContacts = [
        {
            nombre: 'Jhon',
            email: 'Jhon@gmail.com',
            id: 1
        },
        {
            nombre: 'JhonTorres',
            email: 'JhonTorres@gmail.com',
            id: 2
        },
        {
            nombre: 'JhonGames',
            email: 'JhonGames@gmail.com',
            id: 3
        },
    ];
    const urlStarWars = 'http://swapi.co/api/people';

    describe('incluir', () => {
       beforeEach(() => {
           Contacts.reset();
       });

       test('Debe agregar un contacto con props {name, email, id}', () => {
          const contacto = variousContacts[0];
          Contacts.add(contacto);

          const currentContact = Contacts.db();
          const validContact = [contacto];

          expect(currentContact).toEqual(validContact);
       });

       test('Debe mostrar un error si no contiene los props {name, email, id}', () => {
          const contact = {
              nombre: 'Steven',
              email: 'st@gmail.com'
          };

          expect(() => Contacts.add(contact)).toThrow('invalid format');
       });


    });

    describe('delete', () => {
        beforeEach(() => {
            Contacts.reset();
            variousContacts.forEach( contacto => Contacts.add(contacto));
        });

        test('Debe borrar solo el primer contacto', () => {
            Contacts.delete(1);

            const currentContact = Contacts.db();
            const validateContact = [
                variousContacts[1],
                variousContacts[2]
            ];

            expect(currentContact).toEqual(validateContact);
        });

        test('No debe borrar ningun contacto si el id no se encontro', () => {
            Contacts.delete(100);
            const currentContact = Contacts.db();
            const validateContact = variousContacts;

            expect(currentContact).toEqual(validateContact);
        });
    });

    describe('starwars', () => {

        test('Debe contener personajes de Star Wars', (done) => {
           Contacts.fetchStarWars(urlStarWars)
               .then( count => {
                   expect(count).toBeGreaterThan(0); // contador mayor que cero
                   done(); // de esta manera se le dice a jest que se termino de realizar el test, entonces jest verifica si el test es correcto o no
               });
        });

        test('Debe fallar si la url es incorrecta', async () => {
            const url = 'http://swapi.co/api/yolo';

            const currentContact = Contacts.fetchStarWars(url);
            await expect(currentContact).rejects.toEqual(Error('Request failed with status code 404'));
        });
    });
});