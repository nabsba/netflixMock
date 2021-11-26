const deletePropretyFromObject = (
  object: {
    [key: string]: string | number | null;
  },
  propreties: string[],
): Record<string, unknown> => {
  // eslint-disable-next-line no-param-reassign
  propreties.map((proprety: string) => delete object[proprety]);
  return object;
};

const generateObjectAsOneStringKeyValue = (keys: string[], values: any[]) => {
  const array: any[] = [];
  keys.map((key: string, index: number) => {
    array.push(typeof values[index] === 'string' ? `${key}=` + `${values[index]}` : values[index]);
  });
  return array.join(',');
};
const stringFromKeysObject = (object: any) => Object.keys(object).toString();

export { deletePropretyFromObject, generateObjectAsOneStringKeyValue, stringFromKeysObject };
