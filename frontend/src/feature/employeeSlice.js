import { createSlice } from "@reduxjs/toolkit"

const addItem = (state, action) => {
    state.push(action.payload)
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState: [],

    reducers: {
        createEmployee: addItem
    }
})

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;