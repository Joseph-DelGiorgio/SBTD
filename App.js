import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/core';
import { useWeb3 } from 'web3-react';
import { Contract, ContractFactory } from 'ethers';
import { CSSReset, Box, Heading, Form, FormControl, FormLabel, Input, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@chakra-ui/core';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box p={5}>
        <Heading>My School Degrees</Heading>
        <CreateDegreeForm />
        <DegreeList />
      </Box>
    </ChakraProvider>
  );
}

const CreateDegreeForm = () => {
  return (
    <Box>
      <Heading as="h3" size="md">Create Degree</Heading>
      <Form>
        <FormControl>
          <FormLabel htmlFor="degree">Degree</FormLabel>
          <Input type="text" id="degree" placeholder="e.g. Bachelor of Science" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="school">School</FormLabel>
          <Input type="text" id="school" placeholder="e.g. University of California, Berkeley" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="field">Field of Study</FormLabel>
          <Input type="text" id="field" placeholder="e.g. Computer Science" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="cid">Certificate ID</FormLabel>
          <Input type="text" id="cid" placeholder="e.g. ABC123" />
        </FormControl>
        <Button variantColor="teal" type="submit">Create Degree</Button>
      </Form>
    </Box>
  );
}

const DegreeList = () => {
  return (
    <Box>
      <Heading as="h3" size="md">My Degrees</Heading>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Degree</TableCell>
            <TableCell>School</TableCell>
            <TableCell>Field of Study</TableCell>
            <TableCell>Certificate ID</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Bachelor of Science</TableCell>
            <TableCell>University of California, Berkeley</TableCell>
            <TableCell>Computer Science</TableCell>
            <TableCell>ABC123</TableCell>
            <TableCell>
              <Button variantColor="green" mr={2}>Edit</Button>
              <Button variantColor="red">Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

export default App;