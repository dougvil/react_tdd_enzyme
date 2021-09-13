import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {Counter} from './Counter';

Enzyme.configure({
    adapter: new Adapter()
})

describe('Testando Contador', () => {

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Counter />)
    })

    it('Verifica se existe botao ADD', ()=>{
        const addButton = wrapper.find('#counter-add').text();
        expect(addButton).toBe('Adicionar');
    })

    it('Verifica se existe botao SUB', ()=>{
        const addButton = wrapper.find('#counter-sub').text();
        expect(addButton).toBe('Remover');
    })

    it('Verifica se exibe o contador', () => {
        const counter = wrapper.find('.counter').text();
        expect(counter).toBe('0');
    })

    it('Verifica clique botao add', ()=>{
        wrapper.find('#counter-add').simulate('click');
        wrapper.find('#counter-add').simulate('click');

        const counter = wrapper.find('.counter').text();
        expect(counter).toBe('2');
    })

    it('Verifica clique botao sub', ()=>{
        wrapper.find('#counter-add').simulate('click');
        wrapper.find('#counter-add').simulate('click');
        wrapper.find('#counter-add').simulate('click');
        wrapper.find('#counter-add').simulate('click');

        wrapper.find('#counter-sub').simulate('click');
        wrapper.find('#counter-sub').simulate('click');

        const counter = wrapper.find('.counter').text();
        expect(counter).toBe('2');
    })

    it('Verifica se existe botao resetar', () => {
        const resetButton = wrapper.find('#counter-reset').text();
        expect(resetButton).toBe('Reiniciar');
    })

    it('Verifica funcionamento botao resetar', ()=>{
        wrapper.find('#counter-add').simulate('click');
        wrapper.find('#counter-add').simulate('click');

        wrapper.find('#counter-reset').simulate('click');

        const counter = wrapper.find('.counter').text();
        expect(counter).toBe('0');
    })

})