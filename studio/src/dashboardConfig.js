export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60eb948f6794f62c99b7b4cd",
                  title: "Sanity Studio",
                  name: "freelanced-studio",
                  apiId: "a62f40e5-e083-42f3-9a90-1f97714e3bee",
                },
                {
                  buildHookId: "60eb948faf97d67a227461f9",
                  title: "Blog Website",
                  name: "freelanced",
                  apiId: "2c5f9339-cad2-47e5-9575-ce6d9ffd8dfd",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/n8jeffrey/freelanced",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://freelanced.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
