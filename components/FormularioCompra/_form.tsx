import { At, User } from "tabler-icons-react";
import { Input, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { Calendar } from "@mantine/dates";
import { Indicator } from "@mantine/core";

import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import Calendario from "./_calendar";

export default function Form() {
  const [fecha, setValue] = useState<Date | null | undefined>(null);
  const form = useForm({
    initialValues: {
      nombre: "",
      email: "",
      date: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title>Completa tus datos</Title>
        <TextInput
          style={{ marginTop: "10px", marginBottom: "20px" }}
          styles={{
            label: { color: "white", fontSize: "1rem" },
          }}
          required
          label="Nombre"
          placeholder="Usuario"
          {...form.getInputProps("nombre")}
        />
        <TextInput
          style={{ marginTop: "10px", marginBottom: "20px" }}
          styles={{
            label: { color: "white", fontSize: "1rem" },
          }}
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <Calendario>
          <Group position="center">
            <Calendar
              {...form.getInputProps("date")}
              value={fecha}
              onChange={(e)=>{setValue(e)}}
              renderDay={(date) => {
                const day = date.getDate();
                
                return (
                  <Indicator
                    size={6}
                    color="red"
                    offset={8}
                    disabled={day !== 16}
                  >
                    <div>{day}</div>
                  </Indicator>
                );
              }}
            />
          </Group>
        </Calendario>
        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
