import React from "react";
import Label from "./Label";
import { Input } from "@material-tailwind/react";

const Inputs = ({
  type,
  id,
  register,
  regex,
  errors,
  patternError,
  requiredError,
  error,
  text,
}) => {
  console.log(errors);
  return (
    <div className="w-[90%] mx-auto">
      <Label id={id} text={text} />
      <div className="mt-1">
        {!errors ? (
          <Input
            type={type}
            label={text}
            name={id}
            id={id}
            {...register(`${id}`, {
              pattern: regex,
              required: true,
            })}
          />
        ) : (
          <Input
            type={type}
            label={`${text}*`}
            name={id}
            id={id}
            {...register(`${id}`, {
              pattern: regex,
              required: true,
            })}
            error
          />
        )}
        {errors && (
          <p className="text-red-500 text-xs italic">
            {errors.type === "pattern"
              ? patternError
              : errors.type === "required"
              ? requiredError
              : error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Inputs;
