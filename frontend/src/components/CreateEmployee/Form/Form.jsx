import React from 'react';
import { states } from '../../../data/states';
import { departments } from '../../../data/departments';
import { Button } from "@material-tailwind/react";
import Inputs from './Input';
import { dateRegex, zipCodesRegex, nameRegex, streetRegex, majority, dateHasPassed, cityRegex } from '../../../utils/regex';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { createEmployee } from '../../../feature/employeeSlice';
import { useState } from 'react';
import { Modal } from 'react-modal-success';
import 'react-modal-success/dist/index.css';
import { Player } from '@lottiefiles/react-lottie-player';
import SelectContent from './SelectContent';

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
                reset()
            }
        }
        employeeData()
    }

    return (
        <section className='flex flex-col justify-center items-center my-4 rounded-md p-5 w-[98%] max-w-[700px] min-w-[310px] shadow-xl border md:max-w-[90%] lg:max-w-[70%] 2xl:w-[60%]'>
            <h2 className='text-center text-xl after:after-title'>Create Employee</h2>
            <article>
                <form
                    className='flex flex-col justify-center items-center my-6 w-[100%] min-w-[200px] md:flex-row md:justify-between md:flex-wrap'
                    onSubmit={handleSubmit(handleCreate)}>
                    <div className='flex w-[300px] flex-col mb-4 lg:mx-[5px] lg:w-[47%] '>
                        <legend className='border border-green-1 w-full text-center mx-auto mb-4 py-2'>Employee</legend>
                        <Inputs
                            type={"text"}
                            text={"First Name"}
                            id={"firstName"}
                            register={register}
                            regex={nameRegex}
                            errors={errors.firstName}
                            patternError="must not contain numbers"
                            requiredError="required fields"
                        />
                        <Inputs
                            type={"text"}
                            text={"Last Name"}
                            id={"lastName"}
                            register={register}
                            regex={nameRegex}
                            errors={errors.lastName}
                            patternError="the last name should not contain any numbers or special characters"
                            requiredError="required fields"
                        />
                        <Inputs
                            text={'Date of Birth'}
                            type={"date"}
                            id={"dateOfBirth"}
                            register={register}
                            regex={dateRegex}
                            errors={errors.dateOfBirth}
                            patternError="please enter a valid date"
                            requiredError="required fields"
                            error="the employee must be of age"
                        />
                        <Inputs
                            text={'Start Date'}
                            type={"date"}
                            id={"startDate"}
                            register={register}
                            regex={dateRegex}
                            errors={errors.startDate}
                            patternError="please enter a valid date"
                            requiredError="required fields"
                            error="the date entered exceeds the current date"
                        />
                        <SelectContent
                            name='Department'
                            id={"department"}
                            options={departments}
                            requiredError={"please select a department "}
                            control={control}
                            errors={errors.department}
                        />
                    </div>
                    <div className='flex w-[300px] flex-col mb-4 lg:mx-[5px] md:self-start lg:w-[48%]'>
                        <legend className='border border-green-1 text-center mx-auto mb-4 py-2 w-full' >Address</legend>
                        <Inputs
                            text={'Street'}
                            type={"text"}
                            id={"street"}
                            register={register}
                            regex={streetRegex}
                            errors={errors.street}
                            patternError="please enter a valid street name"
                            requiredError="required fields"
                        />
                        <Inputs
                            text={'City'}
                            type={"text"}
                            id={"city"}
                            register={register}
                            regex={cityRegex}
                            errors={errors.city}
                            patternError="the city should not contain any figures or special characters"
                            requiredError="required fields"
                        />
                        <Inputs
                            text={'Zip Code'}
                            type={"number"}
                            id={"zipCode"}
                            register={register}
                            regex={zipCodesRegex}
                            errors={errors.zipCode}
                            patternError="this field must contain at least 5 digits"
                            requiredError="required fields"
                        />
                        <SelectContent
                            name="State"
                            id={"state"}
                            options={states}
                            control={control}
                            requiredError={"please select a state"}
                            errors={errors.state}
                        />
                    </div>
                    <Button type='submit' color="green" className='mt-8 w-11/12 mx-auto'>Save</Button>
                </form>
            </article>
            <Modal showModal={trigger} setShowModal={setTrigger}>
                <Player
                    className='w-[500px] h-[80%] mx-auto my-0'
                    autoplay
                    loop={false}
                    keepLastFrame={true}
                    src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
                />
                <h3 className="modal-msg">Employee Created!</h3>
            </Modal>
        </section >
    );
};

export default Form;