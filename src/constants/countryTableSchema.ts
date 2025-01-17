import { Country } from "../interfaces/country";

interface TableColumn {
  name: string;
  keyName: keyof Country;
}

const countryTableSchema: TableColumn[] = [
  {
    name: 'Country',
    keyName: 'country',
  },
  {
    name: 'Population',
    keyName: 'population',
  },
  {
    name: 'Deaths',
    keyName: 'deaths',
  },
  {
    name: 'Recovered',
    keyName: 'recovered',
  },
  {
    name: 'Lat.',
    keyName: 'lat',
  },
  {
    name: 'Lng.',
    keyName: 'lng',
  },
];

export default countryTableSchema;