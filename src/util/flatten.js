export const flattenObject = (ob) => {
  const toReturn = {};

  Object.keys(ob).forEach((i) => {
    if ((typeof ob[i]) === 'object') {
      const flatObject = flattenObject(ob[i]);
      Object.keys(flatObject).forEach((x) => {
        if (!Object.prototype.hasOwnProperty.call(flatObject, x)) return null;
        toReturn[`${i}.${x}`] = flatObject[x];
        return 1;
      });
    } else {
      toReturn[i] = ob[i];
    }
  });

  return toReturn;
};

export const flattenCpe = (obj) => {
  if (!obj) return null;

  const ret = {
    ...(obj.username && { username: obj.username }),
    ...(obj.password && { password: obj.password }),
    ...(obj.protocol && { protocol: obj.protocol.toLowerCase() }),
    ...(obj.references && { references: obj.references }),
    ...(obj.cpe.part && obj.cpe.part !== 'ANY' && { part: obj.cpe.part.toLowerCase() }),
    ...(obj.cpe.vendor && obj.cpe.vendor !== 'ANY' && { vendor: obj.cpe.vendor }),
    ...(obj.cpe.product && obj.cpe.product !== 'ANY' && { product: obj.cpe.product }),
    ...(obj.cpe.version && obj.cpe.version !== 'ANY' && { version: obj.cpe.version }),
    ...(obj.cpe.update && obj.cpe.update !== 'ANY' && { update: obj.cpe.update }),
    ...(obj.cpe.edition && obj.cpe.edition !== 'ANY' && { edition: obj.cpe.edition }),
    ...(obj.cpe.language && obj.cpe.language !== 'ANY' && { language: obj.cpe.language }),
  };

  return (ret);
};
