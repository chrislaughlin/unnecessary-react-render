import assert from 'assert';
import React, {Component} from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('tests that react-transform-noop transformed the component', () => {
    class TestComponent extends Component {
        render() {
            console.log('In test ', this.props);
            console.log('render');
            return <div>Hello World</div>;
        }
    }

    const comp = shallow(
        <TestComponent
            foo={'bar'}
        />
    );

    comp.instance().componentDidUpdate({foo: 'test'});
    comp.instance().componentDidUpdate({foo: 'bar'});

    assert.equal(true, true);

});
