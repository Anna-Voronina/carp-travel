"use client";

import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import FormError from "./FormError";
import { EMAIL_REGEXP, NAME_REGEXP } from "@utils/constants/regexp";
import { contactFormInitialValues } from "@utils/constants/formInitialValues";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: contactFormInitialValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 desktop:gap-y-6"
    >
      <div className="flex flex-col tablet:flex-row mobile:gap-y-6 tablet:gap-x-5 desktop:gap-y-10">
        <div className="flex flex-col desktop:flex-row mobile:gap-y-6 tablet:gap-y-7 desktop:gap-x-5">
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
        </div>
        <Textarea register={register} label="message" />
      </div>
      <Button type="submit" text="SEND" />
    </form>
  );
};

export default ContactForm;
