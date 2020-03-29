const getImages = (path) => {
  const importImages = r => {
    const imgObj = {};
    const imgArr = [];

    r.keys().map(path => imgArr.push((imgObj[path.replace('./', '')] = r(path))));

    return imgArr;
  };

  const companys = importImages(require.context('../Assets/Company/Colour', true, /\.(png|jpe?g)$/));
    
  const fullImgs = importImages(require.context('../Assets/portfolio', true, /\.(png|jpe?g)$/));
    
  return [fullImgs, companys];
};

export default getImages