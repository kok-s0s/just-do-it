import instance from "../axios.config";

export const getProjects = () => {
  return instance.get("/practicalproject/projects");
};
