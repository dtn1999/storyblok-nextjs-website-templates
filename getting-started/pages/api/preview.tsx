import { gql } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import { createStoryClient } from "../../lib";
const NEXT_PREVIEW_TOKEN = String(process.env.NEXT_PREVIEW_TOKEN);

const StoryblokApi = createStoryClient(false);

export default async function handlePreviewRequests(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  const { secret, slug } = req.query;

  console.log("secret", secret, slug, "Local", NEXT_PREVIEW_TOKEN);

  if (secret !== NEXT_PREVIEW_TOKEN || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `id` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const query = gql`
    query getPage($by_slugs: String) {
      PageItems(by_slugs: $by_slugs) {
        items {
          id
          slug
        }
      }
    }
  `;
  const {
    PageItems: {
      items: [data],
    },
  } = await StoryblokApi.request(query, {
    by_slugs: `pages/${slug}`,
  });

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!data) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    slug,
  });

  const cookies = res.getHeader("Set-Cookie") || [];
  res.setHeader(
    "Set-Cookie",
    // @ts-ignore
    cookies.map((cookie) =>
      cookie.replace("SameSite=Lax", "SameSite=None;Secure")
    )
  );
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // use type name to redirect to the right preview page

  res.redirect(`/${data.slug}`);
}
