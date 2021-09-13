import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { MyComponent } from './MyComponent';

Enzyme.configure({
    adapter: new Adapter()
})

describe('Testing MyComponent', () => {

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<MyComponent />);
    })

    it('procurar por Alô, Mundo!', () => {
        const elementToBeTested = wrapper.find('h1').text();
        expect(elementToBeTested).toBe('Alô, Mundo!')
    });

    it('verifica classe main-title-wrapper na div', () => {
        const wrapper = shallow(<MyComponent/>);
        const nomeDiv = <div className="main-title-wrapper"></div>
        const elementToBeTested = wrapper.contains(nomeDiv);
        expect(elementToBeTested).toBe(true);
    })
})