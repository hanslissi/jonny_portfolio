import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const singleProjectTemplate = path.resolve(
    "./src/templates/SingleProject.tsx"
  );

  const { createPage } = actions;
  const result: any = await graphql(`
    query AllProjects {
      allSanityProject {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projects = result.data.allSanityProject.nodes;

  projects.forEach((project: any) => {
    createPage({
      path: `/projects/${project.slug.current}`,
      component: singleProjectTemplate,
      context: {
        id: project.id,
      },
    });
  });
};
