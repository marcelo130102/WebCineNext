import { At, User } from "tabler-icons-react";
import { Input, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { Indicator } from "@mantine/core";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function Form(props: any) {
  const [fecha, setFecha] = useState<Date | null | undefined>(new Date());
  const router = useRouter()
  const form = useForm({
    initialValues: {
      nombre: "",
      email: "",
      date: new Date(),
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

        {props.preCompra ? (
          <DatePicker
            {...form.getInputProps("date")}
            value={fecha}
            onChange={(e) => setFecha(e)}
            required
            minDate={dayjs(new Date()).startOf('date').toDate()}
            maxDate={dayjs(new Date()).startOf('date').add(2, 'days').toDate()}
            styles={{
              label: { color: "white", fontSize: "1rem" },
            }}
            label="Elige la fecha para ver la película"
          />
        ) : (
          <DatePicker
            {...form.getInputProps("date")}
            value={fecha}
            disabled
            styles={{
              label: { color: "white", fontSize: "1rem" },
            }}
            label="Elige la fecha para ver la película"
          />
        )}
        <Group position="center" mt="md" spacing="xl" grow>
          <Button type="submit" style={{ backgroundColor: "#bf00ff" }}>
            Comprar
          </Button>
          <Button type="button" style={{ backgroundColor: "#bf00ff" }} onClick={()=>router.back()}>
            Cancelar
          </Button>
        </Group>
      </form>
    </Box>
  );
}
