export const homeController = () => {
  const home = async (req, res) => {
    res.send("welcome to product api");
  };
  return home;
};
