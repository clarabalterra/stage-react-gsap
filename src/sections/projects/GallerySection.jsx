import { getProjects } from "../../data/projects";
import Filter from "./Filter";

const GallerySection = () => {
  const projects = getProjects();

  return (
    <div className="px-6 lg:px-12">
      {/* filter */}
      <Filter />

      {/* GallerySection */}
      <div>
        <div id="container" className="flex flex-col lg:flex-row gap-6 pt-12">
          hola
          {projects.map((project) => {
            <div className="w-full lg:flex-1 h-120 rounded-2xl flex flex-col gap-3 justify-between">
              <div className="bg-coyote flex-1 rounded-2xl">
                <img src={project.image} alt="" />
              </div>
              <p className="text-2xl">{project.title}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
