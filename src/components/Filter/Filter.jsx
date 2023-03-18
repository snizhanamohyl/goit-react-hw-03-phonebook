import { Component } from 'react';
import PropTypes from 'prop-types'; 
import css from './Filter.module.css';

export default class Filter extends Component {
    onChange = (e) => {
        const { updateFilter } = this.props;
        
        updateFilter(e.target.value);
    }

    render() {
        const { getFilterValue } = this.props;
        return <label className={css.label}>Find contacts by name<input className={css.input} type="text" onChange={this.onChange} value={getFilterValue() } /></label>
    }
}

Filter.propTypes = {
    getFilterValue: PropTypes.func.isRequired,
    updateFilter: PropTypes.func.isRequired,
};