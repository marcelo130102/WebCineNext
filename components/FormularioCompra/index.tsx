import { Grid, Group, Image, Text, Title } from "@mantine/core";
import Form from "./_form";

export default function Formulario(props:any) {
  const imgURL = props.img;
  const idPelicula = props.idPelicula;
  
  return (
    <div style={{ background: "#2A0B45", padding:"50px", color:"white" }}>
      <Grid align="center" grow>
        <Grid.Col md={6} lg={4} style={{justifyContent:"center", alignItems:"center"}}>
          <Group position="center">
          <Title style={{textAlign:"center"}} order={1}>Ver: {props.title}</Title>
          <Image width={400} src={imgURL} alt={props.title} />
          </Group>
        </Grid.Col>
        <Grid.Col md={8} lg={7}>
          <Form preCompra={props.preCompra}/>
        </Grid.Col>
      </Grid>
    </div>
  );
}
