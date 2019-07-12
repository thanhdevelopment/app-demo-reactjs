import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const ListStatus = (props) => {

    return (
        !props.status ? null : props.status.map(option => {
            return (
                <div className="app-checkbox--group" key={option.Id} onClick={() => props.selectItemById(option.Id)} >
                    <Checkbox checked={option.Checked} value={option.Id} inputProps={{ 'aria-label': 'primary checkbox' }} />
                    <label>{option.Name}</label>
                </div >
            )
        })
    )
}