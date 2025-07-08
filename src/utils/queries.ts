export const projectsQuery = `*[_type == "project"]{
  _id,
  title,
  description,
  "image": image.asset->url,
  link
}`
