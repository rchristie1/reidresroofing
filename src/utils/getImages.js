const getImages = () => {
  const importImages = r => {
    const imgObj = {};
    const imgArr = [];

    r.keys().map(path => imgArr.push((imgObj[path.replace('./', '')] = r(path))));

    return imgArr;
  };

  const fullImgs = importImages(require.context('../Assets/portfolio', true, /\.(png|jpe?g)$/));
    
  return [fullImgs];
};

export default getImages