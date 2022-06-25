import { At, CircleMinus, CirclePlus, ShoppingCart, User } from "tabler-icons-react";
import {
  ActionIcon,
  Badge,
  Card,
  Divider,
  Drawer,
  Grid,
  Image,
  Input,
  NumberInput,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { Indicator } from "@mantine/core";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form(props: any) {
  const [fecha, setFecha] = useState<Date | null | undefined>(new Date());
  const [entradas, setEntradas] = useState(0);
  const [opened, setOpened] = useState(false);
  const [comida1, setComida1] = useState(0);
  const [comida2, setComida2] = useState(0);
  const [comida3, setComida3] = useState(0);
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const form = useForm({
    initialValues: {
      nombre: "",
      email: "",
      date: new Date(),
      termsOfService: false,
      entradas: 0,
      combo1: 0,
      combo2: 0,
      combo3: 0,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Elige tu comida"
            padding="xl"
            position="right"
            size="lg"
            styles={{
              drawer: { backgroundColor: "#2A0B45", color: "white" },
              closeButton: { color: "white" },
            }}
          >
            <ScrollArea style={{ height: 650 }}>
              <Stack>
                <Card
                  shadow="sm"
                  p="lg"
                  style={{ backgroundColor: "#8D6BDB", color: "white" }}
                >
                  <Card.Section>
                    <Image src="https://media.istockphoto.com/vectors/super-combo-pop-corn-and-sweet-soda-drink-cinema-icons-vector-id1274748611?s=2048x2048" height={160} alt="Norway" />
                  </Card.Section>

                  <Group
                    position="apart"
                    style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                  >
                    <Text weight={500}>Combo 1</Text>
                    <Badge color="pink" variant="light">
                      Oferta
                    </Badge>
                  </Group>

                  <Text
                    size="sm"
                    style={{ color: "whitesmoke", lineHeight: 1.5 }}
                  >
                    With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the
                    fjords of Norway
                  </Text>

                  <NumberInput
                    {...form.getInputProps("combo3")}
                    defaultValue={0}
                    placeholder="0"
                    value={comida1}
                    onChange={(e) =>{e!==undefined?setComida1(e):null}}
                    size="md"
                    min={0}
                    style={{ marginTop: "10px" }}
                  />
                </Card>
                <Card
                  shadow="sm"
                  p="lg"
                  style={{ backgroundColor: "#8D6BDB", color: "white" }}
                >
                  <Card.Section>
                    <Image src="https://media.istockphoto.com/vectors/super-combo-pop-corn-and-sweet-soda-drink-cinema-icons-vector-id1274748611?s=2048x2048" height={160} alt="Norway" />
                  </Card.Section>

                  <Group
                    position="apart"
                    style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                  >
                    <Text weight={500}>Combo 2</Text>
                  </Group>

                  <Text
                    size="sm"
                    style={{  color: "whitesmoke", lineHeight: 1.5 }}
                  >
                    With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the
                    fjords of Norway
                  </Text>

                  <NumberInput
                    {...form.getInputProps("combo3")}
                    defaultValue={0}
                    placeholder="0"
                    value={comida2}
                    onChange={(e) =>{e!==undefined?setComida2(e):null}}
                    size="md"
                    min={0}
                    style={{ marginTop: "10px" }}
                  />
                </Card>
                <Card
                  shadow="sm"
                  p="lg"
                  style={{ backgroundColor: "#8D6BDB", color: "white" }}
                >
                  <Card.Section>
                    <Image src="https://media.istockphoto.com/vectors/super-combo-pop-corn-and-sweet-soda-drink-cinema-icons-vector-id1274748611?s=2048x2048" height={160} alt="Norway" />
                  </Card.Section>

                  <Group
                    position="apart"
                    style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                  >
                    <Text weight={500}>Combo 3</Text>
                    <Badge color="pink" variant="light">
                      Oferta
                    </Badge>
                  </Group>

                  <Text
                    size="sm"
                    style={{  color: "whitesmoke", lineHeight: 1.5 }}
                  >
                    With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the
                    fjords of Norway
                  </Text>

                  <NumberInput
                    {...form.getInputProps("combo3")}
                    defaultValue={0}
                    placeholder="0"
                    value={comida3}
                    onChange={(e) =>{e!==undefined?setComida3(e):null}}
                    size="md"
                    min={0}
                    style={{ marginTop: "10px" }}
                  />
                </Card>
              </Stack>
            </ScrollArea>
          </Drawer>
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
              minDate={dayjs(new Date()).startOf("date").toDate()}
              maxDate={dayjs(new Date())
                .startOf("date")
                .add(2, "days")
                .toDate()}
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

          <Grid
            justify="center"
            align="center"
            grow
            style={{ paddingTop: "20px" }}
          >
            <Grid.Col span={6}>
              <div>
                <NumberInput
                  {...form.getInputProps("entradas")}
                  defaultValue={0}
                  placeholder="0"
                  value={entradas}
                  label="Cantidad de entradas"
                  onChange={(e) =>{e!==undefined?setEntradas(e):null}}
                  size="md"
                  min={0}
                  required
                  styles={{
                    label: { color: "white", fontSize: "1rem" },
                  }}
                />
                <Button
                  color="grape"
                  size="lg"
                  leftIcon={<FontAwesomeIcon icon={faUtensils} />}
                  style={{ backgroundColor: "#bf00ff", marginTop: "20px" }}
                  onClick={() => setOpened(true)}
                  fullWidth
                >
                  Comprar comida
                </Button>
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <Paper
                p="md"
                style={{ backgroundColor: "#bf00ff", color: "white", maxHeight:"300PX" }}
              >
                <Title order={3} align="center">
                  <ShoppingCart size={30} style={{marginBottom:"3px"}}/> Subtotal: S/. {entradas * 14 + (comida1*19+ comida2*29 + comida3*39)}
                </Title>
              </Paper>
            </Grid.Col>
          </Grid>
          <Divider size={10} style={{ marginTop: "20px" }} color="white" />
          <Group position="center" mt="md" spacing="xl" grow>
            <Button type="submit" style={{ backgroundColor: "#bf00ff" }}>
              Comprar
            </Button>
            <Button
              type="button"
              style={{ backgroundColor: "#bf00ff" }}
              onClick={() => router.back()}
            >
              Cancelar
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
}
