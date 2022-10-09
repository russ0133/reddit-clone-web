import { Button, Input } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IconAt, IconLogin, IconAsterisk } from "@tabler/icons";
import { gql, useMutation, useQuery } from "urql";
import { MUTATION_REGISTER } from "./graphql/mutations/register";

interface registerProps {}

function Register({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [inputData, setInputData] = useState({ username: "null", password: "null" });

  const [, executeMutation] = useMutation(MUTATION_REGISTER);
  const setRequestValues = (data: any) => {
    setInputData(data);
  };

  useEffect(() => {
    executeMutation({ username: inputData.username, password: inputData.password });
  }, [inputData]);

  return (
    <form
      className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200"
      onSubmit={handleSubmit(setRequestValues)}
    >
      <div className="flex flex-col justify-center items-center gap-2 backdrop-blur-sm bg-white/70 py-8 px-12 rounded-lg shadow-md ">
        <Input
          className="smallIcon"
          icon={<IconLogin />}
          placeholder="username"
          radius="xl"
          size="xs"
          {...register("username", { required: true })}
        />
        <Input
          className="smallIcon"
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
