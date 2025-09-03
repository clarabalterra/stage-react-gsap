import { getProjects } from "../../data/projects";
import Filter from "./Filter";

const GallerySection = () => {
  const projects = getProjects();

  return (
    <div className="px-6 lg:px-12">
      {/* filter */}
      <Filter />

      {/* Gallery */}
      <div className="pt-12">
        <div
          id="container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-36"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-150 rounded-2xl flex flex-col gap-3 justify-between"
            >
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-2xl">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
