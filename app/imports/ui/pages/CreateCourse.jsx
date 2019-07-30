import React from "react";
import { Container, Grid, Icon, Menu, Table, Form, Button } from "semantic-ui-react";

export default class CreateCourseAlternate extends React.Component
{
  render()
  {
    const sections = [
      { text: "1", value: "1" },
      { text: "2", value: "2" },
      { text: "3", value: "3" },
      { text: "4", value: "4" },
    ];

    return (
        <Container style={{ width: "1000px" }}>
          <Grid columns={2} style={{ marginBottom: "20px" }}>
            <Grid.Row>
              <Grid.Column>
                <label className="create-course-form-headers">Course name</label>
              </Grid.Column>
              <Grid.Column style={{ display: "flex", justifyContent: "space-between" }}>
                <label className="create-course-form-headers">Add sections</label>
                <Button inverted style={{ padding: "0 0 0 0" }} circular icon>
                  <Icon className="create-course-buttons" name="plus circle" size="big" />
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Input defaultValue="ICS 239: Intro to Cybersecurity" fluid name="Course name"/>
              </Grid.Column>
              <Grid.Column style={{ display: "flex", flexDirection: "column" }}>
                <Form.Input defaultValue="Section 1" style={{ paddingBottom: "15px" }} fluid name="Add sections 1"/>
                <Form.Input defaultValue="Section 2" style={{ paddingBottom: "15px" }} fluid name="Add sections 2"/>
                <Form.Input defaultValue="Section 3" style={{ paddingBottom: "15px" }} fluid name="Add sections 2"/>
                <Form.Input defaultValue="Section 4" style={{ paddingBottom: "15px" }} fluid name="Add sections 2"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <label className="create-course-form-headers">Add students</label>
          <Table style={{ position: "absolute", width: "1110px", right: "17%", marginTop: "40px" }} definition celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell><Icon name="triangle down" />Name</Table.HeaderCell>
                <Table.HeaderCell width="4"><Icon name="triangle down" />Student ID</Table.HeaderCell>
                <Table.HeaderCell width="3"><Icon name="triangle down" />Section #</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Button>Delete</Button>
                </Table.Cell>
                <Table.Cell><Form.Input defaultValue="Dave Alonzo" fluid/></Table.Cell>
                <Table.Cell><Form.Input defaultValue="0000000" fluid/></Table.Cell>
                <Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Button>Delete</Button>
                </Table.Cell>
                <Table.Cell><Form.Input defaultValue="Gordon Hayman" fluid/></Table.Cell>
                <Table.Cell><Form.Input defaultValue="0000001" fluid/></Table.Cell>
                <Table.Cell><Form.Select defaultValue="1" options={ sections } fluid/></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Button>Delete</Button>
                </Table.Cell>
                <Table.Cell><Form.Input defaultValue="Alfred Mourning" fluid/></Table.Cell>
                <Table.Cell><Form.Input defaultValue="0000010" fluid/></Table.Cell>
                <Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Button>Delete</Button>
                </Table.Cell>
                <Table.Cell><Form.Input defaultValue="Connor Zamon" fluid/></Table.Cell>
                <Table.Cell><Form.Input defaultValue="0000011" fluid/></Table.Cell>
                <Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell/>
                <Table.HeaderCell colSpan="3">
                  <Button size="large" style={{ backgroundColor: "#FF7E55", color: "white" }}>
                    Add Another Student
                  </Button>
                  <Menu className="create-course-table" floated="right" pagination borderless>
                    <Menu.Item as="a"><Icon name="chevron left" /></Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a"><Icon name="chevron right" /></Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
    );
  }
}
