import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe ('App', ()=>{
    it('se renderiza correctamente', () => {
        expect(app).toMatchSnapshot();
    })
    
    it('initializes the `state` with an empty list of gifts',()=>{
        expect(app.state().gifts).toEqual([]);
    });
    
})

describe ('when clicking the `add-gift` button', () =>{
    const id = 1;
    // ejecuta un click antes de cada test
    beforeEach(()=>{
        // encuentra el boton en el DOM y hazle click
        app.find('.btn-add').simulate('click');
    })

    // limpia el estado despues de ejecutar cada test
    afterEach(()=>{
        app.setState({gifts: [] })
    })
    
    it('adds a new gift to `state`', () => {
        // espera que el state tenga un elemento nuevo en el array
        expect(app.state().gifts).toEqual([{id: id}])
    });
    
    it('adds a new gift to the rendered list', () =>{
        expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a Gift component', () =>{
        expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () =>{
        beforeEach(()=>{
            app.instance().removeGift(id);
        });

        it('removes the gift from `state`', ()=> {
            expect(app.state().gifts).toEqual([]);
        })
    });
})

