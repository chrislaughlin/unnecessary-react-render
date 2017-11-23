import deepDiff from 'deep-diff';

module.exports = () => ReactClass => {
    const ModifiedReactClass = ReactClass;
    const oringalComponentDidUpdate = ModifiedReactClass.prototype.componentDidUpdate;
    //Update componentDidUpdate function
    ModifiedReactClass.prototype.componentDidUpdate = function componentDidUpdate(nextProps = {}) {
        if (!deepDiff(this.props, nextProps)) {
            console.log('|----------------------------------------------------------|');
            console.log(`      Unnecessary render in ${this.constructor.name} `);
            console.log('|----------------------------------------------------------|');
        }
        if (oringalComponentDidUpdate) {
            return oringalComponentDidUpdate.apply(this, arguments);
        }
    };
    return ModifiedReactClass;
};
