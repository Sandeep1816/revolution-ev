import { client } from "../client";
import {
  blogPostBySlug,
  blogPostsByProject,
  categoriesByProject,
} from "../queries";
import { SanityDocument } from "next-sanity";

export async function getBlogPostsByProject(
  slug: string
): Promise<SanityDocument[]> {
  return await client.fetch(
    blogPostsByProject,
    { slug },
    { cache: "no-store" }
  );
}

// export async function getCategoriesByProject(slug: string): Promise<string[]> {
//   const rawCategories: string[] = await client.fetch(
//     categoriesByProject,
//     {
//       slug,
//     },
//     { cache: "no-store" }
//   );
//   const cleaned = rawCategories.filter((c): c is string => !!c);
//   const unique = Array.from(new Set(cleaned));
//   return unique;
// }

export async function getBlogPostBySlug(slug: string) {
  const post = await client.fetch(
    blogPostBySlug,
    { slug },
    { cache: "no-store" }
  );
  return post;
}
