import { Button, Input } from "@mantine/core";
import React from "react";
import { useForm } from "react-hook-form";
import { IconAt, IconLogin, IconAsterisk } from "@tabler/icons";

interface registerProps {}

function Register({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="flex flex-col justify-center items-center gap-2 backdrop-blur-sm bg-white/70 py-8 px-12 rounded-lg shadow-md ">
        <Input
          icon={<IconLogin />}
          placeholder="username"
          radius="xl"
          size="xs"
          {...register("username", { required: true })}
        />
        <Input
          icon={<IconAsterisk />}
          placeholder="password"
          radius="xl"
          size="xs"
          {...register("password", { required: true })}
        />
        {errors.lastName && <p>Last name is required.</p>}
        <Button
          className="self-end mt-2 -mb-4"
          type="submit"
          radius="md"
          size="xs"
          compact
          uppercase
        >
          register
        </Button>
      </div>
    </form>
  );
}

export default Register;
