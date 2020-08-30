import envalid from "envalid";

const { str } = envalid;

export default envalid.cleanEnv(process.env, {
 
}, {
  dotEnvPath: null
});
