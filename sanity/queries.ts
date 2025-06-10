export const blogPostsByProject = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  project->slug.current == $slug
] | order(publishedAt desc)[0...12] {
  _id,
  title,
 "mainImage": mainImage.asset->url,
 "categories": categories[]->title,
  "slug": slug.current,
  publishedAt
}`;

export const categoriesByProject = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  project->slug.current == $slug
].categories[]->title`;

export const blogPostBySlug = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body,
    author->{ name }
  }`;