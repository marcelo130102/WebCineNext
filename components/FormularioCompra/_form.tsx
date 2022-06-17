import { At } from "tabler-icons-react";
import { Input, Title } from "@mantine/core";

export default function Form() {
  return (
    <>
      <Title order={1} style={{marginBottom:"20px"}}>Formulario</Title>
      <Input icon={<At />} placeholder="Your email" />
    </>
  );
}
