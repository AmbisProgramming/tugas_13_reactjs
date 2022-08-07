import { Container, Button, Divider, Grid, Header, Icon, Search, Segment, Dimmer, Loader, Image, Placeholder, List, Label, Menu, Table } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Container fluid>
        <br></br>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari document
                </Header>

                <Search placeholder="Search document..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="pdf file outline" />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <h3>Website Terkait</h3>
            <List>
              <List.Item icon="linkify" content={<a href="http://www.semantic-ui.com">Google</a>} />
              <List.Item icon="linkify" content={<a href="http://www.semantic-ui.com">Facebook</a>} />
              <List.Item icon="linkify" content={<a href="http://www.semantic-ui.com">Semantic UI</a>} />
              <List.Item icon="linkify" content={<a href="http://www.semantic-ui.com">Niomic</a>} />
              <List.Item icon="linkify" content={<a href="http://www.semantic-ui.com">React</a>} />
            </List>
          </Grid.Column>
        </Grid>
        <br></br>
        <Container>
          <Table celled>
            <Table.Header>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell textAlign="right">
                <Search placeholder="Search document..." />
              </Table.HeaderCell>
              <Table.Row>
                <Table.HeaderCell width={8} textAlign="center">
                  Nama Document
                </Table.HeaderCell>
                <Table.HeaderCell width={4} textAlign="center">
                  Jenis File
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default App;
