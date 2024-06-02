import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalOptions,
  ModalTitle,
  ModalTop,
  UIWraper,
  Navbar,
  NavbarHeader,
  NavbarItem,
  NavbarOptions,
  NavbarMenuToggle,
  NavbarSideBar,
} from "../components";

function App() {
  return (
    <UIWraper>
      <Navbar justify="between" bordered>
        <NavbarHeader>Spectra UI</NavbarHeader>
        <NavbarOptions className="hidden sm:flex">
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
        </NavbarOptions>
        <NavbarMenuToggle />
      </Navbar>
      <NavbarSideBar>ok</NavbarSideBar>
      <Button>Click</Button>
      <Button color="cyan">Cyan</Button>
      <Button color="yellow" className="h-[100vh]">
        Yellow
      </Button>
      <Button color="secondary">Purple</Button>
      <Button color="green">Green</Button>
      <Button color="zinc">Gray</Button>
      <Button color="red">Red</Button>
      <br />
      <Button variant="outline">Click</Button>
      <Button color="cyan" variant="outline">
        Cyan
      </Button>
      <Button color="yellow" variant="outline">
        Yellow
      </Button>
      <Button color="secondary" variant="outline">
        Purple
      </Button>
      <Button color="green" variant="outline">
        Green
      </Button>
      <Button color="zinc" variant="outline">
        Gray
      </Button>
      <Button color="red" variant="outline">
        Red
      </Button>
      <br />
      <Button variant="shadow">Click</Button>
      <Button color="cyan" variant="shadow">
        Cyan
      </Button>
      <Button color="yellow" variant="shadow">
        Yellow
      </Button>
      <Button color="secondary" variant="shadow">
        Purple
      </Button>
      <Button color="green" variant="shadow">
        Green
      </Button>
      <Button color="zinc" variant="shadow">
        Gray
      </Button>
      <Button color="red" variant="shadow">
        Red
      </Button>
      <br />
      <Button variant="flat">Click</Button>
      <Button color="cyan" variant="flat">
        Cyan
      </Button>
      <Button color="yellow" variant="flat">
        Yellow
      </Button>
      <Button color="secondary" variant="flat">
        Purple
      </Button>
      <Button color="green" variant="flat">
        Green
      </Button>
      <Button color="zinc" variant="flat">
        Gray
      </Button>
      <Button color="red" variant="flat">
        Red
      </Button>
      <br />
      <Button variant="flat" disabled>
        Click
      </Button>
      <Button color="cyan" disabled>
        Cyan
      </Button>
      <Button color="yellow" disabled>
        Yellow
      </Button>
      <Button color="secondary" disabled>
        Purple
      </Button>
      <Button color="green" disabled>
        Green
      </Button>
      <Button color="zinc" disabled>
        Gray
      </Button>
      <Button color="red" disabled>
        Red
      </Button>
      <Checkbox checked />
      <Checkbox />
      <Modal visible={false} id="o">
        <ModalTop>
          <ModalTitle>ok</ModalTitle>
          <ModalOptions>
            <Button>ok</Button>
          </ModalOptions>
        </ModalTop>
        <ModalBody>testing is a nice things</ModalBody>
      </Modal>
    </UIWraper>
  );
}

export default App;
