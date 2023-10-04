import { createSlice } from '@reduxjs/toolkit';
import hotelData from "../hotelData.json"

const initialState = {
    filteredHetels: hotelData.filter((items) => {
        return items.city === "New York"
    }),
};

const showMoreSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setFilteredHotels: (state, action) => {
            state.filteredHetels = hotelData.filter((items) => {
                if (!action.payload && items.city === "New York") {
                    return items
                }
                else if (action.payload && typeof action.payload === "string" && items.city === action.payload) {
                    return items;
                }
                else if (action.payload && typeof action.payload === "number" && items.id === action.payload)
                    return items;
            })
        },
    },
});

export const { setFilteredHotels } = showMoreSlice.actions;

export default showMoreSlice.reducer;