"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import FormError from "./FormError";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Button from "./Button";
import {
  EMAIL_REGEXP,
  NAME_REGEXP,
  PHONE_REGEXP,
} from "@utils/constants/regexp";
import { careerFormInitialValues } from "@utils/constants/formInitialValues";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: careerFormInitialValues,
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsCheckboxChecked(false);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 desktop:gap-y-[38px] text-white"
    >
      <div className="flex mobile:flex-col mobile:gap-y-4 tablet:gap-x-5 desktop:gap-x-6">
        <div className="flex flex-col gap-y-4 desktop:gap-y-6">
          <Input
            type="text"
            label="fullName"
            text="Full name"
            placeholder="John Smith"
            required
            register={register}
            error={errors.fullName}
            pattern={NAME_REGEXP}
          >
            {errors.fullName?.type === "required" && (
              <FormError text="Name field is required" />
            )}
            {errors.fullName?.type === "pattern" && (
              <FormError text="Incorrect name" />
            )}
          </Input>
          <Input
            type="email"
            label="email"
            text="E-mail"
            placeholder="johnsmith@email.com"
            required
            register={register}
            error={errors.email}
            pattern={EMAIL_REGEXP}
          >
            {errors.email?.type === "required" && (
              <FormError text="E-mail field is required" />
            )}
            {errors.email?.type === "pattern" && (
              <FormError text="Invalid email" />
            )}
          </Input>
          <Input
            type="text"
            label="position"
            text="Position"
            placeholder="Movie maker"
            required
            register={register}
            error={errors.position}
          >
            {errors.position?.type === "required" && (
              <FormError text="Position field is required" />
            )}
          </Input>
          <Input
            type="tel"
            label="phone"
            text="Phone"
            placeholder="+ 38 (097) 12 34 567"
            required
            register={register}
            error={errors.phone}
            pattern={PHONE_REGEXP}
          >
            {errors.phone?.type === "required" && (
              <FormError text="Phone field is required" />
            )}
            {errors.phone?.type === "pattern" && (
              <FormError text="Incorrect phone" />
            )}
          </Input>
        </div>
        <Textarea register={register} label="message" variant="career" />
      </div>

      <div className="flex mobile:flex-col mobile:gap-y-4 md:justify-between">
        <Checkbox
          register={register}
          label="confirmation"
          required
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
        >
          {errors.confirmation?.type === "required" && (
            <FormError text="Please confirm your consent" />
          )}
        </Checkbox>
        <Button type="submit" text="SEND" />
      </div>
    </form>
  );
};

export default CareerForm;
