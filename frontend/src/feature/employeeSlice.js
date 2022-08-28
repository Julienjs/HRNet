import { createSlice } from "@reduxjs/toolkit"

const addItem = (state, action) => {
    state.push(action.payload)
}


const employeeSlice = createSlice({
    name: 'employee',
    initialState: [],


    reducers: {
        createEmployee: addItem
        // (state, { payload }) => {
        // return
        // const newEmployee = {
        //     firstName: payload.firstName,
        //     lastName: payload.lastName,
        //     dateOfBirth: payload.dateOfBirth,
        //     startDate: payload.startDate,
        //     street: payload.street,
        //     city: payload.city,
        //     zipCode: payload.zipCode,
        //     state: payload.state,
        //     department: payload.department,
        // }
        // state.push(newEmployee)
        // state.firstName = payload.firstName
        // state.lastName = payload.lastName
        // state.dateOfBirth = payload.dateOfBirth
        // state.startDate = payload.startDate
        // state.street = payload.street
        // state.city = payload.city
        // state.zipCode = payload.zipCode
        // state.state = payload.state
        // state.department = payload.department
        // }
    }
})

export const { createEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;