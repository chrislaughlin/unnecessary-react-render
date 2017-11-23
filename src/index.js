module.exports = () => ReactClass => {
    const ModifiedReactClass = ReactClass;
    const oringalComponentDidUpdate = ModifiedReactClass.prototype.componentDidUpdate;
    //Update render function
    ModifiedReactClass.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        console.log('It rendered');
        console.log({prevProps, currentProps: this.props});
        if (oringalComponentDidUpdate) {
            return oringalComponentDidUpdate.apply(this, arguments);
        }
    };
    return ModifiedReactClass;
};
