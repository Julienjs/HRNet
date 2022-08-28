import React from 'react';
import { states } from '../../../data/states';
import { departments } from '../../../data/departments';
import SelectContent from "./SelectContent"
import "../CreateEmployee.css"
import Input from './Input';
import { dateRegex, zipCodesRegex, nameRegex, streetRegex, majority, dateHasPassed, cityRegex } from '../../../utils/regex';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { createEmployee } from '../../../feature/employeeSlice';
import { useState } from 'react';
import Close from '../../../assets/img/icon-close.png'
import { Modal } from 'modal-responsive'
import 'modal-responsive/dist/index.css'

import { Player } from '@lottiefiles/react-lottie-player';

const Form = () => {
    const dispatch = useDispatch()
    const { register, setError, control, handleSubmit, formState: { errors }, reset } = useForm()
    const [trigger, setTrigger] = useState(false)

    const validDateOfBirth = (birthDateValue) => {
        return !majority(birthDateValue) ? false : true
    }

    const validStartDate = (startDateValue) => {
        return !dateHasPassed(startDateValue) ? false : true
    }


    const handleCreate = value => {
        const employeeData = () => {
            const data = {
                firstName: value.firstName,
                lastName: value.lastName,
                dateOfBirth: value.dateOfBirth,
                startDate: value.startDate,
                street: value.street,
                city: value.city,
                zipCode: value.zipCode,
                state: value.state.label,
                department: value.department.label
            }
            if (!validDateOfBirth(value.dateOfBirth)) {
                setError('dateOfBirth', { type: "manual", message: "pas majeur" })
            }
            else if (!validStartDate(value.startDate)) {
                setError('startDate', { type: "manual", message: "pas valide" })
            }
            else {
                dispatch(createEmployee(data))
                setTrigger(true)
                // reset()
            }
        }
        employeeData()
    }

    return (
        <section id='form-section'>
            <h2>Create Employee</h2>
            <article>
                <form onSubmit={handleSubmit(handleCreate)}>
                    <div className='user-form'>
                        <legend>Employee</legend>
                        <label htmlFor='firstName'>Full Name<span className='span-label'>*</span></label>
                        <div className='fullName-input'>
                            <div>
                                <Input
                                    type={"text"}
                                    id={"firstName"}
                                    placeholder={"Homer"}
                                    register={register}
                                    regex={nameRegex}
                                    errors={errors.firstName}
                                    patternError="must not contain numbers"
                                    requiredError="required fields"
                                />
                                <label htmlFor='firstName'>First Name</label>
                            </div>
                            <div>
                                <Input
                                    type={"text"}
                                    id={"lastName"}
                                    placeholder={'Simpson'}
                                    register={register}
                                    regex={nameRegex}
                                    errors={errors.lastName}
                                    patternError="the last name should not contain any numbers or special characters"
                                    requiredError="required fields"
                                />
                                <label htmlFor='lastName'>Last Name</label>
                            </div>
                        </div>
                        <label htmlFor='dateOfBirth'>Date of Birth<span className='span-label'>*</span></label>
                        <Input
                            type={"date"}
                            id={"dateOfBirth"}
                            register={register}
                            regex={dateRegex}
                            errors={errors.dateOfBirth}
                            patternError="please enter a valid date"
                            requiredError="required fields"
                            error="the employee must be of age"
                        />
                        <label htmlFor='startDate'>Start Date<span className='span-label'>*</span></label>
                        <Input
                            type={"date"}
                            id={"startDate"}
                            register={register}
                            regex={dateRegex}
                            errors={errors.startDate}
                            patternError="please enter a valid date"
                            requiredError="required fields"
                            error="the date entered exceeds the current date"
                        />
                        <label htmlFor='department'>Department<span className='span-label'>*</span></label>
                        <SelectContent
                            id={"department"}
                            placeholder={"Sales"}
                            options={departments}
                            requiredError={"please select a department "}
                            control={control}
                            errors={errors.department}
                        />
                    </div>
                    <div className='address-form'>
                        <legend>Address</legend>
                        <label htmlFor='street'>Street<span className='span-label'>*</span></label>
                        <Input
                            type={"text"}
                            id={"street"}
                            placeholder={'1016 20th Street'}
                            register={register}
                            regex={streetRegex}
                            errors={errors.street}
                            patternError="please enter a valid street name"
                            requiredError="required fields"
                        />
                        <label htmlFor='city'>City<span className='span-label'>*</span></label>
                        <Input
                            type={"text"}
                            id={"city"}
                            placeholder={'Birmingham'}
                            register={register}
                            regex={cityRegex}
                            errors={errors.city}
                            patternError="the city should not contain any figures or special characters"
                            requiredError="required fields"
                        />
                        <label htmlFor='state'>State<span className='span-label'>*</span></label>
                        <SelectContent
                            id={"state"}
                            placeholder={'State'}
                            options={states}
                            control={control}
                            requiredError={"please select a state"}
                            errors={errors.state}
                        />
                        <label htmlFor='zipCode'>Zip Code<span className='span-label'>*</span></label>
                        <Input
                            type={"number"}
                            id={"zipCode"}
                            register={register}
                            placeholder={"35005"}
                            regex={zipCodesRegex}
                            errors={errors.zipCode}
                            patternError="this field must contain at least 5 digits"
                            requiredError="required fields"
                        />
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </article>
            <Modal trigger={trigger} setTrigger={setTrigger} close={Close}>
                <Player
                    autoplay
                    loop={false}
                    keepLastFrame={true}
                    src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
                    style={{ height: '300px', width: '500px' }}
                />
                <h3>Employee Created!</h3>
            </Modal>
        </section >
    );
};

export default Form;