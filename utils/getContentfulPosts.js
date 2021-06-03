const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

import { createClient } from "contentful";


const client = createClient({
    space: space,
    accessToken: accessToken,
});


export async function fetchEntries() {
  const entries = await client.getEntries({ content_type: "portfolio" });

  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }