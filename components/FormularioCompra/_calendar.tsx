import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

export default function Calendario(props:any) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Elige una fecha"
      >
        {props.children}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Elige una fecha</Button>
      </Group>
    </>
  );
}