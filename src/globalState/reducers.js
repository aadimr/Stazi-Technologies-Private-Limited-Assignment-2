import { createSlice } from '@reduxjs/toolkit';
import hotelData from "../hotelData.json"

const initialState = {
    filteredHetels: hotelData.filter((items) => {
        return items.city === "New York"
    }),
    clickedCardId: ""
};

const showMoreSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setFilteredHotels: (state, action) => {

            state.filteredHetels = hotelData.filter((items) => {
                console.log(typeof action.payload === "string")
                if (!action.payload && items.city === "New York") {
                    return items
                }
                else if (action.payload && typeof action.payload === "string" && items.city === action.payload) {
                    return items;
                }
                else if (action.payload && typeof action.payload === "number" && items.id === action.payload)
                return items;
                    console.log(action.payload)
            })
        },
        setClickedCardId: (state, actions) => {
            state.clickedCardId = actions.payload
        }
    },
});

export const { setFilteredHotels, setClickedCardId } = showMoreSlice.actions;

export default showMoreSlice.reducer;