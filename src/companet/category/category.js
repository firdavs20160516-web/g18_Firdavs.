import React from 'react';
import { Stack } from "@mui/material";
import { categories } from "../constants/constants";

const Category = ({ selectHandler, selectCategory }) => {
    return (
        <Stack direction={'row'} style={{ overflowX: 'scroll' }}>
            {categories.map((itm, idx) => (
                <button
                    key={idx}
                    type='button'
                    style={{
                        backgroundColor: selectCategory === itm.name ? '#80b918' : 'transparent',
                        color: selectCategory === itm.name ? 'white' : '#80b918'
                    }}
                    className='category-btn'
                    onClick={() => selectHandler(itm.name)}
                >
                    <span>{itm.icon}</span>
                    <span>{itm.name}</span>
                </button>
            ))}
        </Stack>
    );
};

export default Category;

