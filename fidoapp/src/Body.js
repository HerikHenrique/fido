import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nome, tipoDeEmprestimo, dataDaConcessao, parcelas, status, acoes) {
  return { nome, tipoDeEmprestimo, dataDaConcessao, parcelas, status, acoes };
}

const rows = [
  createData('Nome Qualquer', 'Lorem Ipsum', '01/02/2012', '3/12', 'Adimplente', 'Ações'),
  createData('Nome Qualquer', 'Lorem Ipsum', '14/07/2009', '6/18', 'Inadimplemnte', 'Ações'),
  createData('Nome Qualquer', 'Lorem Ipsum', '21/11/2015', '1/6', 'Adimplente', 'Ações'),
  createData('Nome Qualquer', 'Lorem Ipsum', '30/04/2019', '2/10', 'Adimplente', 'Ações'),
  createData('Nome Qualquer', 'Lorem Ipsum', '01/02/2012', '3/12', 'Adimplente', 'Ações'),
  createData('Nome Qualquer', 'Lorem Ipsum', '14/07/2009', '6/18', 'Inadimplemnte', 'Ações'),
  createData('Nome Qualquer', 'Lorem Ipsum', '21/11/2015', '1/6', 'Adimplente', 'Ações'),
  createData('Nome Qualquer', 'Lorem Ipsum', '30/04/2019', '2/10', 'Adimplente', 'Ações'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table classname={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="left">Tipo de Empréstimo</TableCell>
            <TableCell align="left">Data da Concessão</TableCell>
            <TableCell align="left">Parcelas</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align='left'>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nome}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="left">{row.tipoDeEmprestimo}</TableCell>
              <TableCell align="left">{row.dataDaConcessao}</TableCell>
              <TableCell align="left">{row.parcelas}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.acoes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}